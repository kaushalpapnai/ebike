"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import section3_img from "@/images/section3.png";
import { Easing, motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as Easing ,
    },
  },
};

export default function Section3() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="relative w-full h-screen overflow-hidden p-5 mt-20"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${section3_img.src})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Header with Logo */}
        <header className="flex items-start justify-start p-6 lg:p-8">
          <motion.div variants={itemVariants} className="bg-white px-6 py-3 rounded-sm">
            <h1 className="text-xl lg:text-2xl font-bold text-black">LOGO</h1>
          </motion.div>
        </header>

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            className="max-w-4xl mx-auto text-center text-white space-y-6 lg:space-y-8"
          >
            <motion.h1
              variants={itemVariants}
              className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight"
            >
              LOREM IPSUM DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING PURUS EGESTAS ALIQUAM VIVERRA MI.
            </motion.h1>

            <motion.div
              variants={containerVariants}
              className="space-y-4 lg:space-y-6 text-sm md:text-base lg:text-lg"
            >
              <motion.p variants={itemVariants} className="leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Mattis justo euismod volutpat vestibulum nisl at ac risus amet. Mi accumsan sagittis justo pellentesque id sed. Id tellus id luctus id. At quis nunc libero urna arcu vulputate sed ut. Nisl porta massa diam condimentum nulla quam.
              </motion.p>

              <motion.p variants={itemVariants} className="leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec condimentum ultrices non. Ornare semper in tincidunt pellentesque cras mauris in vitae. At viverra quis eu malesuada vel et porttitor. Nulla luctus quam lacus lacus non at. Tincidunt morbi feugiat a pulvinar euismod natoque nulla ligula. Tincidunt cursus vitae leo.
              </motion.p>
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants} className="pt-4 lg:pt-6">
              <button className="inline-flex cursor-pointer items-center gap-2 bg-white text-blue-600 px-6 py-3 lg:px-8 lg:py-4 rounded-md font-semibold text-sm lg:text-base hover:bg-gray-100 transition-colors duration-300 shadow-lg">
                Lorem Ipsum
                <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}