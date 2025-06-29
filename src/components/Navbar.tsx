"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { MotionButton } from "@/ui/Button";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="absolute w-[95%] z-50 flex justify-between items-center py-4 px-6 sm:px-8 inset-x-0 mx-auto">
      {/* Left: Logo */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="text-xl sm:text-2xl font-bold tracking-tight bg-gray-200 px-4 py-2"
      >
        LOGO
      </motion.div>

      {/* Center: Nav Links (hidden on mobile) */}
      <div className="hidden md:flex space-x-8 text-[#0546D2] font-medium">
        <a href="#" className="hover:underline">
          Lorem Ipsum <span className="ml-1">▾</span>
        </a>
        <a href="#" className="hover:underline">
          Lorem Ipsum <span className="ml-1">▾</span>
        </a>
        <a href="#" className="hover:underline">
          Lorem Ipsum <span className="ml-1">▾</span>
        </a>
      </div>

      {/* Right: Sign In Button */}
      <div className="flex items-center space-x-4">
        <MotionButton
          variant="ghost"
          className=" hidden md:block font-inter font-semibold text-black shadow-md px-6 py-2 rounded-sm bg-white hover:bg-gray-100"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Sign In
        </MotionButton>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-black focus:outline-none"
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
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 w-full bg-white rounded-b-md overflow-hidden md:hidden z-40"
          >
            <div className="p-4 space-y-4">
              <a
                href="#"
                className="block text-[#0546D2] text-center font-medium"
              >
                Lorem Ipsum ▾
              </a>
              <a
                href="#"
                className="block text-[#0546D2] text-center font-medium"
              >
                Lorem Ipsum ▾
              </a>
              <a
                href="#"
                className="block text-[#0546D2] text-center font-medium"
              >
                Lorem Ipsum ▾
              </a>
              <MotionButton
                variant="ghost"
                className="w-full text-center font-inter font-semibold text-black px-4 py-2 hover:bg-gray-100"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Sign In
              </MotionButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
