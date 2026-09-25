// src/components/Skills.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiGit,
  SiGithub,
  SiStripe,
  SiOpenai,
} from "react-icons/si";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaBrain,
  FaGraduationCap,
  FaNetworkWired,
  FaChartLine,
  FaFileAlt,
  FaCheckDouble,
  FaRobot,
  FaCloud,
} from "react-icons/fa";

const SKILL_CATEGORIES = [
  {
    title: "Frontend Development",
    icon: <FaCode className="text-orange-400 text-lg" />,
    description: "Building responsive, modern, and high-performance client interfaces.",
    skills: [
      { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
      { name: "CSS3", icon: <SiCss3 className="text-[#1572B6]" /> },
      { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: "React.js", icon: <SiReact className="text-[#61DBFB]" /> },
    ],
  },
  {
    title: "Backend Development",
    icon: <FaServer className="text-orange-400 text-lg" />,
    description: "Developing scalable server runtimes, middleware, and API architectures.",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
      { name: "RESTful API Development", icon: <FaNetworkWired className="text-[#4DB6AC]" /> },
    ],
  },
  {
    title: "Databases & Backend Services",
    icon: <FaDatabase className="text-orange-400 text-lg" />,
    description: "Database schemas, query design, and cloud backend integration.",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
      { name: "Firebase (Cloud Service)", icon: <SiFirebase className="text-[#FFCA28]" /> },
    ],
  },
  {
    title: "Tools & Collaboration",
    icon: <FaTools className="text-orange-400 text-lg" />,
    description: "Version control, repository management, and structured teamwork.",
    skills: [
      { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
      { name: "GitHub", icon: <SiGithub className="text-white" /> },
    ],
  },
];

const AI_RESEARCH_SKILLS = [
  { name: "Machine Learning Fundamentals", icon: <FaBrain className="text-purple-400" /> },
  { name: "Natural Language Processing (NLP)", icon: <FaRobot className="text-blue-400" /> },
  { name: "Deep Learning", icon: <FaNetworkWired className="text-emerald-400" /> },
  { name: "Data Preprocessing", icon: <FaChartLine className="text-amber-400" /> },
  { name: "Research Writing", icon: <FaFileAlt className="text-rose-400" /> },
  { name: "Model Evaluation", icon: <FaCheckDouble className="text-cyan-400" /> },
];

const CURRENTLY_LEARNING = [
  { name: "Generative AI", icon: <FaRobot className="text-orange-400" /> },
  { name: "ChatGPT / LLM Integration", icon: <SiOpenai className="text-emerald-400" /> },
  { name: "AI SaaS Development", icon: <FaCloud className="text-blue-400" /> },
  { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
  { name: "Stripe Integration", icon: <SiStripe className="text-[#635BFF]" /> },
];

export default function Skills() {
  return (
    <section
      id="skills"
      aria-label="Technical Skills"
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
            Technical Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Skills & Technologies
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
            Technologies and engineering tools I work with across full-stack development, database management, and applied AI research.
          </p>
        </motion.div>

        {/* PRIMARY SKILL CATEGORIES (2x2 Grid on Desktop/Tablet) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08, ease: "easeOut" }}
              className="bg-white/5 border border-white/10 hover:border-orange-500/30 rounded-xl p-6 sm:p-7 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    {category.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {category.title}
                  </h3>
                </div>

                <p className="text-xs text-gray-400 mb-5 leading-relaxed">
                  {category.description}
                </p>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/[0.08] transition-colors text-xs sm:text-sm font-medium text-gray-200"
                    >
                      <span className="text-base shrink-0">{skill.icon}</span>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI & RESEARCH CATEGORY (Wide Card) */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          className="bg-white/5 border border-white/10 hover:border-orange-500/30 rounded-xl p-6 sm:p-7 mb-6 transition-all duration-200"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
              <FaBrain className="text-orange-400 text-lg" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              AI & Research
            </h3>
          </div>

          <p className="text-xs text-gray-400 mb-5 leading-relaxed">
            Machine learning modeling, NLP pipelines, data preprocessing, and academic publication methodologies.
          </p>

          <div className="flex flex-wrap gap-2.5">
            {AI_RESEARCH_SKILLS.map((skill, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/[0.08] transition-colors text-xs sm:text-sm font-medium text-gray-200"
              >
                <span className="text-base shrink-0">{skill.icon}</span>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CURRENTLY LEARNING / EXPLORING SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.25, ease: "easeOut" }}
          className="bg-white/5 border border-white/10 hover:border-orange-500/30 rounded-xl p-6 sm:p-7 transition-all duration-200"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                <FaGraduationCap className="text-orange-400 text-lg" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  Currently Learning & Exploring
                </h3>
              </div>
            </div>

            <span className="self-start sm:self-auto inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
              In Progress
            </span>
          </div>

          <p className="text-xs text-gray-400 mb-5 leading-relaxed max-w-3xl">
            Currently expanding skills in Generative AI architectures, LLM integrations, and modern AI SaaS development practices.
          </p>

          <div className="flex flex-wrap gap-2.5">
            {CURRENTLY_LEARNING.map((skill, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/[0.08] transition-colors text-xs sm:text-sm font-medium text-gray-200"
              >
                <span className="text-base shrink-0">{skill.icon}</span>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
