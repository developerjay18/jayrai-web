'use client';
import React from 'react';
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';
import Image from 'next/image';
import Link from 'next/link';
import snippetsData from '@/data/snippets_data.json';
import { BackgroundGradient } from '@/components/ui/background-gradient';

function page() {
  return (
    <div className="max-w-screen overflow-hidden">
      {/* gradeint background */}
      <div
        className="h-[32rem] md:h-[35rem] flex flex-col justify-center items-center px-5 md:px-20 bg-black"
        id="home"
      >
        <BackgroundGradientAnimation>
          <div className="absolute z-30 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-5xl text-center md:text-4xl lg:text-7xl leading-[3.5rem]">
            <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
              Cool UI UX Snippets
            </p>
          </div>
        </BackgroundGradientAnimation>
      </div>

      {/* cards  */}
      <div className="snippets-cards py-10 px-5 md:px-0 bg-white">
        <div className="md:px-10 flex flex-wrap justify-center gap-4">
          {snippetsData.snippets.map((item: any) => (
            <div className="md:w-[30%]" key={item.title}>
              <BackgroundGradient
                className="rounded-[22px]  p-4 sm:p-10 bg-[#f4f4f4]"
                key={item.title}
              >
                <Image
                  src={item.imgUrl}
                  alt="jordans"
                  height="400"
                  width="400"
                  className="object-contain"
                />
                <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                  {item.title}
                </p>

                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {item.description}
                </p>
                <Link href={item.link}>
                  <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-sm font-bold dark:bg-zinc-800">
                    <span>Get code</span>
                    <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                      FREE
                    </span>
                  </button>
                </Link>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;

{
  /* <CardContainer className="inter-var" key={item.link}>
<CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border">
  <CardItem
    translateZ="50"
    className="text-xl font-bold text-neutral-600 capitalize dark:text-white"
  >
    {item.title}
  </CardItem>
  <CardItem
    as="p"
    translateZ="60"
    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
  >
    {item.description}
  </CardItem>
  <CardItem translateZ="100" className="w-full mt-4">
    <Image
      src={item.imgUrl}
      height="1000"
      width="1000"
      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
      alt="thumbnail"
    />
  </CardItem>
  <div className="flex justify-between items-center mt-10">
    <CardItem
      translateZ={20}
      as={Link}
      href={item.link}
      target="__blank"
      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold flex gap-2 items-center text-md"
    >
      <span className="font-semibold">See Code</span>
      <span>
        <i className="fa-solid fa-arrow-right"></i>
      </span>
    </CardItem>
  </div>
</CardBody>
</CardContainer> */
}
