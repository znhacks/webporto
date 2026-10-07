"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  titleEn?: string;
  subtitleEn?: string;
  category: "all" | "web" | "jurnal-mengajar" | "game-dev" | "mobile";
  categoryLabel: string;
  categoryLabelEn?: string;
  techStack: string[];
  githubUrl?: string;
  itchUrl?: string;
  year?: string;
  imageBg: string;
  description: string;
  descriptionEn?: string;
  fullDetails: {
    overview: string;
    architecture: string[];
    features: string[];
    techDetails: string;
  };
  overviewEn?: string;
  featuresEn?: string[];
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { lang } = useLanguage();
  const [localProject, setLocalProject] = useState<ProjectData | null>(project);
  const [showEndings, setShowEndings] = useState(false);

  useEffect(() => {
    if (project) {
      setLocalProject(project);
      setShowEndings(false);
    }
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  const displayTitle =
    lang === "en" && localProject?.titleEn ? localProject.titleEn : localProject?.title;
  const displaySubtitle =
    lang === "en" && localProject?.subtitleEn ? localProject.subtitleEn : localProject?.subtitle;
  const displayCategoryLabel =
    lang === "en" && localProject?.categoryLabelEn
      ? localProject.categoryLabelEn
      : localProject?.categoryLabel;
  const displayOverview =
    lang === "en" && localProject?.overviewEn
      ? localProject.overviewEn
      : localProject?.fullDetails.overview;

  const renderModalContent = () => {
    if (!project || !localProject) return null;

    // =========================================================================
    // 1. STILL HER? — Bespoke Full-Screen Toxic Bunker & Psychological Horror
    // =========================================================================
    if (localProject.id === "still-her") {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#020704] overflow-y-auto p-4 sm:p-6 md:p-8"
        >
          {/* Ambient Bio-hazard Light Depth */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-emerald-500/[0.08] rounded-full blur-[160px]" />
            <div className="absolute bottom-0 right-0 w-[550px] h-[550px] bg-rose-950/[0.12] rounded-full blur-[180px]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(16,185,129,0.06)_0%,_transparent_75%)]" />
          </div>

          {/* Close HUD Button Top Right */}
          <button
            type="button"
            onClick={onClose}
            className="fixed top-5 right-5 sm:top-7 sm:right-7 z-50 px-3 py-1.5 rounded-md bg-[#041209]/80 border border-emerald-500/30 text-emerald-300 hover:text-white hover:border-emerald-400 font-mono text-xs flex items-center gap-1.5 backdrop-blur-md transition-all cursor-pointer shadow-lg"
            aria-label="Close"
          >
            <span className="material-symbols-outlined text-sm">close</span>
            <span className="hidden sm:inline text-[11px] uppercase tracking-wider">ESC</span>
          </button>

          {/* Content Container */}
          <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-2xl w-full my-auto py-8">
            {/* Telemetry Index & Category Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-4 font-mono text-[10px]">
              <span className="px-2.5 py-1 rounded bg-[#061d10] border border-emerald-500/40 text-emerald-300 font-bold uppercase tracking-wider">
                MICRO JAM 066: TOXIC
              </span>
              <span className="px-2.5 py-1 rounded bg-black/60 border border-emerald-900/50 text-emerald-400/80 uppercase tracking-widest">
                SECTOR-07 QUARANTINE
              </span>
            </div>

            {/* Title / Logo */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-wider mb-2 uppercase">
              Still Her?
            </h1>

            {/* Tagline */}
            <p className="font-mono text-xs sm:text-sm text-emerald-300/90 mb-6 leading-relaxed max-w-lg">
              {lang === "en"
                ? '"Can\'t live with her. Can\'t live without her."'
                : '"Tak bisa hidup bersamanya. Tak bisa hidup tanpanya."'}
            </p>

            {/* Artwork Display with HUD Frame */}
            <div className="reticle relative w-full max-w-lg aspect-video rounded-xl overflow-hidden border border-emerald-500/40 mb-6 bg-[#041008] shadow-[0_16px_40px_rgba(0,0,0,0.8)] group">
              <Image
                src="/Stillher/hana.png"
                alt="Still Her Hana and Jito Artwork"
                fill
                sizes="(max-width: 1024px) 100vw, 512px"
                className="object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-105"
                priority
              />
              <div className="scanlines absolute inset-0 opacity-25 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-85" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-left font-mono text-[11px] text-emerald-300/90">
                <span>{lang === "en" ? "Bunker Maintenance · Day 1 to Day 5" : "Bunker Perawatan · Hari 1 s/d Hari 5"}</span>
                <span className="text-[10px] text-emerald-400/60 uppercase">Interactive Fiction</span>
              </div>
            </div>

            {/* Synopsis */}
            <p className="text-xs sm:text-sm text-zinc-300 mb-6 leading-relaxed max-w-lg font-light">
              {lang === "en"
                ? "Trapped inside a sealed maintenance bunker with infected lover Hana after a synthetic neurotoxin rupture. Her empathy is slipping away into volatile cruelty. Surrendering your emotional boundaries binds iron chains that erode your sanity."
                : "Terperangkap di bunker perawatan sempit bersama Hana yang terinfeksi neurotoksin sintetis. Empatinya memudar menjadi manipulasi beracun. Menyerahkan batas emosionalmu akan mengikat rantai kodependensi yang mengikis kewarasan hingga batas akhir."}
            </p>

            {/* Interactive Ending Walkthrough Guide */}
            <div className="w-full max-w-lg mb-8 text-left font-mono">
              <button
                type="button"
                onClick={() => setShowEndings(!showEndings)}
                className="w-full px-4 py-3 min-h-[44px] rounded-lg bg-[#04140b] border border-emerald-500/30 text-emerald-300 hover:text-white hover:border-emerald-400 text-xs flex items-center justify-between transition-colors cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">terminal</span>
                  <span>
                    {showEndings
                      ? (lang === "en" ? "Hide Ending Protocols & Walkthrough" : "Sembunyikan Protokol Ending")
                      : (lang === "en" ? "Declassify Ending Protocols (Spoilers)" : "Buka Panduan Protokol Ending (Spoiler)")}
                  </span>
                </span>
                <span className="material-symbols-outlined text-sm">
                  {showEndings ? "expand_less" : "expand_more"}
                </span>
              </button>

              {showEndings && (
                <div className="mt-3 p-4 bg-[#030d07] border border-emerald-500/25 rounded-lg space-y-3 text-xs">
                  <div className="p-3 rounded bg-[#05180e] border border-emerald-500/20">
                    <div className="flex items-center justify-between text-emerald-300 font-bold mb-1">
                      <span>PROTOCOL 01: SEVER THE CORD</span>
                      <span className="text-[10px] text-emerald-400 uppercase">Good Ending</span>
                    </div>
                    <p className="text-[11px] leading-relaxed text-zinc-300 font-sans font-light">
                      {lang === "en"
                        ? "0 to 2 Chains Bound + Sanity >= 40% + Toxicity <= 60% on Day 5. Set firm boundaries, resist pacifying demands with vital blood rations, and sprint up the emergency ladder to seal the hatch."
                        : "0 hingga 2 Rantai Terikat + Sanity >= 40% + Toxicity <= 60% pada Hari ke-5. Tetapkan batasan tegas, jangan korbankan darah/ransum vital untuk menuruti tuntutannya, dan lari ke tangga darurat lalu segel pintu bunker."}
                    </p>
                  </div>

                  <div className="p-3 rounded bg-[#160608] border border-rose-500/20">
                    <div className="flex items-center justify-between text-rose-300 font-bold mb-1">
                      <span>PROTOCOL 02: PERMANENT PREY</span>
                      <span className="text-[10px] text-rose-400 uppercase">Bad Ending</span>
                    </div>
                    <p className="text-[11px] leading-relaxed text-zinc-300 font-sans font-light">
                      {lang === "en"
                        ? "5 Chains Bound OR Sanity drops to 0% OR Toxicity reaches 100%. Yield to every manipulative whim, let your blood drain, and become entirely bound in iron chains as her possession."
                        : "5 Rantai Terikat ATAU Sanity 0% ATAU Toxicity 100%. Turuti semua manipulasi, biarkan darah dan ransum terkuras, hingga terikat seutuhnya oleh rantai besi dan kehilangan otonomi diri selamanya."}
                    </p>
                  </div>

                  <div className="p-3 rounded bg-[#181105] border border-amber-500/20">
                    <div className="flex items-center justify-between text-amber-300 font-bold mb-1">
                      <span>PROTOCOL 03: CONTROLLED DECAY</span>
                      <span className="text-[10px] text-amber-400 uppercase">Secret Ending</span>
                    </div>
                    <p className="text-[11px] leading-relaxed text-zinc-300 font-sans font-light">
                      {lang === "en"
                        ? "3 to 4 Chains Bound + C-12 Solvent Synthesized in the Kitchen. Search the Kitchen during day phase for notes, synthesize C-12 enzyme solvent, and inject it on Day 5 to halt neural spores and embrace slow decay together."
                        : "3 hingga 4 Rantai Terikat + Pelarut C-12 Disintesis di Dapur. Telusuri dapur di fase siang untuk menemukan catatan riset, sintesis enzim C-12, lalu suntikkan pada Hari ke-5 untuk menghentikan spora saraf dan hidup bersama dalam pembusukan terkendali."}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-3">
              {localProject.itchUrl && (
                <a
                  href={localProject.itchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 min-h-[44px] rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                >
                  <span className="material-symbols-outlined text-base font-bold">sports_esports</span>
                  {lang === "en" ? "Play on Itch.io" : "Mainkan di Itch.io"}
                </a>
              )}
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 min-h-[44px] rounded-lg border border-emerald-500/30 text-emerald-300 hover:text-white hover:border-emerald-400 font-mono text-xs uppercase tracking-wider transition-all cursor-pointer"
              >
                {lang === "en" ? "Return" : "Kembali"}
              </button>
            </div>
          </div>
        </motion.div>
      );
    }

    // =========================================================================
    // 2. LAST GATE — Bespoke Full-Screen Castle Defense & Reflex Combat Matrix
    // =========================================================================
    if (localProject.id === "last-gate") {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#070402] overflow-y-auto p-4 sm:p-6 md:p-8"
        >
          {/* Ambient Molten Forge Light Depth */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-amber-500/[0.08] rounded-full blur-[160px]" />
            <div className="absolute bottom-0 right-0 w-[550px] h-[550px] bg-rose-950/[0.14] rounded-full blur-[180px]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(245,158,11,0.06)_0%,_transparent_75%)]" />
          </div>

          {/* Close HUD Button Top Right */}
          <button
            type="button"
            onClick={onClose}
            className="fixed top-5 right-5 sm:top-7 sm:right-7 z-50 px-3 py-1.5 rounded-md bg-[#160a04]/80 border border-amber-500/30 text-amber-300 hover:text-white hover:border-amber-400 font-mono text-xs flex items-center gap-1.5 backdrop-blur-md transition-all cursor-pointer shadow-lg"
            aria-label="Close"
          >
            <span className="material-symbols-outlined text-sm">close</span>
            <span className="hidden sm:inline text-[11px] uppercase tracking-wider">ESC</span>
          </button>

          {/* Content Container */}
          <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-2xl w-full my-auto py-8">
            {/* Telemetry Index & Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-4 font-mono text-[10px]">
              <span className="px-2.5 py-1 rounded bg-[#1c0d03] border border-amber-500/40 text-amber-300 font-bold uppercase tracking-wider">
                SLAPJAM AI GAME JAM
              </span>
              <span className="px-2.5 py-1 rounded bg-black/60 border border-amber-900/50 text-amber-400/80 uppercase tracking-widest">
                4-LANE REFLEX COMBAT
              </span>
            </div>

            {/* Dedicated Game Logo */}
            <div className="relative w-full max-w-[280px] sm:max-w-xs h-16 sm:h-20 mb-3">
              <Image
                src="/Lastgate/lglogo.png"
                alt="Last Gate Logo"
                fill
                sizes="320px"
                className="object-contain filter drop-shadow-[0_8px_20px_rgba(245,158,11,0.4)]"
                priority
              />
            </div>

            {/* Tagline */}
            <p className="font-mono text-xs sm:text-sm text-amber-200/90 mb-6 leading-relaxed max-w-lg">
              {lang === "en"
                ? "The kingdom's last line of defense rests in your hands!"
                : "Garis pertahanan terakhir kerajaan berada di tanganmu!"}
            </p>

            {/* Gameplay Artwork Frame */}
            <div className="reticle relative w-full max-w-lg aspect-video rounded-xl overflow-hidden border border-amber-500/40 mb-6 bg-[#100602] shadow-[0_16px_40px_rgba(0,0,0,0.8)] group">
              <Image
                src="/Lastgate/lastgate.jpg"
                alt="Last Gate Castle Defense Gameplay"
                fill
                sizes="(max-width: 1024px) 100vw, 512px"
                className="object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-105"
                priority
              />
              <div className="scanlines absolute inset-0 opacity-25 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-85" />
            </div>

            {/* Combat Specs Telemetry Grid */}
            <dl className="w-full max-w-lg grid grid-cols-3 gap-px bg-amber-500/20 border border-amber-500/30 mb-6 font-mono text-left">
              <div className="bg-[#0b0502] p-2.5 sm:p-3">
                <dt className="text-[10px] text-amber-400/70 leading-tight">MECHANIC</dt>
                <dd className="text-xs text-amber-200 font-bold mt-1">Deflect Combos</dd>
              </div>
              <div className="bg-[#0b0502] p-2.5 sm:p-3">
                <dt className="text-[10px] text-amber-400/70 leading-tight">DEFENDERS</dt>
                <dd className="text-xs text-amber-200 font-bold mt-1">Felix & Mella</dd>
              </div>
              <div className="bg-[#0b0502] p-2.5 sm:p-3">
                <dt className="text-[10px] text-amber-400/70 leading-tight">DIFFICULTY</dt>
                <dd className="text-xs text-amber-200 font-bold mt-1">4 Modes</dd>
              </div>
            </dl>

            <p className="text-xs sm:text-sm text-zinc-300 mb-8 leading-relaxed max-w-lg font-light">
              {lang === "en"
                ? "Hold the kingdom's last gate! Test reflex speed across 4 combat lanes, deflect demon fireballs, unleash ultimates from Felix & Mella, and shepherd civilians to safety."
                : "Pertahankan gerbang kastel terakhir! Uji kecepatan refleks di 4 jalur tempur, pantulkan bola api iblis, keluarkan jurus pamungkas Felix & Mella, dan selamatkan warga sipil."}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-3">
              {localProject.itchUrl && (
                <a
                  href={localProject.itchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 min-h-[44px] rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer shadow-[0_0_20px_rgba(245,158,11,0.4)]"
                >
                  <span className="material-symbols-outlined text-base font-bold">sports_esports</span>
                  {lang === "en" ? "Play on Itch.io" : "Mainkan di Itch.io"}
                </a>
              )}
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 min-h-[44px] rounded-lg border border-amber-500/30 text-amber-300 hover:text-white hover:border-amber-400 font-mono text-xs uppercase tracking-wider transition-all cursor-pointer"
              >
                {lang === "en" ? "Return" : "Kembali"}
              </button>
            </div>
          </div>
        </motion.div>
      );
    }

    // =========================================================================
    // 3. RUSTBOND — Bespoke Visual Novel Stage with Zen & Ashy Cutouts & PV
    // =========================================================================
    if (localProject.id === "rustbond") {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050507] overflow-y-auto p-4 sm:p-6"
        >
          {/* Dual Character Standing Sprites Framing the Stage */}
          <div className="absolute inset-0 z-0 flex justify-between items-end pointer-events-none overflow-hidden select-none">
            {/* Zen on the bottom-left */}
            <div className="relative h-[60vh] sm:h-[88vh] w-[65vw] sm:w-[420px] -ml-16 sm:-ml-8 opacity-90 transition-opacity">
              <Image
                src="/Rustbond/Zen.jpg"
                alt="Zen"
                fill
                sizes="(max-width: 768px) 65vw, 420px"
                className="object-contain object-left-bottom"
                priority
              />
            </div>
            {/* Ashy on the bottom-right */}
            <div className="relative h-[60vh] sm:h-[92vh] w-[65vw] sm:w-[420px] -mr-20 sm:-mr-8 translate-y-6 sm:translate-y-12 opacity-90 transition-opacity">
              <Image
                src="/Rustbond/Ashy.png"
                alt="Ashy"
                fill
                sizes="(max-width: 768px) 65vw, 420px"
                className="object-contain object-right-bottom"
                priority
              />
            </div>
          </div>

          {/* Cinematic Vignette Overlay to ensure center readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/60 pointer-events-none z-10" />

          {/* Close HUD Button Top Right */}
          <button
            type="button"
            onClick={onClose}
            className="fixed top-5 right-5 sm:top-7 sm:right-7 z-50 px-3 py-1.5 rounded-md bg-void/80 border border-line-strong text-titanium-200 hover:text-white hover:border-titanium-400 font-mono text-xs flex items-center gap-1.5 backdrop-blur-md transition-all cursor-pointer shadow-lg"
            aria-label="Close"
          >
            <span className="material-symbols-outlined text-sm">close</span>
            <span className="hidden sm:inline text-[11px] uppercase tracking-wider">ESC</span>
          </button>

          {/* Center Stage Content */}
          <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-2xl w-full my-auto py-8">
            {/* Rustbond Dedicated Logo */}
            <div className="relative w-full max-w-[220px] sm:max-w-xs h-14 sm:h-18 mb-3">
              <Image
                src="/Rustbond/bgrustbond.png"
                alt="Rustbond Title"
                fill
                sizes="320px"
                className="object-contain filter drop-shadow-[0_8px_20px_rgba(220,38,38,0.4)]"
                priority
              />
            </div>

            {/* Narrative Tagline */}
            <p className="font-mono text-xs sm:text-sm text-zinc-300 mb-6 leading-relaxed max-w-lg">
              {lang === "en"
                ? "Can you earn her trust and uncover the mystery behind this tragedy?"
                : "Dapatkah kamu meraih kepercayaannya dan mengungkap misteri di balik tragedi ini?"}
            </p>

            {/* PV Trailer Video Player with HUD Bezel */}
            <div className="reticle relative w-full max-w-lg aspect-video rounded-xl overflow-hidden border border-line-strong bg-black mb-6 shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
              <video
                src="/Rustbond/rbpv.mp4"
                controls
                preload="metadata"
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 mb-8 leading-relaxed max-w-lg font-light">
              {lang === "en"
                ? "A romance and survival visual novel where players build relationships, navigate emotional choices, and uncover multiple branching story endings."
                : "Game visual novel bertema romansa dan bertahan hidup dengan pilihan karakter bercabang, jalinan ikatan emosional, serta berbagai akhir cerita untuk diungkap."}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-3">
              {localProject.itchUrl && (
                <a
                  href={localProject.itchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 min-h-[44px] rounded-lg bg-red-600 hover:bg-red-500 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer shadow-[0_0_20px_rgba(220,38,38,0.4)]"
                >
                  <span className="material-symbols-outlined text-base font-bold">sports_esports</span>
                  {lang === "en" ? "Play on Itch.io" : "Mainkan di Itch.io"}
                </a>
              )}
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 min-h-[44px] rounded-lg border border-line-strong text-titanium-200 hover:text-white hover:border-titanium-400 font-mono text-xs uppercase tracking-wider transition-all cursor-pointer"
              >
                {lang === "en" ? "Return" : "Kembali"}
              </button>
            </div>
          </div>
        </motion.div>
      );
    }

    // =========================================================================
    // 4. BOCAH FISHING — Bespoke Full-Screen Nocturne Lake & Champion Exhibition
    // =========================================================================
    if (localProject.id === "bocah-fishing") {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#020912] overflow-y-auto p-4 sm:p-6 md:p-8"
        >
          {/* Ambient Lake Nocturne Depth */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-cyan-500/[0.08] rounded-full blur-[160px]" />
            <div className="absolute bottom-0 right-0 w-[550px] h-[550px] bg-indigo-950/[0.14] rounded-full blur-[180px]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(6,182,212,0.06)_0%,_transparent_75%)]" />
          </div>

          {/* Close HUD Button Top Right */}
          <button
            type="button"
            onClick={onClose}
            className="fixed top-5 right-5 sm:top-7 sm:right-7 z-50 px-3 py-1.5 rounded-md bg-[#041525]/80 border border-cyan-500/30 text-cyan-300 hover:text-white hover:border-cyan-400 font-mono text-xs flex items-center gap-1.5 backdrop-blur-md transition-all cursor-pointer shadow-lg"
            aria-label="Close"
          >
            <span className="material-symbols-outlined text-sm">close</span>
            <span className="hidden sm:inline text-[11px] uppercase tracking-wider">ESC</span>
          </button>

          {/* Content Container */}
          <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-2xl w-full my-auto py-8">
            {/* Dedicated Game Logo */}
            <div className="relative w-full max-w-[280px] sm:max-w-xs h-18 sm:h-22 mb-3">
              <Image
                src="/Bofish/20260913_210422.png"
                alt="Bocah Fishing Logo"
                fill
                sizes="320px"
                className="object-contain filter drop-shadow-[0_8px_20px_rgba(6,182,212,0.4)]"
                priority
              />
            </div>

            {/* Tagline */}
            <p className="font-mono text-xs sm:text-sm text-cyan-200/90 mb-6 leading-relaxed max-w-lg">
              {lang === "en"
                ? "A cozy, atmospheric lake fishing game where Everything is Bait!"
                : "Game simulasi memancing santai di danau malam hari dengan mekanik unik 'Everything is Bait!'"}
            </p>

            {/* Artwork Frame */}
            <div className="reticle relative w-full max-w-lg aspect-video rounded-xl overflow-hidden border border-cyan-500/40 mb-6 bg-[#02111f] shadow-[0_16px_40px_rgba(0,0,0,0.8)] group">
              <Image
                src="/Bofish/bocahfishing.png"
                alt="Bocah Fishing Gameplay"
                fill
                sizes="(max-width: 1024px) 100vw, 512px"
                className="object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-105"
                priority
              />
              <div className="scanlines absolute inset-0 opacity-25 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-85" />
            </div>

            {/* Accolade Telemetry Grid */}
            <dl className="w-full max-w-lg grid grid-cols-3 gap-px bg-cyan-500/20 border border-cyan-500/30 mb-6 font-mono text-left">
              <div className="bg-[#031322] p-2.5 sm:p-3">
                <dt className="text-[10px] text-amber-300 font-bold leading-tight">CHAMPION</dt>
                <dd className="text-xs text-titanium-50 font-bold mt-1">Microjam 065</dd>
              </div>
              <div className="bg-[#031322] p-2.5 sm:p-3">
                <dt className="text-[10px] text-cyan-300 font-bold leading-tight">TOP 1</dt>
                <dd className="text-xs text-titanium-50 font-bold mt-1">Made with Ziva</dd>
              </div>
              <div className="bg-[#031322] p-2.5 sm:p-3">
                <dt className="text-[10px] text-titanium-400 leading-tight">TOP 4</dt>
                <dd className="text-xs text-titanium-50 font-bold mt-1">Overall Stats</dd>
              </div>
            </dl>

            <p className="text-xs sm:text-sm text-zinc-300 mb-8 leading-relaxed max-w-lg font-light">
              {lang === "en"
                ? "Hook junk, batteries, or caught fish to reel in gigantic monster fish under the moonlit sky. Developed with Godot Engine with dynamic day & night cycles and full fish almanac."
                : "Kaitkan sampah, baterai berkarat, hingga ikan tangkapan untuk memikat monster danau raksasa. Dilengkapi siklus siang-malam dinamis, sifat pasif pemancing, dan almanak ikan lengkap."}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-3">
              {localProject.itchUrl && (
                <a
                  href={localProject.itchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 min-h-[44px] rounded-lg bg-cyan-400 hover:bg-cyan-300 text-black font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                >
                  <span className="material-symbols-outlined text-base font-bold">sports_esports</span>
                  {lang === "en" ? "Play on Itch.io" : "Mainkan di Itch.io"}
                </a>
              )}
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 min-h-[44px] rounded-lg border border-cyan-500/30 text-cyan-300 hover:text-white hover:border-cyan-400 font-mono text-xs uppercase tracking-wider transition-all cursor-pointer"
              >
                {lang === "en" ? "Return" : "Kembali"}
              </button>
            </div>
          </div>
        </motion.div>
      );
    }

    // =========================================================================
    // 5. STANDARD TECHNICAL DOSSIER — Web Applications, Mobile & Other Projects
    // =========================================================================
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-8 bg-void/90 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 16 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 16 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="reticle relative w-full max-w-3xl max-h-[92vh] bg-surface border border-line-strong rounded-2xl shadow-2xl overflow-y-auto flex flex-col text-titanium-200 my-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-10 flex items-center justify-between p-5 bg-surface/95 backdrop-blur-xl border-b border-line">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 bg-surface-raised border border-line text-titanium-300 rounded font-mono text-[11px] uppercase tracking-wider">
                {displayCategoryLabel}
              </span>
              {localProject.year && (
                <span className="font-mono text-xs text-titanium-500">{localProject.year}</span>
              )}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-titanium-400 hover:text-titanium-50 rounded hover:bg-surface-raised transition-colors"
              aria-label="Close modal"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>

          {/* Banner Graphic */}
          <div className="relative w-full aspect-[21/9] sm:aspect-[21/8] bg-black overflow-hidden border-b border-line">
            <Image
              src={localProject.imageBg}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 768px"
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
            <div className="absolute bottom-4 left-6 right-6">
              <h2 className="font-display text-2xl sm:text-3xl font-black text-titanium-50 tracking-tight uppercase mb-1">
                {displayTitle}
              </h2>
              <p className="text-xs sm:text-sm text-titanium-300 max-w-xl font-light">
                {displaySubtitle}
              </p>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 flex flex-col gap-6">
            {/* System Architecture & Overview */}
            <div>
              <h3 className="font-mono text-[11px] uppercase tracking-wider text-titanium-400 mb-2 font-bold">
                {lang === "en" ? "System Architecture & Overview" : "Gambaran Arsitektur & Sistem"}
              </h3>
              <p className="text-sm leading-relaxed text-titanium-300 font-light">
                {displayOverview}
              </p>
            </div>

            {/* Key Features without generic emoji */}
            {localProject.fullDetails.features && localProject.fullDetails.features.length > 0 && (
              <div>
                <h3 className="font-mono text-[11px] uppercase tracking-wider text-titanium-400 mb-3 font-bold">
                  {lang === "en" ? "Core Capabilities" : "Kapabilitas Utama"}
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-titanium-300">
                  {(lang === "en" && localProject.featuresEn ? localProject.featuresEn : localProject.fullDetails.features).map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 p-2.5 rounded bg-surface-raised border border-line">
                      <span className="text-holo select-none">/</span>
                      <span className="font-sans font-light leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack Pills */}
            <div>
              <h3 className="font-mono text-[11px] uppercase tracking-wider text-titanium-400 mb-2 font-bold">
                {lang === "en" ? "Technology Stack" : "Teknologi yang Digunakan"}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {localProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-surface-raised text-titanium-300 text-[11px] font-mono rounded border border-line"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Links */}
            <div className="pt-4 border-t border-line flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3">
                {localProject.itchUrl && (
                  <a
                    href={localProject.itchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 min-h-[44px] inline-flex items-center rounded-md bg-holo text-void font-mono text-xs font-bold tracking-tight transition-colors hover:bg-titanium-50"
                  >
                    <span>{lang === "en" ? "Play on Itch.io" : "Mainkan di Itch.io"}</span>
                  </a>
                )}

                {localProject.githubUrl && (
                  <a
                    href={localProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 min-h-[44px] inline-flex items-center rounded-md bg-titanium-50 text-void font-mono text-xs font-bold tracking-tight transition-colors hover:bg-titanium-200"
                  >
                    <span>{lang === "en" ? "Source Repository" : "Repositori GitHub"}</span>
                  </a>
                )}
              </div>

              <button
                type="button"
                onClick={onClose}
                className="px-4 min-h-[44px] inline-flex items-center rounded-md border border-line-strong text-titanium-300 font-mono text-xs hover:text-titanium-50 transition-colors cursor-pointer"
              >
                {lang === "en" ? "Close" : "Tutup"}
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return typeof document !== "undefined"
    ? createPortal(<AnimatePresence>{renderModalContent()}</AnimatePresence>, document.body)
    : null;
}
