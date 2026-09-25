// src/components/Experience.jsx
import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "MERN Stack Developer",
    company: "SAT Software House & Institute",
    location: "Swabi, Pakistan",
    period: "May 2026 – Sep 2026",
    responsibilities: [
      "Developed real-world full-stack web applications using MongoDB, Express.js, React.js, Node.js, and JavaScript.",
      "Developed frontend and backend features, integrated RESTful APIs, and managed application databases.",
      "Implemented authentication and responsive user interfaces using Bootstrap and Tailwind CSS.",
      "Used Git and GitHub for version control and collaborative development.",
    ],
  },
  {
    role: "PSEB Specialized Web Development Intern",
    company: "SAT Software House & Institute",
    location: "Swabi, Pakistan",
    period: "Nov 2025 – May 2026",
    responsibilities: [
      "Completed a six-month internship under the Prime Minister’s Initiatives for Capacity Building of IT Industry in Specialized Web Development.",
      "Gained practical experience in web development and software engineering through real-world development activities.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      aria-label="Professional Experience"
      className="relative py-20 px-6 md:px-16 lg:px-20 bg-[#0A2647] border-t border-white/5"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wider text-orange-400 uppercase mb-3">
            Career Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Professional Experience
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
            Hands-on software development experience building full-stack web applications, database architectures, and RESTful APIs.
          </p>
        </motion.div>

        {/* TIMELINE CONTAINER */}
        <div className="relative border-l border-white/10 ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-10">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15, ease: "easeOut" }}
              className="relative"
            >
              {/* Timeline Node Indicator */}
              <div
                className="absolute -left-[31px] sm:-left-[39px] top-6 w-3.5 h-3.5 rounded-full bg-[#FF7A00] ring-4 ring-[#0A2647] border-2 border-white/20"
                aria-hidden="true"
              />

              {/* Experience Card */}
              <div className="bg-white/5 border border-white/10 hover:border-orange-500/30 rounded-xl p-6 sm:p-7 transition-all duration-200">
                
                {/* Header: Title, Company, Location & Dates */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4 mb-4 pb-4 border-b border-white/5">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <p className="text-sm sm:text-base font-medium text-gray-200 mt-1 flex flex-wrap items-center gap-1.5 sm:gap-2">
                      <span className="text-orange-400 font-semibold">{exp.company}</span>
                      <span className="text-gray-500">&bull;</span>
                      <span className="text-gray-400">{exp.location}</span>
                    </p>
                  </div>

                  <div className="self-start mt-1 sm:mt-0">
                    <span className="inline-flex items-center px-3 py-1 rounded-md text-xs sm:text-sm font-semibold bg-white/5 border border-white/10 text-orange-400 whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Responsibilities List */}
                <ul className="space-y-2.5 text-sm sm:text-base text-gray-300">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 shrink-0"
                        aria-hidden="true"
                      />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}