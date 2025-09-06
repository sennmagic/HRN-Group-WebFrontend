"use client";

import React, { useState, useRef, useEffect } from 'react';
import Header from '@/components/atoms/header';

const BlogSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  const blogPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop&crop=center",
      tag: "Insights",
      title: "Technical intern training program (TITP)",
      description: "The technical intern training program (titp) offers young individuals from nepal a chance to gain real-world work experience in japan's industries.",
      date: "JUNE 7, 2022"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=250&fit=crop&crop=center",
      tag: "Insights",
      title: "Technical intern training program (TITP)",
      description: "The technical intern training program (titp) offers young individuals from nepal a chance to gain real-world work experience in japan's industries.",
      date: "JUNE 7, 2022"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop&crop=center",
      tag: "Insights",
      title: "Technical intern training program (TITP)",
      description: "The technical intern training program (titp) offers young individuals from nepal a chance to gain real-world work experience in japan's industries.",
      date: "JUNE 7, 2022"
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className={`mb-12 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        } transition-all duration-700`}>
          {/* Header with Badge */}
          <Header 
            variant="with-badge"
            text="Get the latest insights"
            badge="Blogposts"
            size="medium"
            className="mb-6"
          />
        </div>

        {/* Blog Cards Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        } transition-all duration-700 delay-200`}>
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(32px)',
                transition: `all 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`
              }}
            >
              {/* Blog Image */}
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* Blog Content */}
              <div className="p-6">
                {/* Tag */}
                <div className="mb-3">
                  <span 
                    className="inline-block px-3 py-1 text-xs font-medium rounded-full"
                    style={{
                      backgroundColor: '#E3F2FD',
                      color: '#1976D2',
                      borderRadius: '16px'
                    }}
                  >
                    {post.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.description}
                </p>

                {/* Date */}
                <div className="text-xs text-gray-500 font-medium">
                  {post.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
