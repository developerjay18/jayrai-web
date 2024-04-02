'use client';

import React from 'react';
import Typewriter from 'typewriter-effect';
import { Spotlight } from './ui/Spotlight';
import { Button } from './ui/moving-border';
import Link from 'next/link';
import { whatsappLink } from '@/data/links';
import { AiOutlineWhatsApp } from 'react-icons/ai';

function HeroSection() {
  return (
    <div className="h-[45rem] md:h-[45rem] flex flex-col justify-center items-center px-5 md:px-20 bg-black" id='home'>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 hidden md:block"
        fill="white"
      />

      <Spotlight
        className="-top-20 left-0 md:left-60 md:-top-20 md:hidden block"
        fill="white"
      />

      <div className="p-4 relative z-10 w-full text-center flex flex-col gap-3">
        <h1 className="mt-20 md:mt-0 text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 pb-8 leading-[3.2rem] max-w-5xl mx-auto">
          I Build Stunning Webistes for
          <span>
            <Typewriter
              options={{
                strings: [
                  'Businesses',
                  'Agencies',
                  'Freelancers',
                  'Show Room',
                  'Local Shops',
                ],
                autoStart: true,
                loop: true,
                delay: 80,
                deleteSpeed: 80,
                cursor: '|',
                cursorClassName: 'text-Purple',
              }}
            />
          </span>
        </h1>

        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-xl mx-auto">
          I&apos;m a skilled full stack web developer from Gujarat, India. I
          specialize in crafting modern and visually striking websites to
          enhance businesse&apos;s online presence and unlock greater profit
          potential.
        </p>

        <div className="mt-8">
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
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
