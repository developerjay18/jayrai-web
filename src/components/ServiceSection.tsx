'use client';

import React from 'react';
import { HoverEffect } from './ui/card-hover-effect';
import servicesData from '@/data/services_data.json';
import { TypewriterEffectSmooth } from './ui/typewriter-effect';

function ServiceSection() {
  const words = [
    {
      text: 'My ',
      className: 'text-5xl md:text-auto',
    },
    {
      text: 'Services',
      className: 'text-blue-500 dark:text-blue-500 text-5xl md:text-auto',
    },
  ];

  return (
    <div className="pt-20 md:pt-32 bg-black" id="services">
      {/* heading  */}
      <div className="flex justify-center">
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
