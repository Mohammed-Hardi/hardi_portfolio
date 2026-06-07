'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Moon, Sun, ArrowRight, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [themeReady, setThemeReady] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const shouldUseDarkMode = savedTheme === 'dark' || (!savedTheme && prefersDark);

      setDarkMode(shouldUseDarkMode);
      setThemeReady(true);
    });

    return () => cancelAnimationFrame(frameId);
  }, []);

  useEffect(() => {
    if (!themeReady) {
      return;
    }

    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode, themeReady]);

  const toggleDarkMode = () => {
    setDarkMode((currentMode) => !currentMode);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 top-0 z-50 flex h-16 w-full items-center border-b border-gray-200/70 bg-white/90 px-4 py-3 shadow-sm backdrop-blur-md dark:border-gray-800/70 dark:bg-black/90"
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4">
        <Link href="#home" className="flex items-center font-sans text-2xl font-bold lg:justify-center">
          Abdulai.
          <span className="ml-1 h-2 w-2 rounded-full bg-red-500"></span>
        </Link>

        <div className="hidden lg:flex lg:flex-row lg:items-center lg:gap-6 font-sans text-sm font-medium">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-md px-3 py-2 transition-colors hover:bg-red-50 hover:text-red-500 dark:hover:bg-gray-900">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 lg:gap-3">
          <button
            type="button"
            onClick={toggleDarkMode}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            className="rounded-full p-2 transition-colors hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Link href="#contact" className="group flex items-center rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 lg:px-3 lg:py-2 lg:text-xs">
            Contact <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            className="rounded-full p-2 transition-colors hover:bg-gray-200 dark:hover:bg-gray-800 lg:hidden"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="absolute left-0 right-0 top-full border-b border-gray-200 bg-white px-4 py-3 shadow-md dark:border-gray-800 dark:bg-black lg:hidden">
          <div className="mx-auto grid max-w-6xl gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-3 py-3 font-medium transition-colors hover:bg-gray-100 hover:text-red-500 dark:hover:bg-gray-900"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </motion.nav>
  );
};


export default Navbar;
