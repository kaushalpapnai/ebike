"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import holding_phone from "@/images/holding_phone.png";
import google_playstore from "@/images/google_playstore.png";
import apple_playstore from "@/images/app_store.png";

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
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Section8 = () => {
  return (
    <motion.section
      className="w-full bg-[#f5f5f5] py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <motion.div variants={container} className="w-full lg:w-1/2 space-y-6">
          <motion.p
            variants={item}
            className="text-blue-600 font-semibold text-lg"
          >
            Lorem Ipsum
          </motion.p>
          <motion.h2
            variants={item}
            className="text-4xl sm:text-5xl font-extrabold text-black leading-tight"
          >
            Lorem Ipsum Dolor <br /> Sit Amet
          </motion.h2>
          <motion.p
            variants={item}
            className="text-gray-700 text-base sm:text-lg"
          >
            Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi
            suspendisse convallis. Urna a urna lectus donec felis risus duis
            pellentesque. Pellentesque ultricies ipsum.
          </motion.p>

          {/* App Store Buttons */}
          <motion.div variants={item} className="flex gap-6 flex-wrap">
            <a href="#" aria-label="Download on Google Play">
              <Image
                src={google_playstore}
                alt="Google Play"
                width={160}
                height={50}
              />
            </a>
            <a href="#" aria-label="Download on App Store">
              <Image
                src={apple_playstore}
                alt="App Store"
                width={160}
                height={50}
              />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          variants={item}
          className="w-full lg:w-1/2 flex justify-center items-center relative"
        >
          <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] -mt-20">
            <Image
              src={holding_phone}
              alt="Holding Phone"
              fill
              className="object-contain scale-[1.4] lg:scale-[1.4] transform origin-center"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Section8;