"use client";

import React from "react";
import { Button } from "./ui/moving-border";
import Link from "next/link";
import { contactData } from "@/data/links";

function ContactSection() {
  return (
    <div className="pt-10 md:py-20 bg-white" id="contact">
      {/* content  */}
      <div className="content px-5 pt-8 md:pt-7 md:px-20 flex flex-col md:flex-row md:gap-x-8 gap-y-8 md:gap-y-0">
        <div className="text-center md:text-left flex flex-col gap-y-4 md:w-[20%]">
          {contactData.map((item) => (
            <Button
              borderRadius="1.75rem"
              className="bg-themePurple hover:bg-themeDarkPurple text-white transition-colors border-themeLightPurple"
              key={item.text}
            >
              <Link href={item.link} className="items-center flex gap-2 px-5">
                <span>{item.icon}</span>
                <span className="text-lg">{item.text}</span>
              </Link>
            </Button>
          ))}
        </div>
        <div className="font-bold mt-5 md:mt-0 md:w-[70%] text-5xl text-left md:text-left md:text-7xl">
          <div className="hidden md:block bg-clip-text text-transparent bg-gradient-to-b from-black to-neutral-600">
            Make your Profit <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#789CF8] to-themeDarkPurple">
              2X TO 4X
            </span>{" "}
            from your <br /> <span>Business Website</span>
          </div>
          <div className="md:hidden block leading-[3.3rem] bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Make your Profit <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-blue-100 to-blue-400">
              2X TO 4X
            </span>{" "}
            from your Business Website
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
