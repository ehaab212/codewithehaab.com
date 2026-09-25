import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Research from "./components/Research";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#0A2647] text-white min-h-screen flex flex-col antialiased">
      {/* Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-1">
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="research"><Research /></section>
        <section id="certifications"><Certifications /></section>
        <section id="contact"><Contact /></section>
      </main>

      {/* WhatsApp Button - floating */}
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;
