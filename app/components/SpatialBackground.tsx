"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function Scene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Slowly rotate the entire scene for a dynamic spatial feel
      groupRef.current.rotation.y += delta * 0.03;
      groupRef.current.rotation.x += delta * 0.015;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Background Starfield */}
      <Stars radius={50} depth={50} count={4000} factor={4} saturation={0} fade speed={1} />
      
      {/* Floating Cyber Particles */}
      <Sparkles count={150} scale={20} size={1.5} speed={0.4} color="#6d28d9" />
      <Sparkles count={100} scale={15} size={2.5} speed={0.2} color="#d3bbff" />
      <Sparkles count={50} scale={10} size={2} speed={0.6} color="#051424" />
    </group>
  );
}

export default function SpatialBackground() {
  return (
    <div className="fixed inset-0 z-[-10] bg-transparent pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <color attach="background" args={["#030c17"]} />
        <ambientLight intensity={0.5} />
        <Scene />
      </Canvas>
    </div>
  );
}
