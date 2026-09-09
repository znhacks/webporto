"use client";

import { useEffect, useRef, useState } from "react";

export default function BackgroundMusic({ playOnEnter }: { playOnEnter: boolean }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    if (playOnEnter && !hasTriggered && audioRef.current) {
      setHasTriggered(true);
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => {
        console.warn("Autoplay prevented:", err);
      });
    }
  }, [playOnEnter, hasTriggered]);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  if (!playOnEnter) return (
    <audio ref={audioRef} src="/bgm.mp3" loop />
  );

  return (
    <>
      <audio
        ref={audioRef}
        src="/bgm.mp3"
        loop
      />

      <button
        onClick={toggleMusic}
        className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-white/20 ${isPlaying ? 'animate-pulse shadow-[0_0_15px_rgba(255,255,255,0.3)]' : 'opacity-70'}`}
        aria-label="Toggle Background Music"
      >
        <span className="material-symbols-outlined text-2xl">
          {isPlaying ? "volume_up" : "volume_off"}
        </span>
      </button>
    </>
  );
}
