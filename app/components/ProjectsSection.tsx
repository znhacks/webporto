"use client";

import { useState } from "react";
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
      itchUrl: "https://jdevs03.itch.io/finalnightmare",
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
          "Dipublikasikan resmi di Itch.io (jdevs03.itch.io/finalnightmare)",
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
      itchUrl: "https://itch.io",
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
    "all" | "web" | "mobile" | "game-dev"
  >("all");
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
    null
  );
  const { lang } = useLanguage();

  const filteredProjects = PROJECTS_LIST.filter(
    (p) => activeTab === "all" || p.category === activeTab
  );

  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-8 bg-[#030c17] border-t border-white/10 relative"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6d28d9]/25 border border-[#6d28d9]/50 text-[#d3bbff] text-xs font-mono mb-3">
              <span className="material-symbols-outlined text-base">folder</span>
              {lang === "en" ? "PROJECT PORTFOLIO" : "DAFTAR PROYEK"}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              {lang === "en" ? "Featured Projects" : "Proyek & Hasil Karya"}
            </h2>
            <p className="text-base text-[#ccc3d7] mt-2 max-w-xl font-normal">
              {lang === "en"
                ? "Click any project card to inspect details, features, and repositories 1 by 1."
                : "Klik pada kartu proyek untuk melihat rincian penjelasan, fitur, dan tautan 1 per 1."}
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 glass-cyber rounded-2xl border border-white/10 font-mono text-xs">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-xl transition-all ${activeTab === "all"
                ? "bg-[#6d28d9] text-white font-bold shadow-lg"
                : "text-[#ccc3d7] hover:text-white"
                }`}
            >
              {lang === "en" ? "All Projects" : "Semua Proyek"} (
              {PROJECTS_LIST.length})
            </button>
            <button
              onClick={() => setActiveTab("web")}
              className={`px-4 py-2 rounded-xl transition-all ${activeTab === "web"
                ? "bg-[#6d28d9] text-white font-bold shadow-lg"
                : "text-[#ccc3d7] hover:text-white"
                }`}
            >
              {lang === "en" ? "Web Apps" : "Aplikasi Web"}
            </button>
            <button
              onClick={() => setActiveTab("mobile")}
              className={`px-4 py-2 rounded-xl transition-all ${activeTab === "mobile"
                ? "bg-[#6d28d9] text-white font-bold shadow-lg"
                : "text-[#ccc3d7] hover:text-white"
                }`}
            >
              {lang === "en" ? "Mobile Apps" : "Aplikasi Mobile"}
            </button>
            <button
              onClick={() => setActiveTab("game-dev")}
              className={`px-4 py-2 rounded-xl transition-all ${activeTab === "game-dev"
                ? "bg-[#6d28d9] text-white font-bold shadow-lg"
                : "text-[#ccc3d7] hover:text-white"
                }`}
            >
              {lang === "en" ? "Game Dev" : "Game Development"}
            </button>
          </div>
        </div>

        {/* Unified Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="glass-cyber glass-cyber-interactive rounded-3xl overflow-hidden relative group cursor-pointer flex flex-col justify-between p-6 sm:p-8 border border-white/10"
            >
              {/* Image Banner Header */}
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-6 bg-[#051424] border border-white/10">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${project.imageBg}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030c17] via-transparent to-transparent opacity-70" />
                <div className="absolute top-3 left-3 px-3 py-1 bg-[#030c17]/90 backdrop-blur-md text-[#d3bbff] border border-white/10 rounded-full font-mono text-[11px]">
                  {lang === "en"
                    ? project.categoryLabelEn
                    : project.categoryLabel}
                </div>
              </div>

              {/* Text Info */}
              <div className="space-y-3">
                <h3 className="text-2xl font-extrabold text-white group-hover:text-[#d3bbff] transition-colors">
                  {lang === "en" ? project.titleEn : project.title}
                </h3>

                <p className="text-sm text-[#ccc3d7] line-clamp-2 leading-relaxed font-normal">
                  {lang === "en" ? project.descriptionEn : project.description}
                </p>
              </div>

              {/* Footer Actions */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-[#051424] text-[#ccc3d7] text-[11px] font-mono rounded-lg border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-2 py-1 text-[11px] font-mono text-[#ccc3d7]">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>

                <div className="inline-flex items-center gap-1 text-[#d3bbff] font-mono text-xs font-semibold group-hover:translate-x-1 transition-transform">
                  {lang === "en" ? "View Details" : "Lihat Detail"}
                  <span className="material-symbols-outlined text-base">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
