import React from 'react';
import { Button } from './ui/moving-border';
import Link from 'next/link';
import { whatsappLink } from '@/data/links';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
import { TypewriterEffectSmooth } from './ui/typewriter-effect';
import { tools, tools2 } from '@/data/techStack';

function TechStack() {
  const words = [
    {
      text: 'My ',
      className: 'text-4xl md:text-5xl',
    },
    {
      text: 'Tech Stack',
      className: 'text-blue-500 dark:text-blue-500 text-4xl md:text-5xl',
    },
  ];

  return (
    <div className="mt-20 md:mt-24 max-w-screen overflow-hidden">
      {/* heading  */}
      <div className="flex justify-center">
        <TypewriterEffectSmooth words={words} cursorClassName="h-12" />
      </div>
      {/* content  */}
      <div className="content w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center py-16">
        <div className="">
          <InfiniteMovingCards items={tools} direction="right" speed="slow" />
          <InfiniteMovingCards items={tools2} direction="left" speed="slow" />
        </div>

        <div className="mt-14 text-center">
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 "
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
    </div>
  );
}

export default TechStack;
