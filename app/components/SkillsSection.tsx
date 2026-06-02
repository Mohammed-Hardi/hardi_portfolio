'use client';

import { motion } from 'framer-motion';

const skills = {
  'Programming Languages': ['Python', 'JavaScript'],
  'Web Technologies': ['HTML', 'CSS'],
  'Database Technologies': ['SQL'],
  'Cloud Platform': ['AWS (EC2, S3, Lambda, RDS)'],
  'Operating Systems': ['Windows', 'Linux (Ubuntu)'],
  'Version Control': ['Git', 'GitHub', 'GitHub Desktop'],
  'Productivity Tools': ['Microsoft Excel', 'Microsoft Word'],
  'IDEs': ['Visual Studio Code'],
};

const SkillsSection = () => {
  return (
    <section id="skills" className="min-h-screen py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold font-serif mb-12">My Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {Object.entries(skills).map(([category, skillList], index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            >
              <h3 className="text-2xl font-bold font-sans mb-4 text-red-500">{category}</h3>
              <ul className="list-disc list-inside space-y-2">
                {skillList.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-lg text-gray-700 dark:text-gray-300">{skill}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
