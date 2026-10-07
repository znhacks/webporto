"use client";

import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col text-zinc-200 font-sans antialiased">
        <Navbar />

        <main className="flex-grow">
          <Hero />
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}
