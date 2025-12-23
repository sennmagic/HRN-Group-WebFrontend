"use client";

import React, { useState, useEffect, useRef } from "react";
import Header from "@/components/atoms/header";
import Link from "next/link";

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isMobile || prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

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

    if (checkInitialVisibility()) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3, rootMargin: "0px 0px -100px 0px" }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    const fallbackTimeout = setTimeout(() => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight * 2) setIsVisible(true);
      }
    }, 1000);

    return () => {
      clearTimeout(fallbackTimeout);
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const services = [
    {
      title: "Specified Skilled Worker (SSW) - Part 1",
      description:
        "We provide complete preparation for the specified skilled worker (ssw) visa, a japanese government-approved program that allows skilled nepali youth to work in 14 labor-scarce industries in japan.",
     
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      alt: "Skilled worker in construction gear",
    },
    {
      title: "Technical Intern Training Program (TITP)",
      description:
        "The technical intern training program (titp) offers young individuals from nepal a chance to gain real-world work experience in japan's industries. It's a great way to build career skills abroad.",

      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      alt: "Technical training in office setting",
    },
    {
      title: "Student Visa",
      description:
        "We provide complete preparation for the specified skilled worker (ssw) visa, a japanese government-approved program that allows skilled nepali youth to work in 14 labor-scarce industries in japan.",
  
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      alt: "Students in classroom setting",
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`mb-12 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          } transition-all duration-700`}
        >
          <Header
            variant="with-badge"
            text="Our system & services."
            badge="What We Offer"
            size="medium"
            className="mb-6"
          />

          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
            A complete ecosystem for training, job application, and successful
            relocation to japan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {services.map((service, index) => (
            <Link
              key={index}
              href={`/services/${index + 1}`}
              className={`bg-white shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col w-full max-w-sm cursor-pointer ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                height: "556px",
                borderRadius: "20px",
                transitionDelay: `${index * 200}ms`,
              }}
            >
              <div
                className="w-full overflow-hidden"
                style={{ height: "240px", padding: "20px 20px 0 20px" }}
              >
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover rounded-lg"
                 
                  onError={(e) => {
                    e.currentTarget.src = "/traininginha.png"; 
                  }}
                />
              </div>

              <div
                className="flex flex-col flex-grow px-4 sm:px-6 pb-4 sm:pb-6"
                style={{ paddingTop: "24px" }}
              >
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 leading-tight line-clamp-2">
                  {service.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6 flex-grow line-clamp-4">
                  {service.description}
                </p>

                <div className="mt-auto">
                  <span className="inline-flex items-center text-primary font-medium">
                    Learn More →
                  </span>
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
