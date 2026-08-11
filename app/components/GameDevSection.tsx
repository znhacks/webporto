"use client";

export default function GameDevSection() {
  return (
    <section
      id="game-dev"
      className="py-20 px-6 md:px-8 bg-[#030c17] border-t border-white/10 relative overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6d28d9]/25 border border-[#6d28d9]/50 text-[#d3bbff] text-xs font-mono mb-3">
          <span className="material-symbols-outlined text-base">sports_esports</span>
          GAME DEVELOPMENT
        </div>

        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Game &amp; Interactive Media
          </h2>
          <p className="text-base text-[#ccc3d7] mt-2 max-w-xl font-normal">
            Proyek pengembangan game horor visual novel dan game interaktif di platform Roblox.
          </p>
        </div>

        {/* Game Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Entity Next Terrors */}
          <div className="bg-[#0d1c2d] p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col justify-between relative overflow-hidden group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-[#051424] border border-white/10 text-[#d3bbff] rounded-full font-mono text-xs uppercase tracking-wider">
                  Ren&apos;Py • Game Horor
                </span>
                <span className="font-mono text-xs text-[#ccc3d7]">2024</span>
              </div>

              <h3 className="text-2xl font-extrabold text-white mb-3 group-hover:text-[#d3bbff] transition-colors">
                Entity: Next Terrors (W.I.P)
              </h3>

              <p className="text-sm text-[#ccc3d7] leading-relaxed mb-6 font-normal">
                Game visual novel horor psikologis dengan cerita interaktif di mana pilihan pemain mempengaruhi alur cerita, efek suara mencekam, dan suasana horor yang dalam.
              </p>

              <div className="space-y-2 mb-6 text-xs text-[#d4e4fa] font-mono">
                <div className="flex items-center gap-2">
                  <span className="text-[#6d28d9]">✓</span>
                  <span>Engine: Ren&apos;Py Visual Novel &amp; Python</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#6d28d9]">✓</span>
                  <span>Fitur: Pilihan cerita bercabang &amp; audio atmosferik</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#6d28d9]">✓</span>
                  <span>Platform: Windows, Mac, Linux</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <div className="flex gap-2">
                {["Ren'Py", "Python", "Horror Story"].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-[#051424] border border-white/10 text-[11px] font-mono text-[#ccc3d7] rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href="https://github.com/znhacks/Entity-Next-Terrors"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-[#6d28d9] text-white font-mono text-xs font-semibold hover:bg-[#7331df] transition-all flex items-center gap-1.5 shadow-md"
              >
                Lihat di GitHub
                <span className="material-symbols-outlined text-sm">
                  open_in_new
                </span>
              </a>
            </div>
          </div>

          {/* Card 2: Project Blinks */}
          <div className="bg-[#0d1c2d] p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col justify-between relative overflow-hidden group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-[#051424] border border-white/10 text-[#d3bbff] rounded-full font-mono text-xs uppercase tracking-wider">
                  Roblox • Luau Scripting
                </span>
                <span className="font-mono text-xs text-[#ccc3d7]">2024</span>
              </div>

              <h3 className="text-2xl font-extrabold text-white mb-3 group-hover:text-[#d3bbff] transition-colors">
                Project Blinks (W.I.P)
              </h3>

              <p className="text-sm text-[#ccc3d7] leading-relaxed mb-6 font-normal">
                Game Roblox interaktif yang dikembangkan menggunakan bahasa pemrograman Luau dan sistem Rojo 7 untuk manajemen kode yang rapi dan terstruktur.
              </p>

              <div className="space-y-2 mb-6 text-xs text-[#d4e4fa] font-mono">
                <div className="flex items-center gap-2">
                  <span className="text-[#6d28d9]">✓</span>
                  <span>Platform: Roblox Studio &amp; Player</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#6d28d9]">✓</span>
                  <span>Bahasa: Luau Scripting</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#6d28d9]">✓</span>
                  <span>Tooling: Rojo 7 &amp; Visual Studio Code</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <div className="flex gap-2">
                {["Roblox", "Luau", "Rojo 7"].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-[#051424] border border-white/10 text-[11px] font-mono text-[#ccc3d7] rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href="https://github.com/znhacks/Projectblinks"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-[#6d28d9] text-white font-mono text-xs font-semibold hover:bg-[#7331df] transition-all flex items-center gap-1.5 shadow-md"
              >
                Lihat di GitHub
                <span className="material-symbols-outlined text-sm">
                  open_in_new
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
