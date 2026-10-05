"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function SpatialBackground() {
  const [canHover, setCanHover] = useState(false);
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  const springX = useSpring(mouseX, { damping: 45, stiffness: 140 });
  const springY = useSpring(mouseY, { damping: 45, stiffness: 140 });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setCanHover(mq.matches);

    if (!mq.matches) return;

    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 2);
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 z-[-10] bg-[#08080a] pointer-events-none overflow-hidden">
      {/* Subtle top ambient violet-obsidian depth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[550px] bg-gradient-to-b from-purple-950/20 via-purple-900/[0.04] to-transparent pointer-events-none" />

      {/* Desktop subtle cursor illumination with delicate violet tint */}
      {canHover && (
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full pointer-events-none will-change-transform"
          style={{
            x: springX,
            y: springY,
            translateX: "-50%",
            translateY: "-50%",
            background: "radial-gradient(circle, rgba(168, 85, 247, 0.08) 0%, rgba(255, 255, 255, 0.02) 35%, rgba(8, 8, 10, 0) 70%)",
            opacity: isVisible ? 1 : 0,
            transition: "opacity 1s ease",
          }}
        />
      )}
    </div>
  );
}

