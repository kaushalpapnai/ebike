"use client";
import Image from "next/image";
import { Phone } from "lucide-react";
import { MotionButton } from "@/ui/Button";
import { Easing, motion } from "framer-motion";
import React from "react";
import bike1 from "@/images/section1_bike.png";
import card1_img from "@/images/section1_card1.png";
import card2_img from "@/images/section1_card2.png";
import card3_img from "@/images/section1_card3.png";

// Animation Variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5,  ease: [0.25, 0.1, 0.25, 1] as Easing  } },
};

const imageAnim = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8,  ease: [0.25, 0.1, 0.25, 1] as Easing } },
};

const Section1 = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden mt-12">
      {/* Pattern + gradient bottom background */}

      {/* Main Content */}
      <div className="relative z-20 flex justify-end h-screen">
        <motion.div
          className="relative max-w-[95%] md:max-w-[95%] grid md:grid-cols-2 gap-12 items-start p-5 shadow-2xl pb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          {/* Left */}
          <div>
            <motion.p
              variants={item}
              className="text-sm text-blue-600 font-semibold mb-2"
            >
              Lorem ipsum dolor sit
            </motion.p>
            <motion.h2
              variants={item}
              className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4"
            >
              LOREM IPSUM <br /> DOLOR SIT AMET
            </motion.h2>
            <motion.p variants={item} className="text-gray-700 mb-8">
              Lorem ipsum dolor sit amet consectetur. Amet sodales sociis
              facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget
              integer in nam. Non nisl iaculis at felis aliquet. Hendrerit
              tellus at purus lectus.
            </motion.p>

            {/* Highlights */}
            <motion.div variants={container} className="space-y-6 mb-10">
              {[card1_img, card2_img, card3_img].map((img, i) => (
                <motion.div
                  key={i}
                  variants={item}
                  className="flex items-start gap-4"
                >
                  <Image
                    src={img}
                    alt={`Card ${i + 1}`}
                    width={80}
                    height={80}
                    className="rounded object-cover aspect-square"
                  />
                  <p className="text-sm text-gray-800">
                    {i === 0 &&
                      "Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum feugiat."}
                    {i === 1 &&
                      "Lorem ipsum dolor sit amet consectetur. Dictum at ac tellus faucibus urna ullamcorper id dui cursus. Venenatis."}
                    {i === 2 &&
                      "Lorem ipsum dolor sit amet consectetur. Vestibulum nisl morbi metus gravida eu facilisi enim. Ut diam auctor tortor tincidunt."}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <MotionButton
                className="px-6 py-3 font-semibold shadow-md rounded-md bg-blue-600 text-white hover:bg-blue-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Lorem Ipsum →
              </MotionButton>
              <div className="flex items-center gap-2 text-blue-800 font-medium">
                <Phone size={16} />
                123456789
              </div>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            variants={imageAnim}
            className=" hidden md:block relative w-full h-[400px] md:h-full rounded-lg overflow-hidden"
          >
            <Image
              src={bike1}
              alt="Motorbikes"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          <div className="absolute bottom-0 left-0 w-full">
            <div className="w-full h-5 bg-gradient-to-r from-[#043898] via-[#079902] to-[#170041] via-60%"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section1;
