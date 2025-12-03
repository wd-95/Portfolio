"use client";

import { StarBackground } from "./components/StarBackground";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer.jsx";

import { useState, useEffect } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    try {
      const storedTheme = window.localStorage.getItem("theme");
      if (storedTheme === "light") setDarkMode(false);
      else if (storedTheme === "dark") setDarkMode(true);
    } catch {

    }
  }, []);


  useEffect(() => {
    if (!mounted) return;
    try {
      window.localStorage.setItem("theme", darkMode ? "dark" : "light");
    } catch {

    }
  }, [darkMode, mounted]);


  if (!mounted) {
    return null; 
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="relative text-gray-900 bg-sky-50 dark:bg-gray-900 px-10 md:px-20 lg:px-40">
        <StarBackground />

        <section>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </section>
      </main>

      <Footer />
    </div>
  );
}
