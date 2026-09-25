// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaServer, FaBrain } from "react-icons/fa";

const focusAreas = [
  {
    title: "Full-Stack Development",
    stack: "React.js · Node.js · Express.js · MongoDB",
    desc: "Developing responsive client applications and robust server architectures with modern JavaScript ecosystems.",
    icon: <FaLaptopCode className="text-xl text-orange-400" />,
  },
  {
    title: "Backend & APIs",
    stack: "RESTful APIs · Authentication · Database Management",
    desc: "Designing secure RESTful endpoints, data models in MongoDB/MySQL, and scalable business logic.",
    icon: <FaServer className="text-xl text-orange-400" />,
  },
  {
    title: "AI & Research",
    stack: "Machine Learning · NLP · Deep Learning",
    desc: "Implementing ML pipelines for text sentiment classification and deep learning models for video frame forensics.",
    icon: <FaBrain className="text-xl text-orange-400" />,
  },
];

const About = () => {
  return (
    <section
      id="about"
      aria-label="About Me"
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
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Engineering Scalable Web Solutions & AI Research
          </h2>

          {/* MAIN NARRATIVE PARAGRAPH */}
          <p className="mt-5 text-base sm:text-lg text-gray-300 leading-relaxed max-w-4xl">
            Software Engineer and MERN Stack Developer focused on building full-stack web applications using React, Node.js, Express.js, and MongoDB. I have experience developing RESTful APIs, responsive interfaces, authentication systems, and database-driven applications. Alongside software development, I have research experience in NLP and deep learning-based video forensics.
          </p>
        </motion.div>

        {/* PROFESSIONAL FOCUS CARDS */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-6">
            Core Professional Focus
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {focusAreas.map((area, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1, ease: "easeOut" }}
                className="bg-white/5 border border-white/10 hover:border-orange-500/40 rounded-xl p-6 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                    {area.icon}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1.5">{area.title}</h4>
                  <p className="text-xs font-medium text-orange-400 mb-3">{area.stack}</p>
                  <p className="text-sm text-gray-300 leading-relaxed">{area.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
