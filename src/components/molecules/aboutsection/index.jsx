"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/atoms/header';
import Button from '@/components/atoms/buttons';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValue, setAnimatedValue] = useState(0);
  const sectionRef = useRef(null);
  const router = useRouter();

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
              src="./about-hrn.jpg"
              alt="Scientific presentation and training"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-[17.91px]"
            />
            
            {/* Top-Right Image - Office/Reception Area */}
        

            {/* Bottom-Right Image - Speaker/Presentation */}
       

            {/* Blue Experience Box - Bottom left, overlapping main image */}
            <div className={`absolute left-0 bg-blue-600 flex flex-col items-center justify-center shadow-lg ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } transition-all duration-700 delay-600`}
            style={{
              width: 'clamp(150px, 35%, 220px)',
              height: 'clamp(60px, 15%, 100px)',
              borderTopRightRadius: '17.91px',
              borderBottomRightRadius: '17.91px',
              bottom: '30px'
            }}>
              <div className="text-white text-center px-0.5 sm:px-1 leading-tight">
                <div className="text-lg sm:text-xl lg:text-2xl font-medium">{animatedValue}+ Years of</div>
                <div className="text-lg sm:text-xl lg:text-2xl font-medium">Experience</div>
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
                onClick={() => router.push('/about/about-us')}
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
