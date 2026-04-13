// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const primaryColor = "#0A2647";   // Navy Blue
  const secondaryColor = "#FF7A00"; // Vibrant Orange

  const shapes = [
    { size: 32, top: "10%", left: "5%", rotate: 45, border: "border-t-4 border-l-4" },
    { size: 24, top: "70%", left: "80%", rotate: 12, border: "border-r-4 border-b-4" },
    { size: 48, top: "50%", left: "50%", rotate: 0, border: "rounded-full border-2" },
    { size: 20, top: "30%", left: "75%", rotate: 30, border: "border-l-2 border-b-2" },
    { size: 40, top: "80%", left: "20%", rotate: 60, border: "border-t-4 border-r-4" },
  ];

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-16 overflow-hidden"
      style={{ backgroundColor: primaryColor }}
    >
      {/* Animated Background Shapes */}
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute ${shape.border} border-orange-500 opacity-20`}
          style={{
            width: `${shape.size}rem`,
            height: `${shape.size}rem`,
            top: shape.top,
            left: shape.left,
            transform: `rotate(${shape.rotate}deg)`,
          }}
          animate={{
            y: [0, 20, -10, 0],
            x: [0, -15, 10, 0],
            rotate: [shape.rotate, shape.rotate + 360, shape.rotate],
          }}
          transition={{
            duration: 15 + index * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Subtle Gradient Overlay */}
      <motion.div
        className="absolute w-full h-full top-0 left-0"
        style={{
          background: "radial-gradient(circle at 30% 30%, rgba(255,122,0,0.05), transparent 80%), radial-gradient(circle at 70% 70%, rgba(255,255,255,0.03), transparent 80%)",
        }}
      />

      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-white mb-6 z-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About <span style={{ color: secondaryColor }}>Me</span>
      </motion.h2>

      {/* Description */}
      <motion.div
        className="max-w-3xl text-center bg-opacity-20 backdrop-blur-md p-8 rounded-2xl shadow-xl border z-10"
        style={{ borderColor: secondaryColor }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="text-lg md:text-xl text-white leading-relaxed">
          Hello! I'm{" "}
          <span style={{ color: secondaryColor }} className="font-semibold">
            Ehaab Ullah
          </span>
          , a Software Engineer with professional experience in full-stack web development using the MERN stack, RESTful API development, and applied machine learning. I work on scalable, responsive web applications and research-focused ML solutions in NLP and computer vision.
        </p>
      </motion.div>

      {/* Skills */}
      <motion.div
        className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {[
          "MERN (MongoDB, Express, React, Node.js)",
          "RESTful APIs",
          "Machine Learning & Deep Learning",
          "Data Analysis & Visualization",
          "Python & NLP",
          "Model Deployment",
          "Research & Publications",
          "CI/CD & DevOps",
        ].map((skill, index) => (
          <motion.div
            key={index}
            className="px-4 py-2 rounded-full text-white text-center font-semibold text-sm border cursor-pointer"
            style={{ borderColor: secondaryColor }}
            whileHover={{
              scale: 1.1,
              backgroundColor: secondaryColor,
              color: "#fff",
            }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default About;
