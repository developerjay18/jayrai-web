import React from "react";
import { Button } from "./ui/moving-border";
import Link from "next/link";
import { whatsappLink } from "@/data/links";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { tools, tools2 } from "@/data/techStack";

function TechStack() {
  const words = [
    {
      text: "My ",
      className: "text-black dark:text-black text-4xl md:text-5xl",
    },
    {
      text: "Tech Stack",
      className: "text-themePurple dark:text-themePurple text-4xl md:text-5xl",
    },
  ];

  return (
    <div
      className="py-10 md:py-20 max-w-screen overflow-hidden bg-[#fff]"
      id="tech-stack"
    >
      {/* heading  */}
      <div className="flex justify-center mb-5 md:mb-0">
        <TypewriterEffectSmooth words={words} cursorClassName="h-12" />
      </div>
      {/* content  */}
      <div className="content w-full bg-white  dark:bg-grid-black/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center py-16">
        <div className="">
          <InfiniteMovingCards items={tools} direction="right" speed="slow" />
          <InfiniteMovingCards items={tools2} direction="left" speed="slow" />
        </div>
      </div>

      <div className="mt-10 text-center">
        <Button
          borderRadius="1.75rem"
          className="bg-themePurple hover:bg-themeDarkPurple text-white transition-colors border-themeLightPurple"
        >
          <Link href={whatsappLink} className="items-center flex gap-2 px-5">
            <span className="hidden md:block">
              <i className="fa-brands fa-whatsapp fa-2xl "></i>
            </span>
            <span className="md:hidden block">
              <i className="fa-brands fa-whatsapp fa-2xl"></i>
            </span>
            <span className="text-lg">Whatsapp Now</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default TechStack;
