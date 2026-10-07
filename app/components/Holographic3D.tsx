"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface Holographic3DProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  /** "full" adds the iridescent foil; "lite" keeps tilt, glare and rim only. */
  variant?: "full" | "lite";
}

export default function Holographic3D({
  children,
  className = "",
  maxTilt = 6,
  variant = "lite",
}: Holographic3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [canHover, setCanHover] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setCanHover(mq.matches && !reduced.matches);
    update();
    mq.addEventListener("change", update);
    reduced.addEventListener("change", update);
    return () => {
      mq.removeEventListener("change", update);
      reduced.removeEventListener("change", update);
    };
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const spring = { damping: 26, stiffness: 200, mass: 0.5 };
  const sx = useSpring(x, spring);
  const sy = useSpring(y, spring);
  const rotateX = useTransform(sy, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-maxTilt, maxTilt]);

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    x.set(px - 0.5);
    y.set(py - 0.5);
    // Written straight to style so pointer movement never re-renders React.
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
    el.style.setProperty("--angle", `${(px - 0.5) * 60}`);
  };

  const reset = () => {
    setActive(false);
    x.set(0);
    y.set(0);
  };

  const layers = (
    <>
      {variant === "full" && <span aria-hidden className="holo-foil z-20" />}
      <span aria-hidden className="holo-glare z-20" />
      <span aria-hidden className="holo-rim z-30" />
    </>
  );

  const style = { "--foil-strength": variant === "full" ? 0.22 : 0 } as React.CSSProperties;

  if (!canHover) {
    return (
      <div
        ref={ref}
        style={style}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        className={`relative ${active ? "holo-active" : ""} ${className}`}
      >
        {children}
        {layers}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      onPointerMove={handleMove}
      onPointerEnter={() => setActive(true)}
      onPointerLeave={reset}
      onFocus={() => setActive(true)}
      onBlur={reset}
      className={`relative ${active ? "holo-active" : ""} ${className}`}
      style={{ ...style, perspective: 900 }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          willChange: active ? "transform" : "auto",
        }}
        className="relative w-full h-full rounded-[inherit]"
      >
        {children}
        {layers}
      </motion.div>
    </div>
  );
}
