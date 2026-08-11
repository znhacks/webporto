"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, toggleLang } = useLanguage();

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 max-w-[1280px] mx-auto">
      <nav className="glass-cyber rounded-2xl border border-white/10 px-5 sm:px-6 h-16 sm:h-20 flex items-center justify-between shadow-2xl">
        {/* Brand with PNG Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl bg-[#051424] border border-[#6d28d9]/40 p-1.5 flex items-center justify-center shadow-lg group-hover:border-[#d3bbff] group-hover:shadow-[0_0_20px_rgba(109,40,217,0.6)] transition-all duration-300">
            <Image
              src="/logo.png"
              alt="Jordi Logo"
              width={40}
              height={40}
              className="w-full h-full object-contain group-hover:scale-110 transition-transform"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-extrabold text-[#d4e4fa] tracking-tight group-hover:text-[#d3bbff] transition-colors leading-none">
              Jordi <span className="text-[#6d28d9] text-xs font-mono">.dev</span>
            </span>
            <span className="text-[10px] font-mono text-[#ccc3d7] tracking-widest uppercase mt-0.5">
              znhacks
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#ccc3d7]">
          <a
            href="#projects"
            className="hover:text-white transition-colors relative py-1 group"
          >
            {lang === "en" ? "Projects" : "Proyek"}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#d3bbff] group-hover:w-full transition-all duration-300" />
          </a>
          <a
            href="#about"
            className="hover:text-white transition-colors relative py-1 group"
          >
            {lang === "en" ? "About" : "Tentang"}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#d3bbff] group-hover:w-full transition-all duration-300" />
          </a>
          <a
            href="#contact"
            className="hover:text-white transition-colors relative py-1 group"
          >
            {lang === "en" ? "Contact" : "Kontak"}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#d3bbff] group-hover:w-full transition-all duration-300" />
          </a>
        </div>

        {/* Right Actions: Language Switcher Pill & Contact Button */}
        <div className="hidden md:flex items-center gap-3">
          {/* Dual Language Switcher Toggle */}
          <button
            onClick={toggleLang}
            className="px-3 py-1.5 rounded-xl bg-[#051424] border border-white/10 text-xs font-mono text-[#d4e4fa] hover:border-[#d3bbff]/50 transition-all flex items-center gap-1.5 shadow-md"
            title="Switch Language / Ganti Bahasa"
          >
            <span className="material-symbols-outlined text-sm text-[#d3bbff]">
              translate
            </span>
            <span className="font-bold">
              <span className={lang === "en" ? "text-white" : "text-[#ccc3d7]"}>
                EN
              </span>
              <span className="text-[#6d28d9] mx-1">|</span>
              <span className={lang === "id" ? "text-white" : "text-[#ccc3d7]"}>
                ID
              </span>
            </span>
          </button>

          <a
            href="#contact"
            className="px-5 py-2 text-xs font-mono font-semibold text-white bg-gradient-to-r from-[#6d28d9] to-[#7331df] rounded-xl hover:shadow-[0_0_20px_rgba(109,40,217,0.6)] hover:scale-105 transition-all flex items-center gap-1.5 shadow-lg shadow-purple-900/30"
          >
            {lang === "en" ? "Contact" : "Kontak"}
            <span className="material-symbols-outlined text-sm">
              arrow_outward
            </span>
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleLang}
            className="px-2.5 py-1 rounded-lg bg-[#051424] border border-white/10 text-xs font-mono text-[#d4e4fa]"
          >
            {lang.toUpperCase()}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#d4e4fa] hover:text-[#d3bbff] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 glass-cyber rounded-2xl border border-white/10 px-6 py-6 flex flex-col gap-4 animate-in slide-in-from-top duration-200">
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base text-[#d4e4fa] hover:text-[#d3bbff] py-2 border-b border-white/5"
          >
            {lang === "en" ? "Projects" : "Proyek"}
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base text-[#d4e4fa] hover:text-[#d3bbff] py-2 border-b border-white/5"
          >
            {lang === "en" ? "About" : "Tentang"}
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base text-[#d4e4fa] hover:text-[#d3bbff] py-2 border-b border-white/5"
          >
            {lang === "en" ? "Contact" : "Kontak"}
          </a>
        </div>
      )}
    </header>
  );
}
