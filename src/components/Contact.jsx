import React, { useState } from "react";
import { motion } from "framer-motion";

const floatingShapes = ["circle", "triangle", "pentagon", "star", "hexagon"];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:ehaabullah12@gmail.com?subject=${encodeURIComponent(
      formData.subject || "Portfolio Contact"
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

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
      id="contact"
      className="relative w-full min-h-screen py-20 px-6 md:px-20 text-white overflow-hidden"
      style={{ backgroundColor: "#0A2647" }}
    >
      {/* Background Floating Shapes */}
      {Array.from({ length: 35 }).map((_, i) => {
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
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-16 drop-shadow-xl relative z-10"
      >
        Contact <span className="text-[#FF7A00]">Me</span>
      </motion.h2>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="relative z-10 max-w-3xl mx-auto grid gap-6 bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-xl"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#FF7A00] resize-none h-40"
        />
        <button
          type="submit"
          className="bg-[#FF7A00] hover:bg-orange-600 transition text-white font-semibold py-3 px-6 rounded-lg shadow-lg"
        >
          Send Message
        </button>
      </form>

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
      `}</style>
    </section>
  );
}
