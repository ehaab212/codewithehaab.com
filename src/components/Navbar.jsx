import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const NAV_LINKS = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Research", id: "research" },
  { name: "Certifications", id: "certifications" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const accent = "#FF7A00";
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll state
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Detect active section
  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.getElementById(link.id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.35, rootMargin: "-80px 0px -40% 0px" }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Smooth scroll handler
  const scrollToSection = (e, id) => {
    e.preventDefault();
    setOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = -70; // offset for fixed navbar
      const top = element.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* NAVBAR CONTAINER */}
      <nav
        aria-label="Main Navigation"
        className={`flex items-center justify-between px-6 md:px-12 lg:px-20 py-4 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-md bg-[#0A2647]/95 border-b border-white/10 shadow-lg"
            : "backdrop-blur-sm bg-[#0A2647]/80 border-b border-white/5"
        }`}
      >
        {/* LOGO */}
        <button
          onClick={(e) => scrollToSection(e, "home")}
          className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide cursor-pointer text-left bg-transparent border-none focus:outline-none focus:ring-2 focus:ring-orange-400 rounded-md px-1"
          aria-label="Ehaab Ullah — Return to top"
        >
          <span style={{ color: accent }}>{`</`}</span>EU
          <span style={{ color: accent }}>{`>`}</span>
        </button>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex items-center space-x-6 text-sm font-medium">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.id;

            return (
              <li key={link.id}>
                <button
                  onClick={(e) => scrollToSection(e, link.id)}
                  className={`relative py-1 transition-colors cursor-pointer focus:outline-none focus:ring-1 focus:ring-orange-400 rounded ${
                    isActive ? "text-white font-semibold" : "text-gray-300 hover:text-white"
                  }`}
                >
                  <span>{link.name}</span>

                  {/* Active Indicator Underline */}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavTab"
                      className="absolute left-0 -bottom-1 h-[2px] w-full rounded"
                      style={{ background: accent }}
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {/* MOBILE MENU TOGGLE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white text-2xl p-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-400"
          aria-label={open ? "Close Navigation Menu" : "Open Navigation Menu"}
          aria-expanded={open}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* MOBILE DROPDOWN DRAWER */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 top-[65px] bg-black/60 backdrop-blur-xs lg:hidden z-40"
              aria-hidden="true"
            />

            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="relative lg:hidden bg-[#0A2647] border-b border-white/10 px-6 py-5 shadow-2xl z-50"
            >
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => {
                  const isActive = active === link.id;

                  return (
                    <li key={link.id}>
                      <button
                        onClick={(e) => scrollToSection(e, link.id)}
                        className={`w-full text-left py-2 px-3 rounded-lg text-sm font-medium transition-colors cursor-pointer flex items-center justify-between ${
                          isActive
                            ? "bg-white/10 text-orange-400 font-semibold"
                            : "text-gray-200 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <span>{link.name}</span>
                        {isActive && <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
