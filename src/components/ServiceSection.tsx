"use client";

import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";
import servicesData from "@/data/services_data.json";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

function ServiceSection() {
  const words = [
    {
      text: "My ",
      className: "text-black dark:text-black text-5xl md:text-auto",
    },
    {
      text: "Services",
      className: "text-themePurple dark:text-themePurple text-5xl md:text-auto",
    },
  ];

  return (
    <div className="pt-20 md:py-20 bg-[#f4f4f4]" id="services">
      {/* heading  */}
      <div className="flex justify-center">
        <TypewriterEffectSmooth words={words} cursorClassName="h-12" />
      </div>
      {/* content  */}
      <div className="content px-5 md:px-20">
        <HoverEffect items={servicesData.services} />
      </div>
    </div>
  );
}

export default ServiceSection;
