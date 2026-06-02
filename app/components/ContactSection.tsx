'use client';

import { motion } from 'framer-motion';
import { Code, ExternalLink, Mail } from 'lucide-react';
import Link from 'next/link';

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="min-h-screen py-16 px-4 bg-gray-50 dark:bg-gray-900 flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold font-serif mb-8">Get in Touch</h2>
        <p className="text-lg leading-relaxed mb-8 text-gray-600 dark:text-gray-300">
          I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <Link
            href="mailto:abdulaimohammedhardi5@gmail.com"
            className="flex items-center px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-colors"
          >
            <Mail size={20} className="mr-2" />
            Email Me
          </Link>

          <Link
            href="https://linkedin.com/in/abdulai-mohammed-hardi-261542274"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 border border-gray-300 rounded-full hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300"
          >
            <ExternalLink size={20} className="mr-2" />
            LinkedIn
          </Link>

          <Link
            href="https://github.com/Mohammed-Hardi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 border border-gray-300 rounded-full hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300"
          >
            <Code size={20} className="mr-2" />
            GitHub
          </Link>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400">
          You can also connect with me on social media or send me an email directly.
        </p>
      </motion.div>
    </section>
  );
};

export default ContactSection;
