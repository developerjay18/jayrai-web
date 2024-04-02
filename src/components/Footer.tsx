'use client';

import React from 'react';
import { SparklesCore } from './ui/sparkles';
import {
  AiOutlineWhatsApp,
  AiOutlineInstagram,
  AiFillGithub,
  AiFillLinkedin,
} from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';
import Link from 'next/link';
import { whatsappLink } from '@/data/links';

function Footer() {
  return (
    <div className="pt-12 md:pt-24 bg-black">
      <div className="h-[10rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>

        <div className="footer-tag-line px-5 md:px-20 pb-5 md:pb-2 z-50">
          <div className="social-links pt-4 h-full flex gap-x-6">
            <Link href={whatsappLink} className="">
              <AiOutlineWhatsApp className="text-4xl md:text-5xl hover:text-blue-500 ease-linear text-white transition" />
            </Link>
            <Link href={'https://www.instagram.com/jayrai.web'} className="">
              <AiOutlineInstagram className="text-4xl md:text-5xl hover:text-blue-500 ease-linear text-white transition" />
            </Link>
            <Link href={'tel:+916351468706'} className="norder">
              <FiPhoneCall className="text-4xl md:text-5xl hover:text-blue-500 ease-linear text-white transition" />
            </Link>
            <Link href={'https://github.com/developerjay18'} className="">
              <AiFillGithub className="text-4xl md:text-5xl hover:text-blue-500 ease-linear text-white transition" />
            </Link>
            <Link href={'https://www.linkedin.com/in/jayrai2003'} className="">
              <AiFillLinkedin className="text-4xl md:text-5xl hover:text-blue-500 ease-linear text-white transition" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
