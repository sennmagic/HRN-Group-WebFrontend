"use client";

import React, { useState, useEffect, useRef } from 'react';
import Header from '@/components/atoms/header';

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
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

  const testimonials = [
    {
      name: "Prakash Acharya",
      position: "CEO",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=120&h=120&fit=crop&crop=face",
      quote: "Choosing HRN group was the best decision i made for my future. from the very beginning, their team guided me with every detail"
    },
    {
      name: "Sarah Johnson",
      position: "Operations Manager",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=120&fit=crop&crop=face",
      quote: "The support and guidance from HRN Group helped me successfully transition to working in Japan. Their expertise is unmatched."
    },
    {
      name: "Michael Chen",
      position: "Language Coordinator",
      image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=120&h=120&fit=crop&crop=face",
      quote: "HRN Group provided excellent language training and career guidance. I'm now working successfully in Tokyo thanks to their support."
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-16 relative overflow-hidden"
      style={{
        backgroundColor: '#094871',
        borderRadius: '0 0 40px 40px'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className={`mb-12 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        } transition-all duration-700`}>
          {/* Header with Badge */}
          <div className="flex justify-center mb-6">
            <Header 
              variant="with-badge"
              text="Stories of success"
              badge="Testimonials"
              size="medium"
              align="center"
              color='white'
              titleClass='text-white'
              badgeClass='text-white'
            />
          </div>
        </div>

        {/* Testimonials Content */}
        <div className={`text-center relative ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        } transition-all duration-700 delay-300`}>
          {/* Navigation Arrows */}
          <button
            onClick={() => setActiveTestimonial(activeTestimonial === 0 ? testimonials.length - 1 : activeTestimonial - 1)}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-blue-300 bg-opacity-30 rounded-full flex items-center justify-center text-[#094871] hover:bg-opacity-50 hover:text-white transition-all duration-300"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => setActiveTestimonial(activeTestimonial === testimonials.length - 1 ? 0 : activeTestimonial + 1)}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-blue-300 bg-opacity-30 rounded-full flex items-center justify-center text-blue-100 hover:bg-opacity-50 hover:text-white transition-all duration-300"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Profile Images */}
          <div className="flex justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden cursor-pointer transition-all duration-300 ${
                  index === activeTestimonial 
                    ? 'ring-2 sm:ring-4 ring-white ring-opacity-50 scale-110' 
                    : 'opacity-50 hover:opacity-75'
                }`}
                onClick={() => setActiveTestimonial(index)}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Testimonial Quote */}
          <div className="mb-6 sm:mb-8 px-4 sm:px-0">
            <blockquote className="text-white text-base sm:text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto italic">
              "{testimonials[activeTestimonial].quote}"
            </blockquote>
          </div>

          {/* Testimonial Attribution */}
          <div>
            <h3 className="text-white text-lg sm:text-xl font-bold mb-2">
              {testimonials[activeTestimonial].name}
            </h3>
            <p className="text-white text-sm opacity-80">
              {testimonials[activeTestimonial].position}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
