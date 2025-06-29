"use client";

import React, { useState } from "react";
import Image from "next/image";
import img from "@/images/section11_img.png";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const TABS = [
  {
    name: "Research",
    content:
      "Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.",
  },
  {
    name: "Plan",
    content:
      "Planning involves strategic thinking, resource allocation and timeline optimization to ensure efficient delivery and success.",
  },
  {
    name: "Design",
    content:
      "Design transforms ideas into reality through thoughtful visuals and user experience tailored to your needs.",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Section11 = () => {
  const [activeTab, setActiveTab] = useState("Research");

  return (
    <motion.section
      className="w-full py-16 px-6 md:px-12 bg-white mt-26"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">
        {/* Left Side: Text */}
        <motion.div variants={item} className="lg:w-1/2 space-y-6 relative">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            LOREM IPSUM DOLOR SIT AMET
          </h2>

          {/* Tabs */}
          <div className="flex rounded-lg overflow-hidden border border-gray-200 w-full max-w-md">
            {TABS.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`px-6 py-3 w-full text-sm font-semibold cursor-pointer transition-all duration-200 ${
                  activeTab === tab.name
                    ? "bg-gray-100 text-gray-900"
                    : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Description */}
          <p className="text-gray-600 text-base leading-relaxed">
            {TABS.find((tab) => tab.name === activeTab)?.content}
          </p>

          {/* Link */}
          <a
            href="#"
            className="inline-flex items-center gap-2 text-blue-700 font-semibold text-sm hover:underline"
          >
            Check tools <ArrowRight className="w-4 h-4" />
          </a>

          {/* Decorative Dots */}
          <div className="absolute right-[-2rem] top-[3rem] hidden xl:block">
            <div className="grid grid-cols-5 gap-2 opacity-30">
              {Array.from({ length: 25 }).map((_, i) => (
                <div
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full ${
                    i % 7 === 0
                      ? "bg-purple-500"
                      : i % 11 === 0
                      ? "bg-red-500"
                      : "bg-gray-300"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          variants={item}
          className="lg:w-1/2 w-full flex justify-center"
        >
          <div className="h-[300px] w-[400px] md:w-[480px] lg:w-[540px] shadow-md overflow-hidden">
            <Image
              src={img}
              alt="Handshake"
              className="object-cover w-full h-full"
              placeholder="blur"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Section11;