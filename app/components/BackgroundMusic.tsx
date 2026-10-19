"use client";

import { useEffect, useState } from "react";
import { useMusic } from "../context/MusicContext";

export default function BackgroundMusic({ playOnEnter }: { playOnEnter: boolean }) {
  const { track, isPlaying, togglePlay, enterWithMusic, trackName } = useMusic();
  const [hasEnteredTriggered, setHasEnteredTriggered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    if (playOnEnter && !hasEnteredTriggered) {
      setHasEnteredTriggered(true);
      enterWithMusic();
    }
  }, [playOnEnter, hasEnteredTriggered, enterWithMusic]);

  if (!playOnEnter) return null;

  return (
    <aside
      aria-label="Audio Controls"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2"
    >
      {/* Track Indicator Badge */}
      <div
        className={`hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border text-[11px] font-mono backdrop-blur-md transition-all duration-300 ${
          track === "champion"
            ? "bg-amber-950/70 border-amber-500/40 text-amber-200 shadow-[0_0_20px_rgba(245,158,11,0.2)]"
            : "bg-surface/85 border-line text-titanium-400"
        }`}
      >
        <span
          className={`w-2 h-2 rounded-full ${
            isPlaying
              ? track === "champion"
                ? "bg-amber-400 animate-pulse"
                : "bg-holo animate-pulse"
              : "bg-zinc-600"
          }`}
        />
        <span className="font-semibold truncate max-w-[190px]">{trackName}</span>
      </div>

      {/* Floating Main Play/Pause Button */}
      <div className="relative">
        <button
          type="button"
          onClick={togglePlay}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className={`flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 cursor-pointer shadow-xl ${
            track === "champion"
              ? isPlaying
                ? "bg-[#181104] border-2 border-amber-400 text-amber-300 shadow-[0_0_24px_rgba(245,158,11,0.35)]"
                : "bg-[#140e02] border border-amber-600/50 text-amber-400/70 opacity-80 hover:opacity-100"
              : isPlaying
              ? "bg-surface border-2 border-holo/70 text-titanium-50 shadow-[0_0_20px_rgba(192,132,252,0.25)]"
              : "bg-surface border border-line-strong text-titanium-400 opacity-75 hover:opacity-100"
          }`}
          aria-label={
            isPlaying
              ? `Jeda Musik (${trackName})`
              : `Putar Musik (${trackName})`
          }
        >
          <span className="material-symbols-outlined text-2xl">
            {isPlaying ? "volume_up" : "volume_off"}
          </span>
        </button>

        {/* Mobile floating track name tooltip */}
        {showTooltip && (
          <div className="sm:hidden absolute bottom-14 right-0 whitespace-nowrap bg-void/90 border border-line-strong text-titanium-200 text-[10px] font-mono px-2.5 py-1 rounded shadow-lg">
            {trackName}
          </div>
        )}
      </div>
    </aside>
  );
}
