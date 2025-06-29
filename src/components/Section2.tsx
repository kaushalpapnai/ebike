"use client";
import Image from "next/image";
import React from "react";
import { Easing, motion } from "framer-motion";
import right_img from "@/images/section2_image.png";
import icon from "@/images/section2_icon.png";

const features = [
  {
    icon,
    title: "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
    desc: "Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec.",
  },
  {
    icon,
    title: "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
    desc: "Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec.",
  },
  {
    icon,
    title: "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
    desc: "Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec.",
  },
];

// Animation variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const fadeUp = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as Easing,
    },
  },
};

const imageAnim = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1] as Easing,
    },
  },
};

export default function Section2() {
  return (
    <section className="relative w-full bg-gray-50 overflow-hidden box-border">
      {/* Background diagonal lines */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-10 -left-20 w-full h-32 transform rotate-12 bg-gradient-to-r from-blue-600/20 to-transparent"></div>
          <div className="absolute -top-5 -left-32 w-full h-24 transform rotate-12 bg-gradient-to-r from-green-500/15 to-transparent"></div>
          <div className="absolute top-0 -left-40 w-full h-20 transform rotate-12 bg-gradient-to-r from-purple-600/10 to-transparent"></div>
          <div className="absolute top-5 -left-48 w-full h-16 transform rotate-12 bg-gradient-to-r from-blue-700/15 to-transparent"></div>
          <div className="absolute top-10 -left-56 w-full h-12 transform rotate-12 bg-gradient-to-r from-teal-500/10 to-transparent"></div>
        </div>
      </motion.div>

      <div className="w-full flex justify-end h-screen pt-12">
        <motion.div
          className="relative z-10 w-[95%] flex flex-col lg:flex-row"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          {/* Left text content */}
          <div className="flex-1 flex flex-col justify-center pb-10 pl-5 pt-2 space-y-4">
            <motion.p
              variants={fadeUp}
              className="text-sm text-blue-600 font-semibold"
            >
              Lorem ipsum dolor sit amet
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight"
            >
              LOREM IPSUM DOLOR SIT <br />
              AMET CONSECTETUR.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-gray-700 text-sm md:text-base"
            >
              Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam
              leo eleifend condimentum in vitae faucibus.
            </motion.p>

            {/* Features List */}
            <motion.div variants={container} className="space-y-4">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  className="flex gap-3"
                >
                  <div className="h-5 w-10 mt-1 flex-shrink-0">
                    <Image
                      src={feature.icon}
                      alt={`icon-${idx}`}
                      className="rounded-sm"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-800 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right image */}
          <motion.div
            variants={imageAnim}
            className="flex-1 hidden lg:flex justify-end items-center"
          >
            <div className="relative w-[80%] h-[80%]">
              <Image
                src={right_img}
                alt="Team discussion"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </motion.div>

          {/* Gradient Line */}
          <div className="absolute bottom-0 left-0 w-full">
            <div className="w-full h-5 bg-gradient-to-r from-[#043898] via-[#079902] to-[#170041] via-60%"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}