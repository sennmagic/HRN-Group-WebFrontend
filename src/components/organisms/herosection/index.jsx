"use client";

import React from 'react';
import Button from '../../atoms/buttons';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden" style={{ background: 'linear-gradient(103.03deg, #79D2FF 2.47%, #EFF9FF 99.65%)' }}>
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/30 rounded-full blur-3xl transform translate-x-32 -translate-y-16 z-0"></div>
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
                Pioneering nepal-japan
              </span>
              <span className="block">
                skilled workforce solutions
              </span>
            </h2>
            
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed font-normal max-w-full lg:max-w-[760px]">
              Empowering nepali youth to build a successful future in japan by providing world-class vocational training, intensive japanese language education, and a reliable placement system that ensures smooth integration into japan's skilled workforce across various industries.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button variant="primary" className="text-sm sm:text-base lg:text-lg bg-white hover:bg-gray-50 w-full sm:w-auto px-6 py-3" textColor="#041926">
                Book Appointment
              </Button>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
              </div>
            </div>
          </div>
          
          {/* Right Content - Three Circular Images */}
          <div className="relative h-full flex items-center justify-center mt-8 lg:mt-0">
            <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] max-w-xs sm:max-w-sm lg:max-w-md">
              {/* Top Image */}
              <div className="absolute right-1 sm:right-2 md:right-4 top-1 sm:top-2 md:top-4 flex flex-col items-center space-y-1 sm:space-y-2 md:space-y-4">
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 rounded-full overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=400&fit=crop&crop=face" 
                    alt="Agriculture" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-700 hidden sm:block">Kitchen Saf</span>
              </div>
              
              {/* Middle-Left Image */}
              <div className="absolute left-1 sm:left-2 md:left-4 top-12 sm:top-16 md:top-24 lg:top-32 flex flex-col items-center space-y-1 sm:space-y-2 md:space-y-4">
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 rounded-full overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&crop=face" 
                    alt="Culinary" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-700 hidden sm:block">Kitchen Saf</span>
              </div>
              
              {/* Bottom Image */}
              <div className="absolute right-1 sm:right-2 md:right-4 bottom-1 sm:bottom-2 md:bottom-4 flex flex-col items-center space-y-1 sm:space-y-2 md:space-y-4">
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 rounded-full overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
                    alt="Office" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-700 hidden sm:block">Kitchen Saf</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;