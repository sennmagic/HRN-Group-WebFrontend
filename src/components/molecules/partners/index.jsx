"use client";

import React from 'react';
import Header from '@/components/atoms/header';

const PartnerSection = ({ partnersdata = [] }) => {
  return (
    <div className="py-16 bg-white">
      {/* Header */}
      <Header 
        text="Proudly Partnered With"
        className="text-gray-800"
        align="center"
        size="small"
      />

      {/* Partner logos */}
      <div className="flex flex-wrap justify-center items-center gap-10">
        {partnersdata.map((partner, idx) => (
          <div key={idx} className="w-30 h-20 relative">
            <img
              src={partner.images.small}
              alt={`${partner.title} logo`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerSection;
