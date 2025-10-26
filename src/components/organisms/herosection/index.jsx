"use client";

import React from 'react';
import Button from '../../atoms/buttons';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image'; // ✅ Import Next.js Image component

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{
        background: 'linear-gradient(103.03deg, #79D2FF 2.47%, #EFF9FF 99.65%)'
      }}
    >
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl transform translate-x-32 -translate-y-16 z-0"></div>
      <div className="absolute top-20 right-40 w-80 h-80 bg-blue-100/40 rounded-full blur-2xl transform translate-x-20 translate-y-10 z-0"></div>
      <div className="absolute bottom-20 right-20 w-60 h-60 bg-pink-200/30 rounded-full blur-2xl z-0"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-24 items-center min-h-[60vh] lg:min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 z-10">
            <h2
              className="text-[#041926] w-full max-w-full lg:w-[760px]"
              style={{
                fontFamily: 'Plus Jakarta Sans',
                fontWeight: 700,
                fontStyle: 'Bold',
                fontSize: 'clamp(32px, 5vw, 58px)',
                lineHeight: '100%',
                letterSpacing: '-1%',
                opacity: 0.9
              }}
            >
              <span className="block sm:whitespace-nowrap">
                Pioneering Nepal–Japan
              </span>
              <span className="block">skilled workforce solutions</span>
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed font-normal max-w-full lg:max-w-[760px]">
              Empowering Nepali youth to build a successful future in Japan by
              providing world-class vocational training, intensive Japanese
              language education, and a reliable placement system that ensures
              smooth integration into Japan's skilled workforce across various
              industries.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/contact">
                <Button
                  variant="primary"
                  className="text-sm sm:text-base lg:text-lg bg-white hover:!bg-primary hover:!text-white w-full sm:w-auto px-6 py-3"
                  textColor="#041926"
                >
                  Book Appointment
                </Button>
              </Link>

              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative flex justify-center lg:justify-end z-10">
            <Image
              src="/logo.gif" // ✅ Replace with your actual image path
              alt="Hero Image"
              width={900}
              height={900}
              className="rounded-full object-cover drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
