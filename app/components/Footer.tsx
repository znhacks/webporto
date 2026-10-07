"use client";

import Image from "next/image";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#08080a] border-t border-white/[0.08] py-12 px-6 md:px-10 text-zinc-400">
      <div className="max-w-[1340px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand with PNG Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-[#0c0c10] border border-white/10 p-1 flex items-center justify-center shadow">
            <Image
              src="/logo.png"
              alt="Ordi Logo"
              width={36}
              height={36}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col text-center md:text-left">
            <span className="font-display font-black text-white text-sm tracking-tight uppercase">
              ORDI / SABITPLAY STUDIO
            </span>
            <p className="text-[11px] text-zinc-500 font-mono">
              ENGINEERING & GAME DEVELOPMENT
            </p>
          </div>
        </div>

        {/* Links & Back to Top */}
        <div className="flex items-center gap-6 font-mono text-xs">
          <a
            href="https://github.com/znhacks"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://sabitplay.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            Sabitplay
          </a>
          <a
            href="https://instagram.com/jxrzero"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            Instagram
          </a>
          <button
            onClick={scrollToTop}
            className="px-3 py-1.5 min-h-[36px] rounded-lg bg-white/[0.03] border border-white/[0.08] text-zinc-300 hover:text-white hover:border-white/20 transition-all flex items-center gap-1.5 cursor-pointer"
            title="Scroll to Top"
          >
            <span className="material-symbols-outlined text-sm">
              arrow_upward
            </span>
            <span>TOP</span>
          </button>
        </div>
      </div>

      <div className="max-w-[1340px] mx-auto mt-8 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-zinc-500 gap-2">
        <span>© 2026 ORDI. ALL RIGHTS RESERVED.</span>
        <span>Bye World</span>
      </div>
    </footer>
  );
}
