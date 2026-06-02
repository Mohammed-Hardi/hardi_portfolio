'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section id="home" className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 pt-24">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5, type: "spring", stiffness: 200 }}
          className="mb-6"
        >
          <Image
            src="/images/profile.jpg" // Placeholder for your profile image
            alt="Abdulai Mohammed Hardi"
            width={150}
            height={150}
            className="rounded-full object-cover border-4 border-white shadow-lg mx-auto"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-lg mb-2"
        >
          Hi! I&apos;m Abdulai Mohammed Hardi
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-serif font-bold mb-4 leading-tight"
        >
          Frontend Web Developer   
 based in Ghana.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-md md:text-lg max-w-2xl mx-auto mb-8 text-gray-600 dark:text-gray-300"
        >
          I am a passionate developer with a journey in tech, specializing in creating responsive and user-friendly web applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#contact"
            className="flex items-center px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-colors group"
          >
            Contact me <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/images/AbdulaiMohammedHardi-Resume.pdf" // Placeholder for your resume PDF
            target="_blank"
            rel="noopener noreferrer"
            download
            className="flex items-center px-6 py-3 border border-gray-300 rounded-full hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800 transition-colors"
          >
            My Resume <Download size={18} className="ml-2" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
