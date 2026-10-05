"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, toggleLang } = useLanguage();

  return (
    <header className="fixed top-3 sm:top-4 left-0 right-0 z-50 px-3 sm:px-6 max-w-[1280px] mx-auto">
      <nav className="glass-navbar rounded-2xl px-4 sm:px-6 h-16 sm:h-18 flex items-center justify-between shadow-xl">
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 rounded-xl bg-[#051424] border border-[#6d28d9]/40 p-1 flex items-center justify-center shadow group-hover:border-[#d3bbff] transition-colors">
            <Image
              src="/logo.png"
              alt="Ordi Logo"
              width={36}
              height={36}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-base sm:text-lg font-extrabold text-[#d4e4fa] tracking-tight group-hover:text-[#d3bbff] transition-colors leading-none">
              Hello <span className="text-[#6d28d9] text-xs font-mono">World</span>
            </span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a
            href="#about"
            className="text-[#d3bbff] hover:text-white transition-colors relative py-1 font-medium"
          >
            {lang === "en" ? "About" : "Tentang"}
          </a>
          <a
            href="#projects"
            className="text-[#d3bbff] hover:text-white transition-colors relative py-1 font-medium"
          >
            {lang === "en" ? "Projects" : "Proyek"}
          </a>
          <a
            href="#contact"
            className="text-[#d3bbff] hover:text-white transition-colors relative py-1 font-medium"
          >
            {lang === "en" ? "Contact" : "Kontak"}
          </a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="px-3 py-2 min-h-[40px] rounded-xl bg-[#051424] border border-[#6d28d9]/40 text-xs font-mono text-[#d3bbff] hover:border-[#d3bbff] hover:bg-[#6d28d9]/20 transition-colors flex items-center gap-1.5 cursor-pointer"
            title="Switch Language / Ganti Bahasa"
          >
            <span className="material-symbols-outlined text-sm text-[#d3bbff]">
              translate
            </span>
            <span className="font-bold">
              <span className={lang === "en" ? "text-white" : "text-[#ccc3d7]/60"}>
                EN
              </span>
              <span className="text-[#6d28d9] mx-1">|</span>
              <span className={lang === "id" ? "text-white" : "text-[#ccc3d7]/60"}>
                ID
              </span>
            </span>
          </button>

          <a
            href="#contact"
            className="px-5 py-2 min-h-[40px] text-xs font-mono font-semibold text-white bg-[#6d28d9] hover:bg-[#7c3aed] rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            {lang === "en" ? "Contact" : "Kontak"}
          </a>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleLang}
            className="px-3 py-2 min-h-[44px] rounded-lg bg-[#051424] border border-[#6d28d9]/40 text-xs font-mono text-[#d3bbff] cursor-pointer"
          >
            {lang.toUpperCase()}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 min-w-[44px] min-h-[44px] text-[#d3bbff] hover:text-white flex items-center justify-center cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden mt-2 bg-[#071526] rounded-2xl border border-white/10 p-5 flex flex-col gap-2 shadow-2xl">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base text-[#d3bbff] hover:text-white py-3 min-h-[44px] flex items-center border-b border-white/5 font-medium"
          >
            {lang === "en" ? "About" : "Tentang"}
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base text-[#d3bbff] hover:text-white py-3 min-h-[44px] flex items-center border-b border-white/5 font-medium"
          >
            {lang === "en" ? "Projects" : "Proyek"}
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base text-[#d3bbff] hover:text-white py-3 min-h-[44px] flex items-center font-medium"
          >
            {lang === "en" ? "Contact" : "Kontak"}
          </a>
        </div>
      )}
    </header>
  );
}
