"use client";

import { useState } from "react";
import Image from "next/image";
import ProjectModal, { ProjectData } from "./ProjectModal";
import { useLanguage } from "../context/LanguageContext";

export const PROJECTS_LIST: (ProjectData & {
  titleEn: string;
  subtitleEn: string;
  categoryLabelEn: string;
  descriptionEn: string;
  overviewEn: string;
  featuresEn: string[];
})[] = [
    {
      id: "bocah-fishing",
      title: "Bocah Fishing",
      titleEn: "Bocah Fishing",
      subtitle:
        "Game simulasi memancing santai dengan mekanik unik 'Everything is Bait!'. Peraih gelar Champion Microjam 065 Fishing, Top 1 Made with Ziva, dan Top 4 Overall Stats.",
      subtitleEn:
        "Cozy atmospheric lake fishing simulation featuring the 'Everything is Bait!' mechanic. Champion Microjam 065 Fishing, Top 1 Made with Ziva, and Top 4 Overall Stats.",
      category: "game-dev",
      categoryLabel: "Game Development",
      categoryLabelEn: "Game Development",
      techStack: ["Godot", "HTML5", "Simulation", "2D Pixel/Art", "Itch.io"],
      itchUrl: "https://sabitplay.itch.io/bocah-fishing",
      year: "2026",
      imageBg: "/Bofish/bocahfishing.png",
      description:
        "Champion Microjam 065 Fishing! Game memancing santai dengan konsep 'Semuanya adalah Umpan!'. Raih Top 1 Made with Ziva dan Top 4 Overall Stats.",
      descriptionEn:
        "Champion Microjam 065 Fishing! A cozy lake fishing game where 'Everything is Bait!'. Awarded Top 1 Made with Ziva and Top 4 Overall Stats.",
      fullDetails: {
        overview:
          "Bocah Fishing adalah game simulasi memancing atmosferik yang dinobatkan sebagai Champion Microjam 065 Fishing. Dengan mekanik unik 'Everything is Bait!', pemain dapat mengaitkan sampah, baterai berkarat, hingga ikan tangkapan untuk memikat ikan yang lebih besar. Game ini juga meraih gelar Top 1 Made with Ziva serta menembus Top 4 Overall Stats di kompetisi.",
        features: [
          "🏆 Champion Microjam 065 Fishing",
          "🥇 Top 1 Made with Ziva",
          "📊 Top 4 Overall Stats",
          "Mekanik unik 'Everything is Bait!' (semua barang bisa jadi umpan)",
          "Siklus dinamis siang dan malam (Day & Night cycle)",
          "Karakter pemancing unik dengan sifat pasif (passive traits)",
          "Almanak ikan lengkap untuk dikoleksi",
          "Dapat dimainkan langsung di web browser (HTML5) dan Windows",
        ],
        architecture: [
          "🏆 Champion Microjam 065 Fishing",
          "🥇 Top 1 Made with Ziva (#ZIVA)",
          "📊 Top 4 Overall Stats",
          "Dikembangkan dengan Godot Engine",
          "Entry game jam resmi Micro Jam 065: Fishing",
          "Dipublikasikan di Itch.io (sabitplay.itch.io/bocah-fishing)",
        ],
        techDetails:
          "Dikembangkan menggunakan Godot Engine dengan optimasi web export HTML5 dan artwork orisinal bertema malam di danau.",
      },
      overviewEn:
        "Bocah Fishing is a cozy, atmospheric lake fishing game developed by Sabitplay Studio that won Champion Microjam 065 Fishing. Featuring the twist 'Everything is Bait!', it also achieved Top 1 Made with Ziva and Top 4 Overall Stats across the competition.",
      featuresEn: [
        "🏆 Champion Microjam 065 Fishing",
        "🥇 Top 1 Made with Ziva",
        "📊 Top 4 Overall Stats",
        "Unique 'Everything is Bait!' gameplay mechanic",
        "Dynamic day-and-night cycle with immersive ambience",
        "Unique anglers with passive traits & personality narrations",
        "Full fish almanac catalog to catch and discover",
        "Directly playable in browser (HTML5) and available for Windows",
      ],
    },
    {
      id: "still-her",
      title: "Still Her?",
      titleEn: "Still Her?",
      subtitle:
        "Game simulasi bertahan hidup psikologis dan fiksi interaktif di bunker pasca-kebocoran neurotoksin bersama Hana yang terinfeksi.",
      subtitleEn:
        "A psychological survival simulator and interactive fiction trapped in a bunker with your infected lover following a synthetic neurotoxin rupture.",
      category: "game-dev",
      categoryLabel: "Game Development",
      categoryLabelEn: "Game Development",
      techStack: ["Godot", "HTML5", "Interactive Fiction", "Psychological Horror", "Itch.io"],
      itchUrl: "https://sabitplay.itch.io/still-her",
      year: "2026",
      imageBg: "/Stillher/hana.png",
      description:
        "Terperangkap di bunker perawatan sempit bersama Hana yang terinfeksi neurotoksin sintetis. Kelola Sanity, Toxicity, dan Supplies melalui 5 Rantai Kodependensi menuju 3 cutscene ending berbeda.",
      descriptionEn:
        "Trapped inside a sealed maintenance bunker with infected lover Hana. Balance Sanity, Toxicity, and Supplies across the 5 Chains of Codependency toward 3 distinct cutscene endings.",
      fullDetails: {
        overview:
          "Still Her? adalah game simulasi bertahan hidup psikologis dan narasi interaktif buatan Sabitplay Studio untuk Micro Jam 066: Toxic. Terperangkap di bunker perawatan sempit bersama kekasihnya, Hana, setelah kebocoran neurotoksin sintetis. Pemain mengeksplorasi tema hubungan beracun (toxic codependency) di mana setiap kompromi mengorbankan batas diri dan kewarasan.",
        features: [
          "5 Rantai Kodependensi: Setiap kompromi mengikat rantai tak kasat mata hingga kehilangan otonomi",
          "Keseimbangan Status Psikologis: Kelola Sanity (kewarasan Jito), Toxicity (kebencian parasit Hana), dan Supplies",
          "3 Cutscene Ending Berbeda: Sever the Cord, Permanent Prey, dan Controlled Decay",
          "Estetika Visual Ink-Brush Atmosferik dengan sprite ekspresi karakter dinamis",
          "Dapat dimainkan langsung di web browser (HTML5) melalui Itch.io",
        ],
        architecture: [
          "Dikembangkan menggunakan Godot Engine (Web Export HTML5)",
          "Entry game jam resmi Micro Jam 066: Toxic",
          "Dipublikasikan di Itch.io (sabitplay.itch.io/still-her)",
        ],
        techDetails:
          "Dikembangkan dengan Godot Engine dengan fokus pada sistem state machine dialog, soundscape atmosferik mencekam, dan optimasi web HTML5 yang responsif di desktop maupun mobile browser.",
      },
      overviewEn:
        "Still Her? is a cinematic psychological narrative survival and dialogue simulator developed by Sabitplay Studio for Micro Jam 066: Toxic. Trapped inside a maintenance bunker with your infected lover Hana, explore the razor-thin boundary between love, obsession, and toxic codependency.",
      featuresEn: [
        "5 Chains of Codependency: Surrendering boundaries binds iron chains that erode your autonomy",
        "Psychological Stat Balancing: Manage Jito's Sanity, Hana's Toxicity, and survival Supplies",
        "3 Dedicated Cutscene Endings: Sever the Cord, Permanent Prey, and Controlled Decay",
        "Atmospheric ink-brush visual aesthetic with dynamic character sprites",
        "Playable directly in modern web browsers (HTML5) on Itch.io",
      ],
    },
    {
      id: "last-gate",
      title: "Last Gate",
      titleEn: "Last Gate",
      subtitle:
        "Game aksi pertahanan kastel 4-lane reflex combat berkecepatan tinggi dengan sistem deflect fireball, combo multiplier, dan ultimate abilities.",
      subtitleEn:
        "A high-speed 4-lane reflex castle defense game featuring projectile deflect combos, score multipliers, and devastating character ultimates.",
      category: "game-dev",
      categoryLabel: "Game Development",
      categoryLabelEn: "Game Development",
      techStack: ["Godot", "HTML5", "Arcade Action", "Pixel Art", "Itch.io"],
      itchUrl: "https://sabitplay.itch.io/last-gate",
      year: "2026",
      imageBg: "/Lastgate/lastgate.jpg",
      description:
        "Pertahankan gerbang kastel terakhir! Uji kecepatan refleks di 4 jalur tempur, pantulkan bola api iblis, keluarkan jurus pamungkas Felix & Mella, dan selamatkan warga sipil.",
      descriptionEn:
        "Hold the kingdom's last gate! Test reflex speed across 4 combat lanes, deflect demon fireballs, unleash ultimates from Felix & Mella, and shepherd civilians to safety.",
      fullDetails: {
        overview:
          "Last Gate adalah game aksi refleks pertahanan kastel yang dikembangkan oleh Sabitplay Studio untuk Slapjam AI Game Jam. Berdiri menjaga gerbang terakhir kerajaan, pemain harus menangkis iblis melee, memantulkan bola api musuh untuk memicu ledakan berantai, serta memandu warga sipil ber-aura hijau melarikan diri dengan selamat.",
        features: [
          "4-Lane Reflex Combat: Hadapi iblis melee dan pantulkan bola api berapi di 4 jalur pertahanan simultan",
          "Deflect Combos & AoE Blasts: Pantulkan serangan musuh kembali untuk memicu ledakan berantai dahsyat",
          "Protect the Innocents: Lindungi warga sipil ber-aura hijau untuk bonus skor & multiplier besar",
          "2 Karakter Defender: Felix (Paladin's Rage Cleave) & Mella (Sugar Rush Flashstep auto-parry)",
          "4 Mode Kesulitan: Easy, Medium, Hard, dan Extreme dengan sistem multiplier kombo",
          "Dapat dimainkan langsung di web browser (HTML5) dengan kontrol Keyboard & Touch Screen",
        ],
        architecture: [
          "Dikembangkan menggunakan Godot Engine",
          "Entry game jam resmi Slapjam AI - The World's Largest AI Game Jam",
          "Dipublikasikan di Itch.io (sabitplay.itch.io/last-gate)",
        ],
        techDetails:
          "Dikembangkan dengan Godot Engine dengan optimasi web export HTML5, kontrol adaptif Keyboard (Z/X/C/V atau 1/2/3/4) & Mobile Touch UI, serta visual efek ledakan partikel dinamis.",
      },
      overviewEn:
        "Last Gate is a fast-paced castle defense reflex arcade game developed by Sabitplay Studio for Slapjam AI Game Jam. Defend the kingdom's last gate against invading demon hordes, rebound fiery projectiles to trigger explosive AoE chain reactions, and shepherd fleeing civilians to safety.",
      featuresEn: [
        "4-Lane Reflex Combat: Clash incoming melee demons and deflect blazing fireballs across 4 active defense lanes",
        "Deflect Combos & AoE Blasts: Rebound enemy fireballs to trigger massive chain explosions",
        "Protect the Innocents: Shepherd green-aura civilians to safety for major score multipliers",
        "2 Unique Defenders: Felix (Paladin's Rage Cleave) & Mella (Sugar Rush Flashstep auto-parry)",
        "4 Difficulty Modes: Easy, Medium, Hard, and Extreme with streak multiplier systems",
        "Playable directly in modern web browsers (HTML5) with touch and keyboard controls",
      ],
    },
    {
      id: "keepie-uppie",
      title: "Keepie Uppie",
      titleEn: "Keepie Uppie",
      subtitle:
        "Game arcade 2D juggle bola cepat dengan fisika pantulan dinamis berdasarkan titik kontak kaki dan hit-flash shader effects.",
      subtitleEn:
        "A fast-paced 2D arcade football juggling challenge featuring dynamic bounce physics and responsive touch controls.",
      category: "game-dev",
      categoryLabel: "Game Development",
      categoryLabelEn: "Game Development",
      techStack: ["Godot", "HTML5", "2D Arcade", "Physics", "Itch.io"],
      itchUrl: "https://sabitplay.itch.io/keepie",
      year: "2026",
      imageBg: "/Keepie/keepie_cover.png",
      description:
        "Uji refleks dan keahlian freestyle sepak bola dalam tantangan juggle bola arcade berkecepatan tinggi. Jaga ritme pantulan dan cetak rekor skor tertinggi!",
      descriptionEn:
        "Test your reflexes and freestyle football skills in this fast-paced ball juggling arcade challenge. Control bounce angles and set unbeatable high scores!",
      fullDetails: {
        overview:
          "Keepie Uppie adalah game arcade 2D buatan Sabitplay Studio untuk The T-Lander Game Jam #1. Pemain mengontrol pesepak bola untuk menjaga bola tetap melayang di udara dengan kontrol posisi presisi dan sudut pantulan dinamis.",
        features: [
          "Gameplay Refleks Cepat & Adiktif dengan kontrol sentuh/mouse instan",
          "Fisika Pantulan Bola Dinamis dihitung langsung dari titik perkenaan kaki",
          "Efek visual hit-flash impact shader dan animasi tendangan halus",
          "Pencatatan High Score otomatis untuk menantang rekor terbaik",
          "Dapat dimainkan langsung di web browser (HTML5)",
        ],
        architecture: [
          "Dikembangkan dengan Godot Engine",
          "Entry game jam resmi The T-Lander Game Jam #1",
          "Dipublikasikan di Itch.io (sabitplay.itch.io/keepie)",
        ],
        techDetails:
          "Dibuat dengan Godot Engine dengan sistem kalkulasi impuls fisika 2D, shader hit-flash kustom, serta dukungan kontrol input mouse, keyboard, dan layar sentuh seluler.",
      },
      overviewEn:
        "Keepie Uppie is a fast-paced 2D arcade game developed by Sabitplay Studio for The T-Lander Game Jam #1. Move your player, time your kicks with pinpoint accuracy, and never let the ball hit the turf.",
      featuresEn: [
        "Fast and addictive reflex gameplay with instant responsive controls",
        "Dynamic ball trajectory physics calculated from foot contact points",
        "Fluid kicking animations with hit-flash impact shader effects",
        "Automatic high-score tracker for personal bests",
        "Playable directly in modern web browsers (HTML5)",
      ],
    },
    {
      id: "rustbond",
      title: "Rustbond",
      titleEn: "Rustbond",
      subtitle:
        "Game dating sim / visual novel interaktif bertema post-apocalyptic & romansa, dipublikasikan di Itch.io.",
      subtitleEn:
        "An interactive post-apocalyptic dating sim & visual novel game published on Itch.io.",
      category: "game-dev",
      categoryLabel: "Game Development",
      categoryLabelEn: "Game Development",
      techStack: ["Dating Sim", "Visual Novel", "Itch.io", "Character Art"],
      itchUrl: "https://sabitplay.itch.io/rustbond",
      year: "",
      imageBg: "/ashy.png",
      description:
        "Game dating simulator bertema romansa dan bertahan hidup dengan pilihan karakter serta jalinan ikatan yang emosional.",
      descriptionEn:
        "A romance & survival dating simulator featuring character choices and emotionally engaging storylines.",
      fullDetails: {
        overview:
          "Rustbond adalah game dating sim / visual novel tempat pemain membangun hubungan cerita dan pilihan emosional bersama karakter pilihan.",
        features: [
          "Cerita dating sim interaktif dengan alur keputusan pemain",
          "Karakter unik dengan dialog dan alur hubungan khusus",
          "Desain karakter visual & artwork berkualitas",
          "Pengalaman naratif yang memikat",
        ],
        architecture: [
          "Visual Novel / Dating Simulator Engine",
        ],
        techDetails:
          "Dikembangkan dengan fokus pada pengalaman naratif interaktif, artwork karakter kustom, dan pilihan dialog.",
      },
      overviewEn:
        "Rustbond is an interactive dating sim / visual novel where players build relationships and choices with unique characters.",
      featuresEn: [
        "Interactive dating sim narrative with branching choices",
        "Unique character pathing and relationship dialogue",
        "Custom character visual design & artwork",
        "Immersive romance & story experience",
      ],
    },
    {
      id: "final-nightmare",
      title: "Final Nightmare",
      titleEn: "Final Nightmare",
      subtitle:
        "Game horor mencekam yang dikembangkan oleh Jordy dan Evan, dipublikasikan di Itch.io.",
      subtitleEn:
        "An immersive horror game experience developed by Jordy and Evan, published on Itch.io.",
      category: "game-dev",
      categoryLabel: "Game Development",
      categoryLabelEn: "Game Development",
      techStack: ["Game Dev", "Itch.io", "Horror Game", "Sound Design"],
      itchUrl: "https://sabitplay.itch.io/finalnightmare",
      year: "",
      imageBg:
        "https://img.itch.zone/aW1nLzI0MjU3NjM5LnBuZw==/347x500/bnfeZW.png",
      description:
        "Game horor mencekam buatan Jordy dan Evan, berfokus pada eksplorasi suasana horor psikologis dan misteri malam.",
      descriptionEn:
        "Atmospheric horror game developed by Jordy and Evan, focusing on psychological suspense, exploration, and night terror.",
      fullDetails: {
        overview:
          "Final Nightmare adalah game horor interaktif hasil kolaborasi pengembang Jordy dan Evan. Game ini menyajikan petualangan horor yang mencekam dengan fokus pada suasana misteri dan audio atmosferik.",
        features: [
          "Dikembangkan bersama oleh Jordy dan Evan",
          "Eksplorasi cerita horor dengan suasana mencekam",
          "Desain audio & efek suara horor kustom",
          "Tersedia dan dapat dimainkan langsung di Itch.io",
        ],
        architecture: [
          "Dipublikasikan resmi di Itch.io (sabitplay.itch.io/finalnightmare)",
        ],
        techDetails:
          "Engine Game & Audio Design dikembangkan khusus untuk menghadirkan pengalaman horor imersif.",
      },
      overviewEn:
        "Final Nightmare is an interactive horror game created in collaboration by Jordy and Evan, featuring psychological suspense and immersive atmospheric soundscapes.",
      featuresEn: [
        "Co-developed by Jordy and Evan",
        "Immersive horror storytelling & exploration",
        "Custom audio design & suspenseful sound cues",
        "Published and playable on Itch.io",
      ],
    },
    {
      id: "jm-panel",
      title: "JM-Panel",
      titleEn: "JM-Panel",
      subtitle:
        "Platform web admin & dashboard multi-tenant yang terintegrasi dengan Supabase Backend, manajemen organisasi, dan cloud storage.",
      subtitleEn:
        "A multi-tenant web admin platform & management dashboard integrated with Supabase backend, user authentication, and cloud storage.",
      category: "web",
      categoryLabel: "Aplikasi Web",
      categoryLabelEn: "Web Application",
      techStack: [
        "Next.js",
        "TypeScript",
        "Supabase",
        "PostgreSQL",
        "Tailwind CSS",
      ],
      githubUrl: "https://github.com/znhacks/bigstarterweb",
      year: "",
      imageBg: "/jmpanel.png",
      description:
        "Sistem panel web admin multi-tenant untuk manajemen organisasi, autentikasi pengguna, kontrol role, dan penyimpanan cloud Supabase.",
      descriptionEn:
        "Multi-tenant web admin panel system for organization management, user authentication, role controls, and Supabase cloud storage.",
      fullDetails: {
        overview:
          "JM-Panel adalah aplikasi web modern yang dirancang untuk manajemen organisasi multi-tenant, kontrol admin, dan integrasi cloud storage Supabase.",
        features: [
          "Manajemen organisasi & keanggotaan multi-tenant",
          "Autentikasi Supabase & sesi keamanan server-side",
          "Pengelolaan unggahan berkas & cloud storage",
          "Dashboard admin terstruktur untuk kontrol data",
        ],
        architecture: [
          "Next.js App Router & TypeScript server actions",
          "Supabase Client & Server SDK terhubung ke database PostgreSQL",
        ],
        techDetails:
          "Dikembangkan dengan Next.js, TypeScript, dan Supabase backend untuk skalabilitas organisasi multi-tenant.",
      },
      overviewEn:
        "JM-Panel is a modern web application designed for organization management, multi-tenant administrative controls, and Supabase cloud storage.",
      featuresEn: [
        "Multi-tenant organization & membership management",
        "Supabase authentication & server-side security sessions",
        "Cloud storage file upload & asset management",
        "Structured admin dashboard UI for tenant controls",
      ],
    },
    {
      id: "jurnal-mengajar",
      title: "Jurnal Mengajar",
      titleEn: "Jurnal Mengajar",
      subtitle:
        "Aplikasi mobile berbasis Flutter & Supabase untuk mencatat jurnal mengajar guru, jadwal kelas, dan absensi siswa secara otomatis.",
      subtitleEn:
        "A Flutter & Supabase mobile application for managing teacher journals, schedules, and student attendance automatically.",
      category: "mobile",
      categoryLabel: "Aplikasi Mobile",
      categoryLabelEn: "Mobile Application",
      techStack: [
        "Flutter",
        "Dart",
        "Supabase Database",
        "SQL RLS Security",
        "FCM Push Notifications",
      ],
      githubUrl: "https://github.com/znhacks/JurnalMengajar",
      year: "",
      imageBg: "/jurnalmengajar.png",
      description:
        "Aplikasi manajemen sekolah yang memudahkan guru mencatat kegiatan mengajar harian, absensi siswa, jadwal pelajaran, dan mengunduh laporan PDF.",
      descriptionEn:
        "School management system allowing teachers to log daily teaching journals, student attendance, class schedules, and export PDF reports.",
      fullDetails: {
        overview:
          "Jurnal Mengajar adalah aplikasi mobile berbasis Flutter dan Supabase yang dirancang untuk mempermudah administrasi guru dan pihak sekolah dalam mencatat jurnal harian dan presensi.",
        features: [
          "Pencatatan jurnal mengajar harian dan jam pelajaran",
          "Absensi siswa per kelas dengan penyimpanan otomatis",
          "Pengaturan jadwal mengajar harian dan pengingat kelas",
          "Dukungan multi-sekolah dan multi-pengguna (Guru, Admin, Kepala Sekolah)",
          "Ekspor laporan rekapitulasi jurnal dalam format PDF",
        ],
        architecture: [
          "lib/repositories/ (Sistem repositori modular Flutter)",
          "Supabase Auth & Database Postgres dengan keamanan Row Level Security",
        ],
        techDetails:
          "Dikembangkan menggunakan Flutter SDK, Dart, dan Cloud Supabase dengan integrasi notifikasi push FCM.",
      },
      overviewEn:
        "Jurnal Mengajar is an enterprise mobile application designed to streamline daily administrative duties for teachers and school administrators.",
      featuresEn: [
        "Daily teaching journal logs and period tracking",
        "Classroom student attendance logging",
        "Daily schedule configuration and class reminders",
        "Multi-school / Multi-tenant role support (Teacher, Admin, Principal)",
        "Automated summary exports to PDF reports",
      ],
    },
    {
      id: "absensi-massal",
      title: "Absensi Massal",
      titleEn: "Mass Attendance App",
      subtitle:
        "Aplikasi presensi mobile cepat berbasis Flutter & Supabase untuk pencatatan kehadiran grup dan sekolah.",
      subtitleEn:
        "A fast mobile attendance app backed by Supabase Cloud for group and school attendance logging.",
      category: "mobile",
      categoryLabel: "Aplikasi Mobile",
      categoryLabelEn: "Mobile Application",
      techStack: ["Flutter", "Supabase", "Dart", "PostgreSQL"],
      githubUrl: "https://github.com/noerezasa-source/absensi",
      year: "",
      imageBg: "/absensi.png",
      description:
        "Sistem pencatatan kehadiran cepat yang tersimpan langsung di database cloud Supabase.",
      descriptionEn:
        "High-speed attendance logging system with instant cloud database synchronization.",
      fullDetails: {
        overview:
          "Absensi Massal mempermudah proses pengambilan presensi rombongan atau siswa sekolah agar tersimpan seketika di database cloud.",
        features: [
          "Pencatatan absensi rombongan secara cepat",
          "Sinkronisasi otomatis ke database Supabase Cloud",
          "Tampilan sederhana dan responsif di HP Android & iOS",
        ],
        architecture: [
          "lib/ (Komponen tampilan & kontroler Flutter)",
          "Tabel SQL Supabase untuk pencatatan presensi",
        ],
        techDetails:
          "Dibuat dengan Flutter SDK & Dart terhubung langsung ke database Supabase.",
      },
      overviewEn:
        "Absensi Massal streamlines group and student attendance check-ins directly synced to Cloud Supabase.",
      featuresEn: [
        "Rapid bulk attendance logging",
        "Real-time sync to Cloud Supabase database",
        "Clean responsive mobile UI for Android & iOS",
      ],
    },
  ];

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<
    "all" | "game-dev" | "web" | "mobile"
  >("all");
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
    null
  );
  const { lang } = useLanguage();

  const filteredProjects = PROJECTS_LIST.filter(
    (p) => activeTab === "all" || p.category === activeTab
  );

  const bocahFishing = PROJECTS_LIST.find((p) => p.id === "bocah-fishing");
  const showFlagship = (activeTab === "all" || activeTab === "game-dev") && bocahFishing;
  const secondaryProjects = filteredProjects.filter((p) => !showFlagship || p.id !== "bocah-fishing");

  return (
    <section
      id="projects"
      className="py-24 px-4 sm:px-6 md:px-10 bg-transparent border-t border-white/[0.08] relative"
    >
      <div className="max-w-[1340px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-zinc-400 uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
              <span>{lang === "en" ? "Index / 01" : "Indeks / 01"}</span>
              <span className="text-zinc-600">/</span>
              <span className="text-zinc-300 font-semibold">{lang === "en" ? "Production Releases" : "Katalog Karya"}</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase">
              {lang === "en" ? "Featured Works" : "Proyek Pilihan"}
            </h2>

            <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-xl font-normal leading-relaxed">
              {lang === "en"
                ? "Award-winning independent game entries, web applications, and mobile cloud platforms."
                : "Game independen juara kompetisi, aplikasi web terintegrasi, dan platform mobile cloud."}
            </p>
          </div>

          {/* Linear Segmented Tab Controls */}
          <div className="inline-flex flex-wrap p-1 rounded-lg bg-[#0e0e12] border border-white/[0.08] font-mono text-xs">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-3.5 py-2 min-h-[40px] rounded-md transition-all cursor-pointer ${activeTab === "all"
                ? "bg-white text-black font-bold shadow-sm"
                : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                }`}
            >
              {lang === "en" ? "All" : "Semua"} ({PROJECTS_LIST.length})
            </button>
            <button
              onClick={() => setActiveTab("game-dev")}
              className={`px-3.5 py-2 min-h-[40px] rounded-md transition-all cursor-pointer ${activeTab === "game-dev"
                ? "bg-white text-black font-bold shadow-sm"
                : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                }`}
            >
              Game Dev (6)
            </button>
            <button
              onClick={() => setActiveTab("web")}
              className={`px-3.5 py-2 min-h-[40px] rounded-md transition-all cursor-pointer ${activeTab === "web"
                ? "bg-white text-black font-bold shadow-sm"
                : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                }`}
            >
              Web Apps (1)
            </button>
            <button
              onClick={() => setActiveTab("mobile")}
              className={`px-3.5 py-2 min-h-[40px] rounded-md transition-all cursor-pointer ${activeTab === "mobile"
                ? "bg-white text-black font-bold shadow-sm"
                : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                }`}
            >
              Mobile Apps (2)
            </button>
          </div>
        </div>

        {/* Flagship Editorial Hero Card: Bocah Fishing */}
        {showFlagship && bocahFishing && (
          <div className="mb-10">
            <div
              onClick={() => setSelectedProject(bocahFishing)}
              className="relative rounded-2xl overflow-hidden border border-white/[0.12] bg-[#0c0c10] hover:border-amber-400/50 transition-all duration-300 group cursor-pointer shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[420px]">
                {/* Visual Art Preview */}
                <div className="lg:col-span-7 relative min-h-[280px] lg:min-h-full overflow-hidden bg-black">
                  <Image
                    src={bocahFishing.imageBg}
                    alt={bocahFishing.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    priority
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 filter contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-[#0c0c10]/40 to-[#0c0c10]" />

                  {/* Accolade Ribbons on Image */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-md bg-amber-400 text-black font-mono text-[11px] font-black uppercase tracking-wider flex items-center gap-1.5 shadow-[0_0_20px_rgba(251,191,36,0.5)]">
                      <span className="material-symbols-outlined text-sm font-bold">emoji_events</span>
                      Champion Microjam 065 Fishing
                    </span>
                  </div>
                </div>

                {/* Content Panel */}
                <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between relative z-10">
                  <div>
                    {/* Telemetry Index */}
                    <div className="flex items-center text-xs font-mono mb-4 pb-3 border-b border-white/[0.08]">
                      <span className="text-amber-400 font-bold tracking-wider">AWARD WINNER</span>
                    </div>

                    <h3 className="font-display text-3xl sm:text-4xl font-black text-white group-hover:text-amber-300 transition-colors uppercase tracking-tight mb-3">
                      {bocahFishing.title}
                    </h3>

                    {/* Official Accolades Checklist */}
                    <div className="space-y-1.5 mb-5 p-3 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                      <div className="flex items-center gap-2 text-xs font-mono text-amber-300 font-bold">
                        <span className="material-symbols-outlined text-sm">trophy</span>
                        <span>Champion Microjam 065 Fishing</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 font-semibold">
                        <span className="material-symbols-outlined text-sm">verified</span>
                        <span>Top 1 Made with Ziva</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                        <span className="material-symbols-outlined text-sm">leaderboard</span>
                        <span>Top 4 Overall Stats</span>
                      </div>
                    </div>

                    <p className="text-sm text-zinc-300 leading-relaxed font-sans font-light mb-6">
                      {lang === "en" ? bocahFishing.descriptionEn : bocahFishing.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {bocahFishing.techStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-white/[0.04] text-zinc-300 text-[11px] font-mono rounded border border-white/[0.08]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-white group-hover:text-amber-300 transition-colors">
                      <span>{lang === "en" ? "Inspect Details" : "Detail Proyek"}</span>
                      <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Secondary Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {secondaryProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-xl overflow-hidden border border-white/[0.08] bg-[#0c0c10] hover:border-purple-500/30 hover:bg-[#111116] transition-all duration-300 flex flex-col justify-between p-5 cursor-pointer shadow-lg"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden mb-5 bg-black border border-white/[0.06]">
                <Image
                  src={project.imageBg}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c10] via-transparent to-transparent opacity-80" />

                {/* Index & Badges */}
                <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 rounded bg-black/80 backdrop-blur-md text-zinc-300 border border-white/10 font-mono text-[10px]">
                    {String(idx + 2).padStart(2, "0")}
                  </span>
                  {project.id === "still-her" && (
                    <span className="px-2 py-0.5 rounded bg-emerald-500 text-black font-mono text-[10px] font-black uppercase tracking-wider">
                      MICRO JAM 066
                    </span>
                  )}
                  {project.id === "last-gate" && (
                    <span className="px-2 py-0.5 rounded bg-amber-400 text-black font-mono text-[10px] font-black uppercase tracking-wider">
                      SLAPJAM AI
                    </span>
                  )}
                  {project.id === "keepie-uppie" && (
                    <span className="px-2 py-0.5 rounded bg-teal-400 text-black font-mono text-[10px] font-black uppercase tracking-wider">
                      T-LANDER JAM
                    </span>
                  )}
                </div>
              </div>

              {/* Title & Description */}
              <div className="space-y-2 flex-grow">
                <div className="flex items-center justify-between font-mono text-[11px] text-zinc-400">
                  <span>{lang === "en" ? project.categoryLabelEn : project.categoryLabel}</span>
                  {project.year && <span>{project.year}</span>}
                </div>

                <h3 className="font-display text-xl font-bold text-white group-hover:text-zinc-200 transition-colors uppercase tracking-tight">
                  {lang === "en" ? project.titleEn : project.title}
                </h3>

                <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed font-sans font-light">
                  {lang === "en" ? project.descriptionEn : project.description}
                </p>
              </div>

              {/* Tech Tags & CTA Footer */}
              <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {project.techStack.slice(0, 2).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-white/[0.03] text-zinc-400 text-[10px] font-mono rounded border border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 2 && (
                    <span className="px-1.5 py-0.5 text-[10px] font-mono text-zinc-500">
                      +{project.techStack.length - 2}
                    </span>
                  )}
                </div>

                <div className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-400 group-hover:text-white transition-colors">
                  <span>{lang === "en" ? "Inspect" : "Detail"}</span>
                  <span className="material-symbols-outlined text-xs group-hover:translate-x-0.5 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
