import React from 'react';
import { TypewriterEffectSmooth } from './ui/typewriter-effect';
import { Button } from './ui/moving-border';
import Link from 'next/link';
import { contactData, whatsappLink } from '@/data/links';
import { AiOutlineWhatsApp } from 'react-icons/ai';

function ContactSection() {
  const words = [
    {
      text: 'Contact ',
      className: 'text-blue-500 dark:text-blue-500 text-5xl md:text-auto',
    },
    {
      text: 'Me',
      className: 'text-5xl md:text-auto',
    },
  ];

  const tagline = [
    {
      text: 'Make',
    },
    {
      text: 'your',
    },
    {
      text: 'Profit',
    },
    {
      text: '2X 3X',
      className: 'text-red-500 dark:text-red-500',
    },
    {
      text: 'from',
    },
    {
      text: 'your',
    },
    {
      text: 'Business',
      className: 'text-blue-500 dark:text-blue-500',
    },
    {
      text: 'Website',
      className: 'text-blue-500 dark:text-blue-500',
    },
  ];

  return (
    <div className="pt-10 md:pt-24 bg-black" id="contact">
      {/* heading   */}
      <div className="flex justify-center">
        <TypewriterEffectSmooth words={words} cursorClassName="h-12" />
      </div>

      {/* content  */}
      <div className="content px-5 pt-8 md:pt-10 md:px-20 flex flex-col md:flex-row md:gap-x-8 gap-y-8 md:gap-y-0">
        <div className="text-center md:text-left flex flex-col gap-y-4 md:w-[30%]">
          {contactData.map((item) => (
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 min-w-[280px]"
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
          <div className="hidden md:block bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Make your Profit <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-blue-100 to-blue-400">
              2X TO 4X
            </span>{' '}
            from your <br /> <span>Business Website</span>
          </div>
          <div className="md:hidden block leading-[3.3rem] bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Make your Profit <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-blue-100 to-blue-400">
              2X TO 4X
            </span>{' '}
            from your Business Website
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
