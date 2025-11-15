"use client";

import React from 'react';
import Header from '@/components/atoms/header';

const PartnerSection = ({ partnersdata = [] }) => {
  // Duplicate data for seamless marquee loop
  const marqueeItems = [...partnersdata, ...partnersdata];

  return (
    <div className="py-16 bg-white">
      {/* Header */}
      <Header 
        text="Our Group Companies"
        className="text-gray-800"
        align="center"
        size="small"
      />

      {/* Marquee with side shadows */}
      <div className="relative max-w-7xl mx-auto mt-8 px-4">
        {/* Left shadow */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 z-10" style={{
          background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.7) 40%, rgba(255,255,255,0) 100%)'
        }} />
        {/* Right shadow */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 z-10" style={{
          background: 'linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.7) 40%, rgba(255,255,255,0) 100%)'
        }} />

        {/* Marquee viewport */}
        <div className="overflow-hidden">
          <div className="flex items-center gap-4 sm:gap-6" style={{
            width: 'max-content',
            animation: 'partner-marquee 25s linear infinite'
          }}>
            {marqueeItems.map((partner, idx) => (
              <div key={idx} className="flex-shrink-0">
                <div className="h-14 w-32 sm:h-16 sm:w-36 md:h-20 md:w-44 flex items-center justify-center">
                  <img
                    src={partner.images?.small || partner.images}
                    alt={`${partner.title || 'Partner'} logo`}
                    className="max-h-full max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Inline keyframes for marquee */}
      <style jsx>{`
        @keyframes partner-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default PartnerSection;
