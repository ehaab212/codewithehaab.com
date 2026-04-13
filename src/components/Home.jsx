// src/components/Home.jsx
import React from "react";
import { motion } from "framer-motion";
import shayanImage from "../assets/ehaab.jpeg";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const roles = [
  "Software Engineer",
  "Web Developer",
  "AI Engineer",
  "Machine Learning Researcher",
];

const Home = () => {
  const primaryColor = "#0A2647";
  const secondaryColor = "#FF7A00";

  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row items-center justify-between min-h-screen px-6 md:px-20 pt-24 pb-10"
      style={{ backgroundColor: primaryColor }}
    >
      {/* LEFT CONTENT */}
      <div className="flex-1 text-center md:text-left mt-10">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4 text-white"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Ehaab Ullah
        </motion.h1>

        {/* Typing Effect */}
        <div className="text-xl md:text-2xl font-medium text-orange-500 h-10 mb-6">
          <Typewriter
            words={roles}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </div>

        <p className="text-white text-base md:text-lg max-w-md mb-6">
          Software Engineer with expertise in MERN stack, AI, and machine learning.
          I build scalable web applications, integrate intelligent systems, and
          deliver high-performance solutions.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 mb-6">
          <a
            href="ehaab_cv.pdf"
            download
            className="px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 transform hover:-translate-y-1"
            style={{ backgroundColor: secondaryColor }}
          >
            Download CV
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 transform hover:-translate-y-1"
            style={{ backgroundColor: secondaryColor }}
          >
            Hire Me
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mt-6">
          {/* GitHub */}
          <a
            href="https://github.com/ehaab212"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center hover:scale-110 transition"
          >
            <AiFillGithub className="text-3xl text-white hover:text-black" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ehaab-ullah"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center hover:scale-110 transition"
          >
            <AiFillLinkedin className="text-3xl text-white hover:text-blue-500" />
          </a>

          {/* Gmail (FIXED) */}
          <a
            href="mailto:ehaabullah912@gmail.com?subject=Contact%20from%20Portfolio&body=Hello%20Ehaab,"
            className="w-12 h-12 flex items-center justify-center hover:scale-110 transition"
          >
            <AiOutlineMail className="text-3xl text-white hover:text-red-500" />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/923105925068"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center hover:scale-110 transition"
          >
            <FaWhatsapp className="text-3xl text-white hover:text-green-500" />
          </a>
        </div>

        {/* Backup Email Display */}
        <p className="text-sm text-gray-300 mt-3">
          Email:{" "}
          <a
            href="mailto:ehaabullah912@gmail.com"
            className="text-orange-400 hover:underline"
          >
            ehaabullah912@gmail.com
          </a>
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <motion.div
        className="flex-1 flex justify-center md:justify-end mb-8 md:mb-0"
        initial={{ opacity: 0, x: 50, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={shayanImage}
          alt="Ehaab Ullah"
          className="w-56 h-56 md:w-80 md:h-80 object-cover rounded-full border-4 shadow-lg"
          style={{ borderColor: secondaryColor }}
        />
      </motion.div>
    </section>
  );
};

export default Home;