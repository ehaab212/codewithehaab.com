// src/components/Education.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";

const educations = [
  {
    type: "degree",
    title: "Software Engineering",
    institute: "City University of Science and Information Technology, Peshawar",
    period: "10/10/2021 - 17/09/2025",
    icon: <FaGraduationCap className="text-[#FF7A00]" />,
  },
  {
    type: "certification",
    title: "NAVTTC – Advanced Web Application Development",
    institute: "NAVTTC / Xpert IT Solution & Technical Training, Peshawar",
    period: "16/12/2024",
    icon: <FaCertificate className="text-[#FF7A00]" />,
  },
  {
    type: "certification",
    title: "Introduction to AI",
    institute: "Cisco Networking Academy",
    period: "12/03/2025",
    icon: <FaCertificate className="text-[#FF7A00]" />,
  },
];

const floatingShapes = ["circle", "triangle", "pentagon", "star", "hexagon"];

export default function Education() {
  const primaryColor = "#0A2647";
  const secondaryColor = "#FF7A00";

  const renderShape = (shape, size) => {
    switch (shape) {
      case "circle":
        return <div className="rounded-full w-full h-full border-2 border-white/10" />;
      case "triangle":
        return (
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: `${size / 2}px solid transparent`,
              borderRight: `${size / 2}px solid transparent`,
              borderBottom: `${size}px solid rgba(255,255,255,0.1)`,
            }}
          />
        );
      case "pentagon":
        return (
          <div
            style={{
              clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
              backgroundColor: "rgba(255,255,255,0.1)",
              width: "100%",
              height: "100%",
            }}
          />
        );
      case "star":
        return (
          <div
            style={{
              clipPath:
                "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
              backgroundColor: "rgba(255,255,255,0.08)",
              width: "100%",
              height: "100%",
            }}
          />
        );
      case "hexagon":
        return (
          <div
            style={{
              clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              backgroundColor: "rgba(255,255,255,0.08)",
              width: "100%",
              height: "100%",
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <section
      id="education"
      className="relative py-24 px-6 md:px-20 text-white overflow-hidden"
      style={{ backgroundColor: primaryColor }}
    >
      {/* Background Glows */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-[#0A2647] opacity-30 rounded-full blur-3xl animation-pulse-slow -top-40 -left-24" />
        <div className="absolute w-[400px] h-[400px] bg-[#FF7A00] opacity-18 rounded-full blur-3xl animation-pulse-slower -bottom-36 -right-16" />
      </div>

      {/* Floating Shapes */}
      {Array.from({ length: 30 }).map((_, i) => {
        const shape = floatingShapes[Math.floor(Math.random() * floatingShapes.length)];
        const size = Math.random() * 36 + 12;
        return (
          <motion.div
            key={i}
            className="absolute z-0 pointer-events-none"
            style={{
              width: size,
              height: size,
              top: `${Math.random() * 95}%`,
              left: `${Math.random() * 95}%`,
            }}
            animate={{ y: [0, 14, 0], rotate: [0, 360, 0] }}
            transition={{ duration: 6 + Math.random() * 6, repeat: Infinity, ease: "linear" }}
          >
            {renderShape(shape, size)}
          </motion.div>
        );
      })}

      {/* Heading */}
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-4xl font-bold">
          My <span style={{ color: secondaryColor }}>Education</span>
        </h2>
        <p className="text-gray-300 mt-2">Academic background & certifications</p>
      </div>

      {/* Education Tree */}
      <div className="relative z-10 grid md:grid-cols-2 gap-6">
        {educations.map((edu, idx) => {
          const isEven = idx % 2 === 0;
          const bgGradient = isEven
            ? "bg-gradient-to-r from-[#0A2647]/80 to-[#FF7A00]/20"
            : "bg-gradient-to-r from-[#FF7A00]/20 to-[#0A2647]/80";

          return (
            <motion.div
              key={idx}
              className={`backdrop-blur-md rounded-2xl border border-transparent p-6 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer text-left ${bgGradient}`}
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="text-4xl">{edu.icon}</div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white">{edu.title}</h3>
                  <p className="text-gray-300 text-sm md:text-base">{edu.institute}</p>
                  {edu.period && <p className="text-gray-400 text-sm">{edu.period}</p>}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes pulseSlow {
          0%,100% { transform: scale(1); opacity: 0.22; }
          50% { transform: scale(1.15); opacity: 0.35; }
        }
        @keyframes pulseSlower {
          0%,100% { transform: scale(1); opacity: 0.12; }
          50% { transform: scale(1.25); opacity: 0.22; }
        }
        .animation-pulse-slow { animation: pulseSlow 7s infinite ease-in-out; }
        .animation-pulse-slower { animation: pulseSlower 9s infinite ease-in-out; }
      `}</style>
    </section>
  );
}
