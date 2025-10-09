"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/atoms/header';
import Button from '@/components/atoms/buttons';

const TeamSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const router = useRouter();

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

                  {/* WhatsApp Icon */}
                  <div 
                    className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center cursor-pointer hover:bg-green-600 transition-colors"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-label="WhatsApp">
                      <path d="M20.52 3.48A11.78 11.78 0 0012.07 0C5.47 0 .14 5.33.14 11.93c0 2.1.55 4.17 1.6 5.99L0 24l6.23-1.62a11.86 11.86 0 005.84 1.5h.01c6.6 0 11.93-5.33 11.93-11.93 0-3.19-1.24-6.19-3.49-8.47zM12.08 21.3h-.01a9.4 9.4 0 01-4.79-1.31l-.34-.2-3.69.96.99-3.6-.22-.37a9.42 9.42 0 01-1.47-5.08c0-5.19 4.23-9.41 9.42-9.41 2.52 0 4.89.98 6.67 2.77a9.37 9.37 0 012.75 6.66c0 5.19-4.23 9.42-9.31 9.42zm5.31-7.05c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.64.14-.19.29-.74.93-.9 1.12-.17.19-.33.21-.62.07-.29-.15-1.24-.46-2.36-1.48-.87-.78-1.46-1.74-1.63-2.03-.17-.29-.02-.45.13-.6.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.09-.19.05-.36-.02-.5-.07-.15-.64-1.54-.88-2.11-.23-.56-.47-.48-.64-.48h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43 0 1.43 1.02 2.8 1.16 2.99.14.19 2 3.05 4.84 4.28.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.33z"/>
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
            onClick={() => router.push('/our-team')}
          >
            View All Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
