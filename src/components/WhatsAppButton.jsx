// src/components/WhatsAppButton.jsx
import { useState } from "react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = "+923105925068"; // Your default number
  const defaultMessage = "Hi! I’d like to discuss a project with you.";

  const handleSend = () => {
    const text = encodeURIComponent(document.getElementById("waMessage").value || defaultMessage);
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <>
      {/* WhatsApp Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50 flex flex-col items-end"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Online Dot */}
        <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full animate-pulse border border-white"></span>

        {/* Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex items-center justify-center bg-[#25D366] hover:bg-[#1DA851] shadow-lg rounded-full w-14 h-14 text-white text-2xl cursor-pointer"
        >
          <FaWhatsapp />
        </button>

        {/* Tooltip */}
        <motion.span
          initial={{ opacity: 0, x: 10 }}
          whileHover={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="hidden md:inline-block bg-black/80 text-white text-sm font-medium px-3 py-1 rounded-lg absolute right-full mr-4 whitespace-nowrap"
        >
          Contact me on WhatsApp
        </motion.span>

        {/* Chat Box */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.3 }}
              className="mt-4 w-72 md:w-80 bg-gray-900 text-white rounded-2xl shadow-xl border border-gray-700 overflow-hidden"
            >
              <div className="bg-[#25D366] px-4 py-2 flex justify-between items-center rounded-t-2xl">
                <h4 className="font-semibold">Contact me I'm Online</h4>
                <button onClick={() => setIsOpen(false)} className="text-white font-bold">&times;</button>
              </div>

              <div className="p-4">
                <textarea
                  id="waMessage"
                  defaultValue={defaultMessage}
                  className="w-full h-24 p-2 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none resize-none"
                />
                <button
                  onClick={handleSend}
                  className="mt-3 w-full bg-[#25D366] hover:bg-[#1DA851] py-2 rounded-lg font-semibold transition"
                >
                  Send
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
