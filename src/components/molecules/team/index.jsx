"use client";

import React, { useState, useEffect, useRef } from 'react';
import Header from '@/components/atoms/header';
import Button from '@/components/atoms/buttons';

const TeamSection = () => {
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

  const teamMembers = [
    {
      name: "Prakash Acharya",
      position: "CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=376&h=300&fit=crop&crop=face",
      description: "Leading the vision for HRN Group's success in Japan-Nepal workforce solutions."
    },
    {
      name: "Sarah Johnson",
      position: "Head of Operations",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=376&h=300&fit=crop&crop=face",
      description: "Overseeing daily operations and ensuring smooth workforce placement processes."
    },
    {
      name: "Michael Chen",
      position: "Language Training Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=376&h=300&fit=crop&crop=face",
      description: "Expert in Japanese language education and JLPT preparation programs."
    },
    {
      name: "Emily Davis",
      position: "HR Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=376&h=300&fit=crop&crop=face",
      description: "Managing human resources and ensuring quality worker selection processes."
    },
    {
      name: "David Wilson",
      position: "Japan Relations Manager",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=376&h=300&fit=crop&crop=face",
      description: "Building and maintaining partnerships with Japanese companies and organizations."
    },
    {
      name: "Lisa Anderson",
      position: "Training Coordinator",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=376&h=300&fit=crop&crop=face",
      description: "Coordinating training programs and ensuring successful skill development."
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-16 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className={`mb-12 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        } transition-all duration-700`}>
          {/* Header with Badge */}
          <Header 
            variant="with-badge"
            text="Meet the People Behind HRN Group"
            badge="Our Core Team"
            size="medium"
            className="mb-6"
          />
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mb-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                width: '376px',
                height: '472px',
                borderRadius: '20px',
                transitionDelay: `${index * 100}ms`
              }}
            >
              {/* Team Member Image */}
              <div 
                className="overflow-hidden"
                style={{
                  height: '280px',
                  borderRadius: '20px 20px 0 0',
                  margin: '0 12px',
                  marginTop: '0'
                }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Team Member Info */}
              <div 
                className="p-6"
                style={{
                  height: '192px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <div style={{ marginTop: '16px' }}>
                  {/* Name */}
                  <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                    {member.name}
                  </h3>

                  {/* Position */}
                  <p className="text-gray-800 font-semibold text-center">
                    {member.position}
                  </p>
                </div>

                {/* Social Media Icons */}
                <div className="flex gap-4 justify-center">
                  {/* Facebook Icon */}
                  <div 
                    className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>

                  {/* LinkedIn Icon */}
                  <div 
                    className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-800 transition-colors"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Team Button */}
        <div className="flex justify-center">
          <Button 
            variant="primary"
            onClick={() => console.log('View All Team clicked')}
          >
            View All Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
