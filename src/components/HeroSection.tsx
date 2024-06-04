"use client";

import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import Link from "next/link";
import { whatsappLink } from "@/data/links";
import { AiOutlineWhatsApp } from "react-icons/ai";
import Image from "next/image";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";

function HeroSection() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const objects = document.querySelectorAll(".object");
      objects.forEach((object) => {
        const speed = parseFloat(object.getAttribute("data-speed") || "1");
        const x = (window.innerWidth - e.pageX * speed) / 500; // Increase the divisor to reduce movement
        const y = (window.innerHeight - e.pageY * speed) / 500; // Increase the divisor to reduce movement

        (
          object as HTMLElement
        ).style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="h-[45rem] md:h-[45rem] flex flex-col justify-center items-center px-5 md:px-20 bg-white relative max-w-screen overflow-hidden"
      id="home"
    >
      {/* big screens  */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 hidden md:block"
        fill="white"
      />

      {/* small screens  */}
      <Spotlight
        className="-top-20 left-0 md:left-60 md:-top-20 md:hidden block"
        fill="white"
      />

      {/* <div
        className={`object absolute left-[14rem] bottom-[14rem]`}
        data-speed="5"
      >
        <FaAngular className="text-9xl text-[#a91915] object-img -rotate-45" />
      </div> */}

      <div className={`object absolute -right-16 bottom-50`} data-speed="5">
        <FaNodeJs className="text-9xl text-green-500 object-img -rotate-45" />
      </div>

      <div className={`object absolute -left-20 -top-16`} data-speed="5">
        <FaReact className="text-[14rem] text-[#09a1ff] object-img -rotate-45" />
      </div>

      {/* <div className={`object absolute right-[30rem] bottom-[3rem]`} data-speed="5">
        <SiTypescript className="text-8xl text-[#2f74c0] object-img -rotate-[40deg]" />
      </div> */}

      <div className="p-4 relative z-10 w-full text-center flex flex-col gap-3">
        <h1 className="mt-20 md:pt-0 md:mt-0 text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-black to-neutral-700 pb-8 leading-[3.2rem] max-w-5xl mx-auto flex flex-col gap-y-6">
          I Build Stunning Webistes for
          <span>
            <Typewriter
              options={{
                strings: [
                  "Businesses",
                  "Agencies",
                  "Freelancers",
                  "Show Rooms",
                  "Local Shops",
                ],
                autoStart: true,
                loop: true,
                delay: 80,
                deleteSpeed: 80,
                cursor: "|",
                cursorClassName: "text-Purple",
              }}
            />
          </span>
        </h1>

        <p className="mt-4 font-normal text-base md:text-lg text-black max-w-xl mx-auto">
          I&apos;m a skilled full stack web developer from Ahmedabad, Gujarat,
          India. I specialize in crafting modern and visually striking websites
          to enhance businesse&apos;s online presence and unlock greater profit
          potential.
        </p>

        <div className="mt-8">
          <Button
            borderRadius="1.75rem"
            className="bg-themePurple hover:bg-themeDarkPurple text-white transition-colors border-themeLightPurple"
          >
            <Link href={whatsappLink} className="items-center flex gap-2 px-5">
              <span>
                <AiOutlineWhatsApp className="text-3xl" />
              </span>
              <span className="text-lg">Whatsapp Now</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
