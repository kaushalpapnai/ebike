"use client";
import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";

import img1 from "@/images/section12_img.png";
import img2 from "@/images/section1_card1.png";
import img3 from "@/images/section3.png";
import img4 from "@/images/section5_card3.png";
import img5 from "@/images/sec9_img4.png";

// Proper typing for image data
interface Slide {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Artist & Investor",
    description:
      "Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing auctor. Malesuada tristique libero, id netus tincidunt. Egestas ac arcu amet nisl quis est ...",
    image: img1,
  },
  {
    id: 2,
    title: "Creative Entrepreneur",
    description:
      "Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing auctor. Malesuada tristique libero, id netus tincidunt. Egestas ac arcu amet nisl quis est ...",
    image: img2,
  },
  {
    id: 3,
    title: "Digital Innovator",
    description:
      "Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing auctor. Malesuada tristique libero, id netus tincidunt. Egestas ac arcu amet nisl quis est ...",
    image: img3,
  },
  {
    id: 4,
    title: "Tech Visionary",
    description:
      "Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing auctor. Malesuada tristique libero, id netus tincidunt. Egestas ac arcu amet nisl quis est ...",
    image: img4,
  },
  {
    id: 5,
    title: "Business Leader",
    description:
      "Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing auctor. Malesuada tristique libero, id netus tincidunt. Egestas ac arcu amet nisl quis est ...",
    image: img5,
  },
];

const Section12 = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setIsTransitioning(false);
      }, 150);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    if (index !== current) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent(index);
        setIsTransitioning(false);
      }, 150);
    }
  };

  return (
    <section className="w-full px-6 md:px-12 py-16">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
          LOREM IPSUM DOLOR SIT AMET
        </h2>
        <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
          Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst. Ornare faucibus quis velit fringilla aliquam ultricies. Malesuada ut aliquam at ac est nisi, interdum etiam dignissim. Sed ut vestibulum eget purus ornare. Risus elit et fringilla habitant ut facilisi.
        </p>
      </div>

      <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
        {/* Image */}
        <div className="w-full lg:w-3/5 relative">
          <div className="relative h-[400px] lg:h-[500px] overflow-hidden shadow-2xl">
            <Image
              src={slides[current].image}
              alt={slides[current].title}
              fill
              className={`object-cover transition-all duration-500 ease-in-out transform ${
                isTransitioning ? "opacity-0 scale-105" : "opacity-100 scale-100"
              }`}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          </div>
        </div>

        {/* Content Card */}
        <div className="w-full lg:w-2/5">
          <div
            className={`bg-white border border-gray-200 lg:-ml-16 shadow-md p-8 transition-all duration-500 ease-in-out transform ${
              isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            }`}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {slides[current].title}
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6 text-base">
              {slides[current].description}
            </p>
            <button className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-200 group">
              Read Full Story{" "}
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="mt-12 flex justify-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`relative overflow-hidden transition-all duration-300 ease-in-out rounded-full ${
              current === i
                ? "w-8 h-3 bg-blue-600"
                : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={() => handleDotClick(i)}
          >
            {current === i && (
              <div className="absolute inset-0 bg-blue-700 rounded-full animate-pulse"></div>
            )}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Section12;