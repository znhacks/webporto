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
    <div className="relative z-[1] min-h-screen overflow-hidden">
      {!hasEntered && (
        <div
          className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-void transition-transform duration-1000 ease-[cubic-bezier(0.87,0,0.13,1)] ${isAnimatingOut ? '-translate-x-full' : 'translate-x-0'}`}
        >

          <button
            onClick={handleEnter}
            className="group relative z-10 flex flex-col items-center gap-6 transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            <div className="relative h-36 w-36 sm:h-40 sm:w-40 overflow-hidden rounded-full border border-line-strong transition-all duration-300 group-hover:border-holo">
              <img
                src="/logo.png"
                alt="Moon Logo"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <span className="relative text-sm sm:text-base font-bold tracking-widest text-titanium-200 uppercase font-mono transition-colors duration-200 group-hover:text-holo">
              Click to Enter
            </span>
          </button>
        </div>
      )}

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
