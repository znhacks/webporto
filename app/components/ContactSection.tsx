"use client";

import { useState, FormEvent } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function ContactSection() {
  const { lang } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleCopyIg = () => {
    navigator.clipboard.writeText("jxrzero");
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-8 bg-[#030c17] border-t border-white/10 relative"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6d28d9]/25 border border-[#6d28d9]/50 text-[#d3bbff] text-xs font-mono mb-4">
          <span className="material-symbols-outlined text-base">mail</span>
          {lang === "en" ? "GET IN TOUCH" : "HUBUNGI SAYA"}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Direct Links Column */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {lang === "en"
                ? "Interested in Collaborating?"
                : "Tertarik Bekerjasama?"}
            </h2>

            <p className="text-base text-[#ccc3d7] leading-relaxed font-normal">
              {lang === "en"
                ? "Send a direct message via the form or reach out on Instagram & Itch.io."
                : "Kirimkan pesan langsung melalui formulir atau hubungi saya di Instagram & Itch.io."}
            </p>

            <div className="pt-2 space-y-3 font-mono text-sm">
              <div className="glass-cyber p-4 rounded-2xl border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#d3bbff] text-xl">
                    photo_camera
                  </span>
                  <div>
                    <span className="text-[10px] text-[#ccc3d7] block uppercase">
                      Instagram
                    </span>
                    <a
                      href="https://instagram.com/jxrzero"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#d3bbff] transition-colors font-bold"
                    >
                      @jxrzero
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyIg}
                  className="px-3.5 py-1.5 rounded-xl bg-[#0d1c2d] border border-white/10 text-xs text-[#d3bbff] hover:bg-[#6d28d9] hover:text-white transition-colors"
                >
                  {copied
                    ? lang === "en"
                      ? "Copied!"
                      : "Tersalin!"
                    : lang === "en"
                    ? "Copy Handle"
                    : "Salin Username"}
                </button>
              </div>

              <div className="glass-cyber p-4 rounded-2xl border border-white/10 flex items-center gap-3">
                <span className="material-symbols-outlined text-red-400 text-xl">
                  sports_esports
                </span>
                <div>
                  <span className="text-[10px] text-[#ccc3d7] block uppercase">
                    Itch.io Game Studio
                  </span>
                  <a
                    href="https://jdevs03.itch.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-red-400 transition-colors font-bold"
                  >
                    jdevs03.itch.io
                  </a>
                </div>
              </div>

              <div className="glass-cyber p-4 rounded-2xl border border-white/10 flex items-center gap-3">
                <span className="material-symbols-outlined text-[#d3bbff] text-xl">
                  code
                </span>
                <div>
                  <span className="text-[10px] text-[#ccc3d7] block uppercase">
                    GitHub
                  </span>
                  <a
                    href="https://github.com/znhacks"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#d3bbff] transition-colors"
                  >
                    github.com/znhacks
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="glass-cyber p-8 rounded-3xl border border-white/15 shadow-2xl">
              {submitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#6d28d9]/25 text-[#d3bbff] border border-[#6d28d9] flex items-center justify-center mx-auto shadow-lg">
                    <span className="material-symbols-outlined text-3xl">
                      check_circle
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-white">
                    {lang === "en" ? "Message Sent!" : "Pesan Terkirim!"}
                  </h3>
                  <p className="text-sm text-[#ccc3d7] max-w-md mx-auto">
                    {lang === "en"
                      ? "Thank you for reaching out. I will respond to your email shortly."
                      : "Terima kasih telah menghubungi. Saya akan membalas ke email Anda secepatnya."}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-[#051424] border border-white/10 text-xs font-mono text-[#d4e4fa] hover:bg-[#0d1c2d]"
                  >
                    {lang === "en"
                      ? "Send Another Message"
                      : "Kirim Pesan Lagi"}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono text-[#ccc3d7] uppercase tracking-wider mb-2">
                        {lang === "en" ? "Your Name" : "Nama Anda"}
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        placeholder={
                          lang === "en" ? "Your Name" : "Nama Anda"
                        }
                        className="w-full px-4 py-3 bg-[#051424] border border-white/10 rounded-xl text-sm text-[#d4e4fa] placeholder-[#ccc3d7]/50 focus:outline-none focus:border-[#d3bbff] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#ccc3d7] uppercase tracking-wider mb-2">
                        {lang === "en" ? "Your Email" : "Email Anda"}
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        placeholder="email@domain.com"
                        className="w-full px-4 py-3 bg-[#051424] border border-white/10 rounded-xl text-sm text-[#d4e4fa] placeholder-[#ccc3d7]/50 focus:outline-none focus:border-[#d3bbff] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#ccc3d7] uppercase tracking-wider mb-2">
                      {lang === "en" ? "Message" : "Pesan"}
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      placeholder={
                        lang === "en"
                          ? "Write your message or project idea..."
                          : "Tuliskan pesan atau ide proyek Anda..."
                      }
                      className="w-full px-4 py-3 bg-[#051424] border border-white/10 rounded-xl text-sm text-[#d4e4fa] placeholder-[#ccc3d7]/50 focus:outline-none focus:border-[#d3bbff] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#6d28d9] to-[#7331df] text-white font-mono text-xs font-semibold hover:shadow-[0_0_20px_rgba(109,40,217,0.6)] transition-all shadow-lg flex items-center justify-center gap-2 hover:scale-[1.01]"
                  >
                    {lang === "en" ? "Send Message" : "Kirim Pesan"}
                    <span className="material-symbols-outlined text-base">
                      send
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
