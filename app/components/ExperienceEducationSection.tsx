'use client';

import { motion } from 'framer-motion';

const education = [
  {
    degree: "BSc. Computer Science (Top-Up Degree)",
    institution: "University of Energy and Natural Resources (UENR)",
    location: "Sunyani, Ghana",
    date: "Jan 2025 — Present",
  },
  {
    degree: "Diploma in Computer Science",
    institution: "University of Energy and Natural Resources (UENR)",
    location: "Sunyani, Ghana",
    date: "Jan 2022 — Nov 2024",
  },
  {
    degree: "AWS re/Start Program",
    institution: "Amalitech Ghana",
    location: "Ghana",
    date: "Apr 2025 — Jun 2025",
  },
];

const experience = [
  {
    title: "ICT Intern",
    company: "National Communications Authority (NCA)",
    location: "Sunyani Regional Branch, Ghana",
    date: "Sep 2025 — Nov 2025",
    description: [
      "Gained professional proficiency in Microsoft Excel and Word for data reporting, documentation, and official correspondence.",
      "Learned and operated Network Management Systems (NMS) used in telecommunications infrastructure monitoring.",
      "Acquired foundational knowledge of broadcasting systems and broadcast infrastructure management.",
      "Participated in Digital Terrestrial Television (DTT) field operations across Krobo and Dorma districts, conducting on-site inspections and technical assessments.",
    ],
  },
  {
    title: "IT / Data Management Intern",
    company: "National Health Insurance Authority (NHIS)",
    location: "Karaga District Office, Ghana",
    date: "Nov 2025 — Dec 2025",
    description: [
      "Assisted in capturing and managing client registration data into the NHIS database system.",
      "Processed and issued NHIS health insurance cards to registered clients.",
      "Handled client attachment processing and maintained accurate records for district members.",
      "Provided frontline support to clients, improving service delivery and data accuracy.",
    ],
  },
];

const ExperienceEducationSection = () => {
  return (
    <section id="experience" className="min-h-screen py-16 px-4 bg-white dark:bg-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold font-serif text-center mb-12">Experience & Education</h2>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold font-sans mb-8 text-center text-red-500">Education</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg p-6"
              >
                <h4 className="text-xl font-bold font-sans">{item.degree}</h4>
                <p className="text-gray-700 dark:text-gray-300">{item.institution} - {item.location}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.date}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <h3 className="text-3xl font-bold font-sans mb-8 text-center text-red-500">Experience</h3>
          <div className="space-y-12">
            {experience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg p-6"
              >
                <h4 className="text-xl font-bold font-sans">{item.title}</h4>
                <p className="text-gray-700 dark:text-gray-300">{item.company} - {item.location}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 mb-4">{item.date}</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  {item.description.map((desc, descIndex) => (
                    <li key={descIndex}>{desc}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceEducationSection;
