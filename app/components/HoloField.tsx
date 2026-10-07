"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const vertexShader = /* glsl */ `
  uniform float uTime;
  uniform float uPixelRatio;
  attribute float aSeed;
  varying float vAlpha;
  varying float vTint;

  void main() {
    vec3 p = position;
    p.y += sin(uTime * 0.15 + aSeed * 6.2831) * 0.25;
    p.x += cos(uTime * 0.1 + aSeed * 12.0) * 0.15;

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;

    float depth = clamp(-mv.z / 18.0, 0.0, 1.0);
    gl_PointSize = (1.0 + aSeed * 1.6) * uPixelRatio * (9.0 / -mv.z);

    float twinkle = 0.55 + 0.45 * sin(uTime * (0.6 + aSeed) + aSeed * 40.0);
    vAlpha = (1.0 - depth * 0.7) * twinkle;
    vTint = step(0.93, aSeed);
  }
`;

const fragmentShader = /* glsl */ `
  varying float vAlpha;
  varying float vTint;

  void main() {
    float d = length(gl_PointCoord - 0.5);
    if (d > 0.5) discard;
    float core = smoothstep(0.5, 0.0, d);
    vec3 titanium = vec3(0.79, 0.81, 0.85);
    vec3 holo = vec3(0.75, 0.52, 0.98);
    vec3 color = mix(titanium, holo, vTint);
    gl_FragColor = vec4(color, core * vAlpha * 0.55);
  }
`;

function Field({ count }: { count: number }) {
  const points = useRef<THREE.Points>(null);
  const material = useRef<THREE.ShaderMaterial>(null);

  const geometry = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const seeds = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 18;
      positions[i * 3 + 2] = -Math.random() * 16;
      seeds[i] = Math.random();
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    g.setAttribute("aSeed", new THREE.BufferAttribute(seeds, 1));
    return g;
  }, [count]);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uPixelRatio: { value: 1 },
    }),
    []
  );

  useFrame((state, delta) => {
    if (!material.current || !points.current) return;
    material.current.uniforms.uTime.value += delta;
    material.current.uniforms.uPixelRatio.value = state.viewport.dpr;

    // Pointer parallax plus a slow scroll-linked tilt, both eased.
    const scroll = typeof window !== "undefined" ? window.scrollY / Math.max(1, window.innerHeight) : 0;
    const targetY = state.pointer.x * 0.08;
    const targetX = -state.pointer.y * 0.05 + scroll * 0.06;
    const k = 1 - Math.exp(-delta * 2.5);
    points.current.rotation.y += (targetY - points.current.rotation.y) * k;
    points.current.rotation.x += (targetX - points.current.rotation.x) * k;
  });

  return (
    <points ref={points} geometry={geometry}>
      <shaderMaterial
        ref={material}
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function HoloField({ paused, count }: { paused: boolean; count: number }) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      frameloop={paused ? "never" : "always"}
      gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
      camera={{ position: [0, 0, 6], fov: 60 }}
      performance={{ min: 0.5 }}
      eventSource={typeof document !== "undefined" ? document.body : undefined}
      eventPrefix="client"
    >
      <Field count={count} />
    </Canvas>
  );
}
