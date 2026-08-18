"use client";

import Image from "next/image";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#030c17] border-t border-white/10 py-12 px-6 md:px-8 text-[#ccc3d7]">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand with PNG Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#051424] border border-white/15 p-1.5 flex items-center justify-center shadow-lg">
            <Image
              src="/logo.png"
              alt="Ordi Logo"
              width={40}
              height={40}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col text-center md:text-left">
            <span className="font-extrabold text-white text-base tracking-tight">
              Ordi <span className="text-[#d3bbff] font-mono text-xs">(znhacks)</span>
            </span>
            <p className="text-[11px] text-[#ccc3d7] font-mono">
              Full-Stack Developer &amp; Game Engineer
            </p>
          </div>
        </div>

        {/* Links & Back to Top */}
        <div className="flex items-center gap-6 font-mono text-xs">
          <a
            href="https://github.com/znhacks"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#d3bbff] transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://jdevs03.itch.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-400 transition-colors text-red-400"
          >
            Itch.io
          </a>
          <a
            href="https://instagram.com/jxrzero"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#d3bbff] transition-colors"
          >
            Instagram (@jxrzero)
          </a>
          <button
            onClick={scrollToTop}
            className="px-3.5 py-2 rounded-xl glass-cyber border border-white/10 text-[#d3bbff] hover:text-white transition-colors flex items-center gap-1 shadow-md hover:scale-105"
            title="Ke atas"
          >
            <span className="material-symbols-outlined text-base">
              arrow_upward
            </span>
            <span>Atas</span>
          </button>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto mt-8 pt-6 border-t border-white/5 text-center text-[11px] font-mono text-[#ccc3d7]">
        © {new Date().getFullYear()} Ordi · Full-Stack Developer Portfolio.
      </div>
    </footer>
  );
}
