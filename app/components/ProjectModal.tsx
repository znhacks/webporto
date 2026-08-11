"use client";

import { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

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

  if (!project) return null;

  const displayTitle =
    lang === "en" && project.titleEn ? project.titleEn : project.title;
  const displaySubtitle =
    lang === "en" && project.subtitleEn ? project.subtitleEn : project.subtitle;
  const displayCategoryLabel =
    lang === "en" && project.categoryLabelEn
      ? project.categoryLabelEn
      : project.categoryLabel;
  const displayOverview =
    lang === "en" && project.overviewEn
      ? project.overviewEn
      : project.fullDetails.overview;
  const displayFeatures =
    lang === "en" && project.featuresEn && project.featuresEn.length > 0
      ? project.featuresEn
      : project.fullDetails.features;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      {/* Modal Container */}
      <div
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
          className="relative w-full h-56 sm:h-64 bg-cover bg-center flex items-end p-6 border-b border-white/10"
          style={{ backgroundImage: `url('${project.imageBg}')` }}
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
        <div className="p-6 sm:p-8 flex flex-col gap-6">
          {/* System Overview */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#d3bbff] mb-2 font-bold">
              {lang === "en" ? "System Overview" : "Penjelasan Sistem"}
            </h3>
            <p className="text-base leading-relaxed text-[#d4e4fa]">
              {displayOverview}
            </p>
          </div>

          {/* Tech Badges */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#d3bbff] mb-3 font-bold">
              {lang === "en" ? "Technologies & Tools" : "Teknologi & Tooling"}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 bg-[#051424] border border-white/10 text-xs font-mono text-[#d4e4fa] rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#d3bbff] mb-3 font-bold">
              {lang === "en" ? "Key Features" : "Fitur-Fitur Utama"}
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {displayFeatures.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 bg-[#051424] p-3.5 rounded-2xl border border-white/5 text-sm text-[#ccc3d7]"
                >
                  <span className="material-symbols-outlined text-[#d3bbff] text-base shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Links (GitHub & Itch.io) */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              {project.itchUrl && (
                <a
                  href={project.itchUrl}
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

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
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
      </div>
    </div>
  );
}
