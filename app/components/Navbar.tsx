"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, toggleLang } = useLanguage();

  return (
    <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 px-3 sm:px-6 max-w-[1340px] mx-auto pointer-events-none">
      <nav className="pointer-events-auto rounded-xl px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between bg-[#0e0e12]/85 backdrop-blur-xl border border-white/[0.08] shadow-[0_12px_40px_rgba(0,0,0,0.6)]">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 p-1 flex items-center justify-center group-hover:border-purple-400/40 transition-colors">
            <Image
              src="/logo.png"
              alt="Ordi Logo"
              width={32}
              height={32}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-display text-sm sm:text-base font-black text-white tracking-tight uppercase group-hover:text-purple-200 transition-colors leading-none">
              ORDI <span className="text-[10px] font-mono text-purple-400 font-normal">/ SABITPLAY</span>
            </span>
          </div>
        </a>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-xs font-mono">
          <a
            href="#projects"
            className="text-zinc-400 hover:text-white transition-colors uppercase tracking-wider"
          >
            {lang === "en" ? "Works" : "Proyek"}
          </a>
          <a
            href="#about"
            className="text-zinc-400 hover:text-white transition-colors uppercase tracking-wider"
          >
            {lang === "en" ? "Profile" : "Profil"}
          </a>
          <a
            href="#contact"
            className="text-zinc-400 hover:text-white transition-colors uppercase tracking-wider"
          >
            {lang === "en" ? "Contact" : "Kontak"}
          </a>
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="px-2.5 py-1.5 min-h-[36px] rounded-md bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono text-zinc-400 hover:text-white hover:border-purple-400/30 transition-all flex items-center gap-1.5 cursor-pointer"
            title="Switch Language"
          >
            <span className={lang === "en" ? "text-white font-bold" : "text-zinc-500"}>
              EN
            </span>
            <span className="text-zinc-600">/</span>
            <span className={lang === "id" ? "text-white font-bold" : "text-zinc-500"}>
              ID
            </span>
          </button>

          <a
            href="#contact"
            className="px-4 py-2 min-h-[36px] text-xs font-mono font-semibold text-black bg-white hover:bg-zinc-200 rounded-md transition-colors flex items-center gap-1.5 cursor-pointer shadow-[0_0_15px_rgba(168,85,247,0.2)]"
          >
            {lang === "en" ? "Get in Touch" : "Hubungi"}
          </a>
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleLang}
            className="px-2.5 py-1.5 min-h-[40px] rounded-md bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-300 cursor-pointer"
          >
            {lang.toUpperCase()}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 min-w-[40px] min-h-[40px] text-zinc-300 hover:text-white flex items-center justify-center cursor-pointer"
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined text-xl">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto md:hidden mt-2 bg-[#0e0e12]/95 backdrop-blur-xl rounded-xl border border-purple-500/20 p-5 flex flex-col gap-2 shadow-2xl">
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-mono text-zinc-300 hover:text-white py-2.5 flex items-center uppercase tracking-wider"
          >
            {lang === "en" ? "Works" : "Proyek"}
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-mono text-zinc-300 hover:text-white py-2.5 flex items-center uppercase tracking-wider"
          >
            {lang === "en" ? "Profile" : "Profil"}
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-mono text-zinc-300 hover:text-white py-2.5 flex items-center uppercase tracking-wider"
          >
            {lang === "en" ? "Contact" : "Kontak"}
          </a>
        </div>
      )}
    </header>
  );
}
