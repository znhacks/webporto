"use client";

import { useEffect } from "react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#051424] border border-white/15 rounded-2xl shadow-2xl overflow-y-auto flex flex-col text-[#d4e4fa]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Sticky Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-[#0d1c2d]/90 backdrop-blur-xl border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#d3bbff] text-2xl">
              badge
            </span>
            <div>
              <h2 className="text-xl font-bold text-white leading-tight">
                Curriculum Vitae / Resume
              </h2>
              <p className="font-mono text-xs text-[#958da1]">
                Jordi (znhacks) • Systems &amp; Game Engineer
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-[#6d28d9] text-white font-mono text-xs hover:bg-[#7331df] transition-colors flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-sm">print</span>
              Print / Save
            </button>
            <button
              onClick={onClose}
              className="p-2 text-[#ccc3d7] hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
          </div>
        </div>

        {/* Resume Content Sheet */}
        <div className="p-6 sm:p-8 space-y-8 print:p-0 print:text-black">
          {/* Header Info */}
          <div className="border-b border-white/10 pb-6 flex flex-col sm:flex-row justify-between sm:items-end gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-white">Jordi</h1>
              <p className="font-mono text-sm text-[#d3bbff] mt-1">
                Software Architect &amp; Game Developer
              </p>
              <p className="text-xs text-[#ccc3d7] mt-2">
                GitHub: github.com/znhacks • Email: hydrogz7@gmail.com
              </p>
            </div>

            <div className="font-mono text-xs text-[#958da1] text-left sm:text-right">
              <span>Location: Indonesia</span>
              <br />
              <span>Status: Available for hire &amp; contracts</span>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#d3bbff] mb-2">
              Executive Summary
            </h3>
            <p className="text-sm text-[#ccc3d7] leading-relaxed">
              Software engineer specializing in multi-platform application architecture (Flutter, Supabase) and game development engines (Ren&apos;Py, Luau/Roblox). Architected Jurnal Mengajar, an enterprise teacher journal and school management platform featuring row-level security and automated exports.
            </p>
          </div>

          {/* Key Projects */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#d3bbff] mb-4">
              Key Projects &amp; Repositories
            </h3>

            <div className="space-y-4 font-normal">
              <div className="bg-[#0d1c2d] p-4 rounded-xl border border-white/5">
                <div className="flex justify-between items-start">
                  <h4 className="text-base font-bold text-white">
                    Jurnal Mengajar Platform
                  </h4>
                  <span className="font-mono text-xs text-[#d3bbff]">
                    2024 - Present
                  </span>
                </div>
                <p className="text-xs font-mono text-[#958da1] mt-0.5">
                  Flutter • Supabase • Dart • SQL RLS Security
                </p>
                <ul className="text-xs text-[#ccc3d7] mt-2 list-disc list-inside space-y-1">
                  <li>Built complete multi-tenant teacher journal system with 9 Repository abstractions.</li>
                  <li>Implemented Supabase row-level security (RLS) and real-time synchronization.</li>
                  <li>Automated report exports, period schedules, and attendance logs.</li>
                </ul>
              </div>

              <div className="bg-[#0d1c2d] p-4 rounded-xl border border-white/5">
                <div className="flex justify-between items-start">
                  <h4 className="text-base font-bold text-white">
                    Entity: Next Terrors (W.I.P)
                  </h4>
                  <span className="font-mono text-xs text-[#d3bbff]">
                    2024
                  </span>
                </div>
                <p className="text-xs font-mono text-[#958da1] mt-0.5">
                  Ren&apos;Py Engine • Python • Horror Game Design
                </p>
                <ul className="text-xs text-[#ccc3d7] mt-2 list-disc list-inside space-y-1">
                  <li>Developed narrative horror game with branching choices and dynamic audio cues.</li>
                  <li>Engineered custom Python scripts for character flags and game states.</li>
                </ul>
              </div>

              <div className="bg-[#0d1c2d] p-4 rounded-xl border border-white/5">
                <div className="flex justify-between items-start">
                  <h4 className="text-base font-bold text-white">
                    Project Blinks (W.I.P)
                  </h4>
                  <span className="font-mono text-xs text-[#d3bbff]">
                    2024
                  </span>
                </div>
                <p className="text-xs font-mono text-[#958da1] mt-0.5">
                  Roblox Studio • Luau • Rojo 7 Toolchain
                </p>
                <ul className="text-xs text-[#ccc3d7] mt-2 list-disc list-inside space-y-1">
                  <li>Created modular game architecture using Rojo sync and external VS Code workflow.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#d3bbff] mb-3">
              Technical Skill Set
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-mono">
              <div className="bg-[#122131] p-3 rounded-lg border border-white/5 text-[#d4e4fa]">
                <span className="text-[#958da1] block text-[10px]">MOBILE / FRONTEND</span>
                Flutter, Dart, Clean Architecture
              </div>
              <div className="bg-[#122131] p-3 rounded-lg border border-white/5 text-[#d4e4fa]">
                <span className="text-[#958da1] block text-[10px]">BACKEND &amp; DB</span>
                Supabase, SQL RLS, PostgreSQL
              </div>
              <div className="bg-[#122131] p-3 rounded-lg border border-white/5 text-[#d4e4fa]">
                <span className="text-[#958da1] block text-[10px]">GAME ENGINES</span>
                Ren&apos;Py, Python, Luau / Roblox
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-[#0d1c2d] border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-lg bg-[#122131] text-[#d4e4fa] font-mono text-xs hover:bg-white/10"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
}
