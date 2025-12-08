"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";

const navItems = [
  { name: "Accueil", href: "#hero" },
  { name: "À propos", href: "#about" },
  { name: "Compétences", href: "#skills" },
  { name: "Projets", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar({ darkMode, setDarkMode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={
        "fixed top-0 left-0 w-full z-40 transition-all duration-50 " +
        
        (isScrolled && !isMenuOpen
          ? "py-3 dark:bg-gray-900/80 backdrop-blur-md shadow-md"
          : "py-5 bg-transparent")
      }
    >
      <div className=" text-lg w-full px-10 md:px-20 flex items-center justify-between ">
        <a className="text-xl font-extrabold  flex items-center" href="#hero">
          <span className="relative z-10 flex items-center gap-2">
            <Image
              src={darkMode ? "/logo-dark.png" : "/logo-light.png"}
              alt="Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="font-bold text-2xl">Portfolio</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="  hover:text-teal-400 transition-colors duration-300 " /* couleur texte */
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Toggle dark mode */}
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className="p-2 rounded-full border border-gray-500/40 hover:border-teal-400 text-light hover:text-teal-400 transition-colors dark:text-dark "
            aria-label="Toggle theme"
          >
            {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
        </div>

        {/* Zone droite en MOBILE : toggle + bouton menu */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className="p-2 rounded-full border border-gray-500/40 text-light dark:text-dark  "
            aria-label="Toggle theme"
          >
            {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>

          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
           
            className="p-2 relative z-50 "
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Menu mobile plein écran */}
        <div
          className={
       
            "fixed inset-0 z-40 bg-sky-50/80 dark:bg-gray-900/80 backdrop-blur-md flex flex-col items-center justify-center transition-all duration-300 md:hidden " +
            (isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none")
          }
        >
          <div className="flex flex-col space-y-8 text-xl items-center">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xl text-gray-800/90 dark:text-gray-200/90 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}

            {/* Bouton CV dans menu mobile */}
            <a
              href="/CV_Warith.pdf"
              className="px-6 py-2 rounded-full border dark:border-dark border-light dark:text-dark text-light transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Télécharger mon CV
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}