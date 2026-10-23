"use client";

import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  useCallback,
} from "react";
import { usePathname } from "next/navigation";

export type MusicTrack = "default" | "champion";

interface MusicContextType {
  track: MusicTrack;
  isPlaying: boolean;
  hasEntered: boolean;
  togglePlay: () => void;
  enterWithMusic: () => void;
  trackName: string;
  playChampionMusic: () => void;
  stopChampionMusic: () => void;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

// ============================================================================
// BROWSER-LEVEL SINGLETON AUDIO MANAGER
// Ensures zero duplicate instances across Fast Refresh, Strict Mode, and Route Changes
// ============================================================================
interface GlobalAudioState {
  defaultAudio: HTMLAudioElement | null;
  championAudio: HTMLAudioElement | null;
  defaultPromise: Promise<void> | null;
  championPromise: Promise<void> | null;
}

declare global {
  interface Window {
    __sabitAudioRegistry?: GlobalAudioState;
  }
}

function getAudioRegistry(): GlobalAudioState {
  if (typeof window === "undefined") {
    return {
      defaultAudio: null,
      championAudio: null,
      defaultPromise: null,
      championPromise: null,
    };
  }

  if (!window.__sabitAudioRegistry) {
    const def = new Audio("/bgm.mp3");
    def.loop = true;
    def.volume = 0.4;
    def.preload = "auto";

    const champ = new Audio("/champion-bgm.mp3");
    champ.loop = true;
    champ.volume = 0.55;
    champ.preload = "auto";

    window.__sabitAudioRegistry = {
      defaultAudio: def,
      championAudio: champ,
      defaultPromise: null,
      championPromise: null,
    };
  }

  return window.__sabitAudioRegistry;
}

/**
 * Safely stops an audio element, silencing it immediately to prevent audio leaks,
 * then pauses and resets playback time once any pending play promise resolves.
 */
function safeStop(
  audio: HTMLAudioElement | null,
  pendingPromise: Promise<void> | null
): void {
  if (!audio) return;

  try {
    // Immediately mute so the user cannot hear sound even before pause executes
    audio.volume = 0;

    const executePause = () => {
      try {
        audio.pause();
        audio.currentTime = 0;
      } catch (err) {
        console.warn("Audio pause error:", err);
      }
    };

    if (pendingPromise) {
      pendingPromise.then(executePause).catch(executePause);
    } else {
      executePause();
    }
  } catch (e) {
    console.warn("safeStop failed:", e);
  }
}

/**
 * Safely plays an audio element with target volume.
 */
function safePlay(
  audio: HTMLAudioElement | null,
  targetVolume: number
): Promise<void> | null {
  if (!audio) return null;

  try {
    audio.volume = targetVolume;
    const promise = audio.play();
    if (promise !== undefined) {
      promise.catch((err) => {
        console.warn("Audio play prevented or aborted:", err);
      });
      return promise;
    }
  } catch (err) {
    console.warn("safePlay error:", err);
  }
  return null;
}

export function MusicProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isChampionHall =
    pathname === "/champion-hall" || pathname.startsWith("/champion-hall");

  const [track, setTrackState] = useState<MusicTrack>(
    isChampionHall ? "champion" : "default"
  );
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [hasEntered, setHasEntered] = useState<boolean>(false);

  const isPlayingRef = useRef<boolean>(false);

  // Dedicated explicit starter for Champion Hall audio (called on user click)
  const playChampionMusic = useCallback(() => {
    if (typeof window === "undefined") return;
    const reg = getAudioRegistry();

    // 1. Force stop default portfolio music
    safeStop(reg.defaultAudio, reg.defaultPromise);
    reg.defaultPromise = null;

    // 2. Play champion anthem with user gesture privilege
    isPlayingRef.current = true;
    setIsPlaying(true);
    setTrackState("champion");

    reg.championPromise = safePlay(reg.championAudio, 0.55);
    if (reg.championPromise) {
      reg.championPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn("playChampionMusic error:", err);
        });
    }
  }, []);

  // Dedicated immediate stopper for Champion Hall audio
  const stopChampionMusic = useCallback(() => {
    if (typeof window === "undefined") return;
    const reg = getAudioRegistry();
    safeStop(reg.championAudio, reg.championPromise);
    reg.championPromise = null;
  }, []);

  // Strict route synchronization:
  // - When on /champion-hall: keep default audio silent; transition stays quiet until user enters vault
  // - When outside /champion-hall: unconditionally silence & pause champion audio immediately!
  useEffect(() => {
    if (typeof window === "undefined") return;

    const reg = getAudioRegistry();

    if (isChampionHall) {
      // 1. Kill default portfolio audio immediately so transition is silent
      safeStop(reg.defaultAudio, reg.defaultPromise);
      reg.defaultPromise = null;
      setTrackState("champion");
    } else {
      // 1. Unconditionally kill champion audio immediately
      safeStop(reg.championAudio, reg.championPromise);
      reg.championPromise = null;
      setTrackState("default");

      // 2. Resume default portfolio ambient music only if user has active audio
      if (isPlayingRef.current) {
        reg.defaultPromise = safePlay(reg.defaultAudio, 0.4);
        if (reg.defaultPromise) {
          reg.defaultPromise.then(() => setIsPlaying(true));
        }
      }
    }
  }, [isChampionHall]);

  // Window popstate (browser back/forward buttons) failsafe
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handlePopState = () => {
      const isNowChampion = window.location.pathname.startsWith("/champion-hall");
      const reg = getAudioRegistry();

      if (!isNowChampion) {
        // Leaving champion hall via browser history
        safeStop(reg.championAudio, reg.championPromise);
        reg.championPromise = null;
        setTrackState("default");
        if (isPlayingRef.current) {
          reg.defaultPromise = safePlay(reg.defaultAudio, 0.4);
        }
      } else {
        // Entering champion hall via browser history
        safeStop(reg.defaultAudio, reg.defaultPromise);
        reg.defaultPromise = null;
        setTrackState("champion");
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const enterWithMusic = useCallback(() => {
    setHasEntered(true);
    isPlayingRef.current = true;
    setIsPlaying(true);

    const reg = getAudioRegistry();
    if (isChampionHall) {
      safeStop(reg.defaultAudio, reg.defaultPromise);
      reg.defaultPromise = null;
      reg.championPromise = safePlay(reg.championAudio, 0.55);
    } else {
      safeStop(reg.championAudio, reg.championPromise);
      reg.championPromise = null;
      reg.defaultPromise = safePlay(reg.defaultAudio, 0.4);
    }
  }, [isChampionHall]);

  const togglePlay = useCallback(() => {
    const reg = getAudioRegistry();

    if (isPlaying) {
      // Pause active track
      safeStop(reg.defaultAudio, reg.defaultPromise);
      safeStop(reg.championAudio, reg.championPromise);
      reg.defaultPromise = null;
      reg.championPromise = null;
      isPlayingRef.current = false;
      setIsPlaying(false);
    } else {
      // Play appropriate track strictly according to route
      isPlayingRef.current = true;
      setIsPlaying(true);

      if (isChampionHall) {
        safeStop(reg.defaultAudio, reg.defaultPromise);
        reg.defaultPromise = null;
        reg.championPromise = safePlay(reg.championAudio, 0.55);
      } else {
        safeStop(reg.championAudio, reg.championPromise);
        reg.championPromise = null;
        reg.defaultPromise = safePlay(reg.defaultAudio, 0.4);
      }
    }
  }, [isChampionHall, isPlaying]);

  const trackName = isChampionHall
    ? "If The Sun Burns Out Tonight"
    : "Void";

  return (
    <MusicContext.Provider
      value={{
        track,
        isPlaying,
        hasEntered,
        togglePlay,
        enterWithMusic,
        trackName,
        playChampionMusic,
        stopChampionMusic,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error("useMusic must be used within a MusicProvider");
  }
  return context;
}
