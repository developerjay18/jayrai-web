"use client";

import React from "react";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import Image from "next/image";
import certificates from "@/data/certifications_data.json";

function Certifications() {
  const words = [
    {
      text: "Certified",
      className: "text-themePurple dark:text-themePurple text-4xl md:text-5xl",
    },
    {
      text: "By",
      className: "text-black dark:text-black text-4xl md:text-5xl",
    },
  ];

  return (
    <div className="px-5 md:px-20 py-10 mb-4 lg:py-20 text-black">
      {/* heading  */}
      <div className="flex justify-center mb-3 md:mb-5">
        <TypewriterEffectSmooth words={words} cursorClassName="h-12" />
      </div>

      {/* content  */}
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-8">
        {certificates.certifications.map((certi, index) => (
          <Image
            src={certi}
            alt="certificate"
            height={300}
            width={500}
            className="border-2 rounded-lg hover:scale-[1.01]  transition-transform border-themeLightPurple shadow-lg hover:cursor-pointer"
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Certifications;
