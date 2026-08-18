"use client";

export default function JurnalMengajarHighlight() {
  return (
    <section
      id="jurnal-mengajar"
      className="py-20 px-6 md:px-8 bg-[#051424] relative border-t border-white/10"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6d28d9]/25 border border-[#6d28d9]/50 text-[#d3bbff] text-xs font-mono mb-4">
          <span className="material-symbols-outlined text-base">school</span>
          PROJECT UNGGULAN
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Description Column */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Aplikasi Jurnal Mengajar
            </h2>

            <p className="text-base sm:text-lg text-[#ccc3d7] leading-relaxed font-normal">
              Aplikasi mobile praktis yang dirancang untuk membantu guru dan pihak sekolah mencatat kegiatan mengajar harian, jadwal kelas, absensi siswa, dan rekap rekapitulasi laporan secara otomatis.
            </p>

            {/* Beginner-friendly features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-[#0d1c2d] p-4 rounded-2xl border border-white/10 flex items-start gap-3">
                <span className="material-symbols-outlined text-[#d3bbff] text-2xl shrink-0 mt-0.5">
                  edit_note
                </span>
                <div>
                  <h4 className="text-white font-bold text-sm">
                    Pencatatan Mengajar
                  </h4>
                  <p className="text-xs text-[#ccc3d7] mt-1">
                    Guru dapat mengisi jurnal harian, mata pelajaran, dan jam mengajar dengan mudah.
                  </p>
                </div>
              </div>

              <div className="bg-[#0d1c2d] p-4 rounded-2xl border border-white/10 flex items-start gap-3">
                <span className="material-symbols-outlined text-[#d3bbff] text-2xl shrink-0 mt-0.5">
                  checklist
                </span>
                <div>
                  <h4 className="text-white font-bold text-sm">
                    Absensi Siswa
                  </h4>
                  <p className="text-xs text-[#ccc3d7] mt-1">
                    Mencatat daftar kehadiran siswa per kelas secara cepat dan tersimpan otomatis.
                  </p>
                </div>
              </div>

              <div className="bg-[#0d1c2d] p-4 rounded-2xl border border-white/10 flex items-start gap-3">
                <span className="material-symbols-outlined text-[#d3bbff] text-2xl shrink-0 mt-0.5">
                  calendar_month
                </span>
                <div>
                  <h4 className="text-white font-bold text-sm">
                    Jadwal &amp; Jam Pelajaran
                  </h4>
                  <p className="text-xs text-[#ccc3d7] mt-1">
                    Pengaturan jadwal mengajar harian dan pengingat kelas yang tertata rapi.
                  </p>
                </div>
              </div>

              <div className="bg-[#0d1c2d] p-4 rounded-2xl border border-white/10 flex items-start gap-3">
                <span className="material-symbols-outlined text-[#d3bbff] text-2xl shrink-0 mt-0.5">
                  picture_as_pdf
                </span>
                <div>
                  <h4 className="text-white font-bold text-sm">
                    Cetak Laporan PDF
                  </h4>
                  <p className="text-xs text-[#ccc3d7] mt-1">
                    Mengunduh rekapitulasi laporan jurnal mengajar dalam format PDF siap cetak.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://github.com/znhacks/JurnalMengajar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#6d28d9] text-white font-mono text-xs font-semibold hover:bg-[#7331df] transition-all shadow-lg shadow-purple-900/40 hover:scale-105"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                Lihat di GitHub
              </a>
            </div>
          </div>

          {/* Right Visual Image Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0d1c2d]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/jurnalmengajar.png')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#051424] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#051424]/90 backdrop-blur-md border border-white/10 font-mono text-xs">
                <span className="text-[#d3bbff] font-bold block">Flutter &amp; Supabase</span>
                <span className="text-xs text-[#ccc3d7]">Multi-school Mobile App System</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
