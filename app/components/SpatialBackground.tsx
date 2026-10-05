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
    <div className="fixed inset-0 z-[-10] bg-[#030c17] pointer-events-none overflow-hidden">
      {/* Subtle static ambient glows for background depth */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#6d28d9]/[0.08] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#06b6d4]/[0.06] blur-[100px] pointer-events-none" />

      {/* Desktop-only cursor glow */}
      {canHover && (
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full pointer-events-none will-change-transform"
          style={{
            x: springX,
            y: springY,
            translateX: "-50%",
            translateY: "-50%",
            background: "radial-gradient(circle, rgba(109, 40, 217, 0.12) 0%, rgba(3, 12, 23, 0) 60%)",
            opacity: isVisible ? 1 : 0,
            transition: "opacity 1s ease",
          }}
        />
      )}
    </div>
  );
}

