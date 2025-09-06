"use client";

import React, { useState, useEffect, useRef } from 'react';
import Header from '@/components/atoms/header';
import Button from '@/components/atoms/buttons';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValue, setAnimatedValue] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateValue();
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const animateValue = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    const increment = 10 / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const currentValue = Math.min(Math.floor(increment * currentStep), 10);
      setAnimatedValue(currentValue);

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepDuration);
  };

  console.log('AboutSection rendering, isVisible:', isVisible);
  
  return (
    <section 
      ref={sectionRef}
      className="py-16 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Side - Visual Collage */}
          <div className={`relative overflow-hidden shadow-xl w-full ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          } transition-all duration-700`}
          style={{
            aspectRatio: '616/638',
            borderRadius: '17.91px',
            backgroundColor: '#f3f4f6'
          }}>
            {/* Main Background Image - Scientific Presentation */}
            <img 
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=616&h=638&fit=crop&crop=face"
              alt="Scientific presentation and training"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-[17.91px]"
            />
            
            {/* Top-Right Image - Office/Reception Area */}
            <div className={`absolute top-2 right-2 sm:top-4 sm:right-4 w-32 h-20 sm:w-48 sm:h-32 lg:w-56 lg:h-36 rounded-xl overflow-hidden shadow-lg ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } transition-all duration-700 delay-200`}>
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop"
                alt="Professional office environment"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Bottom-Right Image - Speaker/Presentation */}
            <div className={`absolute bottom-2 right-2 sm:bottom-4 sm:right-4 w-32 h-20 sm:w-48 sm:h-32 lg:w-56 lg:h-36 rounded-xl overflow-hidden shadow-lg ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } transition-all duration-700 delay-400`}>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop"
                alt="Speaker presenting to audience"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Blue Experience Box - Bottom left, overlapping main image */}
            <div className={`absolute bottom-0 left-0 bg-blue-600 flex flex-col items-center justify-center shadow-lg ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } transition-all duration-700 delay-600`}
            style={{
              width: 'clamp(200px, 50%, 299.94px)',
              height: 'clamp(120px, 30%, 196.98px)',
              borderRadius: '17.91px'
            }}>
              <div className="text-white text-3xl sm:text-4xl lg:text-6xl font-bold mb-1 sm:mb-2">
                {animatedValue}+
              </div>
              <div className="text-white text-xs sm:text-sm lg:text-lg font-medium text-center px-2 sm:px-4 leading-tight">
                Years Of Experience
              </div>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className={`space-y-6 lg:space-y-8 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          } transition-all duration-700 delay-300`}>
            {/* Header with Badge */}
            <Header 
              variant="with-badge"
              text="About HRN group"
              badge="Who We Are"
              size="medium"
            />

            {/* Description */}
            <div className="space-y-4 lg:space-y-6 text-gray-600 leading-relaxed text-base lg:text-lg">
              <p>HRN group is a leading firm providing comprehensive training for skilled workers from Nepal to Japan. With a proven track record and unparalleled language proficiency, we ensure successful placements in Japanese companies.</p>
              <p>Our group includes a Japanese language school and a sending organization. Our primary goal is to manage all processes related to Japan, introducing skilled workers to Japanese companies and facilitating successful career transitions.</p>
            </div>

            {/* Button */}
            <div className="pt-4 lg:pt-6">
              <Button 
                variant="primary"
                className="w-full sm:w-auto"
                onClick={() => console.log('Learn More clicked')}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
