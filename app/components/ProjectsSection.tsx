'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Code, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Habit Tracker Web App",
    description: "A responsive habit-tracking website built with HTML, CSS, and JavaScript to help users monitor daily habits and routines.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/Mohammed-Hardi/habit-tracker.git", 
    liveDemoLink: "https://habit-tracker-sigma-khaki.vercel.app/", 
  },
  {
    title: "Edulearn Web App",
    description: "A multi-page website built with HTML, CSS, and JavaScript that acts as an online learning platform for lecturers and students.",
    techStack: ["HTML", "CSS", "JavaScript"],
  
  },
  {
    title: "Personal Portfolio Website",
    description: "A responsive portfolio built with Next.js, Tailwind CSS, and Framer Motion to showcase projects, skills, and contact details.",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    githubLink: "#",
    liveDemoLink: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="min-h-screen bg-gray-50 px-4 py-20 dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="mb-14 font-serif text-4xl font-bold">My Projects</h2>

        <div className="flex flex-wrap items-center justify-center gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: 24, scale: 1.02 }}
              className="flex aspect-square w-full max-w-[340px] flex-col items-center justify-center rounded-full border border-gray-200 bg-white p-8 text-center shadow-lg transition-shadow hover:shadow-2xl dark:border-gray-700 dark:bg-gray-950"
            >
              <h3 className="mb-3 max-w-[230px] font-sans text-xl font-bold leading-tight">{project.title}</h3>
              <p className="mb-4 max-w-[250px] text-sm leading-6 text-gray-700 dark:text-gray-300">{project.description}</p>
              <div className="mb-4 flex max-w-[250px] flex-wrap justify-center gap-2">
                {project.techStack.map((tech, techIndex) => (
                  <span key={techIndex} className="rounded-full bg-red-100 px-2.5 py-1 text-xs font-semibold text-red-700 dark:bg-red-950 dark:text-red-200">
                    {tech}
                  </span>
                ))}
              </div>
              
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
