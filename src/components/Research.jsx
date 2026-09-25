// src/components/Research.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaBook, FaHourglassHalf, FaExternalLinkAlt, FaUsers } from "react-icons/fa";

const researchWorks = [
  {
    id: "fake-frame-detection",
    title: "Toward Efficient Fake Frame Detection in Video Using Deep Learning",
    status: "Published",
    year: "2026",
    venue: "International Journal of Frontier Sciences",
    authors: "Iftikhar Alam, Malik Ahsan Kamran, Ehaab Ullah",
    description:
      "Developed a deep learning system utilizing ResNet50 convolutional neural network architecture to detect manipulated video frames on the Celebrity Deepfake dataset, achieving 82.33% accuracy, 89.15% recall, and 82.46% F1 score.",
    tags: ["Deep Learning", "ResNet50", "Video Forensics", "Computer Vision"],
    publicationUrl: "https://www.researchgate.net/publication/413727564_Toward_Efficient_Fake_Frame_Detection_in_Video_Using_Deep_Learning", // real verified domain/publication destination
    hasPublicationLink: true,
  },
  {
    id: "depression-identification-nlp",
    title: "Early Identification of Depression from Twitter Data Using NLP",
    status: "In Progress",
    year: "2025",
    venue: "ICETUET 2025 (Paper ID: 261)",
    authors: "Malik Ahsan Kamran, Faran Saeed, Ehaab Ullah et al.",
    description:
      "Research involving NLP and machine-learning approaches for mental health distress classification from Twitter posts. Developed text normalization and feature extraction pipelines comparing classical algorithms with deep neural architectures.",
    tags: ["NLP", "Twitter Data", "SVM", "LSTM", "GRU", "GBM"],
    publicationUrl: null,
    hasPublicationLink: false,
  },
];

export default function Research() {
  return (
    <section
      id="research"
      aria-label="Research & Publications"
      className="relative py-20 px-6 md:px-16 lg:px-20 bg-[#0A2647] border-t border-white/5"
    >
      <div className="max-w-5xl mx-auto">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wider text-orange-400 uppercase mb-3">
            Academic Contributions
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Research & Publications
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
            Academic research papers and technical studies in deep learning video forensics and natural language processing.
          </p>
        </motion.div>

        {/* RESEARCH WORKS GRID (2 Columns on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {researchWorks.map((work, idx) => {
            const isPublished = work.status === "Published";

            return (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1, ease: "easeOut" }}
                className="bg-white/5 border border-white/10 hover:border-orange-500/30 rounded-xl p-6 sm:p-7 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* TOP STATUS BADGE */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border ${isPublished
                          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                          : "bg-amber-500/10 text-amber-400 border-amber-500/20"
                        }`}
                    >
                      {isPublished ? (
                        <FaBook className="text-[10px]" />
                      ) : (
                        <FaHourglassHalf className="text-[10px]" />
                      )}
                      {isPublished ? `Published • ${work.year}` : "Research in Progress"}
                    </span>

                    {/* Conference / Journal Tag */}
                    <span className="text-[11px] font-medium text-gray-400">
                      {isPublished ? "Journal Paper" : "Conference Paper"}
                    </span>
                  </div>

                  {/* Research Title */}
                  <h3 className="text-xl font-bold text-white tracking-tight mb-2 leading-snug">
                    {work.title}
                  </h3>

                  {/* Publication Venue / Context */}
                  <p className="text-sm font-medium text-orange-400 mb-2">
                    {work.venue}
                  </p>

                  {/* Authors List */}
                  <div className="flex items-start gap-2 text-xs text-gray-400 mb-4">
                    <FaUsers className="text-gray-500 mt-0.5 shrink-0" />
                    <span>{work.authors}</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-300 leading-relaxed mb-6">
                    {work.description}
                  </p>

                  {/* Methodology / Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {work.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-medium text-gray-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* ACTION BUTTON / STATUS FOOTER */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-3 mt-auto">
                  {isPublished && work.hasPublicationLink ? (
                    <a
                      href={work.publicationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-[#FF7A00] hover:bg-orange-600 px-4 py-2 rounded-lg transition-colors shadow-sm focus:outline-none focus:ring-1 focus:ring-orange-400"
                    >
                      View Publication &rarr;
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-2 rounded-lg">
                      <FaHourglassHalf className="text-[10px]" />
                      Under Review / Active Study
                    </span>
                  )}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
