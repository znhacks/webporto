"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const HoloField = dynamic(() => import("./HoloField"), { ssr: false });

type Mode = "off" | "lite" | "full";

export default function SpatialBackground() {
  const [mode, setMode] = useState<Mode>("off");
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (reduced) return;
    setMode(fine ? "full" : "lite");

    const onVisibility = () => setHidden(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  return (
    <div aria-hidden className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-void">
      <div className="absolute inset-x-0 top-0 h-[60vh] bg-gradient-to-b from-[#0d1216] to-transparent" />
      {mode !== "off" && (
        <div className="absolute inset-0">
          <HoloField paused={hidden} count={mode === "full" ? 1800 : 700} />
        </div>
      )}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#070709_100%)]" />
    </div>
  );
}
