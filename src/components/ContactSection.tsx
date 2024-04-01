import React from 'react';
import { TypewriterEffectSmooth } from './ui/typewriter-effect';

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

  return (
    <div className="mt-20 md:mt-10">
      {/* heading   */}
      <div className="flex justify-center">
        <TypewriterEffectSmooth words={words} cursorClassName="h-12" />
      </div>

      {/* content  */}
      <div className="content px-5 md:px-0 flex flex-wrap justify-center md:gap-x-10">
        contact content will be shown here
      </div>
    </div>
  );
}

export default ContactSection;
