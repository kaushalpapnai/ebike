"use client";

import React from 'react';
import { motion } from "framer-motion";
import img from "@/images/section6_img.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

export default function Section6() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      className="relative w-full overflow-hidden p-5 mt-20"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${img.src})`
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Header with Logo */}
        <header className="flex items-start justify-start p-6 lg:p-8">
          <motion.div variants={fadeUp} className="bg-white px-6 py-3 rounded-sm">
            <h1 className="text-xl lg:text-2xl font-bold text-black">LOGO</h1>
          </motion.div>
        </header>

        {/* Main Content - Centered */}
        <motion.div
          variants={fadeUp}
          className="flex-1 flex items-center justify-center px-6 lg:px-8 mt-10 mb-40"
        >
          <div className="max-w-4xl mx-auto text-center text-white space-y-6 lg:space-y-8">
            <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight">
              dolor sit amet consectetur. Quis adipiscing purus egestas aliquam viverra mi. dolor sit amet consectetur. Quis adipiscing
            </h1>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}