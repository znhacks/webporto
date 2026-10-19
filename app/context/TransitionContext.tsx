"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface TransitionContextType {
  navigateWithTransition: (url: string, message?: string, soundAction?: () => void) => void;
  isTransitioning: boolean;
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined);

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [message, setMessage] = useState("CHAMBER SHUTTER ENGAGED");

  const navigateWithTransition = useCallback(
    (url: string, customMessage?: string, soundAction?: () => void) => {
      setMessage(customMessage || "ENTERING CHAMPION HALL");
      setIsTransitioning(true);

      if (soundAction) {
        soundAction();
      }

      // Allow shutter to seal shut before routing
      setTimeout(() => {
        router.push(url);
        window.scrollTo(0, 0);
        // After route changes, reopen the shutter
        setTimeout(() => {
          setIsTransitioning(false);
        }, 500);
      }, 450);
    },
    [router]
  );

  return (
    <TransitionContext.Provider value={{ navigateWithTransition, isTransitioning }}>
      {children}

      {/* Cinematic Dual-Blade Spatial Shutter Curtain */}
      <AnimatePresence>
        {isTransitioning && (
          <div className="fixed inset-0 z-[99999] pointer-events-none flex flex-col justify-between overflow-hidden">
            {/* Top Shutter Blade */}
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: "0%" }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.45, ease: [0.87, 0, 0.13, 1] }}
              className="w-full h-1/2 bg-[#050302] border-b border-amber-500/40 relative shadow-2xl flex items-end justify-center pb-4"
            >
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-80" />
            </motion.div>

            {/* Center Status Beacon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="absolute inset-0 flex items-center justify-center z-10"
            >
              <div className="px-5 py-3 rounded-xl bg-black/95 border border-amber-500/60 shadow-[0_0_40px_rgba(245,158,11,0.3)] text-center font-mono">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                  <span className="text-[10px] text-amber-400/80 uppercase tracking-widest">
                    TRANSITION IN PROGRESS
                  </span>
                </div>
                <p className="text-sm font-bold text-titanium-50 uppercase tracking-wider">
                  {message}
                </p>
              </div>
            </motion.div>

            {/* Bottom Shutter Blade */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.45, ease: [0.87, 0, 0.13, 1] }}
              className="w-full h-1/2 bg-[#050302] border-t border-amber-500/40 relative shadow-2xl"
            >
              <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-80" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </TransitionContext.Provider>
  );
}

export function usePageTransition() {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error("usePageTransition must be used within a TransitionProvider");
  }
  return context;
}
