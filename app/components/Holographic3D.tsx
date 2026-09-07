"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface Holographic3DProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
}

export default function Holographic3D({
  children,
  className = "",
  maxTilt = 10,
}: Holographic3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  
  const mouseXSpring = useSpring(x, springConfig);
  const mouseYSpring = useSpring(y, springConfig);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-maxTilt, maxTilt]);
  
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], [100, 0]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], [100, 0]);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`relative group ${className}`}
      style={{ perspective: 1000 }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="w-full h-full relative rounded-[inherit]"
      >
        <motion.div 
          style={{
            transform: "translateZ(30px)",
            transformStyle: "preserve-3d",
          }}
          className="w-full h-full relative rounded-[inherit]"
        >
          {children}
          
          {/* Holographic Glare Overlay */}
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden transition-opacity duration-500 mix-blend-overlay"
            style={{
              opacity: isHovered ? 0.4 : 0,
            }}
          >
            <motion.div 
              className="absolute inset-[-50%] rounded-full blur-2xl"
              style={{
                background: useTransform(
                  () => `radial-gradient(circle at ${glareX.get()}% ${glareY.get()}%, rgba(255,255,255,0.9) 0%, rgba(109,40,217,0.3) 30%, transparent 60%)`
                ),
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
