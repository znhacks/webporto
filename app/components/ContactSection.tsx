"use client";

import { useState, FormEvent } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function ContactSection() {
  const { lang } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Pesan Portofolio dari ${formState.name}`);
    const body = encodeURIComponent(`Nama: ${formState.name}\nEmail: ${formState.email}\n\nPesan:\n${formState.message}`);

    window.location.href = `mailto:hydrogz7@gmail.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 md:px-10 bg-transparent border-t border-white/[0.08] relative"
    >
      <div className="max-w-[1340px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-zinc-400 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              <span>{lang === "en" ? "Dispatch / 03" : "Kirim / 03"}</span>
              <span className="text-zinc-600">/</span>
              <span className="text-zinc-300 font-semibold">{lang === "en" ? "Collaboration" : "Kolaborasi"}</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-tight">
              {lang === "en"
                ? "Start a Conversation"
                : "Mulai Kolaborasi"}
            </h2>

            <p className="text-base text-zinc-300 leading-relaxed font-sans font-light">
              {lang === "en"
                ? "Available for game development collaborations, full-stack software contracts, and architectural consulting."
                : "Terbuka untuk kolaborasi pembuatan game, kontrak pengembangan software full-stack, serta konsultasi arsitektur."}
            </p>

            <div className="pt-2 space-y-3 font-mono text-xs">
              <div className="bg-[#0c0c10] p-4 rounded-xl border border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-zinc-400 text-lg">
                    photo_camera
                  </span>
                  <div>
                    <span className="text-[10px] text-zinc-400 block uppercase">
                      Direct Message
                    </span>
                    <a
                      href="https://instagram.com/jxrzero"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-zinc-300 transition-colors font-bold"
                    >
                      instagram.com/jxrzero
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-[#0c0c10] p-4 rounded-xl border border-white/[0.08] flex items-center gap-3">
                <span className="material-symbols-outlined text-zinc-400 text-lg">
                  sports_esports
                </span>
                <div>
                  <span className="text-[10px] text-zinc-400 block uppercase">
                    Sabitplay Studio
                  </span>
                  <a
                    href="https://sabitplay.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-zinc-300 transition-colors font-bold"
                  >
                    sabitplay.vercel.app
                  </a>
                </div>
              </div>

              <div className="bg-[#0c0c10] p-4 rounded-xl border border-white/[0.08] flex items-center gap-3">
                <span className="material-symbols-outlined text-zinc-400 text-lg">
                  alternate_email
                </span>
                <div>
                  <span className="text-[10px] text-zinc-400 block uppercase">
                    Direct Email
                  </span>
                  <a
                    href="mailto:hydrogz7@gmail.com"
                    className="text-white hover:text-zinc-300 transition-colors font-bold"
                  >
                    hydrogz7@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-[#0c0c10] p-6 sm:p-8 rounded-2xl border border-white/[0.08] shadow-2xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-white/[0.06] text-white border border-white/20 flex items-center justify-center mx-auto shadow-lg">
                    <span className="material-symbols-outlined text-2xl">
                      check
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-black text-white uppercase tracking-tight">
                    {lang === "en" ? "Message Dispatched" : "Pesan Terkirim"}
                  </h3>
                  <p className="text-sm text-zinc-400 max-w-md mx-auto font-sans font-light">
                    {lang === "en"
                      ? "Thank you for reaching out. I will respond to your inquiry shortly."
                      : "Terima kasih telah menghubungi. Aku akan membalas ke email Anda secepatnya."}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-5 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-200 hover:bg-white/[0.08]"
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
                      <label className="block text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-2">
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
                          lang === "en" ? "Name or Company" : "Nama atau Instansi"
                        }
                        className="w-full px-4 py-3 bg-[#08080a] border border-white/[0.08] rounded-lg text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-2">
                        {lang === "en" ? "Your Email" : "Email Anda"}
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        placeholder="you@domain.com"
                        className="w-full px-4 py-3 bg-[#08080a] border border-white/[0.08] rounded-lg text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-2">
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
                          ? "Project specifications, timelines, or collaboration details..."
                          : "Spesifikasi proyek, tenggat waktu, atau rencana kolaborasi..."
                      }
                      className="w-full px-4 py-3 bg-[#08080a] border border-white/[0.08] rounded-lg text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-lg bg-white hover:bg-zinc-200 text-black font-mono text-xs font-bold tracking-tight transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.12)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                  >
                    <span>{lang === "en" ? "Dispatch Message" : "Kirimkan Pesan"}</span>
                    <span className="material-symbols-outlined text-sm font-bold">
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
