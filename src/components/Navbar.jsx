import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const LINKS = [
  "Home",
  "About",
  "Services",
  "Projects",
  "Skills",
   "Education",
  "Testimonials",
   "Contact",
];

const Navbar = () => {
  const accent = "#FF7A00"; // Orange
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Detect active section
  useEffect(() => {
    const sections = LINKS.map((l) =>
      document.getElementById(l.toLowerCase())
    ).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.45 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  // Smooth scroll without global CSS
  const scrollToSection = (e, id) => {
    e.preventDefault();
    setOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = -10; // small offset for fixed navbar
      const top = element.getBoundingClientRect().top + window.scrollY + offset;

      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      
      {/* NAVBAR CONTAINER */}
      <div
        className={`flex items-center justify-between px-6 md:px-16 py-4 transition-all duration-300
        ${scrolled ? "backdrop-blur-lg bg-[#0A2647]/90 shadow-xl" : "backdrop-blur-xl bg-white/10"}
      `}
      >
        {/* LOGO */}
        <div className="text-3xl font-extrabold text-white tracking-wide">
          <span style={{ color: accent }}>{`</`}</span>EU
          <span style={{ color: accent }}>{`>`}</span>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          {LINKS.map((link) => {
            const id = link.toLowerCase();
            const isActive = active === id;

            return (
              <li key={id}>
                <button
                  onClick={(e) => scrollToSection(e, id)}
                  className="relative group"
                >
                  <span
                    className={`transition ${
                      isActive ? "text-white" : "text-white/80 group-hover:text-white"
                    }`}
                  >
                    {link}
                  </span>

                  {/* Animated underline */}
                  <motion.span
                    layout
                    initial={false}
                    animate={{ width: isActive ? "100%" : "0%" }}
                    transition={{ type: "spring", stiffness: 260, damping: 30 }}
                    className="absolute left-0 -bottom-1 h-[2px] rounded"
                    style={{ background: accent }}
                  />
                </button>
              </li>
            );
          })}
        </ul>

        {/* MOBILE MENU ICON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#0A2647]/95 backdrop-blur-lg py-6 px-6"
          >
            <ul className="space-y-4 text-white text-lg font-medium">
              {LINKS.map((link) => {
                const id = link.toLowerCase();
                return (
                  <li key={id}>
                    <button
                      onClick={(e) => scrollToSection(e, id)}
                      className="w-full text-left py-2 hover:text-orange-400 transition"
                    >
                      {link}
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
