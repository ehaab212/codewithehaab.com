// src/components/Home.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowRight, FaDownload } from "react-icons/fa";
import profileImage from "../assets/ehaab.png";

const Home = () => {
  const scrollToProjects = (e) => {
    e.preventDefault();
    const element = document.getElementById("projects");
    if (element) {
      const offset = -20;
      const top = element.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      aria-label="Introduction & Hero"
      className="relative min-h-[90vh] flex items-center justify-center px-6 md:px-16 lg:px-20 pt-28 pb-16 bg-[#0A2647]"
    >
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* TEXT CONTENT COLUMN */}
        <motion.div
          className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Subtitle / Role Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-medium text-orange-400 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Software Engineer &bull; MERN Developer &bull; AI Researcher
          </div>

          {/* Main Name & Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-3">
            Hi, I'm <span className="text-[#FF7A00]">Ehaab Ullah</span>
          </h1>

          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-200 mb-5">
            Software Engineer & MERN Stack Developer
          </h2>

          {/* Concise Supporting Description */}
          <p className="text-base sm:text-lg text-gray-300 max-w-xl leading-relaxed mb-8">
            I build full-stack web applications with React, Node.js, Express.js, and MongoDB, with additional experience in AI and research.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
            <button
              onClick={scrollToProjects}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-[#FF7A00] hover:bg-orange-600 transition-colors duration-200 shadow-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FF7A00] focus:ring-offset-2 focus:ring-offset-[#0A2647]"
            >
              View Projects
              <FaArrowRight className="text-sm" />
            </button>

            <a
              href="/ehaab_ullah_cv.pdf"
              download="Ehaab_Ullah_CV.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-gray-200 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <FaDownload className="text-sm" />
              Download CV
            </a>
          </div>

          {/* Clean Social Profiles */}
          <div className="flex items-center gap-4 text-gray-300">
            <span className="text-sm text-gray-400 font-medium">Connect:</span>
            
            <a
              href="https://github.com/ehaab212"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/25 transition-all duration-200 text-lg"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/ehaab-ullah-b064372b1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/25 transition-all duration-200 text-lg"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        {/* PROFILE IMAGE COLUMN */}
        <motion.div
          className="lg:col-span-5 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          <div className="relative">
            {/* Subtle card frame */}
            <div className="p-2 rounded-2xl bg-white/5 border border-white/10 shadow-2xl backdrop-blur-xs">
              <img
                src={profileImage}
                alt="Ehaab Ullah — Software Engineer"
                className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 object-cover rounded-xl"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Home;