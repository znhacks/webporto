"use client";

import Image from "next/image";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-transparent border-t border-white/10 py-12 px-6 md:px-8 text-[#ccc3d7]">
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
              Founder
            </span>
            <p className="text-[11px] text-[#ccc3d7] font-mono">
              Sabitplay Studio
            </p>
          </div>
        </div>

        {/* Links & Back to Top */}
        <div className="flex items-center gap-6 font-mono text-xs">
          <a
            href="https://github.com/znhacks"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#d3bbff] hover:text-white underline underline-offset-4 decoration-[#6d28d9] hover:decoration-white transition-colors font-medium"
          >
            GitHub
          </a>
          <a
            href="https://sabitplay.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#d3bbff] hover:text-white underline underline-offset-4 decoration-[#6d28d9] hover:decoration-white transition-colors font-medium"
          >
            Sabitplay Studio
          </a>
          <a
            href="https://instagram.com/jxrzero"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#d3bbff] hover:text-white underline underline-offset-4 decoration-[#6d28d9] hover:decoration-white transition-colors font-medium"
          >
            Instagram
          </a>
          <button
            onClick={scrollToTop}
            className="px-3.5 py-2 rounded-xl bg-[#051424] border border-[#6d28d9]/50 text-[#d3bbff] hover:text-white hover:border-[#d3bbff] hover:bg-[#6d28d9]/25 transition-all flex items-center gap-1 shadow-md hover:scale-105 cursor-pointer"
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
        Jordy-is-a-Dev
      </div>
    </footer>
  );
}
