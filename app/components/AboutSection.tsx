"use client";

import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

export default function AboutSection() {
  const { lang } = useLanguage();

  return (
    <section
      id="about"
      className="py-16 px-6 md:px-8 bg-transparent border-t border-white/10 relative"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6d28d9]/25 border border-[#6d28d9]/50 text-[#d3bbff] text-xs font-mono mb-4">
          <span className="material-symbols-outlined text-base">person</span>
          {lang === "en" ? "ABOUT ME" : "TENTANG AKU"}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Short Bio */}
          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              {lang === "en"
                ? "Full-Stack Developer & Creator"
                : "Full-Stack Developer & Pembuat Game"}
            </h2>
            <p className="text-base text-[#ccc3d7] leading-relaxed">
              {lang === "en"
                ? "I am Ordi, Founder of Sabitplay Studio, and a versatile Full-Stack Developer specializing in building complete end-to-end solutions - spanning mobile apps, web platforms, cloud database backends, and interactive game engines."
                : "Aku Ordi, Pendiri Sabitplay Studio, dan seorang Full-Stack Developer yang berpengalaman membangun solusi perangkat lunak secara end-to-end - mencakup aplikasi mobile, platform web, cloud database backend, hingga game engine."}
            </p>

            <div className="pt-2 flex flex-wrap gap-6 font-mono text-xs">
              <div>
                <span className="text-[#d3bbff] block font-bold mb-1">GitHub</span>
                <a
                  href="https://github.com/znhacks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#d3bbff] hover:text-white underline underline-offset-4 decoration-[#6d28d9] hover:decoration-white transition-colors font-medium"
                >
                  github.com/znhacks
                </a>
              </div>
              <div>
                <span className="text-[#d3bbff] block font-bold mb-1">Sabitplay Studio</span>
                <a
                  href="https://sabitplay.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#d3bbff] hover:text-white underline underline-offset-4 decoration-[#6d28d9] hover:decoration-white transition-colors font-medium"
                >
                  sabitplay.vercel.app
                </a>
              </div>
              <div>
                <span className="text-[#d3bbff] block font-bold mb-1">Instagram</span>
                <a
                  href="https://instagram.com/jxrzero"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#d3bbff] hover:text-white underline underline-offset-4 decoration-[#6d28d9] hover:decoration-white transition-colors font-medium"
                >
                  @jxrzero
                </a>
              </div>
            </div>
          </div>

          {/* Right Profile Photo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group max-w-sm w-full">
              {/* Purple ambient glow aura */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#6d28d9] to-[#d3bbff] rounded-3xl blur-xl opacity-40 group-hover:opacity-70 transition duration-500" />

              <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-[#051424] shadow-2xl">
                <Image
                  src="/me.jpg"
                  alt="Ordi (Jordy)"
                  width={500}
                  height={600}
                  className="w-full h-auto max-h-[450px] object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030c17]/70 via-transparent to-transparent opacity-60" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
