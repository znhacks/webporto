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
      id: "lembur",
      title: "Lembur",
      titleEn: "Lembur",
      subtitle:
        "Game simulasi horor kesunyian studio larut malam. Bertahan dari deadline fajar sambil mengawasi siluet misterius di jendela studio.",
      subtitleEn:
        "Atmospheric late-night studio survival horror. Race against a dawn deadline while monitoring lurking silhouettes outside studio windows.",
      category: "game-dev",
      categoryLabel: "Game Development",
      categoryLabelEn: "Game Development",
      techStack: ["Godot", "HTML5", "Survival Horror", "FNAF-Inspired", "Itch.io"],
      itchUrl: "https://sabitplay.itch.io/lembur",
      year: "2026",
      imageBg: "/Lembur/lembur.png",
      description:
        "Game simulasi horor kesunyian studio larut malam. Seimbangkan tugas render komputer kantor dengan pengawasan jendela dari entitas pengintai sebelum fajar.",
      descriptionEn:
        "Late-night studio survival horror simulation. Balance computer render workloads with monitoring studio windows before sunrise.",
      fullDetails: {
        overview:
          "Lembur adalah game simulasi horor kesunyian studio larut malam buatan Sabitplay Studio. Terjebak mengerjakan deadline fajar, pemain harus menyeimbangkan alur kerja render di layar komputer sambil mengawasi jendela kiri, tengah, dan kanan studio. Ketika siluet gelap muncul di kaca, segera tutup tirai sebelum ketakutan merenggut konsentrasi dan keselamatan.",
        features: [
          "Mekanik pertahanan jendela dengan sistem monitoring tirai interaktif",
          "Manajemen beban kerja ganda: Tugas render komputer vs Deteksi entitas",
          "Karakter studio unik: Jitto & Mia dengan alur narasi lembur",
          "Mode shift berjenjang: Classic Shift hingga Evolved Protocol",
          "Pencahayaan CRT monitor dinamis dan soundscape atmosferik malam",
          "Dapat dimainkan langsung di web browser (HTML5) melalui Itch.io",
        ],
        architecture: [
          "Dikembangkan dengan Godot Engine (Web Export HTML5)",
          "Arsitektur Game Loop & Render Task Manager",
          "Dipublikasikan resmi di Itch.io (sabitplay.itch.io/lembur)",
        ],
        techDetails:
          "Dikembangkan menggunakan Godot Engine dengan optimasi web export HTML5 responsif, pencahayaan CRT monitor dinamis, dan soundscape atmosferik kantor tengah malam.",
      },
      overviewEn:
        "Lembur is a suspenseful late-night studio survival horror simulation developed by Sabitplay Studio. Racing against a strict dawn deadline, balance computer rendering tasks while keeping vigil over left, center, and right studio windows as ominous entities draw near.",
      featuresEn: [
        "Interactive studio defense with rapid window-blind surveillance",
        "Dual task balancing: Computer render tasks vs Entity detection",
        "Distinct studio characters: Jitto & Mia with rich overtime lore",
        "Escalating shift modes: Classic Shift and Evolved Protocol",
        "Dynamic CRT monitor lighting and ambient late-night soundscape",
        "Playable directly in modern web browsers (HTML5) on Itch.io",
      ],
    },
    {
      id: "bocah-fishing",
      title: "Bocah Fishing",
      titleEn: "Bocah Fishing",
      subtitle:
        "Game simulasi memancing santai di danau malam hari dengan mekanik unik 'Everything is Bait!'. Pancing berbagai spesies ikan dan monster danau legendaris.",
      subtitleEn:
        "Cozy atmospheric lake fishing simulation featuring the 'Everything is Bait!' mechanic. Catch diverse fish species and legendary lake monsters.",
      category: "game-dev",
      categoryLabel: "Game Development",
      categoryLabelEn: "Game Development",
      techStack: ["Godot", "HTML5", "Simulation", "2D Pixel/Art", "Itch.io"],
      itchUrl: "https://sabitplay.itch.io/bocah-fishing",
      year: "2026",
      imageBg: "/Bofish/bocahfishing.png",
      description:
        "Game memancing santai dengan konsep 'Semuanya adalah Umpan!'. Kaitkan sampah, baterai berkarat, hingga ikan tangkapan untuk memikat monster danau raksasa.",
      descriptionEn:
        "A cozy lake fishing game where 'Everything is Bait!'. Hook junk, rusty batteries, or smaller catches to reel in gigantic lake monsters.",
      fullDetails: {
        overview:
          "Bocah Fishing adalah game simulasi memancing atmosferik di danau malam hari buatan Sabitplay Studio. Dengan mekanik unik 'Everything is Bait!', pemain dapat mengaitkan sampah, baterai berkarat, hingga ikan tangkapan untuk memikat ikan yang lebih besar dan monster danau legendaris.",
        features: [
          "Mekanik unik 'Everything is Bait!' (semua barang bisa jadi umpan)",
          "Siklus dinamis siang dan malam (Day & Night cycle)",
          "Karakter pemancing unik dengan sifat pasif (passive traits)",
          "Almanak ikan lengkap dengan berbagai spesies langka",
          "Audio soundscape danau malam yang menenangkan",
          "Dapat dimainkan langsung di web browser (HTML5) dan Windows",
        ],
        architecture: [
          "Dikembangkan dengan Godot Engine",
          "Sistem inventaris umpan & rantai tangkapan modular",
          "Optimasi ekspor web HTML5 responsif",
          "Dipublikasikan di Itch.io (sabitplay.itch.io/bocah-fishing)",
        ],
        techDetails:
          "Dikembangkan menggunakan Godot Engine dengan optimasi web export HTML5 dan artwork orisinal bertema malam di danau.",
      },
      overviewEn:
        "Bocah Fishing is a cozy, atmospheric lake fishing game developed by Sabitplay Studio. Featuring the mechanic 'Everything is Bait!', hook junk, batteries, and small catches to lure in giant nocturnal lake creatures.",
      featuresEn: [
        "Unique 'Everything is Bait!' gameplay mechanic",
        "Dynamic day-and-night cycle with immersive ambience",
        "Unique anglers with passive traits & personality narrations",
        "Full fish almanac catalog to catch and discover",
        "Calming night lake audio soundscapes",
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

type Project = (typeof PROJECTS_LIST)[number];
type Tab = "all" | "game-dev" | "apps";

function GameCatalogCard({
  project,
  lang,
  onOpen,
}: {
  project: (typeof PROJECTS_LIST)[number];
  lang: string;
  onOpen: (p: ProjectData) => void;
}) {
  return (
    <article className="group relative flex flex-col rounded-xl overflow-hidden border border-line bg-surface hover:border-line-strong transition-all duration-300">
      {/* Cover Artwork Thumbnail */}
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="relative w-full aspect-[16/10] overflow-hidden bg-black cursor-pointer text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-holo"
        aria-label={`${lang === "en" ? project.titleEn : project.title} details`}
      >
        <Image
          src={project.imageBg}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent opacity-60" />
      </button>

      {/* Concise Catalog Content: Judul, Short Desc, Play Now */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
        <div>
          {/* Judul */}
          <h3 className="font-display text-xl sm:text-2xl font-bold text-titanium-50 uppercase tracking-tight mb-2.5">
            <button
              type="button"
              onClick={() => onOpen(project)}
              className="hover:text-holo transition-colors text-left cursor-pointer"
            >
              {lang === "en" ? project.titleEn : project.title}
            </button>
          </h3>

          {/* Short Desc */}
          <p className="text-xs sm:text-sm text-titanium-400 font-light leading-relaxed line-clamp-3 mb-6">
            {lang === "en" ? project.descriptionEn : project.description}
          </p>
        </div>

        {/* Play Now CTA (Direct Link) */}
        <div className="pt-4 border-t border-line/60">
          <a
            href={project.itchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2.5 min-h-[44px] w-full rounded-lg bg-white/[0.05] hover:bg-white text-titanium-100 hover:text-black border border-white/10 hover:border-white font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-holo"
          >
            <span className="material-symbols-outlined text-base">sports_esports</span>
            <span>{lang === "en" ? "Play Now" : "Mainkan Sekarang"}</span>
          </a>
        </div>
      </div>
    </article>
  );
}

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<Tab>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const { lang } = useLanguage();

  const games = PROJECTS_LIST.filter((p) => p.category === "game-dev");
  const apps = PROJECTS_LIST.filter((p) => p.category !== "game-dev");

  const showGames = activeTab !== "apps";
  const showApps = activeTab !== "game-dev";

  const tabs: { id: Tab; label: string; count: number }[] = [
    { id: "all", label: lang === "en" ? "All" : "Semua", count: PROJECTS_LIST.length },
    { id: "game-dev", label: "Games", count: games.length },
    { id: "apps", label: lang === "en" ? "Web & Mobile" : "Web & Mobile", count: apps.length },
  ];

  return (
    <section id="projects" className="relative py-28 px-4 sm:px-6 md:px-10 border-t border-line">
      <div className="max-w-[1340px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <p className="font-mono text-[11px] text-titanium-400 mb-4">
              01 <span className="text-titanium-500">/</span> {lang === "en" ? "Selected work" : "Karya pilihan"}
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-titanium-50 tracking-tight uppercase leading-[0.95]">
              {lang === "en" ? "Sabitplay" : "Sabitplay"}
              <br />
              <span className="text-titanium-400">{lang === "en" ? "Studio" : "Studio"}</span>
            </h2>
          </div>

          <div role="tablist" aria-label={lang === "en" ? "Filter projects" : "Filter proyek"} className="inline-flex p-1 rounded-md bg-surface border border-line font-mono text-xs self-start lg:self-auto">
            {tabs.map((t) => (
              <button
                key={t.id}
                role="tab"
                type="button"
                aria-selected={activeTab === t.id}
                onClick={() => setActiveTab(t.id)}
                className={`px-3.5 min-h-[44px] rounded transition-colors cursor-pointer ${activeTab === t.id
                    ? "bg-titanium-50 text-void font-bold"
                    : "text-titanium-400 hover:text-titanium-50"
                  }`}
              >
                {t.label} <span className="opacity-60">{t.count}</span>
              </button>
            ))}
          </div>
        </div>

        {showGames && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {games.map((project) => (
              <GameCatalogCard
                key={project.id}
                project={project}
                lang={lang}
                onOpen={setSelectedProject}
              />
            ))}
          </div>
        )}

        {showApps && (
          <div className={showGames ? "mt-24" : ""}>
            <div className="flex items-baseline justify-between mb-6 pb-4 border-b border-line">
              <h3 className="font-display text-2xl font-bold text-titanium-50 uppercase tracking-tight">
                {lang === "en" ? "Web & mobile" : "Web & mobile"}
              </h3>
              <span className="font-mono text-[11px] text-titanium-400">Next.js · Flutter · Supabase</span>
            </div>

            <ul>
              {apps.map((project, i) => (
                <li key={project.id} className="border-b border-line">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="group w-full text-left grid grid-cols-[auto_1fr] md:grid-cols-[3rem_6rem_1fr_14rem_auto] items-center gap-4 md:gap-6 py-5 cursor-pointer hover:bg-surface/60 transition-colors"
                  >
                    <span className="hidden md:block font-mono text-[11px] text-titanium-500">{String(i + 1).padStart(2, "0")}</span>
                    <span className="relative block w-20 md:w-24 aspect-[4/3] overflow-hidden border border-line bg-black">
                      <Image src={project.imageBg} alt="" fill sizes="96px" className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                    </span>
                    <span>
                      <span className="block font-display text-lg font-bold text-titanium-50 uppercase tracking-tight group-hover:text-holo transition-colors">
                        {lang === "en" ? project.titleEn : project.title}
                      </span>
                      <span className="block text-xs text-titanium-400 font-light mt-1 line-clamp-2 md:line-clamp-1">
                        {lang === "en" ? project.descriptionEn : project.description}
                      </span>
                    </span>
                    <span className="hidden md:block font-mono text-[11px] text-titanium-400">
                      {project.techStack.slice(0, 3).join(" · ")}
                    </span>
                    <span className="hidden md:block font-mono text-[11px] text-titanium-500">
                      {lang === "en" ? project.categoryLabelEn : project.categoryLabel}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
