"use client";

import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";
import servicesData from "@/data/services_data.json";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

function ServiceSection() {
  const words = [
    {
      text: "My ",
      className: "text-black dark:text-black text-4xl md:text-5xl",
    },
    {
      text: "Services",
      className: "text-themePurple dark:text-themePurple text-4xl md:text-5xl",
    },
  ];

  return (
    <div className="py-10 md:py-20 bg-white" id="services">
      {/* heading  */}
      <div className="flex justify-center pb-2">
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
