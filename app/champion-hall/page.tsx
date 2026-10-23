"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { useMusic } from "../context/MusicContext";
import { usePageTransition } from "../context/TransitionContext";
import ProjectModal, { ProjectData } from "../components/ProjectModal";
import { PROJECTS_LIST } from "../components/ProjectsSection";

export interface CertificateInfo {
  image: string;
  title: string;
  titleEn: string;
  badge?: string;
  badgeEn?: string;
}

interface ExhibitGame {
  id: string;
  order: string;
  title: string;
  titleEn: string;
  jamAccolade: string;
  jamAccoladeEn: string;
  jamName: string;
  theme: string;
  engine: string;
  year: string;
  coverImage: string;
  certificates?: CertificateInfo[];
  certificateImage?: string;
  certificateTitle?: string;
  certificateTitleEn?: string;
  itchUrl: string;
  tagline: string;
  taglineEn: string;
  lore: string;
  loreEn: string;
  mechanics: { label: string; desc: string }[];
  mechanicsEn: { label: string; desc: string }[];
  accentColor: string;
  accentGlow: string;
  borderColor: string;
  characters?: { name: string; role: string; roleEn: string; sprite: string }[];
}

const EXHIBITS: ExhibitGame[] = [
  {
    id: "lembur",
    order: "01",
    title: "Lembur",
    titleEn: "Lembur",
    jamAccolade: "MICROJAM 067",
    jamAccoladeEn: "MICROJAM 067",
    jamName: "Micro Jam 067: Windows",
    theme: "Day or Night",
    engine: "Godot Engine (HTML5)",
    year: "2026",
    coverImage: "/Lembur/lembur.png",
    itchUrl: "https://sabitplay.itch.io/lembur",
    tagline: "Simulasi horor bertahan hidup di studio larut malam di bawah tenggat waktu render.",
    taglineEn: "Late-night deadline survival horror simulation inside a darkened creative studio.",
    lore: "Terdampar di ruang kerja studio yang hening mengejar deadline render fajar. Namun saat kamu fokus menatap layar monitor, siluet tak dikenal di luar jendela mulai mendekat setiap kali perhatianmu teralihkan.",
    loreEn: "Trapped working late inside a silent creative studio racing to beat a sunrise render deadline. While managing your computer pipeline, unidentified silhouettes outside the dark windows draw closer whenever you look away.",
    accentColor: "#f59e0b",
    accentGlow: "rgba(245, 158, 11, 0.10)",
    borderColor: "rgba(245, 158, 11, 0.3)",
    mechanics: [
      { label: "Window Surveillance", desc: "Awasi jendela studio kiri, tengah, dan kanan" },
      { label: "Blind Defense", desc: "Segera tarik tirai saat bayangan muncul di kaca" },
      { label: "Render Pipeline", desc: "Kelola progres beban kerja komputer kantor sebelum fajar" },
    ],
    mechanicsEn: [
      { label: "Window Surveillance", desc: "Monitor left, center, and right studio glass panes" },
      { label: "Blind Defense", desc: "Rapidly pull down window blinds when entities appear" },
      { label: "Render Pipeline", desc: "Balance computer render tasks before sunrise" },
    ],
    characters: [
      { name: "Jitto", role: "Pengembang Studio", roleEn: "Lead Studio Artist", sprite: "/Lembur/jitto.png" },
      { name: "Mia", role: "Rekan Lembur", roleEn: "Overtime Colleague", sprite: "/Lembur/mia.png" },
    ],
  },
  {
    id: "bocah-fishing",
    order: "02",
    title: "Bocah Fishing",
    titleEn: "Bocah Fishing",
    jamAccolade: "MICROJAM 065 #1 Ziva, #4 Overall",
    jamAccoladeEn: "MICROJAM 065 #1 Ziva, #4 Overall",
    jamName: "Micro Jam 065: Fishing",
    theme: "Everything is Bait!",
    engine: "Godot Engine + Ziva (HTML5)",
    year: "2026",
    coverImage: "/Bofish/bocahfishing.png",
    certificates: [
      {
        image: "/Bofish/certificate_1st.jpg",
        title: "Sertifikat",
        titleEn: "Certificate",
        badge: "1",
        badgeEn: "1",
      },
      {
        image: "/Bofish/certificate_jam.jpg",
        title: "Sertifikat",
        titleEn: "Certificate",
        badge: "2",
        badgeEn: "2",
      },
    ],
    certificateImage: "/Bofish/certificate_1st.jpg",
    certificateTitle: "Sertifikat Peringkat 1 Micro Jam 065 (Bocah Fishing)",
    certificateTitleEn: "Certificate",
    itchUrl: "https://sabitplay.itch.io/bocah-fishing",
    tagline: "Game memancing malam atmosferik dengan konsep 'Semua barang adalah umpan!'.",
    taglineEn: "Cozy nocturnal lake fishing adventure featuring the 'Everything is Bait!' chain mechanic.",
    lore: "Menembus peringkat Champion Micro Jam 065 Fishing sekaligus meraih gelar Top 1 Made with Ziva dan Top 4 Overall Stats. Pemain memancing di danau sunyi malam hari, mengaitkan sampah hingga ikan kecil untuk memikat monster danau legendaris.",
    loreEn: "Crowned Champion of Micro Jam 065 Fishing, Top 1 Made with Ziva, and Top 4 Overall Stats. Fish across tranquil moonlit waters, chaining discarded trash and small fry into lures for legendary aquatic giants.",
    accentColor: "#06b6d4",
    accentGlow: "rgba(6, 182, 212, 0.10)",
    borderColor: "rgba(6, 182, 212, 0.3)",
    mechanics: [
      { label: "Everything is Bait!", desc: "Sampah, baterai, dan ikan tangkapan dapat dijadikan umpan" },
      { label: "Day & Night Cycle", desc: "Pergantian waktu dinamis mempengaruhi perilaku ikan danau" },
      { label: "Fish Almanac", desc: "Katalog puluhan spesies ikan dan monster rahasia" },
    ],
    mechanicsEn: [
      { label: "Everything is Bait!", desc: "Trash, rusty batteries, and caught fish become bigger bait" },
      { label: "Day & Night Cycle", desc: "Dynamic time shifts dictate lake monster activity" },
      { label: "Fish Almanac", desc: "Catalog of dozens of native species and secret behemoths" },
    ],
  },
  {
    id: "still-her",
    order: "03",
    title: "Still Her?",
    titleEn: "Still Her?",
    jamAccolade: "MICROJAM 066 #5 Ziva",
    jamAccoladeEn: "MICROJAM 066 #5 Ziva",
    jamName: "Micro Jam 066: Toxic",
    theme: "Can't live without it!",
    engine: "Godot Engine (HTML5)",
    year: "2026",
    coverImage: "/Stillher/hana.png",
    certificates: [
      {
        image: "/Stillher/certificate.jpg",
        title: "Sertifikat",
        titleEn: "Certificate",
        badge: "Pemenang",
        badgeEn: "Winner",
      },
    ],
    certificateImage: "/Stillher/certificate.jpg",
    certificateTitle: "Sertifikat",
    certificateTitleEn: "Certificate",
    itchUrl: "https://sabitplay.itch.io/still-her",
    tagline: "Simulasi bertahan hidup psikologis dan fiksi interaktif di bunker terisolasi.",
    taglineEn: "Psychological survival simulation and branching interactive fiction in a quarantine bunker.",
    lore: "Terperangkap di bunker perawatan sempit bersama Hana yang terinfeksi neurotoksin sintetis. Mengangkat tema hubungan kodependensi beracun di mana setiap kompromi mengikis batas diri dan kewarasan.",
    loreEn: "Trapped inside a sealed maintenance bunker with your infected lover Hana following a neurotoxin rupture. Explores toxic codependency where every emotional compromise erodes autonomy and sanity.",
    accentColor: "#10b981",
    accentGlow: "rgba(16, 185, 129, 0.10)",
    borderColor: "rgba(16, 185, 129, 0.3)",
    mechanics: [
      { label: "5 Chains", desc: "Rantai kodependensi mengikat pilihan dialog dan batas kewarasan" },
      { label: "Stat Balancing", desc: "Seimbangkan Sanity Jito, Toxicity Hana, dan persediaan bunker" },
      { label: "3 Cutscene Endings", desc: "Sever the Cord, Permanent Prey, dan Controlled Decay" },
    ],
    mechanicsEn: [
      { label: "5 Chains", desc: "Chains of codependency bind dialogue branches and autonomy" },
      { label: "Stat Balancing", desc: "Manage Jito's Sanity, Hana's Toxicity, and bunker supplies" },
      { label: "3 Cutscene Endings", desc: "Sever the Cord, Permanent Prey, and Controlled Decay" },
    ],
  },
  {
    id: "keepie-uppie",
    order: "04",
    title: "Keepie Uppie",
    titleEn: "Keepie Uppie",
    jamAccolade: "T-LANDER JAM #1",
    jamAccoladeEn: "T-LANDER JAM #1",
    jamName: "The T-Lander Game Jam #1",
    theme: "Balls",
    engine: "Godot Engine (HTML5)",
    year: "2026",
    coverImage: "/Keepie/keepie_cover.png",
    certificates: [
      {
        image: "/Keepie/certificate.png",
        title: "Sertifikat",
        titleEn: "Certificate",
        badge: "1",
        badgeEn: "1st Place",
      },
    ],
    certificateImage: "/Keepie/certificate.png",
    certificateTitle: "Sertifikat",
    certificateTitleEn: "Certificate",
    itchUrl: "https://sabitplay.itch.io/keepie",
    tagline: "Tantangan juggle bola arcade cepat dengan kalkulasi vektor impuls dinamis.",
    taglineEn: "Fast-paced 2D football juggling arcade featuring dynamic foot-contact impulse vectors.",
    lore: "Uji kecepatan refleks dan freestyle sepak bola dalam kompetisi The T-Lander Game Jam #1. Jaga ritme pantulan bola di udara dengan kalkulasi presisi sudut kontak kaki dan responsivitas kontrol sentuh.",
    loreEn: "Test reflex speed and freestyle juggling prowess for The T-Lander Game Jam #1. Maintain ball trajectory airborne using precision foot-contact collision physics and responsive instant controls.",
    accentColor: "#34d399",
    accentGlow: "rgba(52, 211, 153, 0.10)",
    borderColor: "rgba(52, 211, 153, 0.3)",
    mechanics: [
      { label: "Impulse Vector Physics", desc: "Sudut dan laju pantulan dihitung dari titik kontak kaki" },
      { label: "Hit-Flash Shaders", desc: "Umpan balik visual kinetik setiap sentuhan bola presisi" },
      { label: "Record Tracker", desc: "Sistem pencatatan rekor skor personal tertinggi otomatis" },
    ],
    mechanicsEn: [
      { label: "Impulse Vector Physics", desc: "Bounce trajectory calculated dynamically from foot point" },
      { label: "Hit-Flash Shaders", desc: "Kinetic visual feedback shaders on every contact strike" },
      { label: "Record Tracker", desc: "Automatic local personal best score tracking" },
    ],
  },
];
export default function ChampionHallPage() {
  const { lang, toggleLang } = useLanguage();
  const { playChampionMusic, stopChampionMusic } = useMusic();
  const { navigateWithTransition } = usePageTransition();

  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [hasEnteredVault, setHasEnteredVault] = useState(false);
  const [isAnimatingVaultOut, setIsAnimatingVaultOut] = useState(false);
  const [mediaView, setMediaView] = useState<"cover" | "certificate">("cover");
  const [activeCertIndex, setActiveCertIndex] = useState(0);
  const [selectedCertificate, setSelectedCertificate] = useState<{
    game: ExhibitGame;
    certIndex: number;
  } | null>(null);

  const activeGame = EXHIBITS[activeIndex];
  const activeCertificates =
    activeGame.certificates ??
    (activeGame.certificateImage
      ? [
        {
          image: activeGame.certificateImage,
          title: activeGame.certificateTitle || activeGame.title,
          titleEn: activeGame.certificateTitleEn || activeGame.titleEn,
          badge: "Sertifikat",
          badgeEn: "Certificate",
        },
      ]
      : []);
  const currentCert = activeCertificates[activeCertIndex] ?? null;

  useEffect(() => {
    setMediaView("cover");
    setActiveCertIndex(0);
  }, [activeIndex]);

  const handleEnterVault = useCallback(() => {
    playChampionMusic();
    setIsAnimatingVaultOut(true);
    setTimeout(() => { setHasEnteredVault(true); }, 800);
  }, [playChampionMusic]);

  const handleReturnHome = useCallback(() => {
    stopChampionMusic();
    navigateWithTransition(
      "/",
      lang === "en" ? "RETURNING TO PORTFOLIO" : "KEMBALI KE PORTOFOLIO",
      () => stopChampionMusic()
    );
  }, [navigateWithTransition, lang, stopChampionMusic]);

  useEffect(() => {
    return () => { stopChampionMusic(); };
  }, [stopChampionMusic]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedCertificate) {
        const certs =
          selectedCertificate.game.certificates ??
          (selectedCertificate.game.certificateImage
            ? [{ image: selectedCertificate.game.certificateImage, title: "", titleEn: "" }]
            : []);
        if (e.key === "Escape") {
          setSelectedCertificate(null);
        } else if (e.key === "ArrowRight" && certs.length > 1) {
          setSelectedCertificate((prev) =>
            prev ? { ...prev, certIndex: (prev.certIndex + 1) % certs.length } : null
          );
        } else if (e.key === "ArrowLeft" && certs.length > 1) {
          setSelectedCertificate((prev) =>
            prev ? { ...prev, certIndex: (prev.certIndex - 1 + certs.length) % certs.length } : null
          );
        }
        return;
      }
      if (!hasEnteredVault) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleEnterVault();
        } else if (e.key === "Escape" || e.key === "Backspace") {
          handleReturnHome();
        }
        return;
      }
      if (selectedProject) return;
      if (e.key === "ArrowRight") {
        setActiveIndex((prev) => (prev + 1) % EXHIBITS.length);
      } else if (e.key === "ArrowLeft") {
        setActiveIndex((prev) => (prev - 1 + EXHIBITS.length) % EXHIBITS.length);
      } else if (e.key === "Escape" || e.key === "Backspace") {
        handleReturnHome();
      } else if (e.key >= "1" && e.key <= "4") {
        const target = parseInt(e.key, 10) - 1;
        if (target >= 0 && target < EXHIBITS.length) setActiveIndex(target);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleEnterVault, handleReturnHome, hasEnteredVault, selectedProject]);

  const handleOpenDossier = () => {
    const target = PROJECTS_LIST.find((p) => p.id === activeGame.id);
    if (target) setSelectedProject(target);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!hasEnteredVault) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [hasEnteredVault]);

  return (
    <div
      className={`relative min-h-[100dvh] bg-[#06050a] text-titanium-50 overflow-x-hidden ${!hasEnteredVault ? "h-[100dvh] overflow-hidden" : ""
        }`}
    >

      {/* CHAMBER GATE */}
      {!hasEnteredVault && (
        <div
          className={`fixed inset-0 w-full h-[100dvh] z-[100] flex flex-col items-center justify-center bg-[#06050a] p-4 sm:p-6 transition-transform duration-[800ms] ease-[cubic-bezier(0.87,0,0.13,1)] ${isAnimatingVaultOut ? "-translate-y-full" : "translate-y-0"
            }`}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 60% 55% at 50% 52%, rgba(245,158,11,0.11) 0%, transparent 100%)" }}
          />
          <button
            type="button"
            onClick={handleReturnHome}
            className="absolute top-5 sm:top-6 left-5 sm:left-6 z-20 flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            <span>{lang === "en" ? "Portfolio" : "Portofolio"}</span>
          </button>

          <button
            type="button"
            onClick={handleEnterVault}
            className="group relative z-10 flex flex-col items-center text-center max-w-md px-4 cursor-pointer my-auto"
            aria-label={lang === "en" ? "Enter the Champion Hall" : "Masuki Ruang Juara"}
          >
            <div className="relative mb-5 sm:mb-8">
              <div
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center border border-amber-500/25 bg-[#0d0c09] transition-colors duration-300 group-hover:border-amber-400/50"
                style={{ boxShadow: "0 0 28px rgba(245,158,11,0.10)" }}
              >
                <span className="material-symbols-outlined text-3xl sm:text-4xl text-amber-400 group-hover:text-amber-300 transition-colors duration-300">
                  emoji_events
                </span>
              </div>
            </div>
            <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-amber-400/90 font-medium mb-2 sm:mb-3">
              {lang === "en" ? "Achievement Archive" : "Arsip Penghargaan"}
            </p>
            <h2 className="font-syne text-2xl sm:text-4xl font-bold text-white mb-2 tracking-tight">
              {lang === "en" ? "Champion Hall" : "Ruang Juara"}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6 sm:mb-8 max-w-sm">
              {lang === "en"
                ? "Game developing wins, certificates, and the work behind each one."
                : "Kemenangan game development, sertifikat, dan karya di baliknya."}
            </p>
            <div className="flex items-center gap-2 px-5 py-2.5 bg-amber-400 text-black font-mono text-xs font-bold uppercase tracking-widest rounded group-hover:bg-amber-300 transition-colors duration-200">
              <span>{lang === "en" ? "Enter" : "Masuk"}</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </div>
            <p className="mt-3 sm:mt-4 font-mono text-[10px] sm:text-[11px] text-zinc-400">
              {lang === "en" ? "Press Space or Enter" : "Tekan Space atau Enter"}
            </p>
          </button>
        </div>
      )}

      {/* AMBIENT BG */}
      <div
        className="fixed inset-0 pointer-events-none z-0 transition-all duration-1000"
        style={{ background: `radial-gradient(ellipse 70% 50% at 28% 40%, ${activeGame.accentGlow} 0%, transparent 100%)` }}
      />
      <div className="noise-overlay" aria-hidden />

      {/* HEADER */}
      <header className="relative z-30 px-5 sm:px-10 py-4 border-b border-white/[0.08] bg-[#06050a]/90 backdrop-blur-xl">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <button
            type="button"
            onClick={handleReturnHome}
            className="flex items-center gap-2 text-xs font-mono text-zinc-300 hover:text-white transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            <span className="hidden sm:inline">{lang === "en" ? "Return to Portfolio" : "Kembali ke Portofolio"}</span>
            <span className="sm:hidden">{lang === "en" ? "Back" : "Kembali"}</span>
            <kbd className="hidden md:inline-block font-mono text-[10px] text-zinc-400 border border-zinc-700 bg-white/[0.04] px-1.5 py-0.5 rounded ml-1">ESC</kbd>
          </button>

          <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
            <span className="font-syne text-sm font-bold text-zinc-100 tracking-wide">Champions</span>
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-amber-400/90 font-medium">Achievement Archive</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggleLang}
              className="font-mono text-[11px] text-zinc-300 hover:text-white px-2 py-1 rounded bg-white/[0.04] border border-white/[0.08] hover:border-white/20 transition-colors cursor-pointer"
              title="Switch language"
            >
              {lang.toUpperCase()}
            </button>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="relative z-10 max-w-[1400px] w-full mx-auto px-5 sm:px-10 pt-8 pb-12">

        {/* Exhibit strip navigation */}
        <nav
          className="flex items-center gap-1 mb-10 overflow-x-auto pb-1 scrollbar-none border-b border-white/[0.08]"
          aria-label="Exhibit navigation"
        >
          {EXHIBITS.map((game, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={game.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 text-left transition-all duration-200 cursor-pointer whitespace-nowrap -mb-px border-b-2 ${isActive
                  ? "border-amber-400 text-white font-semibold"
                  : "border-transparent text-zinc-400 hover:text-zinc-100"
                  }`}
              >
                <span className={`font-mono text-[10px] tabular-nums ${isActive ? "text-amber-400 font-bold" : "text-zinc-400"}`}>
                  {game.order}
                </span>
                <span className="font-syne text-sm font-semibold tracking-tight">{game.title}</span>
              </button>
            );
          })}
        </nav>

        {/* Exhibition stage */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeGame.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start"
          >
            {/* LEFT: Visual panel */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              <div
                className="relative w-full aspect-[16/10] sm:aspect-video rounded-xl overflow-hidden bg-zinc-950 group"
                style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.65)" }}
              >
                {activeCertificates.length > 0 && (
                  <div className="absolute top-3 right-3 z-20 flex items-center gap-0.5 font-mono text-[10px] bg-black/85 backdrop-blur-md border border-white/[0.15] rounded p-0.5 shadow-lg">
                    <button
                      type="button"
                      onClick={() => setMediaView("cover")}
                      className={`px-2.5 py-1 rounded transition-all cursor-pointer ${mediaView === "cover" ? "bg-amber-400 text-black font-bold" : "text-zinc-300 hover:text-white"
                        }`}
                    >
                      {lang === "en" ? "Art" : "Gambar"}
                    </button>
                    <button
                      type="button"
                      onClick={() => setMediaView("certificate")}
                      className={`px-2.5 py-1 rounded transition-all cursor-pointer ${mediaView === "certificate" ? "bg-amber-400 text-black font-bold" : "text-zinc-300 hover:text-white"
                        }`}
                    >
                      {activeCertificates.length > 1
                        ? `${lang === "en" ? "Certs" : "Sertif"} (${activeCertificates.length})`
                        : lang === "en" ? "Certificate" : "Sertifikat"}
                    </button>
                  </div>
                )}

                {mediaView === "certificate" && currentCert ? (
                  <div
                    className="relative w-full h-full cursor-zoom-in flex items-center justify-center bg-[#05040a] p-3"
                    onClick={() => setSelectedCertificate({ game: activeGame, certIndex: activeCertIndex })}
                  >
                    <Image
                      src={currentCert.image}
                      alt={lang === "en" ? currentCert.titleEn : currentCert.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-contain transition-transform duration-500 group-hover:scale-[1.015]"
                      priority
                    />
                    {activeCertificates.length > 1 && (
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-0.5 bg-black/80 border border-white/[0.08] rounded p-0.5 font-mono text-[10px]">
                        {activeCertificates.map((cert, cIdx) => (
                          <button
                            key={cert.image}
                            type="button"
                            onClick={(e) => { e.stopPropagation(); setActiveCertIndex(cIdx); }}
                            className={`px-2.5 py-1 rounded transition-all cursor-pointer ${activeCertIndex === cIdx ? "bg-amber-400 text-black font-bold" : "text-zinc-300 hover:text-white"
                              }`}
                          >
                            {lang === "en" ? cert.badgeEn || `Cert ${cIdx + 1}` : cert.badge || `Sertif ${cIdx + 1}`}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Image
                    src={activeGame.coverImage}
                    alt={activeGame.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    priority
                  />
                )}

                <div className="scanlines absolute inset-0 opacity-10 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 pointer-events-none">
                  <span
                    className="font-mono text-[10px] uppercase tracking-[0.14em] px-2.5 py-1 font-semibold"
                    style={{ background: activeGame.accentColor, color: "#000" }}
                  >
                    {lang === "en" ? activeGame.jamAccoladeEn : activeGame.jamAccolade}
                  </span>
                </div>
              </div>

              {activeGame.characters && (
                <div className="flex items-center gap-5 pt-1">
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-amber-400/90 font-medium">
                    {lang === "en" ? "Crew" : "Personil"}
                  </span>
                  {activeGame.characters.map((char) => (
                    <div key={char.name} className="flex items-center gap-2">
                      <div className="relative w-7 h-7 rounded-full overflow-hidden border border-white/15 bg-zinc-900">
                        <Image src={char.sprite} alt={char.name} fill sizes="28px" className="object-cover" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-zinc-200 leading-none">{char.name}</p>
                        <p className="font-mono text-[10px] text-zinc-400">
                          {lang === "en" ? char.roleEn : char.role}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* RIGHT: Editorial dossier */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber-400/90 font-medium mb-2">
                  {activeGame.jamName} {"\u00b7"} {activeGame.year}
                </p>
                <h2 className="font-syne text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.05] mb-3">
                  {lang === "en" ? activeGame.titleEn : activeGame.title}
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: activeGame.accentColor }}>
                  {lang === "en" ? activeGame.taglineEn : activeGame.tagline}
                </p>
              </div>

              <p className="text-sm text-zinc-300 leading-[1.8] font-normal">
                {lang === "en" ? activeGame.loreEn : activeGame.lore}
              </p>

              <div className="flex flex-col border-t border-white/[0.06]">
                {(lang === "en" ? activeGame.mechanicsEn : activeGame.mechanics).map((m, i) => (
                  <div key={m.label} className="flex items-start gap-4 py-3.5 border-b border-white/[0.06]">
                    <span className="font-mono text-[11px] text-amber-400/80 font-bold tabular-nums pt-0.5 w-5 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-xs font-semibold text-zinc-100 tracking-wide">{m.label}</span>
                      <span className="text-xs sm:text-[13px] text-zinc-400 leading-relaxed">{m.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-zinc-400">
                {activeGame.engine} {"\u00b7"} {activeGame.theme}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href={activeGame.itchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 min-h-[44px] font-mono text-xs font-bold uppercase tracking-widest text-black bg-amber-400 hover:bg-amber-300 transition-colors rounded cursor-pointer"
                >
                  <span className="material-symbols-outlined text-base">sports_esports</span>
                  {lang === "en" ? "Play on Itch.io" : "Mainkan di Itch.io"}
                </a>

                {activeCertificates.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setSelectedCertificate({ game: activeGame, certIndex: activeCertIndex })}
                    className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] font-mono text-xs uppercase tracking-wider text-zinc-400 hover:text-zinc-100 border border-white/[0.1] hover:border-white/20 rounded transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-base">workspace_premium</span>
                    {activeCertificates.length > 1
                      ? `${lang === "en" ? "Certificates" : "Sertifikat"} (${activeCertificates.length})`
                      : lang === "en" ? "Certificate" : "Sertifikat"}
                  </button>
                )}

                <button
                  type="button"
                  onClick={handleOpenDossier}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 min-h-[44px] font-mono text-xs uppercase tracking-wider text-zinc-300 hover:text-white border border-white/[0.12] hover:border-white/30 rounded transition-colors cursor-pointer"
                >
                  {lang === "en" ? "Full Details" : "Detail Lengkap"}
                  <span className="material-symbols-outlined text-sm">open_in_full</span>
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-16 pt-5 border-t border-white/[0.08] flex items-center justify-between font-mono text-xs text-zinc-400">
          <button
            type="button"
            onClick={() => setActiveIndex((prev) => (prev - 1 + EXHIBITS.length) % EXHIBITS.length)}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            {lang === "en" ? "Previous" : "Sebelumnya"}
          </button>
          <span className="text-zinc-300 font-semibold">{activeIndex + 1} / {EXHIBITS.length}</span>
          <button
            type="button"
            onClick={() => setActiveIndex((prev) => (prev + 1) % EXHIBITS.length)}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
          >
            {lang === "en" ? "Next" : "Selanjutnya"}
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      </main>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

      {selectedCertificate && (() => {
        const certs =
          selectedCertificate.game.certificates ??
          (selectedCertificate.game.certificateImage
            ? [
              {
                image: selectedCertificate.game.certificateImage,
                title: selectedCertificate.game.certificateTitle || selectedCertificate.game.title,
                titleEn: selectedCertificate.game.certificateTitleEn || selectedCertificate.game.titleEn,
                badge: "Sertifikat",
                badgeEn: "Certificate",
              },
            ]
            : []);
        const currentModalCert = certs[selectedCertificate.certIndex] || certs[0];
        if (!currentModalCert) return null;

        return (
          <div
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8 bg-black/85 backdrop-blur-sm"
            onClick={() => setSelectedCertificate(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-[#0a090f] border border-white/[0.08] rounded-xl p-4 sm:p-5 flex flex-col gap-4"
              style={{ boxShadow: "0 40px 100px rgba(0,0,0,0.8)" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-amber-400 text-lg">workspace_premium</span>
                  <div>
                    <p className="text-xs font-semibold text-zinc-100">
                      {lang === "en" ? currentModalCert.titleEn : currentModalCert.title}
                    </p>
                    <p className="font-mono text-[10px] sm:text-[11px] text-zinc-400">{selectedCertificate.game.jamName}</p>
                  </div>
                  {certs.length > 1 && (
                    <div className="flex items-center gap-0.5 ml-2 bg-white/[0.04] border border-white/[0.07] rounded p-0.5 font-mono text-[10px]">
                      {certs.map((c, i) => (
                        <button
                          key={c.image}
                          type="button"
                          onClick={() => setSelectedCertificate({ ...selectedCertificate, certIndex: i })}
                          className={`px-2.5 py-1 rounded transition-all cursor-pointer ${selectedCertificate.certIndex === i ? "bg-amber-400 text-black font-bold" : "text-zinc-300 hover:text-white"
                            }`}
                        >
                          {lang === "en" ? c.badgeEn || `Cert ${i + 1}` : c.badge || `Sertif ${i + 1}`}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedCertificate(null)}
                  className="p-1.5 rounded text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <span className="material-symbols-outlined text-lg">close</span>
                </button>
              </div>

              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[65vh] rounded-lg overflow-hidden bg-zinc-950">
                <Image
                  src={currentModalCert.image}
                  alt={lang === "en" ? currentModalCert.titleEn : currentModalCert.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 95vw, 850px"
                  priority
                />
                {certs.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedCertificate({
                          ...selectedCertificate,
                          certIndex: (selectedCertificate.certIndex - 1 + certs.length) % certs.length,
                        })
                      }
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/70 hover:bg-black/90 text-zinc-400 hover:text-white border border-white/10 flex items-center justify-center transition-all cursor-pointer"
                      aria-label={lang === "en" ? "Previous certificate" : "Sertifikat sebelumnya"}
                    >
                      <span className="material-symbols-outlined text-lg">chevron_left</span>
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedCertificate({
                          ...selectedCertificate,
                          certIndex: (selectedCertificate.certIndex + 1) % certs.length,
                        })
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/70 hover:bg-black/90 text-zinc-400 hover:text-white border border-white/10 flex items-center justify-center transition-all cursor-pointer"
                      aria-label={lang === "en" ? "Next certificate" : "Sertifikat selanjutnya"}
                    >
                      <span className="material-symbols-outlined text-lg">chevron_right</span>
                    </button>
                  </>
                )}
              </div>

              <div className="flex items-center justify-between gap-4 pt-1">
                <p className="font-mono text-xs text-zinc-300">
                  {lang === "en" ? selectedCertificate.game.jamAccoladeEn : selectedCertificate.game.jamAccolade}
                </p>
                <a
                  href={currentModalCert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 font-mono text-[11px] text-zinc-300 hover:text-white border border-white/[0.12] hover:border-white/30 rounded transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                  {lang === "en" ? "Full res" : "Resolusi penuh"}
                </a>
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
}
