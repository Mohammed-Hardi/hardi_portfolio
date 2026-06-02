'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Moon, Sun, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const getInitialDarkMode = () => {
  if (typeof window === 'undefined') {
    return false;
  }

  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark') {
    return true;
  }

  if (savedTheme === 'light') {
    return false;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(getInitialDarkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((currentMode) => !currentMode);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm"
    >
      <Link href="/" className="text-2xl font-bold font-sans flex items-center">
        Abdulai.
        <span className="w-2 h-2 bg-red-500 rounded-full ml-1"></span>
      </Link>

      <div className="hidden md:flex space-x-8 font-sans">
        <Link href="#home" className="hover:text-red-500 transition-colors">Home</Link>
        <Link href="#about" className="hover:text-red-500 transition-colors">About me</Link>
        <Link href="#projects" className="hover:text-red-500 transition-colors">Projects</Link>
        <Link href="#skills" className="hover:text-red-500 transition-colors">Skills</Link>
        <Link href="#experience" className="hover:text-red-500 transition-colors">Experience</Link>
      </div>

      <div className="flex items-center space-x-4">
        <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <Link href="#contact" className="flex items-center px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-colors group">
          Contact <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.nav>
  );
};


export default Navbar;
