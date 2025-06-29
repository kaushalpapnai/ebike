"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Info,
  Castle,
  Hexagon,
} from "lucide-react";

const testimonials = [
  {
    icon: <Hexagon className="w-6 h-6 text-blue-500" />,
    text: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod.",
    name: "Jane Cooper",
    initial: "J",
  },
  {
    icon: <Star className="w-6 h-6 text-yellow-500" />,
    text: "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque.",
    name: "Ralph Edwards",
    initial: "R",
  },
  {
    icon: <Castle className="w-6 h-6 text-purple-600" />,
    text: "Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium.",
    name: "Courtney Henry",
    initial: "C",
  },
  {
    icon: <Info className="w-6 h-6 text-blue-500" />,
    text: "Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet.",
    name: "Cameron Williamson",
    initial: "C",
  },
  {
    icon: <Star className="w-6 h-6 text-green-500" />,
    text: "Lorem ipsum dolor sit amet consectetur. Adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Devon Lane",
    initial: "D",
  },
  {
    icon: <Castle className="w-6 h-6 text-red-500" />,
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Marvin McKinney",
    initial: "M",
  },
];

const Section10 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const getVisibleCards = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 4;
      if (window.innerWidth >= 768) return 2;
      return 1;
    }
    return 4;
  };

  const [visibleCards, setVisibleCards] = useState(getVisibleCards);

  useEffect(() => {
    const handleResize = () => setVisibleCards(getVisibleCards());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - visibleCards);

  const scrollToIndex = (index: number) => {
    const container = scrollContainerRef.current;
    if (container) {
      const card = container.children[0] as HTMLElement | undefined;
      const cardWidth = card?.offsetWidth || 0;
      const gap = 24;
      const scrollPosition = index * (cardWidth + gap);

      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
    setCurrentIndex(index);
  };

  const handlePrevious = () => {
    const newIndex = Math.max(0, currentIndex - 1);
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = Math.min(maxIndex, currentIndex + 1);
    scrollToIndex(newIndex);
  };

  return (
    <section className="bg-[#185abc] py-16 px-6">
      <div className="max-w-7xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Join other Sun Harvesters</h2>
        <p className="text-sm md:text-base text-blue-100">
          Dui euismod iaculis libero, aliquet vitae et elementum porttitor.
        </p>

        <div className="relative mt-12">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Cards Container */}
          <div ref={scrollContainerRef} className="overflow-hidden mx-14">
            <div
              className="flex gap-6 transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCards + 6)}%)`,
              }}
            >
              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 bg-white rounded-xl shadow-lg p-6 text-left space-y-4"
                  style={{
                    width: `calc(${100 / visibleCards}% - ${(visibleCards - 1) * 24 / visibleCards}px)`,
                    minWidth: "280px",
                  }}
                >
                  <div>{item.icon}</div>
                  <p className="text-gray-700 text-sm leading-relaxed">{item.text}</p>
                  <div className="flex items-center gap-3 pt-2">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-sm font-semibold text-gray-800">
                      {item.initial}
                    </div>
                    <p className="font-semibold text-gray-900 text-sm">{item.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section10;