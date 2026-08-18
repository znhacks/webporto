"use client";

import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { lang } = useLanguage();

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center pt-32 pb-16 ambient-glow-purple overflow-hidden">
      {/* Ambient background glowing orb */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#6d28d9]/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="px-6 md:px-8 max-w-[1280px] mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Content */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#051424] border border-white/10 mb-6 shadow-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-xs text-[#d3bbff] uppercase tracking-widest">
                {lang === "en"
                  ? "FULL-STACK DEVELOPER & GAME CREATOR"
                  : "PENGEMBANG FULL-STACK & PEMBUAT GAME"}
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
              {lang === "en" ? "Hi, I'm" : "Hi, Saya"}{" "}
              <span className="gradient-text-purple">Ordi</span>
            </h1>

            <p className="text-base sm:text-lg text-[#ccc3d7] max-w-xl font-normal leading-relaxed mb-8">
              {lang === "en"
                ? "I am a Full-Stack Developer engineering end-to-end mobile applications, web platforms, cloud database backends, and interactive games."
                : "Saya adalah seorang Full-Stack Developer yang menguasai pengembangan aplikasi mobile, web app, cloud database backend, hingga game interaktif secara end-to-end."}
            </p>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {["Full-Stack Dev", "Flutter", "Next.js", "Supabase", "Ren'Py", "Roblox / Luau", "Python"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 bg-[#0d1c2d] border border-white/10 text-xs font-mono text-[#d4e4fa] rounded-full"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="px-8 py-3.5 rounded-full bg-[#6d28d9] text-white font-mono text-xs font-semibold hover:bg-[#7331df] transition-all shadow-lg shadow-purple-900/40 flex items-center gap-2 hover:scale-105"
              >
                {lang === "en" ? "View Projects" : "Lihat Proyek"}
                <span className="material-symbols-outlined text-base">
                  arrow_forward
                </span>
              </a>
              <a
                href="#contact"
                className="px-8 py-3.5 rounded-full bg-[#0d1c2d] border border-white/10 text-[#d4e4fa] font-mono text-xs font-semibold hover:border-[#d3bbff]/50 hover:text-white transition-all flex items-center gap-2 hover:scale-105"
              >
                {lang === "en" ? "Contact Me" : "Hubungi Saya"}
                <span className="material-symbols-outlined text-base">
                  send
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Direct Floating PNG Logo */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative flex items-center justify-center p-4">
              {/* Soft background glow aura */}
              <div className="absolute w-80 h-80 bg-[#6d28d9]/35 blur-3xl rounded-full pointer-events-none" />

              {/* Direct PNG Logo Image */}
              <Image
                src="/logo.png"
                alt="Ordi Logo"
                width={360}
                height={360}
                priority
                className="relative z-10 w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96 object-contain filter drop-shadow-[0_0_30px_rgba(109,40,217,0.7)] animate-float-hologram"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
