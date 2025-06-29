"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";

// Image imports
import tvs from "@/images/tvs.png";
import ktm from "@/images/ktm.png";
import bajaj from "@/images/bajaj.png";
import royal_enfield from "@/images/royal_enfield.png";
import yamaha from "@/images/yamaha.png";
import tork from "@/images/tork.png";
import revolt from "@/images/revolt.png";
import honda from "@/images/honda.png";
import ather from "@/images/ather.png";
import ola from "@/images/ola.png";

interface Brand {
  name: string;
  logo: StaticImageData;
}

const topRowLogos: Brand[] = [
  { name: "TVS", logo: tvs },
  { name: "Bajaj", logo: bajaj },
  { name: "Honda", logo: honda },
  { name: "Royal Enfield", logo: royal_enfield },
];

const middleRowLogos: Brand[] = [
  { name: "Yamaha", logo: yamaha },
  { name: "KTM", logo: ktm },
  { name: "Ather", logo: ather },
  { name: "Tork", logo: tork },
];

const bottomRowLogos: Brand[] = [
  { name: "Ola Electric", logo: ola },
  { name: "Revolt", logo: revolt },
  { name: "Yamaha", logo: yamaha },
  { name: "Hero", logo: tvs }, // reuse logo for now
];

const LogoItem = ({ brand }: { brand: Brand }) => (
  <div className="flex-shrink-0 w-32 md:w-40 flex flex-col items-center">
    <div className="w-16 h-16 md:w-28 md:h-28 bg-white rounded-lg flex items-center justify-center overflow-hidden">
      <Image
        src={brand.logo}
        alt={brand.name}
        className="object-contain"
        width={80}
        height={80}
      />
    </div>
  </div>
);

const Row = ({
  logos,
  direction,
}: {
  logos: Brand[];
  direction: "left" | "right";
}) => {
  // Create enough duplicates to ensure smooth scrolling
  const repeatedLogos = Array(6).fill(logos).flat();
  
  return (
    <div className="relative overflow-hidden whitespace-nowrap">
      <div 
        className={`inline-flex gap-0 ${
          direction === "left" 
            ? "animate-[scroll-left_30s_linear_infinite]" 
            : "animate-[scroll-right_30s_linear_infinite]"
        }`}
      >
        {repeatedLogos.map((brand, index) => (
          <LogoItem key={`${brand.name}-${index}`} brand={brand} />
        ))}
      </div>
    </div>
  );
};

const Section4 = () => {
  return (
    <>
      <style jsx global>{`
        @keyframes scroll-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-128px * 4)); /* Move by 4 logo widths */
          }
        }
        
        @keyframes scroll-right {
          from {
            transform: translateX(calc(-128px * 4));
          }
          to {
            transform: translateX(0);
          }
        }
        
        @media (min-width: 768px) {
          @keyframes scroll-left {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(calc(-160px * 4)); /* Move by 4 logo widths on md+ */
            }
          }
          
          @keyframes scroll-right {
            from {
              transform: translateX(calc(-160px * 4));
            }
            to {
              transform: translateX(0);
            }
          }
        }
      `}</style>
      
      <section className="w-full min-h-screen py-16 px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
            LOREM IPSUM DOLOR SIT AMET <br />
            CONSECTETUR, COMMODO LEO AMET.
          </h1>
        </div>
        <div className="space-y-12">
          <Row logos={topRowLogos} direction="left" />
          <Row logos={middleRowLogos} direction="right" />
          <Row logos={bottomRowLogos} direction="left" />
        </div>
      </section>
    </>
  );
};

export default Section4;