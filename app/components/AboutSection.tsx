'use client';

import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-4 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold font-serif mb-6 text-navy-900 dark:text-white">
            About Me
          </h2>
          <div className="w-16 h-1 bg-accent mb-8 rounded-full" />
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
            I&apos;m Abdulai Mohammed Hardi, a software engineering intern at CORTEXX (Cohort 2),
            where I work on AI projects, automation, and modern web development. I&apos;m also
            involved in running Harditech, a data and internet service business.
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
            I&apos;m passionate about building practical, results-driven solutions — from
            full-stack web applications to embedded systems. I hold strong interests in
            Human-Computer Interaction, UI/UX design, and entrepreneurship.
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            Currently based in Tamale, Ghana. I&apos;m actively looking for internship and
            entry-level opportunities where I can contribute and grow.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;