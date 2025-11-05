"use client";

import React, { useState, useEffect, useRef } from 'react';
import Header from '@/components/atoms/header';

const WhyChooseSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Check if mobile or reduced motion preferred
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // If mobile or reduced motion, show immediately
    if (isMobile || prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    // Check if element is already in viewport on mount
    const checkInitialVisibility = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
        if (isInViewport) {
          setIsVisible(true);
          return true;
        }
      }
      return false;
    };

    // If already visible, don't set up observer
    if (checkInitialVisibility()) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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

    // Fallback: ensure visibility after a delay if observer doesn't fire
    const fallbackTimeout = setTimeout(() => {
      if (!isVisible && sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight * 2) {
          setIsVisible(true);
        }
      }
    }, 1000);

    return () => {
      clearTimeout(fallbackTimeout);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
          <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none"/>
        </svg>
      ),
      title: "High-quality workers",
      description: "We implement a rigorous selection process to ensure only the most capable and dedicated workers are chosen."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: "Continuous support",
      description: "From departure to arrival and beyond, we stay connected with our workers, offering ongoing guidance and follow-ups."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
          <path d="M14 2v6h6" stroke="white" strokeWidth="2" fill="none"/>
          <path d="M16 13H8" stroke="white" strokeWidth="2"/>
          <path d="M16 17H8" stroke="white" strokeWidth="2"/>
          <path d="M10 9H8" stroke="white" strokeWidth="2"/>
        </svg>
      ),
      title: "Timely document submission",
      description: "We make sure all certificate of eligibility (coe) and visa documents are submitted without delay."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </svg>
      ),
      title: "Residential training",
      description: "After an offer is made, workers will attend the hrn special course in a residential setting until the coe is issued."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      ),
      title: "Japanese language education",
      description: "We provide jlpt-focused language training, even after workers arrive in japan, supporting levels n3 and n2."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.37-2.01.99L12 11l-1.99-2.01A2.5 2.5 0 0 0 8 8H5.46c-.8 0-1.54.37-2.01.99L1 12.5V22h2v-6h2.5l2.54-7.63A1.5 1.5 0 0 1 9.46 8H12c.8 0 1.54.37 2.01.99L16 11l1.99-2.01A2.5 2.5 0 0 1 20 8h2.5L20 15.5V22h2z"/>
        </svg>
      ),
      title: "Support for success",
      description: "Our team is dedicated to long-term success—offering personalized support throughout your journey."
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-16 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className={`mb-12 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        } transition-all duration-700`}>
          {/* Header with Badge */}
          <Header 
            variant="with-badge"
            text="Why HRN group is the trusted pathway to work and study in japan"
            badge="Why Choose Us"
            size="medium"
            className="mb-6"
          />
        </div>

        {/* Features Grid - 6 cards in 2x3 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                width: '400px',
                height: '318px',
                borderRadius: '20px',
                border: '0.5px solid #A3A3A3',
                background: 'linear-gradient(112.39deg, #DFF1FF 2.21%, #FFFFFF 97.72%)',
                transitionDelay: `${index * 100}ms`
              }}
            >
              {/* Feature Icon */}
              <div 
                className="bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm"
                style={{
                  width: '76px',
                  height: '76px',
                  borderRadius: '12px',
                  marginBottom: '16px'
                }}
              >
                <div style={{ width: '32px', height: '32px' }}>
                  {feature.icon}
                </div>
              </div>

              {/* Feature Title */}
              <h3 
                className="font-bold text-gray-800"
                style={{
                  width: '274px',
                  height: '19px',
                  fontSize: '16px',
                  lineHeight: '19px',
                  marginBottom: '12px'
                }}
              >
                {feature.title}
              </h3>

              {/* Feature Description */}
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
