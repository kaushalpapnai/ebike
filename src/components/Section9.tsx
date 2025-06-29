"use client";
import React from "react";
import bgGraphic from "@/images/Capa_1.svg";
import Image from "next/image";
import Sec9FirstComp from "./Sec9FirstComp";
import Sec9SecComp from "./Sec9SecComp";

const Section9 = () => {
  return (
    <div className="w-full h-[110rem] lg:h-[140rem] -mt-48 relative py-12 overflow-hidden">
      {/* Background SVG as absolute positioned Image */}
      <div className=" absolute w-full -top-36 h-[130%] left-0">
        <Image
          src={bgGraphic}
          alt="Background Graphic"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="mt-52 lg:mt-80">
        <Sec9FirstComp />
      </div>
      <Sec9SecComp/>
    </div>
  );
};

export default Section9;
