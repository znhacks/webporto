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

function LocalClock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone: "Asia/Jakarta",
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return <span className="tabular-nums text-titanium-200">{time ?? "--:--:--"}</span>;
}

export default function Hero() {
  const { lang } = useLanguage();
  const { isEntering } = useEntrance();

  const animBase = `transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${!isEntering ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"
    }`;

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-32 pb-24 overflow-hidden">
      <div aria-hidden className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Artwork treated as a projection: scanlines and reticle are clipped to the image box. */}
          <div className="reticle relative w-[85%] md:w-[65%] lg:w-[48%] -translate-y-[80px] lg:translate-y-0 lg:-translate-x-[240px]">
            <Image
              src="/Rustbond/Zen.jpg"
              alt=""
              width={900}
              height={900}
              className="w-full h-auto max-h-screen object-contain opacity-90"
              priority
            />
            <div className="scanlines absolute inset-0" />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-void" />
        <div className="absolute inset-0 bg-gradient-to-r from-void/95 via-void/50 to-transparent" />
      </div>

      <div className="px-6 md:px-10 max-w-[1340px] mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 flex flex-col items-start">
            <p className={`flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] text-titanium-400 mb-10 ${animBase} delay-[200ms]`}>
              <span className="text-titanium-50">SabitPlay Studio</span>
              <span className="h-px w-6 bg-line-strong" />
              <span>Indonesia, UTC+7</span>
              <span className="h-px w-6 bg-line-strong" />
              <LocalClock />
            </p>

            <h1 className={`font-display text-5xl sm:text-7xl md:text-8xl lg:text-[8.5rem] font-black tracking-tighter text-titanium-50 leading-[0.9] mb-8 uppercase ${animBase} delay-[400ms]`}>
              <TypewriterText
                text={lang === "en" ? "Yo, I'm Ordi" : "Yo, Aku Ordi"}
                delay={600}
                isEntering={isEntering}
                speed={60}
              />
            </h1>

            <p className={`text-base sm:text-lg text-titanium-200 max-w-xl font-light leading-relaxed mb-3 ${animBase} delay-[500ms]`}>
              {lang === "en"
                ? "I build web and mobile apps on Next.js, Flutter and Supabase, and ship small games that win jams."
                : "Aku bikin aplikasi web dan mobile pakai Next.js, Flutter dan Supabase, plus game kecil yang juara game jam."}
            </p>
            <p className={`font-mono text-[11px] text-titanium-400 mb-10 ${animBase} delay-[550ms]`}>
              {lang === "en" ? "Full-stack developer / indie game creator" : "Full-stack developer / kreator game indie"}
            </p>

            <div className={`flex flex-wrap items-center gap-3 ${animBase} delay-[600ms]`}>
              <a
                href="#projects"
                className="px-6 min-h-[48px] inline-flex items-center rounded-md bg-holo text-void font-mono text-xs font-bold tracking-tight transition-[transform,background-color] duration-200 hover:bg-titanium-50 active:scale-[0.98]"
              >
                {lang === "en" ? "See the games & apps" : "Lihat game & aplikasi"}
              </a>
              <a
                href="#contact"
                className="px-6 min-h-[48px] inline-flex items-center rounded-md border border-line-strong text-titanium-200 font-mono text-xs font-semibold transition-colors duration-200 hover:text-titanium-50 hover:border-titanium-400"
              >
                {lang === "en" ? "Work with me" : "Ajak kolaborasi"}
              </a>
            </div>
          </div>

          <div className={`hidden sm:flex lg:col-span-4 items-center justify-center ${animBase} delay-[700ms]`}>
            <div className="reticle relative p-8 group">
              <Image
                src="/logo.png"
                alt="SabitPlay logo"
                width={320}
                height={320}
                priority
                className="relative w-56 h-56 lg:w-64 lg:h-64 object-contain transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
