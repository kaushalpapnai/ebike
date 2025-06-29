import React from 'react';
import { ArrowRight } from 'lucide-react';
import section3_img from "@/images/section3.png";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden p-5 mt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${section3_img.src})`
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Header with Logo */}
        <header className="flex items-start justify-start p-6 lg:p-8">
          <div className="bg-white px-6 py-3 rounded-sm">
            <h1 className="text-xl lg:text-2xl font-bold text-black">LOGO</h1>
          </div>
        </header>

        {/* Main Content - Centered */}
        <div className="flex-1 flex items-center justify-center px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white space-y-6 lg:space-y-8">
            {/* Main Heading */}
            <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight">
              LOREM IPSUM DOLOR SIT AMET CONSECTETUR. QUIS
              ADIPISCING PURUS EGESTAS ALIQUAM VIVERRA MI.
            </h1>

            {/* Description Paragraphs */}
            <div className="space-y-4 lg:space-y-6 text-sm md:text-base lg:text-lg">
              <p className="leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Mattis justo euismod volutpat vestibulum
                nisl at ac risus amet. Mi accumsan sagittis justo pellentesque id sed. Id tellus id
                luctus id. At quis nunc libero urna arcu vulputate sed ut. Nisl porta massa diam
                condimentum nulla quam.
              </p>

              <p className="leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec condimentum
                ultrices non. Ornare semper in tincidunt pellentesque cras mauris in vitae. At viverra
                quis eu malesuada vel et porttitor. Nulla luctus quam lacus lacus non at. Tincidunt
                morbi feugiat a pulvinar euismod natoque nulla ligula. Tincidunt cursus vitae leo.
              </p>
            </div>

            {/* Call to Action Button */}
            <div className="pt-4 lg:pt-6">
              <button className="inline-flex cursor-pointer items-center gap-2 bg-white text-blue-600 px-6 py-3 lg:px-8 lg:py-4 rounded-md font-semibold text-sm lg:text-base hover:bg-gray-100 transition-colors duration-300 shadow-lg">
                Lorem Ipsum
                <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}