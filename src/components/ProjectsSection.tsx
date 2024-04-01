'use client';

import React from 'react';
import { CardBody, CardContainer, CardItem } from './ui/3d-card';
import Image from 'next/image';
import Link from 'next/link';
import projectsData from '@/data/projects_data.json';
import { TypewriterEffectSmooth } from './ui/typewriter-effect';

function ProjectsSection() {
  const words = [
    {
      text: 'My ',
      className: 'text-5xl md:text-auto',
    },
    {
      text: 'Works',
      className: 'text-blue-500 dark:text-blue-500 text-5xl md:text-auto',
    },
  ];

  return (
    <div className="mt-20 md:mt-10" id='projects'>
      {/* heading   */}
      <div className="flex justify-center">
        <TypewriterEffectSmooth words={words} cursorClassName="h-12" />
      </div>
      {/* content  */}
      <div className="content px-5 md:px-0 flex flex-wrap justify-center md:gap-x-10">
        {projectsData.projects.map((project) => (
          <CardContainer className="inter-var" key={project.link}>
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {project.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {project.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={project.imageSrc}
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
                  href={project.link}
                  target="__blank"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold flex gap-2 items-center text-md"
                >
                  <span className="font-semibold">Visit</span>
                  <span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}

export default ProjectsSection;
