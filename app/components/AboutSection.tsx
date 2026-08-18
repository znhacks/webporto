"use client";

import { useLanguage } from "../context/LanguageContext";

export default function AboutSection() {
  const { lang } = useLanguage();

  // Fullstack tech stack mapped directly from Ordi's repositories & projects
  const fullstackSkills = [
    "Full-Stack Architecture",
    "Flutter & Dart (Mobile)",
    "Next.js & TypeScript (Web)",
    "Supabase Cloud & Auth",
    "PostgreSQL & SQL RLS",
    "Godot Engine",
    "Unity Engine",
    "Ren'Py Engine & Python",
    "Roblox Studio & Luau",
    "Itch.io Game Dev",
    "FCM Notifications & PDF",
    "Git & GitHub Workflow",
  ];

  return (
    <section
      id="about"
      className="py-16 px-6 md:px-8 bg-[#051424] border-t border-white/10 relative"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6d28d9]/25 border border-[#6d28d9]/50 text-[#d3bbff] text-xs font-mono mb-4">
          <span className="material-symbols-outlined text-base">person</span>
          {lang === "en" ? "ABOUT ME" : "TENTANG SAYA"}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Short Bio */}
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {lang === "en"
                ? "Full-Stack Developer & Creator"
                : "Full-Stack Developer & Pembuat Game"}
            </h2>
            <p className="text-base text-[#ccc3d7] leading-relaxed">
              {lang === "en"
                ? "I am Ordi, a versatile Full-Stack Developer specializing in building complete end-to-end solutions — spanning mobile apps (Flutter), web platforms (Next.js), cloud database backends (Supabase), and interactive game engines (Ren'Py & Roblox)."
                : "Saya Ordi, seorang Full-Stack Developer yang berpengalaman membangun solusi perangkat lunak secara end-to-end — mencakup aplikasi mobile (Flutter), platform web (Next.js), cloud database backend (Supabase), hingga game engine (Ren'Py & Roblox)."}
            </p>

            <div className="pt-2 flex flex-wrap gap-4 font-mono text-xs text-[#ccc3d7]">
              <div>
                <span className="text-[#d3bbff] block font-bold">GitHub</span>
                <a
                  href="https://github.com/znhacks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  github.com/znhacks
                </a>
              </div>
              <div>
                <span className="text-[#d3bbff] block font-bold">Itch.io</span>
                <a
                  href="https://jdevs03.itch.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white text-red-400"
                >
                  jdevs03.itch.io
                </a>
              </div>
              <div>
                <span className="text-[#d3bbff] block font-bold">Instagram</span>
                <a
                  href="https://instagram.com/jxrzero"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  @jxrzero
                </a>
              </div>
            </div>
          </div>

          {/* Right Tech Pills (Full-Stack Spectrum) */}
          <div className="lg:col-span-6 bg-[#0d1c2d] p-6 rounded-2xl border border-white/10 space-y-3">
            <h3 className="text-sm font-bold font-mono text-[#d3bbff] uppercase flex items-center gap-2">
              <span className="material-symbols-outlined text-base">code</span>
              {lang === "en"
                ? "FULL-STACK TECH SPECTRUM"
                : "KEAHLIAN FULL-STACK DEVELOPER"}
            </h3>
            <div className="flex flex-wrap gap-2">
              {fullstackSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3.5 py-1.5 bg-[#051424] border border-white/10 text-xs font-mono text-[#d4e4fa] rounded-full hover:border-[#d3bbff]/50 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
