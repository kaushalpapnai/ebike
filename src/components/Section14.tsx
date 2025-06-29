"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { Easing, motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as Easing ,
    },
  },
};

const Section14: React.FC = () => {
  return (
    <motion.section
      className="flex flex-col items-center justify-center px-6 py-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div
        className="max-w-4xl mx-auto text-center space-y-8"
        variants={containerVariants}
      >
        {/* Logo */}
        <motion.div variants={itemVariants} className="inline-block">
          <div className="bg-gray-300 px-8 py-3 ">
            <span className="text-xl font-bold text-black tracking-wider">
              LOGO
            </span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight max-w-3xl mx-auto"
        >
          LOREM IPSUM DOLOR SIT AMET CONSECTETUR. DUI.
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-md md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto"
        >
          Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor
          pharetra tempor quis arcu. Ipsum nullam.
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={itemVariants} className="pt-2">
          <button className="inline-flex cursor-pointer items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-sm transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
            <span className="text-lg">Lorem Ipsum</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Section14;