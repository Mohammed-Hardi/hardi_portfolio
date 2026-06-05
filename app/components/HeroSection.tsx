'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section id="home" className="relative flex min-h-screen items-center bg-white px-4 pt-24 dark:bg-gray-950">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 py-16 lg:grid-cols-[minmax(0,1fr)_minmax(360px,520px)]"
      >
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-3 text-lg font-medium text-red-500"
          >
            Hi! I&apos;m Abdulai Mohammed Hardi
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
            className="mb-5 max-w-3xl font-serif text-5xl font-bold leading-tight md:text-7xl"
          >
            Frontend Web Developer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mb-8 max-w-2xl text-base leading-8 text-gray-600 dark:text-gray-300 md:text-lg"
          >
            Crafting polished, responsive frontend experiences with modern tools and a focus on clean UI, performance, and usability.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
          >
            <Link
              href="#contact"
              className="group flex items-center rounded-full bg-black px-6 py-3 text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              Contact me <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/images/abdulai-mohammed-hardi-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="flex items-center rounded-full border border-gray-300 px-6 py-3 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
            >
              My Resume <Download size={18} className="ml-2" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.7, type: "spring", stiffness: 140 }}
          className="mx-auto flex h-[520px] w-full max-w-sm items-center justify-center lg:h-[min(72vh,640px)] lg:max-w-none"
        >
          <Image
            src="/images/profile.jpg.jpeg"
            alt="Abdulai Mohammed Hardi"
            width={520}
            height={640}
            priority
            className="h-full w-full rounded-2xl border border-gray-200 bg-gray-100 object-contain object-center shadow-xl dark:border-gray-800 dark:bg-gray-900"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
