"use client";

import Image from "next/image";
import React from "react";
import img from "@/images/sec9_sec_com.png";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Sec9SecComp = () => {
  return (
    <motion.section
      className="mt-20 lg:mt-48"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
    >
      <div className="w-[95%] mx-auto">
        <div className="relative flex flex-col lg:flex-row items-end overflow-visible min-h-[500px]">
          {/* Left Image with pop-out effect */}
          <motion.div
            variants={item}
            className="lg:w-1/2 w-full relative z-0"
          >
            <div className="relative h-[480px] z-10">
              <Image
                src={img}
                alt="Riders"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="h-[60px] bg-gray-200"></div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            variants={item}
            className="lg:w-1/2 w-full h-[500px] bg-gray-200 p-8 lg:p-12 space-y-6 flex flex-col justify-center z-10"
          >
            <p className="text-blue-600 font-semibold text-sm uppercase">
              Lorem ipsum
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">
              LOREM IPSUM DOLOR SIT <br />
              AMET CONSECTETUR. ENIM DONEC.
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Vel pellentesque odio enim amet non.
            </p>

            <div className="grid grid-cols-2 gap-y-3 gap-x-8 text-sm font-semibold text-gray-800">
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
            </div>

            <div>
              <button className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-semibold text-sm shadow-md transition-all duration-200">
                Loreum Ipsum <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Gradient Line */}
        <motion.div
          variants={item}
          className="w-full h-5 bg-gradient-to-r from-[#043898] via-[#079902] to-[#170041] via-60% "
        />
      </div>
    </motion.section>
  );
};

export default Sec9SecComp;