'use client';

import React from 'react';
import SparkleHeading from './SparkleHeading/SparkleHeading';
import { HoverEffect } from './ui/card-hover-effect';
import servicesData from '@/data/services_data.json';

function ServiceSection() {
  return (
    <div className="mt-20 md:mt-32">
      {/* heading  */}
      <SparkleHeading heading={'My Services'} />

      {/* content  */}
      <div className="content px-5 md:px-20">
        <HoverEffect items={servicesData.services} />
      </div>
    </div>
  );
}

export default ServiceSection;
