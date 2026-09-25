// src/components/Projects.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaLock,
  FaInfoCircle,
  FaTimes,
  FaCheckCircle,
  FaHourglassHalf,
} from "react-icons/fa";

const ALL_PROJECTS = [
  {
    id: "medvission",
    title: "MedVission",
    category: "AI / Computer Vision",
    type: "AI / ML",
    status: "Completed",
    repoVisibility: "Public",
    featured: true,
    githubUrl: "https://github.com/ehaab212",
    liveUrl: null,
    shortDesc:
      "AI-powered chest X-ray analysis application for automated image classification and research experimentation.",
    overview:
      "MedVission is an educational and research-focused computer vision platform designed to classify and analyze chest X-ray images using convolutional neural networks.",
    techStack: ["Python", "Flask", "TensorFlow", "Keras", "OpenCV", "NumPy"],
    keyHighlights: [
      "Deep learning image classification pipeline for radiographic scan evaluation.",
      "Lightweight Flask backend serving model inference endpoints.",
      "Image preprocessing and normalization routines using OpenCV.",
    ],
  },
  {
    id: "sprintflow",
    title: "SprintFlow",
    category: "Full-Stack / Agile Tools",
    type: "Full-Stack",
    status: "In Progress",
    repoVisibility: "Public",
    featured: true,
    githubUrl: "https://github.com/ehaab212",
    liveUrl: null,
    shortDesc:
      "Modern agile project management and sprint tracking web application built for engineering teams.",
    overview:
      "SprintFlow provides teams with a streamlined interface for backlog grooming, sprint lifecycle management, and task status tracking.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma"],
    keyHighlights: [
      "Type-safe data modeling and schema migrations via Prisma ORM.",
      "Responsive kanban and sprint boards with modern Tailwind UI components.",
      "Server actions and API routes designed with Next.js App Router.",
    ],
  },
  {
    id: "diyartailor",
    title: "DiyarTailor",
    category: "Full-Stack / Management",
    type: "Full-Stack",
    status: "In Progress",
    repoVisibility: "Private",
    featured: true,
    githubUrl: null,
    liveUrl: null,
    shortDesc:
      "Custom tailoring business platform with customer measurement records, order tracking, and billing workflows.",
    overview:
      "DiyarTailor is a full-stack tailoring enterprise platform that digitizes traditional tailor shop operations including customer fittings, dress specifications, and delivery status.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    keyHighlights: [
      "Custom measurement record storage and client profiling.",
      "Order status lifecycle management from cutting to dispatch.",
      "Secure authentication and role-based access control.",
    ],
  },
  {
    id: "hospital-management",
    title: "Hospital Management System",
    category: "Full-Stack / Healthcare",
    type: "Full-Stack",
    status: "Completed",
    repoVisibility: "Public",
    featured: true,
    githubUrl: "https://github.com/ehaab212",
    liveUrl: null,
    shortDesc:
      "Full-stack administrative management platform for clinical records, doctor scheduling, and patient registry.",
    overview:
      "A database-driven hospital management system designed to streamline patient intake, department allocation, and appointments.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "RESTful APIs"],
    keyHighlights: [
      "RESTful API endpoints for patient records and staff scheduling.",
      "Database schema designed for fast queries and relational integrity.",
      "Interactive dashboard for administrative management.",
    ],
  },
  {
    id: "restaurant-voice-ai",
    title: "Restaurant Voice AI",
    category: "AI / Speech Interface",
    type: "AI / ML",
    status: "Completed",
    repoVisibility: "Public",
    featured: true,
    githubUrl: "https://github.com/ehaab212",
    liveUrl: null,
    shortDesc:
      "Interactive voice assistant web tool designed for voice-driven menu browsing and automated food order processing.",
    overview:
      "An AI and web interface that listens to natural voice input to assist restaurant customers in browsing menu items and submitting food orders.",
    techStack: ["Python", "Web Speech API", "React", "Node.js", "NLP"],
    keyHighlights: [
      "Voice recognition and speech synthesis integration.",
      "Intent matching algorithms for food item selection.",
      "Real-time cart and order calculation state.",
    ],
  },
  {
    id: "heritage-tours",
    title: "Heritage Tours",
    category: "Frontend / Tourism",
    type: "Full-Stack",
    status: "Completed",
    repoVisibility: "Public",
    featured: true,
    githubUrl: "https://github.com/ehaab212",
    liveUrl: "https://heritage-tours-nu.vercel.app",
    shortDesc:
      "Responsive heritage tourism web platform featuring destination discovery, cultural tours, and trip planning.",
    overview:
      "A production-deployed heritage tourism website showcasing historical destinations, cultural discovery packages, and interactive travel experiences.",
    techStack: ["React", "Tailwind CSS", "Vite", "Vercel"],
    keyHighlights: [
      "Live deployment on Vercel with optimized asset delivery.",
      "Fluid responsive layout with mobile-first navigation.",
      "Dynamic destination browsing and travel itinerary cards.",
    ],
  },
  {
    id: "shetracker",
    title: "SheTracker",
    category: "Full-Stack / Healthcare",
    type: "Full-Stack",
    status: "Completed",
    repoVisibility: "Public",
    featured: false,
    githubUrl: "https://github.com/ehaab212",
    liveUrl: null,
    shortDesc:
      "Healthcare tracking application providing personalized wellness logs, notifications, and cycle history monitoring.",
    overview:
      "A user-centric health tracking platform providing calendar visualization, symptom recording, and historical health trend charts.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB"],
    keyHighlights: [
      "User-specific data encryption and privacy controls.",
      "Custom date calculations and visual calendar integration.",
      "Clean, accessible interface designed with modern UI standards.",
    ],
  },
  {
    id: "fake-video-detection",
    title: "Fake Video Detection",
    category: "AI / Video Forensics",
    type: "AI / ML",
    status: "Completed",
    repoVisibility: "Public",
    featured: false,
    githubUrl: "https://github.com/ehaab212",
    liveUrl: null,
    shortDesc:
      "Deep learning system for video frame analysis and forensic manipulation detection using ResNet50 architectures.",
    overview:
      "Research and development project applying convolutional neural networks to extract and analyze individual video frames for deepfake artifacts.",
    techStack: ["Python", "ResNet50", "PyTorch", "OpenCV", "NumPy"],
    keyHighlights: [
      "Frame extraction and face cropping preprocessing pipeline.",
      "Evaluation on the Celebrity Deepfake dataset with 82.33% accuracy.",
      "Inference script for frame-by-frame probability scoring.",
    ],
  },
  {
    id: "ai-saas-platform",
    title: "AI SaaS Platform",
    category: "Full-Stack / AI Tooling",
    type: "Full-Stack",
    status: "In Progress",
    repoVisibility: "Public",
    featured: false,
    githubUrl: "https://github.com/ehaab212",
    liveUrl: null,
    shortDesc:
      "Multi-tenant AI SaaS application integrating modern language model APIs with credit-based usage workflows.",
    overview:
      "A software-as-a-service web template featuring authentication, usage limits, and integration with OpenAI and modern LLM APIs.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Stripe"],
    keyHighlights: [
      "User dashboard with real-time prompt generation and history.",
      "Credit deduction logic on backend API endpoints.",
      "Modern dark theme interface with accessible components.",
    ],
  },
  {
    id: "nlp-mental-health",
    title: "NLP Mental Health Analysis",
    category: "AI / NLP Research",
    type: "AI / ML",
    status: "Completed",
    repoVisibility: "Public",
    featured: false,
    githubUrl: "https://github.com/ehaab212",
    liveUrl: null,
    shortDesc:
      "End-to-end NLP sentiment classification pipeline comparing classical ML and deep models on text distress markers.",
    overview:
      "Research implementation analyzing short-text social posts to detect distress indicators using tokenization, TF-IDF representations, and SVM classifiers.",
    techStack: ["Python", "Scikit-Learn", "TF-IDF", "SVM", "Pandas"],
    keyHighlights: [
      "Text normalization, stopword removal, and n-gram feature extraction.",
      "Comparative benchmark showing SVM achieving 82.8% classification accuracy.",
      "Model validation with precision, recall, and F1-score evaluation metrics.",
    ],
  },
  {
    id: "codealpha-url-shortener",
    title: "CodeAlpha URL Shortener",
    category: "Backend / Utility",
    type: "Full-Stack",
    status: "Completed",
    repoVisibility: "Public",
    featured: false,
    githubUrl: "https://github.com/ehaab212",
    liveUrl: null,
    shortDesc:
      "Fast URL shortening and redirection web service with click analytics and unique slug generation.",
    overview:
      "A utility service that generates compact hashed URLs and redirects visitors while recording traffic counts and timestamps.",
    techStack: ["Node.js", "Express.js", "MongoDB", "RESTful APIs"],
    keyHighlights: [
      "Base62 / nano-ID hash generation for custom shortlinks.",
      "Express redirect middleware with lookup indexing.",
      "Analytics tracking for link hit counts.",
    ],
  },
  {
    id: "codealpha-event-system",
    title: "CodeAlpha Event System",
    category: "Full-Stack / Events",
    type: "Full-Stack",
    status: "Completed",
    repoVisibility: "Public",
    featured: false,
    githubUrl: "https://github.com/ehaab212",
    liveUrl: null,
    shortDesc:
      "Event creation, seat reservation, and attendee registry web system for institutional workshops.",
    overview:
      "An event management portal allowing organizers to schedule workshops, collect attendee registrations, and manage capacity quotas.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB"],
    keyHighlights: [
      "Event creation form with date/capacity validation.",
      "Participant booking and reservation confirmation flows.",
      "Admin view of confirmed attendees and remaining seats.",
    ],
  },
];

const FILTERS = ["All", "Featured", "Full-Stack", "AI / ML", "Completed", "In Progress"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("Featured");
  const [selectedProject, setSelectedProject] = useState(null);

  // Filter projects based on active filter
  const filteredProjects = ALL_PROJECTS.filter((proj) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Featured") return proj.featured;
    if (activeFilter === "Full-Stack") return proj.type === "Full-Stack";
    if (activeFilter === "AI / ML") return proj.type === "AI / ML";
    if (activeFilter === "Completed") return proj.status === "Completed";
    if (activeFilter === "In Progress") return proj.status === "In Progress";
    return true;
  });

  return (
    <section
      id="projects"
      aria-label="Projects Section"
      className="relative py-20 px-6 md:px-16 lg:px-20 bg-[#0A2647] border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-10 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wider text-orange-400 uppercase mb-3">
            Portfolio Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
            A curated selection of full-stack web applications, AI systems, and research tools built with modern engineering practices.
          </p>
        </motion.div>

        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-10">
          {FILTERS.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-400 ${
                  isActive
                    ? "bg-[#FF7A00] text-white shadow-sm"
                    : "bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                {filter}
                {filter === "Featured" && (
                  <span className="ml-1.5 text-[10px] px-1.5 py-0.5 rounded-full bg-white/20">
                    6
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* PROJECTS GRID (3-column on Desktop, 2-column on Tablet, 1-column on Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => {
            const isCompleted = project.status === "Completed";
            const isPrivate = project.repoVisibility === "Private";
            const hasLiveDemo = Boolean(project.liveUrl);

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx % 6) * 0.08, ease: "easeOut" }}
                className="bg-white/5 border border-white/10 hover:border-orange-500/40 rounded-xl p-6 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* TOP BADGES ROW */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    {/* Completion Status Badge */}
                    <span
                      className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full border ${
                        isCompleted
                          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                          : "bg-amber-500/10 text-amber-400 border-amber-500/20"
                      }`}
                    >
                      {isCompleted ? (
                        <FaCheckCircle className="text-[10px]" />
                      ) : (
                        <FaHourglassHalf className="text-[10px]" />
                      )}
                      {project.status}
                    </span>

                    {/* Repository Visibility Badge */}
                    <span
                      className={`inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-md border ${
                        isPrivate
                          ? "bg-purple-500/10 text-purple-300 border-purple-500/20"
                          : "bg-white/5 text-gray-400 border-white/10"
                      }`}
                    >
                      {isPrivate ? <FaLock className="text-[10px]" /> : null}
                      {project.repoVisibility} Repo
                    </span>
                  </div>

                  {/* Category Subtitle */}
                  <p className="text-xs font-semibold text-orange-400 uppercase tracking-wider mb-1">
                    {project.category}
                  </p>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-white tracking-tight mb-2.5">
                    {project.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-gray-300 leading-relaxed mb-5">
                    {project.shortDesc}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-medium text-gray-300 bg-white/5 border border-white/10 px-2 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* ACTION BUTTONS ROW (Aligned at Bottom) */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-2 mt-auto">
                  {/* Read More Button */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-2 rounded-lg transition-colors cursor-pointer focus:outline-none focus:ring-1 focus:ring-orange-400"
                    aria-label={`Read more details about ${project.title}`}
                  >
                    <FaInfoCircle className="text-xs text-orange-400" />
                    Details
                  </button>

                  {/* External Links: GitHub & Live Demo */}
                  <div className="flex items-center gap-2">
                    {/* Public GitHub Link */}
                    {!isPrivate && project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-2 rounded-lg transition-colors focus:outline-none focus:ring-1 focus:ring-orange-400"
                        aria-label={`View GitHub repository for ${project.title}`}
                      >
                        <FaGithub />
                        Code
                      </a>
                    )}

                    {/* Private Repo Indicator if no GitHub link */}
                    {isPrivate && (
                      <span
                        className="inline-flex items-center gap-1 text-xs text-gray-400 bg-white/5 border border-white/10 px-2.5 py-2 rounded-lg"
                        title="Repository is private"
                      >
                        <FaLock className="text-[10px] text-gray-400" />
                        Private
                      </span>
                    )}

                    {/* Live Demo Link (Heritage Tours) */}
                    {hasLiveDemo && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-white bg-[#FF7A00] hover:bg-orange-600 px-3 py-2 rounded-lg transition-colors focus:outline-none focus:ring-1 focus:ring-orange-400 shadow-sm"
                        aria-label={`Open live deployment for ${project.title}`}
                      >
                        Live Demo
                        <FaExternalLinkAlt className="text-[10px]" />
                      </a>
                    )}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM CTA: VIEW ALL PROJECTS ON GITHUB */}
        <div className="mt-14 text-center">
          <a
            href="https://github.com/ehaab212"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            <FaGithub className="text-base" />
            View All Projects on GitHub &rarr;
          </a>
        </div>

      </div>

      {/* DETAIL MODAL FOR "READ MORE" */}
      <AnimatePresence>
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs"
            onClick={() => setSelectedProject(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0A2647] border border-white/15 rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10">
                <div>
                  <span className="text-xs font-semibold text-orange-400 uppercase tracking-wider">
                    {selectedProject.category}
                  </span>
                  <h3
                    id="modal-project-title"
                    className="text-2xl font-bold text-white tracking-tight mt-1"
                  >
                    {selectedProject.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Close project modal"
                >
                  <FaTimes className="text-lg" />
                </button>
              </div>

              {/* Status Row */}
              <div className="flex flex-wrap items-center gap-2 my-4">
                <span
                  className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${
                    selectedProject.status === "Completed"
                      ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                      : "bg-amber-500/10 text-amber-400 border-amber-500/20"
                  }`}
                >
                  {selectedProject.status === "Completed" ? (
                    <FaCheckCircle className="text-[10px]" />
                  ) : (
                    <FaHourglassHalf className="text-[10px]" />
                  )}
                  Status: {selectedProject.status}
                </span>

                <span
                  className={`inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full border ${
                    selectedProject.repoVisibility === "Private"
                      ? "bg-purple-500/10 text-purple-300 border-purple-500/20"
                      : "bg-white/5 text-gray-300 border-white/10"
                  }`}
                >
                  {selectedProject.repoVisibility === "Private" ? (
                    <FaLock className="text-[10px]" />
                  ) : null}
                  Repository: {selectedProject.repoVisibility}
                </span>
              </div>

              {/* Overview Description */}
              <div className="mb-5">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                  Project Overview
                </h4>
                <p className="text-sm text-gray-200 leading-relaxed">
                  {selectedProject.overview}
                </p>
              </div>

              {/* Key Implementation Highlights */}
              {selectedProject.keyHighlights && (
                <div className="mb-5">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                    Implementation Highlights
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {selectedProject.keyHighlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 shrink-0" />
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technology Stack */}
              <div className="mb-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-medium text-gray-200 bg-white/5 border border-white/10 px-2.5 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  {selectedProject.repoVisibility === "Public" && selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/15 px-4 py-2 rounded-lg transition-colors"
                    >
                      <FaGithub className="text-sm" />
                      View on GitHub
                    </a>
                  )}

                  {selectedProject.repoVisibility === "Private" && (
                    <span className="inline-flex items-center gap-1.5 text-xs text-gray-400 bg-white/5 border border-white/10 px-3 py-2 rounded-lg">
                      <FaLock className="text-xs" />
                      Private Repository
                    </span>
                  )}

                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-[#FF7A00] hover:bg-orange-600 px-4 py-2 rounded-lg transition-colors shadow-sm"
                    >
                      Open Live Demo
                      <FaExternalLinkAlt className="text-xs" />
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-xs font-semibold text-gray-400 hover:text-white px-3 py-2 rounded-lg cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
