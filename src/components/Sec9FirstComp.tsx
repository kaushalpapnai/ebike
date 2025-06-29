"use client";

import Image from "next/image";
import React from "react";
import img from "@/images/grouped_bike.png";
import { Easing, motion } from "framer-motion";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6,  ease: [0.25, 0.1, 0.25, 1] as Easing  },
  },
};

const Sec9FirstComp = () => {
  return (
    <motion.section
      className="bg-[#f3f7fc]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
    >
      <div className="lg:h-screen mx-auto flex flex-col items-start gap-12 relative">
        {/* Left Content */}
        <motion.div
          variants={container}
          className="lg:w-1/2 space-y-6 p-10 z-10"
        >
          <motion.p
            variants={item}
            className="text-sm font-semibold text-gray-500 uppercase tracking-wide"
          >
            No Limits
          </motion.p>
          <motion.h2
            variants={item}
            className="text-4xl font-extrabold text-gray-900 leading-tight"
          >
            Lorem Ipsum Dolor Sit Amet
          </motion.h2>
          <motion.p variants={item} className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae
            porttitor pharetra tempor quis arcu. Ipsum nullam.
          </motion.p>
          <motion.button
            variants={item}
            className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-semibold transition-all text-sm shadow-md"
          >
            Loreum Ipsum →
          </motion.button>
        </motion.div>

        {/* Background Image */}
        <div className="hidden lg:block w-full h-full absolute">
          <Image
            src={img}
            alt="Top Image"
            fill
            className="rounded-lg object-cover"
            priority
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Sec9FirstComp;