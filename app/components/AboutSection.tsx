"use client";

import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

export default function AboutSection() {
  const { lang } = useLanguage();

  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 md:px-10 bg-transparent border-t border-white/[0.08] relative"
    >
      <div className="max-w-[1340px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-zinc-400 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              <span>{lang === "en" ? "Profile / 02" : "Profil / 02"}</span>
              <span className="text-zinc-600">/</span>
              <span className="text-zinc-300 font-semibold">{lang === "en" ? "Background" : "Latar Belakang"}</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              {lang === "en"
                ? "Full-Stack Developer & Studio Founder"
                : "Full-Stack Developer & Pendiri Studio"}
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-sans font-light">
              {lang === "en"
                ? "I am Ordi, Founder of Sabitplay Studio. I specialize in building complete software systems: from responsive frontend architectures and cloud database backends to custom interactive game engines and game jam entries."
                : "Aku Ordi, Pendiri Sabitplay Studio. Berpengalaman membangun sistem perangkat lunak secara end-to-end: mulai dari arsitektur frontend web responsif, backend database cloud, hingga game engine kustom dan kompetisi game jam."}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 font-mono text-xs">
              <a
                href="https://github.com/znhacks"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-[#0c0c10] border border-white/[0.08] hover:border-white/25 hover:bg-[#111116] transition-all flex flex-col justify-between group"
              >
                <span className="text-zinc-400 uppercase text-[10px] mb-1">Source Code</span>
                <span className="text-white font-bold group-hover:text-zinc-200 flex items-center justify-between">
                  github.com
                  <span className="material-symbols-outlined text-xs">arrow_outward</span>
                </span>
              </a>

              <a
                href="https://sabitplay.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-[#0c0c10] border border-white/[0.08] hover:border-white/25 hover:bg-[#111116] transition-all flex flex-col justify-between group"
              >
                <span className="text-zinc-400 uppercase text-[10px] mb-1">Game Studio</span>
                <span className="text-white font-bold group-hover:text-zinc-200 flex items-center justify-between">
                  sabitplay.app
                  <span className="material-symbols-outlined text-xs">arrow_outward</span>
                </span>
              </a>

              <a
                href="https://instagram.com/jxrzero"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-[#0c0c10] border border-white/[0.08] hover:border-white/25 hover:bg-[#111116] transition-all flex flex-col justify-between group"
              >
                <span className="text-zinc-400 uppercase text-[10px] mb-1">Personal IG</span>
                <span className="text-white font-bold group-hover:text-zinc-200 flex items-center justify-between">
                  @jxrzero
                  <span className="material-symbols-outlined text-xs">arrow_outward</span>
                </span>
              </a>
            </div>
          </div>

          {/* Right Profile Photo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group max-w-sm w-full">
              <div className="relative rounded-2xl overflow-hidden border border-white/[0.1] bg-[#0c0c10] shadow-2xl">
                <Image
                  src="/me.jpg"
                  alt="Ordi (Jordy)"
                  width={500}
                  height={600}
                  className="w-full h-auto max-h-[460px] object-cover object-top filter grayscale-0 md:grayscale contrast-105 md:contrast-110 md:group-hover:grayscale-0 group-hover:scale-102 transition-all duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-transparent to-transparent opacity-60" />

                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-void/90 border border-line-strong flex items-center justify-between text-xs font-mono text-zinc-300">
                  <span className="text-white font-medium">Ordi Kurniawan, also known as Jordy</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-holo ml-2 shrink-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
