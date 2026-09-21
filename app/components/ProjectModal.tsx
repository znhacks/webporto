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

  useEffect(() => {
    if (project) {
      setLocalProject(project);
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

  const modalContent = localProject?.id === "rustbond" ? (
    <AnimatePresence>
      {project && localProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505] overflow-hidden"
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
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#020b14] overflow-y-auto sm:overflow-hidden p-4 sm:p-6"
        >
          {/* Ambient Ocean / Sea Glow Orbs */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-sky-600/15 rounded-full blur-[140px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-[radial-gradient(ellipse_at_center,_rgba(6,182,212,0.12)_0%,_transparent_70%)]" />
          </div>

          {/* Content Container */}
          <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-3xl w-full my-auto py-6 sm:py-0">
            {/* Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
              <span className="px-3 py-1 bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 rounded-full font-mono text-xs uppercase tracking-wider shadow-[0_0_10px_rgba(6,182,212,0.3)] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm">water</span>
                {displayCategoryLabel}
              </span>
              <span className="px-2.5 py-0.5 bg-cyan-400 text-[#022238] font-mono text-[10px] font-extrabold rounded-full tracking-wider uppercase shadow-[0_0_10px_rgba(6,182,212,0.6)] flex items-center gap-1">
                <span className="material-symbols-outlined text-[11px] font-bold">star</span>
                {lang === "en" ? "RECOMMENDED" : "REKOMENDASI"}
              </span>
            </div>

            {/* Logo Image */}
            <img 
              src="/Bofish/20260913_210422.png" 
              alt="Bocah Fishing Logo" 
              className="w-full max-w-[260px] sm:max-w-xs object-contain mb-3 drop-shadow-[0_0_25px_rgba(6,182,212,0.6)] relative z-30 transition-transform duration-300 hover:scale-105" 
            />

            {/* Subtitle / Tagline */}
            <p className="text-sm sm:text-base text-cyan-100/90 mb-5 leading-relaxed max-w-xl font-medium drop-shadow-md">
              {lang === "en"
                ? "A cozy, atmospheric lake fishing game where Everything is Bait! Hook junk, batteries, or caught fish to reel in gigantic monster fish under the moonlit sky."
                : "Game simulasi memancing santai di danau malam hari dengan mekanik unik 'Everything is Bait!' Kaitkan sampah, baterai, hingga ikan tangkapan untuk menarik monster danau raksasa!"}
            </p>

            {/* Featured Artwork Display */}
            <div className="w-full max-w-lg aspect-video border-2 border-cyan-400/40 rounded-2xl mb-6 shadow-[0_0_35px_rgba(6,182,212,0.35)] overflow-hidden relative z-30 bg-[#021323] group">
              <img 
                src="/Bofish/bocahfishing.png" 
                alt="Bocah Fishing Gameplay & Artwork" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020b14]/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-cyan-200/90">
                <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-cyan-400/30 flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs text-cyan-300">verified</span>
                  Micro Jam 065: Fishing
                </span>
                <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-cyan-400/30">
                  Godot Engine • HTML5
                </span>
              </div>
            </div>

            {/* Action Buttons */}
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
            className="relative w-full max-w-3xl max-h-[90vh] bg-[#0d1c2d] border border-white/15 rounded-3xl shadow-2xl overflow-y-auto flex flex-col text-[#d4e4fa]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-[#051424]/95 backdrop-blur-xl border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1 bg-[#6d28d9]/30 border border-[#d3bbff]/30 text-[#d3bbff] rounded-full font-mono text-xs uppercase tracking-wider">
              {displayCategoryLabel}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#ccc3d7] hover:text-white rounded-full hover:bg-white/10 transition-colors"
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
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1c2d] via-[#0d1c2d]/70 to-transparent" />
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
              {displayTitle}
            </h2>
            <p className="text-sm text-[#ccc3d7] max-w-xl font-normal leading-relaxed">
              {displaySubtitle}
            </p>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 flex flex-col gap-6 border-t border-white/10">
          {/* System Overview */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#d3bbff] mb-2 font-bold">
              {lang === "en" ? "System Overview" : "Penjelasan Sistem"}
            </h3>
            <p className="text-base leading-relaxed text-[#d4e4fa]">
              {displayOverview}
            </p>
          </div>

          {/* Action Links (GitHub & Itch.io) */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              {localProject?.itchUrl && (
                <a
                  href={localProject.itchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-red-600 text-white font-mono text-xs font-semibold hover:bg-red-500 transition-all flex items-center gap-2 shadow-lg shadow-red-900/30 hover:scale-105"
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
                  className="px-6 py-3 rounded-full bg-[#6d28d9] text-white font-mono text-xs font-semibold hover:bg-[#7331df] transition-all flex items-center gap-2 shadow-lg shadow-purple-900/30 hover:scale-105"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  {lang === "en"
                    ? "View Repository on GitHub"
                    : "Lihat di GitHub"}
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full border border-white/10 text-[#d4e4fa] font-mono text-xs hover:bg-white/5 transition-colors"
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
