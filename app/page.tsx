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
      <div className="min-h-screen flex flex-col bg-[#030c17] text-[#d4e4fa] font-sans antialiased selection:bg-[#6d28d9] selection:text-white">
        {/* Navbar with EN | ID Switcher */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">
          <Hero />
          <ProjectsSection />
          <AboutSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </LanguageProvider>
  );
}
