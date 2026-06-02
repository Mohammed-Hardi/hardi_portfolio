'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Code, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Habit Tracker Web App",
    description: "A responsive habit-tracking website built with HTML, CSS, and JavaScript to help users monitor daily habits and routines.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubLink: "#", // Placeholder for GitHub link
    liveDemoLink: "#", // Placeholder for live demo link
  },
  {
    title: "Edulearn Web App",
    description: "A multi-page website built with HTML, CSS, and JavaScript that acts as an online learning platform for lecturers and students.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubLink: "#", // Placeholder for GitHub link
    liveDemoLink: "#", // Placeholder for live demo link
  },
  // Add more projects as needed
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="min-h-screen py-16 px-4 bg-white dark:bg-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold font-serif mb-12">My Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg p-6 flex flex-col h-full"
            >
              <h3 className="text-2xl font-bold font-sans mb-2">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-blue-200 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-700 dark:text-blue-200">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-center gap-4 mt-auto">
                <Link
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  <Code size={20} className="mr-1" /> GitHub
                </Link>
                <Link
                  href={project.liveDemoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  <ExternalLink size={20} className="mr-1" /> Live Demo
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
