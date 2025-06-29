"use client";
import React from "react";
import bgGraphic from "@/images/Bg-Graphic.svg";
import Image from "next/image";
import img1 from "@/images/section5_card1.png";
import img2 from "@/images/section5_card2.png";
import img3 from "@/images/section5_card3.png";
import img4 from "@/images/section5_card4.png";

// Dummy data for cards
const cards = [
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    desc: "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisl. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
    image: img1,
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    desc: "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisl. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
    image: img2,
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    desc: "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisl. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
    image: img3,
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    desc: "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisl. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
    image: img4,
  },
];

const Section5 = () => {
  return (
    <section className="w-full min-h-screen relative py-12 px-4 md:px-8 overflow-hidden">
      {/* Background SVG as absolute positioned Image */}
      <div className="absolute w-full -top-64 h-[200%] left-0 ">
        <Image
          src={bgGraphic}
          alt="Background Graphic"
          fill
          className="object-cover object-top-left"
          priority
        />
      </div>
      
      {/* Content */}
      <div className="w-[90%] mx-auto relative z-10">
        {/* Heading */}
        <div className="max-w-5xl mb-12">
          <p className="text-sm text-blue-600 font-semibold mb-2">
            Lorem ipsum dolor sit amet
          </p>
          <h2 className="text-3xl font-extrabold text-gray-900">
            LOREM IPSUM DOLOR SIT
          </h2>
          <p className="mt-3 text-gray-700 max-w-xl">
            Lorem ipsum dolor sit amet consectetur. Amet sodales sociis
            facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget
            integer in nam. Non nisl iaculis at felis aliquet. Hendrerit tellus
            at purus lectus.
          </p>
        </div>

        {/* Card Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 w-[80%]">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white w-[80%] mx-auto rounded-lg overflow-hidden shadow-sm"
            >
              <div className="relative w-full h-48">
                <Image
                  src={card.image}
                  alt={`Card ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 text-sm mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-4">
                  {card.desc}
                </p>
                <a
                  href="#"
                  className="text-blue-600 text-sm font-medium hover:underline"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section5;