"use client";
import { MotionButton } from "@/ui/Button";
import { Easing, motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";
import hero_img from "@/images/hero_img.png";
import Navbar from "./Navbar";

export default function HeroSection() {
  return (
    <>
      <Navbar />
      <div className="justify-center md:justify-normal h-screen flex flex-col md:flex-row relative">
        {/* Left Section */}
        <div className="w-full md:w-1/2 bg-white px-6 sm:px-10 md:px-16 py-8 z-10 mt-24 md:mt-28">
          <main className="pt-8 md:pt-16 space-y-6 md:space-y-8 max-w-xl mx-auto md:mx-0">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-bold text-3xl sm:text-4xl md:text-5xl text-[#222] leading-snug"
            >
              Lorem ipsum dolor sit amet
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[#444] text-base sm:text-lg leading-relaxed"
            >
              Lorem ipsum dolor sit amet consectetur. Enim netus cras congue
              quis elit sociis. Sed mi rhoncus id habitant. In urna tellus nisi
              platea morbi libero imperdiet neque. Justo suspendisse tristique
              posuere quis eget viverra. Nunc euismod ultrices etiam nulla
              habitasse.
            </motion.p>

            {/* Input + Button */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <input
                type="text"
                placeholder="Enter your email"
                className="border border-gray-300 rounded-sm px-4 py-2 w-full sm:max-w-sm"
              />
              <MotionButton className="bg-[#0546D2] text-white font-semibold px-6 py-2.5 rounded-sm cursor-pointer shadow-sm hover:scale-105 transition">
                Submit →
              </MotionButton>
            </motion.div>

            {/* Checklist */}
            <motion.div
              className="flex items-center gap-2 text-[#0546D2] font-medium text-sm mt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="py-1 px-1 bg-[#0546D2] rounded-full">
                <Check className="w-3 h-3 text-white" />
              </div>
              No credit card required!
            </motion.div>
          </main>
        </div>

        {/* Right Section */}
        <motion.div
          className="hidden md:block w-1/2 h-full absolute right-0 top-0 overflow-hidden"
          initial={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
          animate={{
            clipPath: 'polygon(15% 0, 100% 0%, 100% 100%, 0% 100%)',
            transition: { duration: 1,  ease: [0.25, 0.1, 0.25, 1] as Easing  }
          }}
        >
          <motion.div
            className="w-full h-full relative"
            initial={{ scale: 1.1 }}
            animate={{
              scale: 1,
              transition: { duration: 1.2,  ease: [0.25, 0.1, 0.25, 1] as Easing  }
            }}
          >
            <Image
              src={hero_img}
              alt="Hero"
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Cloudy Faded Border at Bottom */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        >
          {/* Multiple layered gradients to create cloudy effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-100/60 via-transparent to-transparent"></div>
          
          {/* Cloudy texture overlay */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              background: `
                radial-gradient(ellipse 200px 50px at 20% 100%, rgba(255,255,255,0.8) 0%, transparent 50%),
                radial-gradient(ellipse 300px 60px at 60% 100%, rgba(248,250,252,0.9) 0%, transparent 50%),
                radial-gradient(ellipse 250px 40px at 80% 100%, rgba(255,255,255,0.7) 0%, transparent 50%),
                radial-gradient(ellipse 180px 45px at 35% 100%, rgba(241,245,249,0.8) 0%, transparent 50%),
                radial-gradient(ellipse 320px 55px at 90% 100%, rgba(255,255,255,0.6) 0%, transparent 50%)
              `
            }}
          ></div>
          
          {/* Soft blur effect for more natural cloud appearance */}
          <div 
            className="absolute inset-0 opacity-40 blur-sm"
            style={{
              background: `
                radial-gradient(ellipse 150px 30px at 10% 100%, rgba(255,255,255,0.9) 0%, transparent 60%),
                radial-gradient(ellipse 200px 35px at 45% 100%, rgba(248,250,252,0.8) 0%, transparent 60%),
                radial-gradient(ellipse 180px 40px at 75% 100%, rgba(255,255,255,0.7) 0%, transparent 60%),
                radial-gradient(ellipse 220px 30px at 25% 100%, rgba(241,245,249,0.9) 0%, transparent 60%)
              `
            }}
          ></div>
          
          {/* Final soft fade overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent"></div>
        </motion.div>
      </div>
    </>
  );
}