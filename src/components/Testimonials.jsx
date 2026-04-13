// src/components/Testimonials.jsx
import React from "react";
import { motion } from "framer-motion";

import Mehran from "../assets/mehran.jpg";
import Usama from "../assets/usama.PNG";
import Uzair from "../assets/uzair.jpg";
import Farooq from "../assets/farooq.PNG"; // ⭐ NEW

const floatingShapes = ["circle", "triangle", "pentagon", "star", "hexagon"];

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mehran Khan",
      role: "SEO Expert",
      img: Mehran,
      review:
        "Working with him was an exceptional experience. His ability to deliver high-quality full-stack solutions and optimize websites for maximum performance is remarkable.",
    },

    {
      name: "Osama Ali Shah",
      role: "AI Specialist",
      img: Usama,
      review:
        "His logical thinking and full-stack workflow are impressive. He consistently delivers scalable, clean, and efficient applications with strong backend logic.",
    },

    {
      name: "Uzair Ghalib",
      role: "Web Developer",
      img: Uzair,
      review:
        "A creative and hardworking individual. His command over React, Tailwind and modern UI/UX principles makes him stand out in every project.",
    },
 
    {
      name: "Farooq Zia Yousafzai",
      role: "CEO – SAT Digital Uraan",
      img: Farooq,
      review:
"A disciplined, reliable, and highly skilled developer with excellent problem-solving abilities."    },
  ];

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
              clipPath:
                "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
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
      id="testimonials"
      className="relative py-20 px-6 md:px-16 text-white overflow-hidden"
      style={{ backgroundColor: "#0A2647" }}
    >
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-[#0A2647] opacity-30 rounded-full blur-3xl animation-pulse-slow -top-40 -left-24" />
        <div className="absolute w-[400px] h-[400px] bg-[#FF7A00] opacity-18 rounded-full blur-3xl animation-pulse-slower -bottom-36 -right-16" />
      </div>

      {/* Floating Shapes */}
      {Array.from({ length: 25 }).map((_, i) => {
        const shape =
          floatingShapes[Math.floor(Math.random() * floatingShapes.length)];
        const size = Math.random() * 34 + 12;
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
            animate={{ y: [0, 16, 0], rotate: [0, 360, 0] }}
            transition={{
              duration: 7 + Math.random() * 6,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {renderShape(shape, size)}
          </motion.div>
        );
      })}

      <div className="relative max-w-6xl mx-auto z-10"><motion.h2
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-4xl md:text-5xl font-extrabold text-center mb-16 drop-shadow-xl"
>
  What <span className="text-[#FF7A00]">People Say</span>
</motion.h2>
        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-orange-500 to-blue-500 shadow-[0_0_20px_#FF7A00]" />

          <div className="grid md:grid-cols-2 gap-16 pt-4">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative backdrop-blur-xl bg-white/10 border border-white/10 
                rounded-2xl p-6 shadow-xl hover:scale-[1.03] hover:shadow-2xl 
                transition-all duration-300"
              >
                {/* Node Dot */}
                <div
                  className={`absolute top-6 w-4 h-4 rounded-full bg-orange-500 shadow-[0_0_10px_#FF7A00] 
                  ${i % 2 === 0 ? "-right-8" : "-left-8"}`}
                />

                {/* Avatar */}
                <div className="flex items-center gap-5 mb-4">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-28 h-28 rounded-full object-cover border-2 border-orange-500 shadow-lg"
                  />
                  <div>
                    <h3 className="text-xl font-bold">{t.name}</h3>
                    <p className="text-orange-400 font-medium">{t.role}</p>
                  </div>
                </div>

                <p className="text-white/80 leading-relaxed">{t.review}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

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
};

export default Testimonials;
