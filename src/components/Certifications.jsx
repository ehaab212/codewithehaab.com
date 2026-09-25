// src/components/Certifications.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaHourglassHalf,
  FaShieldAlt,
  FaBrain,
  FaLaptopCode,
  FaTasks,
  FaGraduationCap,
  FaCloud,
} from "react-icons/fa";
import { SiHtml5, SiOpenai, SiMongodb, SiFirebase, SiStripe } from "react-icons/si";

const COMPLETED_CERTIFICATIONS = [
  {
    title: "Certified ScrumMaster (CSM)",
    organization: "Scrum Alliance",
    year: "2026",
    status: "Certified",
    icon: <FaTasks className="text-orange-400 text-lg" />,
  },
  {
    title: "OWASP Top 10 Web Application Security 2026 Updates",
    organization: "Udemy",
    year: "2026",
    status: "Completed",
    icon: <FaShieldAlt className="text-orange-400 text-lg" />,
  },
  {
    title: "Introduction to Modern AI",
    organization: "Cisco Networking Academy",
    year: "2026",
    status: "Completed",
    icon: <FaBrain className="text-orange-400 text-lg" />,
  },
  {
    title: "IT Specialist – HTML5 Application Development",
    organization: "Certiport",
    year: "2025",
    status: "Certified",
    icon: <SiHtml5 className="text-orange-400 text-lg" />,
  },
  {
    title: "Advanced Web Development",
    organization: "NAVTTC",
    year: "2025",
    status: "Completed",
    icon: <FaLaptopCode className="text-orange-400 text-lg" />,
  },
];

const IN_PROGRESS_COURSE = {
  title:
    "Build Generative AI SaaS Apps with ChatGPT, MongoDB, Firebase, Stripe, and More – No Coding Skills Required!",
  provider: "Udemy",
  status: "In Progress",
  topics: [
    { name: "Generative AI", icon: <FaBrain className="text-xs" /> },
    { name: "ChatGPT / LLMs", icon: <SiOpenai className="text-xs" /> },
    { name: "AI SaaS", icon: <FaCloud className="text-xs" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-xs" /> },
    { name: "Firebase", icon: <SiFirebase className="text-xs" /> },
    { name: "Stripe", icon: <SiStripe className="text-xs" /> },
  ],
};

export default function Certifications() {
  return (
    <section
      id="certifications"
      aria-label="Professional Certifications"
      className="relative py-20 px-6 md:px-16 lg:px-20 bg-[#0A2647] border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wider text-orange-400 uppercase mb-3">
            Verified Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Certifications
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
            Professional certifications and completed training that support my software engineering and technical work.
          </p>
        </motion.div>

        {/* COMPLETED CERTIFICATIONS GRID (3-Col on Desktop, 2-Col on Tablet, 1-Col on Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {COMPLETED_CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08, ease: "easeOut" }}
              className="bg-white/5 border border-white/10 hover:border-orange-500/30 rounded-xl p-6 sm:p-7 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Status Badge & Icon */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    {cert.icon}
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <FaCheckCircle className="text-[10px]" />
                    {cert.status}
                  </span>
                </div>

                {/* Certification Title */}
                <h3 className="text-lg font-bold text-white tracking-tight mb-2 leading-snug">
                  {cert.title}
                </h3>

                {/* Organization & Year */}
                <p className="text-sm font-medium text-orange-400 mb-1">
                  {cert.organization}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 mt-4 flex items-center justify-between text-xs text-gray-400">
                <span>Issued Year</span>
                <span className="font-semibold text-gray-200">{cert.year}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CURRENTLY LEARNING / IN-PROGRESS COURSE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          className="bg-white/5 border border-white/10 hover:border-orange-500/30 rounded-xl p-6 sm:p-7 transition-all duration-200"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                <FaGraduationCap className="text-orange-400 text-lg" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Certification in Progress
                </h3>
                <p className="text-xs text-gray-400">
                  Active Professional Training &bull; Provider: {IN_PROGRESS_COURSE.provider}
                </p>
              </div>
            </div>

            <span className="self-start sm:self-auto inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <FaHourglassHalf className="text-[10px]" />
              {IN_PROGRESS_COURSE.status}
            </span>
          </div>

          <p className="text-sm text-gray-300 leading-relaxed my-4">
            <span className="text-white font-medium">Course:</span> {IN_PROGRESS_COURSE.title}
          </p>

          <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
            <span className="text-xs font-medium text-gray-400 self-center mr-1">
              Curriculum Focus:
            </span>
            {IN_PROGRESS_COURSE.topics.map((topic, tIdx) => (
              <span
                key={tIdx}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-200 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md"
              >
                {topic.icon}
                {topic.name}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
