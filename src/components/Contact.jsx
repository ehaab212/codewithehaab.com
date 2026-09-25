// src/components/Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaExclamationCircle,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // 'idle' | 'submitting' | 'success' | 'error'

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = "Please enter your name.";
    }
    if (!formData.email.trim()) {
      errs.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) {
      errs.message = "Please write a message.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    try {
      const subject = encodeURIComponent(
        formData.subject.trim() || `Portfolio Contact from ${formData.name.trim()}`
      );
      const body = encodeURIComponent(
        `Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}`
      );

      const mailtoUrl = `mailto:ehaabullah912@gmail.com?subject=${subject}&body=${body}`;

      // Open email client safely
      window.location.href = mailtoUrl;

      setTimeout(() => {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 600);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      aria-label="Contact Section"
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
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Let's Work Together
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
            Have a project, opportunity, or idea you'd like to discuss? Feel free to reach out.
          </p>
        </motion.div>

        {/* 2-COLUMN LAYOUT: CONTACT DETAILS (LEFT) & FORM (RIGHT) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: CONTACT INFORMATION CARDS */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Direct Email Card */}
            <a
              href="mailto:ehaabullah912@gmail.com"
              className="block bg-white/5 border border-white/10 hover:border-orange-500/40 rounded-xl p-5 transition-all duration-200 group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-orange-400 group-hover:scale-105 transition-transform">
                  <FaEnvelope className="text-base" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                    Direct Email
                  </p>
                  <p className="text-sm sm:text-base font-semibold text-white group-hover:text-orange-400 transition-colors">
                    ehaabullah912@gmail.com
                  </p>
                </div>
              </div>
            </a>

            {/* Location Card */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-orange-400">
                  <FaMapMarkerAlt className="text-base" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                    Location
                  </p>
                  <p className="text-sm sm:text-base font-semibold text-white">
                    Peshawar / Swabi, Pakistan
                  </p>
                </div>
              </div>
            </div>

            {/* Professional Profiles Card */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-3">
                Professional Networks
              </p>

              <div className="space-y-2.5">
                <a
                  href="https://github.com/ehaab212"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-white/25 hover:bg-white/10 transition-colors text-sm text-gray-200"
                >
                  <span className="flex items-center gap-2.5 font-medium">
                    <FaGithub className="text-base text-white" />
                    GitHub
                  </span>
                  <span className="text-xs text-gray-400 font-mono">github.com/ehaab212</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/ehaab-ullah-b064372b1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-white/25 hover:bg-white/10 transition-colors text-sm text-gray-200"
                >
                  <span className="flex items-center gap-2.5 font-medium">
                    <FaLinkedin className="text-base text-blue-400" />
                    LinkedIn
                  </span>
                  <span className="text-xs text-gray-400 font-mono">linkedin.com/in/ehaab-ullah</span>
                </a>
              </div>
            </div>

            {/* Availability Note */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0 animate-pulse" />
              <p className="text-xs text-gray-300 leading-relaxed">
                Available for full-time software engineering roles, MERN stack development, and AI research collaborations.
              </p>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-7 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8"
          >
            <h3 className="text-xl font-bold text-white tracking-tight mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 mb-6">
              Fill out the form below to initiate direct communication.
            </p>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5"
                >
                  Full Name <span className="text-orange-400">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={`w-full px-4 py-2.5 rounded-lg bg-white/5 border text-sm text-white placeholder-gray-500 transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF7A00] ${
                    errors.name ? "border-red-500/80" : "border-white/10 focus:border-transparent"
                  }`}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="flex items-center gap-1 text-xs text-red-400 mt-1">
                    <FaExclamationCircle className="text-[10px]" />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5"
                >
                  Email Address <span className="text-orange-400">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className={`w-full px-4 py-2.5 rounded-lg bg-white/5 border text-sm text-white placeholder-gray-500 transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF7A00] ${
                    errors.email ? "border-red-500/80" : "border-white/10 focus:border-transparent"
                  }`}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="flex items-center gap-1 text-xs text-red-400 mt-1">
                    <FaExclamationCircle className="text-[10px]" />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Subject Field */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5"
                >
                  Subject <span className="text-gray-500 font-normal">(Optional)</span>
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry / Opportunity"
                  className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder-gray-500 transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF7A00] focus:border-transparent"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5"
                >
                  Message <span className="text-orange-400">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please describe your project, inquiry, or opportunity..."
                  className={`w-full px-4 py-2.5 rounded-lg bg-white/5 border text-sm text-white placeholder-gray-500 transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF7A00] resize-none ${
                    errors.message ? "border-red-500/80" : "border-white/10 focus:border-transparent"
                  }`}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="flex items-center gap-1 text-xs text-red-400 mt-1">
                    <FaExclamationCircle className="text-[10px]" />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Feedback Notifications */}
              {status === "success" && (
                <div className="flex items-start gap-2.5 p-3.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs sm:text-sm text-emerald-400">
                  <FaCheckCircle className="text-base mt-0.5 shrink-0" />
                  <span>Your message has been prepared successfully. Thank you for reaching out!</span>
                </div>
              )}

              {status === "error" && (
                <div className="flex items-start gap-2.5 p-3.5 rounded-lg bg-red-500/10 border border-red-500/20 text-xs sm:text-sm text-red-400">
                  <FaExclamationCircle className="text-base mt-0.5 shrink-0" />
                  <span>Something went wrong. Please reach out directly via ehaabullah912@gmail.com.</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-[#FF7A00] hover:bg-orange-600 disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF7A00] focus:ring-offset-2 focus:ring-offset-[#0A2647] cursor-pointer"
              >
                {status === "submitting" ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="text-xs" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
