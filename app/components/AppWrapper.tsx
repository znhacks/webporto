"use client";

import { useEffect, useRef, useState } from "react";
import BackgroundMusic from "./BackgroundMusic";
import { EntranceProvider } from "../context/EntranceContext";

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  const [hasEntered, setHasEntered] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    // Force scroll to top on mount so visitors always start at the header
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleEnter = () => {
    setIsAnimatingOut(true);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Ensure top position
    setTimeout(() => {
      setHasEntered(true);
    }, 1000); 
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030c17]">
      {/* Splash Screen */}
      {!hasEntered && (
        <div 
          className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030c17] transition-transform duration-1000 ease-[cubic-bezier(0.87,0,0.13,1)] ${isAnimatingOut ? '-translate-x-full' : 'translate-x-0'}`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-[#030c17] to-[#030c17]"></div>
          
          <button
            onClick={handleEnter}
            className="group relative z-10 flex flex-col items-center gap-6 transition-all duration-500 hover:scale-105"
          >
            <div className="relative h-40 w-40 overflow-hidden rounded-full shadow-[0_0_50px_rgba(109,40,217,0.4)] transition-all duration-500 group-hover:shadow-[0_0_80px_rgba(109,40,217,0.8)]">
              <img 
                src="/logo.png" 
                alt="Moon Logo" 
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-white/10 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            
            <span className="relative text-xl font-medium tracking-widest text-white/80 uppercase font-geist transition-colors duration-300 group-hover:text-white group-hover:text-shadow-sm">
              Click this moon
            </span>
          </button>
        </div>
      )}

      {/* Main Content */}
      <div 
        className={`h-full min-h-screen transition-all duration-1000 ease-[cubic-bezier(0.87,0,0.13,1)] ${!isAnimatingOut ? 'translate-x-[50vw] opacity-0 scale-95' : 'translate-x-0 opacity-100 scale-100'}`}
      >
        <div className={`h-full transition-all duration-1000 delay-300 ease-[cubic-bezier(0.25,1,0.5,1)] ${!isAnimatingOut ? 'opacity-0' : 'opacity-100'}`}>
          <EntranceProvider isEntering={isAnimatingOut}>
            {children}
          </EntranceProvider>
        </div>
      </div>

      <BackgroundMusic playOnEnter={isAnimatingOut} />
    </div>
  );
}
