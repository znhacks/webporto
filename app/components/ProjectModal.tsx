"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
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

  const modalContent = localProject?.id === "still-her" ? (
    <AnimatePresence>
      {project && localProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#030805] overflow-y-auto p-4 sm:p-6"
        >
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <div className="hidden sm:block absolute -top-28 -left-28 w-96 h-96 bg-emerald-500/15 rounded-full blur-[130px]" />
            <div className="hidden sm:block absolute bottom-0 right-0 w-[520px] h-[520px] bg-red-600/15 rounded-full blur-[150px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-[radial-gradient(ellipse_at_center,_rgba(16,185,129,0.12)_0%,_transparent_70%)]" />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-3xl w-full my-auto py-8">
            {/* Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-3">
              <span className="px-2.5 py-0.5 bg-gradient-to-r from-emerald-500 to-green-600 text-[#021f0b] font-mono text-[10px] font-extrabold rounded-full tracking-wider uppercase shadow-[0_0_12px_rgba(16,185,129,0.6)] flex items-center gap-1">
                <span className="material-symbols-outlined text-[11px] font-bold">biotech</span>
                {lang === "en" ? "NEW RELEASE" : "RILIS TERBARU"}
              </span>
              <span className="px-2.5 py-0.5 bg-[#062413] border border-emerald-500/40 text-emerald-300 font-mono text-[10px] font-semibold rounded-full tracking-wider uppercase">
                Micro Jam 066: Toxic
              </span>
            </div>

            {/* Title / Logo */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-wider mb-2 drop-shadow-[0_0_20px_rgba(16,185,129,0.5)]">
              STILL HER?
            </h1>

            {/* Tagline */}
            <p className="text-sm sm:text-base text-emerald-100/90 mb-4 leading-relaxed max-w-xl font-medium drop-shadow-md">
              {lang === "en"
                ? '"Can\'t live with her. Can\'t live without her."'
                : '"Tak bisa hidup bersamanya. Tak bisa hidup tanpanya."'}
            </p>

            {/* Featured Artwork Display */}
            <div className="w-full max-w-lg aspect-video border-2 border-emerald-500/50 rounded-2xl mb-5 shadow-[0_0_35px_rgba(16,185,129,0.35)] overflow-hidden relative z-30 bg-[#06140b] group">
              <img
                src="/Stillher/hana.png"
                alt="Still Her Hana and Jito Artwork"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-4 right-4 text-left">
                <p className="text-xs text-emerald-200/90 font-mono">
                  {lang === "en"
                    ? "Maintenance Bunker · Day 1 to Day 5"
                    : "Bunker Perawatan · Hari ke-1 s/d Hari ke-5"}
                </p>
              </div>
            </div>

            {/* Synopsis / Lore Description */}
            <p className="text-xs sm:text-sm text-gray-300 mb-6 leading-relaxed max-w-xl text-center">
              {lang === "en"
                ? "Trapped inside a sealed maintenance bunker with infected lover Hana after a synthetic neurotoxin rupture. Her empathy is slipping away into volatile cruelty. Surrendering your emotional boundaries binds iron chains that erode your sanity."
                : "Terperangkap di bunker perawatan sempit bersama Hana yang terinfeksi neurotoksin sintetis. Empatinya memudar menjadi manipulasi beracun. Menyerahkan batas emosionalmu akan mengikat rantai kodependensi yang mengikis kewarasan hingga batas akhir."}
            </p>

            {/* Interactive Ending Walkthrough Guide */}
            <div className="w-full max-w-lg mb-6 text-left">
              <button
                type="button"
                onClick={() => setShowEndings(!showEndings)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#061e10] border border-emerald-500/40 text-emerald-300 hover:text-white hover:border-emerald-400 font-mono text-xs flex items-center justify-between transition-colors min-h-[44px]"
              >
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">visibility</span>
                  {showEndings
                    ? (lang === "en" ? "Hide Ending Guide & Walkthrough" : "Sembunyikan Panduan Ending")
                    : (lang === "en" ? "Show Ending Guide & Walkthrough (Spoilers)" : "Lihat Panduan Ending (Spoiler)")}
                </span>
                <span className="material-symbols-outlined text-sm">
                  {showEndings ? "expand_less" : "expand_more"}
                </span>
              </button>

              {showEndings && (
                <div className="mt-3 p-4 bg-[#05150c] border border-emerald-500/30 rounded-xl space-y-3 text-xs text-gray-300 font-sans">
                  <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/20">
                    <p className="font-bold text-emerald-300 font-mono mb-1">
                      🏃‍♂️ 1. Good Ending: Sever the Cord
                    </p>
                    <p className="text-[11px] leading-relaxed text-gray-300">
                      {lang === "en"
                        ? "0 to 2 Chains Bound + Sanity ≥ 40% + Toxicity ≤ 60% on Day 5. Set firm boundaries, resist pacifying demands with blood/vital rations, and sprint up the emergency ladder to seal the hatch."
                        : "0 hingga 2 Rantai Terikat + Sanity ≥ 40% + Toxicity ≤ 60% pada Hari ke-5. Tetapkan batasan tegas, jangan korbankan darah/ransum vital untuk menuruti tuntutannya, dan lari ke tangga darurat lalu segel pintu bunker."}
                    </p>
                  </div>

                  <div className="p-2.5 rounded-lg bg-red-950/40 border border-red-500/20">
                    <p className="font-bold text-red-300 font-mono mb-1">
                      ⛓️ 2. Bad Ending: Permanent Prey
                    </p>
                    <p className="text-[11px] leading-relaxed text-gray-300">
                      {lang === "en"
                        ? "5 Chains Bound OR Sanity drops to 0% OR Toxicity reaches 100%. Yield to every manipulative whim, let your blood and rations drain, and become entirely bound in iron chains as her possession."
                        : "5 Rantai Terikat ATAU Sanity 0% ATAU Toxicity 100%. Turuti semua manipulasi, biarkan darah dan ransum terkuras, hingga terikat seutuhnya oleh rantai besi dan kehilangan otonomi diri selamanya."}
                    </p>
                  </div>

                  <div className="p-2.5 rounded-lg bg-amber-950/40 border border-amber-500/20">
                    <p className="font-bold text-amber-300 font-mono mb-1">
                      💉 3. Secret Ending: Controlled Decay
                    </p>
                    <p className="text-[11px] leading-relaxed text-gray-300">
                      {lang === "en"
                        ? "3 to 4 Chains Bound + C-12 Solvent Synthesized in the Kitchen. Search the Kitchen during day phase for notes, synthesize C-12 enzyme solvent, and inject it on Day 5 to halt neural spores and embrace slow decay together."
                        : "3 hingga 4 Rantai Terikat + Pelarut C-12 Disintesis di Dapur. Telusuri dapur di fase siang untuk menemukan catatan riset, sintesis enzim C-12, lalu suntikkan pada Hari ke-5 untuk menghentikan spora saraf dan hidup bersama dalam pembusukan terkendali."}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4 relative z-30">
              {localProject.itchUrl && (
                <a
                  href={localProject.itchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-emerald-600 via-green-600 to-teal-700 text-white font-extrabold text-sm sm:text-base hover:from-emerald-500 hover:to-green-500 transition-all shadow-[0_0_25px_rgba(16,185,129,0.6)] hover:scale-105 flex items-center gap-2 pointer-events-auto min-h-[44px]"
                >
                  <span className="material-symbols-outlined text-xl">sports_esports</span>
                  {lang === "en" ? "Play on Itch.io" : "Mainkan di Itch.io"}
                </a>
              )}
              <button
                type="button"
                onClick={onClose}
                className="px-8 py-3.5 sm:py-4 rounded-full border-2 border-emerald-500/40 text-emerald-200 font-bold text-sm sm:text-base hover:bg-emerald-500/15 hover:border-emerald-300 transition-all flex items-center gap-2 pointer-events-auto min-h-[44px]"
              >
                {lang === "en" ? "Go Back" : "Kembali"}
              </button>
            </div>
          </div>

          {/* Close button top right */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-6 right-6 p-3 bg-emerald-950/60 hover:bg-emerald-900/70 border border-emerald-500/30 hover:border-emerald-300 rounded-full text-emerald-200 transition-colors z-30 backdrop-blur-md shadow-lg min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Close"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  ) : localProject?.id === "last-gate" ? (
    <AnimatePresence>
      {project && localProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#080503] overflow-y-auto p-4 sm:p-6"
        >
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <div className="hidden sm:block absolute -top-28 -left-28 w-96 h-96 bg-amber-500/20 rounded-full blur-[130px]" />
            <div className="hidden sm:block absolute bottom-0 right-0 w-[520px] h-[520px] bg-red-600/15 rounded-full blur-[150px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-[radial-gradient(ellipse_at_center,_rgba(245,158,11,0.12)_0%,_transparent_70%)]" />
          </div>

          {/* Content Container */}
          <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-3xl w-full my-auto py-8">
            {/* Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-3">
              <span className="px-2.5 py-0.5 bg-gradient-to-r from-amber-400 to-yellow-500 text-[#291300] font-mono text-[10px] font-extrabold rounded-full tracking-wider uppercase shadow-[0_0_12px_rgba(245,158,11,0.6)] flex items-center gap-1">
                <span className="material-symbols-outlined text-[11px] font-bold">local_fire_department</span>
                {lang === "en" ? "POPULAR GAME" : "GAME POPULER"}
              </span>
            </div>

            {/* Logo Image */}
            <img
              src="/Lastgate/lglogo.png"
              alt="Last Gate Logo"
              className="w-full max-w-[260px] sm:max-w-xs object-contain mb-2 drop-shadow-[0_0_30px_rgba(245,158,11,0.65)] relative z-30 transition-transform duration-300 hover:scale-105"
            />

            {/* Subtitle / Tagline */}
            <p className="text-sm sm:text-base text-amber-100/90 mb-5 leading-relaxed max-w-xl font-medium drop-shadow-md">
              {lang === "en"
                ? "The kingdom's last line of defense rests in your hands!"
                : "Garis pertahanan terakhir kerajaan berada di tanganmu!"}
            </p>

            {/* Featured Artwork Display */}
            <div className="w-full max-w-lg aspect-video border-2 border-amber-400/50 rounded-2xl mb-6 shadow-[0_0_35px_rgba(245,158,11,0.35)] overflow-hidden relative z-30 bg-[#160c04] group">
              <img
                src="/Lastgate/lastgate.jpg"
                alt="Last Gate Castle Defense Artwork & Gameplay"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4 relative z-30">
              {localProject.itchUrl && (
                <a
                  href={localProject.itchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-600 text-white font-extrabold text-sm sm:text-base hover:from-amber-400 hover:to-orange-500 transition-all shadow-[0_0_25px_rgba(245,158,11,0.6)] hover:scale-105 flex items-center gap-2 pointer-events-auto"
                >
                  <span className="material-symbols-outlined text-xl">sports_esports</span>
                  {lang === "en" ? "Play on Itch.io" : "Mainkan di Itch.io"}
                </a>
              )}
              <button
                onClick={onClose}
                className="px-8 py-3.5 sm:py-4 rounded-full border-2 border-amber-400/40 text-amber-200 font-bold text-sm sm:text-base hover:bg-amber-500/15 hover:border-amber-300 transition-all flex items-center gap-2 pointer-events-auto"
              >
                {lang === "en" ? "Go Back" : "Kembali"}
              </button>
            </div>
          </div>

          {/* Close button top right */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-3 bg-amber-950/50 hover:bg-amber-900/60 border border-amber-400/30 hover:border-amber-300 rounded-full text-amber-200 transition-colors z-30 backdrop-blur-md shadow-lg"
            aria-label="Close"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  ) : localProject?.id === "rustbond" ? (
    <AnimatePresence>
      {project && localProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505] overflow-y-auto p-4 sm:p-6"
        >
          {/* Background Images */}
          <div className="absolute inset-0 z-0 flex justify-between items-end pointer-events-none">
            <img
              src="/Rustbond/Zen.jpg"
              alt="Zen"
              className="h-[55vh] sm:h-[90vh] w-[65vw] sm:w-auto object-contain object-left-bottom -ml-20 sm:-ml-20 mb-12 sm:mb-0 opacity-100"
            />
            <img
              src="/Rustbond/Ashy.png"
              alt="Ashy"
              className="h-[55vh] sm:h-[95vh] w-[65vw] sm:w-auto object-contain object-right-bottom -mr-24 sm:-mr-20 translate-y-8 sm:translate-y-16 opacity-100"
            />
          </div>

          {/* Overlay gradient for text readability on mobile */}
          <div className="absolute inset-0 bg-black/30 sm:bg-transparent sm:bg-gradient-to-t sm:from-black/80 sm:via-transparent sm:to-transparent pointer-events-none z-10" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl w-full pt-10 sm:pt-0">
            <img
              src="/Rustbond/bgrustbond.png"
              alt="Rustbond Title"
              className="w-full max-w-[200px] sm:max-w-sm object-contain mb-4 drop-shadow-[0_0_15px_rgba(220,38,38,0.5)] relative z-30"
            />
            <p className="text-sm sm:text-xl text-gray-200 mb-6 leading-relaxed max-w-xl font-medium drop-shadow-lg relative z-10">
              {lang === "en"
                ? "Can you earn her trust and uncover the mystery behind this tragedy? There are alot different endings for you to discover."
                : "Dapatkah kamu meraih kepercayaannya dan mengungkap misteri di balik tragedi ini? Ada banyak akhir cerita yang bisa kamu temukan."}
            </p>

            {/* PV / Preview Video */}
            <div className="w-full max-w-lg aspect-video border border-white/20 rounded-2xl mb-8 shadow-[0_0_30px_rgba(220,38,38,0.3)] overflow-hidden relative z-30 bg-black">
              <video
                src="/Rustbond/rbpv.mp4"
                controls
                preload="metadata"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-4 relative z-30">
              {localProject.itchUrl && (
                <a
                  href={localProject.itchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full bg-red-600 text-white font-bold text-sm sm:text-base hover:bg-red-500 transition-all shadow-[0_0_20px_rgba(220,38,38,0.5)] hover:scale-105 flex items-center gap-2 pointer-events-auto"
                >
                  <span className="material-symbols-outlined text-xl">sports_esports</span>
                  {lang === "en" ? "Play on Itch.io" : "Mainkan di Itch.io"}
                </a>
              )}
              <button
                onClick={onClose}
                className="px-8 py-4 rounded-full border-2 border-white/20 text-white font-bold text-sm sm:text-base hover:bg-white/10 transition-all flex items-center gap-2 pointer-events-auto"
              >
                {lang === "en" ? "Go Back" : "Kembali"}
              </button>
            </div>
          </div>

          {/* Close button top right */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-3 bg-white/5 hover:bg-white/15 border border-white/10 rounded-full text-white transition-colors z-20 backdrop-blur-md"
            aria-label="Close"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  ) : localProject?.id === "bocah-fishing" ? (
    <AnimatePresence>
      {project && localProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#020b14] overflow-y-auto p-4 sm:p-6"
        >
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <div className="hidden sm:block absolute -top-24 -left-24 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]" />
            <div className="hidden sm:block absolute bottom-0 right-0 w-[500px] h-[500px] bg-sky-600/15 rounded-full blur-[140px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-[radial-gradient(ellipse_at_center,_rgba(6,182,212,0.12)_0%,_transparent_70%)]" />
          </div>

          {/* Content Container */}
          <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-3xl w-full my-auto py-8">
            {/* 1. Judul (Foto Logo) */}
            <img
              src="/Bofish/20260913_210422.png"
              alt="Bocah Fishing Logo"
              className="w-full max-w-[260px] sm:max-w-xs object-contain mb-4 drop-shadow-[0_0_25px_rgba(6,182,212,0.6)] relative z-30 transition-transform duration-300 hover:scale-105"
            />

            {/* 2. Gambar (Gameplay / Artwork) */}
            <div className="w-full max-w-lg aspect-video border-2 border-cyan-400/40 rounded-2xl mb-5 shadow-[0_0_35px_rgba(6,182,212,0.35)] overflow-hidden relative z-30 bg-[#021323] group">
              <img
                src="/Bofish/bocahfishing.png"
                alt="Bocah Fishing Gameplay & Artwork"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* 3. Deskripsi */}
            <p className="text-sm sm:text-base text-cyan-100/90 mb-5 leading-relaxed max-w-xl font-medium drop-shadow-md">
              {lang === "en"
                ? "A cozy, atmospheric lake fishing game where Everything is Bait! Hook junk, batteries, or caught fish to reel in gigantic monster fish under the moonlit sky."
                : "Game simulasi memancing santai di danau malam hari dengan mekanik unik 'Everything is Bait!' Kaitkan sampah, baterai, hingga ikan tangkapan untuk menarik monster danau raksasa!"}
            </p>

            {/* 4. Label (Champion), Top 1 Ziva, Top 4 Overall */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-6 relative z-30">
              <span className="px-3.5 py-1 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-[#241402] font-mono text-[11px] font-extrabold rounded-full tracking-wider uppercase shadow-[0_0_15px_rgba(251,191,36,0.6)] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[14px] font-bold">emoji_events</span>
                Champion Microjam 065 Fishing
              </span>
              <span className="px-3.5 py-1 bg-cyan-400 text-[#022238] font-mono text-[11px] font-extrabold rounded-full tracking-wider uppercase shadow-[0_0_12px_rgba(6,182,212,0.6)] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[14px] font-bold">military_tech</span>
                Top 1 Made with Ziva
              </span>
              <span className="px-3.5 py-1 bg-[#062438] border border-cyan-400/40 text-cyan-200 font-mono text-[11px] font-bold rounded-full tracking-wider uppercase flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[14px]">leaderboard</span>
                Top 4 Overall Stats
              </span>
            </div>

            {/* 5. Play on Itch.io & Go Back */}
            <div className="flex flex-wrap justify-center gap-4 relative z-30">
              {localProject.itchUrl && (
                <a
                  href={localProject.itchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-white font-extrabold text-sm sm:text-base hover:from-cyan-400 hover:to-blue-500 transition-all shadow-[0_0_25px_rgba(6,182,212,0.6)] hover:scale-105 flex items-center gap-2 pointer-events-auto"
                >
                  <span className="material-symbols-outlined text-xl">sports_esports</span>
                  {lang === "en" ? "Play on Itch.io" : "Mainkan di Itch.io"}
                </a>
              )}
              <button
                onClick={onClose}
                className="px-8 py-3.5 sm:py-4 rounded-full border-2 border-cyan-400/40 text-cyan-200 font-bold text-sm sm:text-base hover:bg-cyan-500/15 hover:border-cyan-300 transition-all flex items-center gap-2 pointer-events-auto"
              >
                {lang === "en" ? "Go Back" : "Kembali"}
              </button>
            </div>
          </div>

          {/* Close button top right */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-3 bg-cyan-950/50 hover:bg-cyan-900/60 border border-cyan-400/30 hover:border-cyan-300 rounded-full text-cyan-200 transition-colors z-30 backdrop-blur-md shadow-lg"
            aria-label="Close"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  ) : (
    <AnimatePresence>
      {project && localProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md"
          onClick={onClose}
        >
          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-3xl max-h-[90vh] bg-[#0c0c10] border border-white/[0.1] rounded-2xl shadow-2xl overflow-y-auto flex flex-col text-zinc-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Bar */}
            <div className="sticky top-0 z-10 flex items-center justify-between p-5 bg-[#0c0c10]/95 backdrop-blur-xl border-b border-white/[0.08]">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-white/[0.04] border border-white/[0.1] text-zinc-300 rounded-md font-mono text-[11px] uppercase tracking-wider">
                  {displayCategoryLabel}
                </span>
              </div>

              <button
                onClick={onClose}
                className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-white/[0.06] transition-colors"
                aria-label="Close modal"
              >
                <span className="material-symbols-outlined text-2xl">close</span>
              </button>
            </div>

            {/* Modal Banner Graphic */}
            <div
              className="relative w-full h-56 sm:h-64 bg-cover bg-center flex items-end p-6"
              style={{ backgroundImage: `url('${localProject?.imageBg}')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c10] via-[#0c0c10]/70 to-transparent" />
              <div className="relative z-10">
                <h2 className="font-display text-2xl sm:text-3xl font-black text-white tracking-tight uppercase mb-2">
                  {displayTitle}
                </h2>
                <p className="text-sm text-zinc-300 max-w-xl font-normal leading-relaxed">
                  {displaySubtitle}
                </p>
              </div>
            </div>

            {/* Modal Content Body */}
            <div className="p-6 sm:p-8 flex flex-col gap-6 border-t border-white/[0.08]">
              {/* System Overview */}
              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-400 mb-2 font-bold">
                  {lang === "en" ? "System Architecture & Overview" : "Gambaran Arsitektur & Sistem"}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-zinc-300 font-sans font-light">
                  {displayOverview}
                </p>
              </div>

              {/* Action Links (GitHub & Itch.io) */}
              <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  {localProject?.itchUrl && (
                    <a
                      href={localProject.itchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-lg bg-red-600 text-white font-mono text-xs font-bold hover:bg-red-500 transition-all flex items-center gap-2 shadow-lg"
                    >
                      <span className="material-symbols-outlined text-base">
                        sports_esports
                      </span>
                      {lang === "en" ? "Play on Itch.io" : "Mainkan di Itch.io"}
                    </a>
                  )}

                  {localProject?.githubUrl && (
                    <a
                      href={localProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-lg bg-white text-black font-mono text-xs font-bold hover:bg-zinc-200 transition-all flex items-center gap-2 shadow-sm"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      {lang === "en"
                        ? "Source Repository"
                        : "Repositori GitHub"}
                    </a>
                  )}
                </div>

                <button
                  onClick={onClose}
                  className="px-4 py-2 rounded-lg border border-white/[0.1] text-zinc-300 font-mono text-xs hover:bg-white/[0.05] transition-colors"
                >
                  {lang === "en" ? "Close" : "Tutup"}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return typeof document !== "undefined" ? createPortal(modalContent, document.body) : null;
}
