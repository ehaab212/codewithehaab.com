// src/components/Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Research", href: "#research" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      href: "https://github.com/ehaab212",
      ariaLabel: "GitHub Profile",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/ehaab-ullah-b064372b1",
      ariaLabel: "LinkedIn Profile",
    },
    {
      name: "Email",
      icon: <FaEnvelope />,
      href: "mailto:ehaabullah912@gmail.com",
      ariaLabel: "Direct Email",
    },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      const offset = -10;
      const top = element.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-[#071B33] border-t border-white/10 text-white py-12 px-6 md:px-16 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* BRAND & POSITIONING */}
        <div className="text-center md:text-left">
          <div className="text-2xl font-extrabold tracking-wide mb-1.5">
            <span className="text-[#FF7A00]">{`</`}</span>Ehaab Ullah
            <span className="text-[#FF7A00]">{`>`}</span>
          </div>
          <p className="text-xs text-gray-400 max-w-sm">
            Software Engineer &bull; MERN Stack Developer &bull; AI Researcher
          </p>
        </div>

        {/* QUICK NAVIGATION LINKS */}
        <nav aria-label="Footer Navigation">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium text-gray-300">
            {links.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="hover:text-orange-400 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* SOCIAL LINKS */}
        <div className="flex items-center gap-3">
          {socialLinks.map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.ariaLabel}
              className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:border-orange-500/40 hover:bg-white/10 hover:text-orange-400 transition-all flex items-center justify-center text-gray-300 text-base"
            >
              {social.icon}
            </a>
          ))}
        </div>

      </div>

      {/* DIVIDER & COPYRIGHT */}
      <div className="max-w-6xl mx-auto border-t border-white/5 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
        <p>&copy; {currentYear} Ehaab Ullah. All rights reserved.</p>
        <p className="text-gray-400">Built with React &amp; Vite</p>
      </div>
    </footer>
  );
}
