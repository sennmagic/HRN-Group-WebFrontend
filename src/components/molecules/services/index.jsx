"use client";

import React, { useState, useEffect, useRef } from 'react';
import Header from '@/components/atoms/header';
import Button from '@/components/atoms/buttons';
import Link from 'next/link';

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    {
      title: "Specified skilled worker (ssw) - part 1",
      description: "We provide complete preparation for the specified skilled worker (ssw) visa, a japanese government-approved program that allows skilled nepali youth to work in 14 labor-scarce industries in japan.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop&crop=face",
      alt: "Skilled worker in construction gear"
    },
    {
      title: "Technical intern training program (TITP)",
      description: "The technical intern training program (titp) offers young individuals from nepal a chance to gain real-world work experience in japan's industries. It's a great way to build career skills abroad.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=face",
      alt: "Technical training in office setting"
    },
    {
      title: "Student visa for japan",
      description: "We provide complete preparation for the specified skilled worker (ssw) visa, a japanese government-approved program that allows skilled nepali youth to work in 14 labor-scarce industries in japan.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=face",
      alt: "Students in classroom setting"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-16 bg-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className={`mb-12 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        } transition-all duration-700`}>
          {/* Header with Badge */}
          <Header 
            variant="with-badge"
            text="Our system & services."
            badge="What We Offer"
            size="medium"
            className="mb-6"
          />

          {/* Description */}
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
            A complete ecosystem for training, job application, and successful relocation to japan.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {services.map((service, index) => (
            <Link
              key={index}
              href={`/services/${index + 1}`}
              className={`bg-white shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col w-full max-w-sm cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                height: '556px',
                borderRadius: '20px',
                transitionDelay: `${index * 200}ms`
              }}
            >
              {/* Service Image */}
              <div 
                className="w-full overflow-hidden"
                style={{
                  height: '240px',
                  padding: '20px 20px 0 20px'
                }}
              >
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Service Content */}
              <div 
                className="flex flex-col flex-grow px-4 sm:px-6 pb-4 sm:pb-6"
                style={{
                  paddingTop: '24px'
                }}
              >
                {/* Service Title */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 leading-tight line-clamp-2">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6 flex-grow line-clamp-4">
                  {service.description}
                </p>

                {/* Learn More Call to Action */}
                <div className="mt-auto">
                  <span className="inline-flex items-center text-primary font-medium">Learn More →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
