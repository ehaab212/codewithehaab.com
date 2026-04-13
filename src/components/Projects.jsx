// src/components/Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaShoppingCart,
  FaShieldAlt,
  FaChartLine,
  FaPaintBrush,
  FaWordpress,
  FaPenNib,
  FaSearch,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaCloud,
} from "react-icons/fa";

// === IMPORT YOUR IMAGES ===
import stoneyRoad from "../assets/stoney-road.png";
import jamalMedical from "../assets/jamal-medical.jpg";
import pakizaFoods from "../assets/pakiza-foods.png";
import explorationBlog from "../assets/exploration-blog.png";
import satpk from "../assets/satpk.png";
import princessHubs from "../assets/princess-hubs.png";
import sheryWholesale from "../assets/shery-wholesale.png";
import inventoryVisit from "../assets/inventory-visit.png";
import gulisCollection from "../assets/gulis-collection.png";

const backgroundIcons = [
  FaLaptopCode,
  FaShoppingCart,
  FaShieldAlt,
  FaChartLine,
  FaPaintBrush,
  FaWordpress,
  FaPenNib,
  FaSearch,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaCloud,
];

const projects = [
  {
    title: "Depression Detection (NLP)",
    desc: "End-to-end NLP pipeline for identifying depression in social media posts using TF-IDF, embeddings and classifiers (SVM/GBM/LSTM). Achieved strong classification performance in research experiments.",
    image: explorationBlog,
    link: "https://codewithehaab.com",
  },
  {
    title: "Deepfake Detection (Video Forensics)",
    desc: "Frame-level deep learning system for detecting manipulated video frames using ResNet50-based models and a web demo for uploading and verifying videos.",
    image: jamalMedical,
    link: "https://codewithehaab.com/deepfake-demo",
  },
  {
    title: "SAT Impact Solutions — Web Platform",
    desc: "Educational / institute platform built with MERN stack featuring course listings, user management, and admin tools.",
    image: satpk,
    link: "https://satpk.com",
  },
  {
    title: "E-Commerce & WooCommerce Stores",
    desc: "Multiple e-commerce implementations and performance optimisations using WooCommerce, PHP, and MySQL with secure payment integrations.",
    image: pakizaFoods,
    link: "https://codewithehaab.com/portfolio",
  },
  {
    title: "Model Integration & Deployment",
    desc: "Integrating trained ML models into web applications and exposing inference via secure RESTful APIs for realtime predictions.",
    image: stoneyRoad,
    link: "https://codewithehaab.com",
  },
  {
    title: "Portfolio Website",
    desc: "Personal portfolio and blog showcasing research, publications, and web projects (codewithehaab.com).",
    image: gulisCollection,
    link: "https://codewithehaab.com",
  },
  {
    title: "Inventory & Business Platforms",
    desc: "Full-stack business applications for inventory, orders, and reporting built with modern React frontends and Node.js backends.",
    image: sheryWholesale,
    link: "https://codewithehaab.com/clients",
  },
  {
    title: "Research Web Apps (UETP)",
    desc: "Web tools supporting research workflows and demonstrations for academic publications in AI and cybersecurity.",
    image: inventoryVisit,
    link: "https://codewithehaab.com/research",
  },
];

export default function Projects() {
  const primaryColor = "#0A2647"; // Navy Blue
  const secondaryColor = "#FF7A00"; // Orange

  return (
    <section
      id="projects"
      className="relative min-h-screen px-6 py-16 overflow-hidden"
      style={{ backgroundColor: primaryColor }}
    >
      {/* Background Gradient */}
      <div
        className="absolute w-full h-full top-0 left-0"
        style={{
          background:
            "radial-gradient(circle at 40% 40%, rgba(255,122,0,0.05), transparent 80%), radial-gradient(circle at 70% 70%, rgba(255,255,255,0.03), transparent 80%)",
          zIndex: 0,
        }}
      />

      {/* Animated Floating Icons */}
      {Array.from({ length: 25 }).map((_, index) => {
        const Icon = backgroundIcons[Math.floor(Math.random() * backgroundIcons.length)];
        return (
          <motion.div
            key={index}
            className="absolute text-white/20 text-6xl"
            style={{
              top: `${Math.random() * 95}%`,
              left: `${Math.random() * 95}%`,
              zIndex: 0,
            }}
            animate={{ rotate: [0, 360, 0], scale: [0.8, 1.2, 0.8] }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Icon />
          </motion.div>
        );
      })}

      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-white text-center mb-12 z-10 relative"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My <span style={{ color: secondaryColor }}>Projects</span>
      </motion.h2>

      {/* Projects Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white/5 backdrop-blur-lg p-5 rounded-2xl shadow-sm border-2 border-transparent hover:border-orange-500 transition cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {/* Image */}
            <div className="overflow-hidden rounded-xl">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />
            </div>

            {/* Content */}
            <h3 className="text-xl font-semibold text-white mt-4 mb-2">
              {project.title}
            </h3>

            <p className="text-white/70 text-sm">{project.desc}</p>

            {/* Button */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-5 py-2 rounded-full font-semibold text-white bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
