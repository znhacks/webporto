"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function SpatialBackground() {
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  // Smooth out the mouse movement
  const springX = useSpring(mouseX, { damping: 40, stiffness: 150 });
  const springY = useSpring(mouseY, { damping: 40, stiffness: 150 });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set initial position to center of screen
    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 2);
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 z-[-10] bg-[#030c17] pointer-events-none overflow-hidden bg-grid-cyber">
      {/* Interactive Cursor Orb */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, rgba(109, 40, 217, 0.12) 0%, rgba(3, 12, 23, 0) 50%)",
          opacity: isVisible ? 1 : 0,
          transition: "opacity 1.5s ease-in-out"
        }}
      />
      
      {/* Secondary accent orb (smaller and more vibrant) */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, rgba(211, 187, 255, 0.08) 0%, rgba(3, 12, 23, 0) 50%)",
          opacity: isVisible ? 1 : 0,
          transition: "opacity 1.5s ease-in-out"
        }}
      />
    </div>
  );
}
