"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import { useEntrance } from "../context/EntranceContext";

function TypewriterText({ text, delay = 0, speed = 35, isEntering = false }: { text: string; delay?: number; speed?: number; isEntering?: boolean }) {
  const [displayedText, setDisplayedText] = useState("");
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!isEntering) {
      setDisplayedText("");
      setHasStarted(false);
      return;
    }

    const timeout = setTimeout(() => {
      setHasStarted(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isEntering, delay]);

  useEffect(() => {
    if (!hasStarted) return;

    if (!text.startsWith(displayedText) && displayedText.length > 0) {
      setDisplayedText("");
    }

    if (displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [hasStarted, displayedText, text, speed]);

  return (
    <span>
      {displayedText}
      <span className={`inline-block w-1.5 h-[0.9em] ml-1 bg-current align-middle ${displayedText.length === text.length ? 'animate-pulse opacity-40' : 'animate-[pulse_0.4s_infinite] opacity-100'}`} />
    </span>
  );
}

export default function Hero() {
  const { lang } = useLanguage();
  const { isEntering } = useEntrance();

  const animBase = `transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${!isEntering ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"
    }`;

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden">
      {/* Background artwork blend */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/Rustbond/Zen.jpg"
            alt="Hero Background"
            width={900}
            height={900}
            className="w-[85%] md:w-[65%] lg:w-[52%] h-auto max-h-screen object-contain -translate-y-[80px] lg:translate-y-0 lg:-translate-x-[260px] opacity-95 transition-opacity duration-500"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#08080a]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08080a]/90 via-[#08080a]/45 to-transparent" />
      </div>

      <div className="px-6 md:px-10 max-w-[1340px] mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 flex flex-col items-start">
            {/* Studio Telemetry Bar (Linear precision with subtle violet glow) */}
            <div className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-purple-500/20 bg-purple-950/20 backdrop-blur-md mb-6 font-mono text-[11px] text-zinc-300 ${animBase} delay-[200ms]`}>
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
              <span className="text-zinc-200 font-semibold tracking-wider">SABITPLAY STUDIO</span>
              <span className="text-zinc-600">/</span>
              <span className="text-purple-300 font-medium">INDONESIA [UTC+7]</span>
            </div>

            {/* Sub-label */}
            <p className={`font-mono text-xs text-purple-300/80 uppercase tracking-widest mb-3 ${animBase} delay-[300ms]`}>
              {lang === "en"
                ? "Full-Stack Developer & Independent Game Creator"
                : "Pengembang Full-Stack & Kreator Game Independen"}
            </p>

            {/* Hero Main Heading (Basement Studio Syne typography) */}
            <h1 className={`font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[0.98] mb-6 uppercase ${animBase} delay-[400ms]`}>
              <TypewriterText
                text={lang === "en" ? "Yo, I'm Ordi" : "Yo, Aku Ordi"}
                delay={600}
                isEntering={isEntering}
                speed={60}
              />
            </h1>

            {/* Editorial Statement */}
            <p className={`text-base sm:text-lg text-zinc-300 max-w-2xl font-sans font-light leading-relaxed mb-8 ${animBase} delay-[500ms]`}>
              <TypewriterText
                text={lang === "en"
                  ? "Engineering responsive web architectures, cloud-native database pipelines, and game jam winning interactive experiences."
                  : "Membangun arsitektur web modern, pipeline database cloud-native, serta game interaktif peraih gelar juara game jam."}
                delay={1600}
                isEntering={isEntering}
                speed={20}
              />
            </p>

            {/* Actions */}
            <div className={`flex flex-wrap items-center gap-4 ${animBase} delay-[600ms]`}>
              <a
                href="#projects"
                className="px-6 py-3 min-h-[44px] rounded-lg bg-white hover:bg-zinc-200 text-black font-mono text-xs font-bold tracking-tight transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-[0_0_25px_rgba(168,85,247,0.25)] hover:shadow-[0_0_35px_rgba(168,85,247,0.4)]"
              >
                <span>{lang === "en" ? "Explore Projects" : "Jelajahi Proyek"}</span>
                <span className="material-symbols-outlined text-sm font-bold">arrow_downward</span>
              </a>

              <a
                href="#contact"
                className="px-6 py-3 min-h-[44px] rounded-lg bg-white/[0.04] hover:bg-purple-950/30 border border-white/[0.1] hover:border-purple-500/40 text-zinc-200 font-mono text-xs font-semibold transition-all duration-200 flex items-center gap-2 cursor-pointer"
              >
                <span>{lang === "en" ? "Get in Touch" : "Hubungi"}</span>
                <span className="material-symbols-outlined text-sm">mail</span>
              </a>
            </div>
          </div>

          {/* Right Logo / Seal */}
          <div className={`lg:col-span-4 flex items-center justify-center ${animBase} delay-[700ms]`}>
            <div className="relative flex items-center justify-center p-6 rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.03] to-transparent backdrop-blur-sm group hover:border-white/20 transition-all duration-500">
              <div className="absolute inset-0 bg-white/[0.02] rounded-2xl filter blur-xl group-hover:bg-white/[0.05] transition-all" />
              <Image
                src="/logo.png"
                alt="Ordi Logo"
                width={320}
                height={320}
                priority
                className="relative z-10 w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
