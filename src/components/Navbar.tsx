"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence, Easing, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { MotionButton } from "@/ui/Button";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50); // Change background after 50px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className={`fixed w-[95%] z-50 flex justify-between items-center py-4 px-6 sm:px-8 inset-x-0 mx-auto top-4 rounded-lg transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg border border-gray-200/50" 
          : "bg-transparent"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6,  ease: [0.25, 0.1, 0.25, 1] as Easing  }}
    >
      {/* Left: Logo */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className={`text-xl sm:text-2xl font-bold tracking-tight px-4 py-2 transition-colors duration-300 ${
          isScrolled ? "bg-gray-100 text-gray-900" : "bg-gray-200 text-black"
        }`}
      >
        LOGO
      </motion.div>

      {/* Center: Nav Links (hidden on mobile) */}
      <div className={`hidden md:flex space-x-8 font-medium transition-colors duration-300 ${
        isScrolled ? "text-[#0546D2]" : "text-[#0546D2]"
      }`}>
        <a href="#" className="hover:underline transition-all duration-200 hover:text-blue-700">
          Lorem Ipsum <span className="ml-1">▾</span>
        </a>
        <a href="#" className="hover:underline transition-all duration-200 hover:text-blue-700">
          Lorem Ipsum <span className="ml-1">▾</span>
        </a>
        <a href="#" className="hover:underline transition-all duration-200 hover:text-blue-700">
          Lorem Ipsum <span className="ml-1">▾</span>
        </a>
      </div>

      {/* Right: Sign In Button */}
      <div className="flex items-center space-x-4">
        <MotionButton
          variant="ghost"
          className={`hidden md:block font-inter font-semibold shadow-md px-6 py-2 rounded-sm transition-all duration-300 ${
            isScrolled 
              ? "text-black bg-white hover:bg-gray-50 border border-gray-200" 
              : "text-black bg-white hover:bg-gray-100"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Sign In
        </MotionButton>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden focus:outline-none transition-colors duration-300 ${
            isScrolled ? "text-gray-900" : "text-black"
          }`}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3,  ease: [0.25, 0.1, 0.25, 1] as Easing  }}
            className={`absolute top-full left-0 w-full rounded-b-lg overflow-hidden md:hidden z-40 mt-2 ${
              isScrolled 
                ? "bg-white/95 backdrop-blur-md shadow-lg border border-gray-200/50" 
                : "bg-white shadow-md"
            }`}
          >
            <div className="p-4 space-y-4">
              <a
                href="#"
                className="block text-[#0546D2] text-center font-medium hover:text-blue-700 transition-colors duration-200"
              >
                Lorem Ipsum ▾
              </a>
              <a
                href="#"
                className="block text-[#0546D2] text-center font-medium hover:text-blue-700 transition-colors duration-200"
              >
                Lorem Ipsum ▾
              </a>
              <a
                href="#"
                className="block text-[#0546D2] text-center font-medium hover:text-blue-700 transition-colors duration-200"
              >
                Lorem Ipsum ▾
              </a>
              <MotionButton
                variant="ghost"
                className="w-full text-center font-inter font-semibold text-black px-4 py-2 hover:bg-gray-100 transition-colors duration-200"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Sign In
              </MotionButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;