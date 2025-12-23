"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import Header from "@/components/atoms/header";
import Button from "@/components/atoms/buttons";

const TeamSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const router = useRouter();
  const pathname = usePathname();

  
  const isTeamPage = pathname === "/about/our-team";


  const teamMembers = [
    {
      name: "Prakash Acharya",
      position: "Chairman 会長",
      image: "/prakashacharya.jpg",
    },
    {
      name: "Bishal Pokhrel",
      position: "CEO 代表取締役",
      image: "/bishal.jpg",
    },
    {
      name: "Santosh Neupane",
      position: "Managing Director 取締役",
      image: "/santosh.jpg",
    },

    
    {
      name: "Member 4",
      position: "HR Manager",
      image: "/about-hrn.jpg",
    },
    {
      name: "Member 5",
      position: "Trainer",
      image: "/about-hrn.jpg",
    },
    {
      name: "Member 6",
      position: "Coordinator",
      image: "/about-hrn.jpg",
    },
    {
      name: "Member 7",
      position: "Support Staff",
      image: "/about-hrn.jpg",
    },
    {
      name: "Member 8",
      position: "Support Staff",
      image: "/about-hrn.jpg",
    },
    {
      name: "Member 9",
      position: "Support Staff",
      image: "/about-hrn.jpg",
    },
    {
      name: "Member 10",
      position: "Support Staff",
      image: "/about-hrn.jpg",
    },
    {
      name: "Member 11",
      position: "Support Staff",
      image: "/about-hrn.jpg",
    },
    {
      name: "Member 12",
      position: "Support Staff",
      image: "/about-hrn.jpg",
    },
    
  ];

  
  const initialCount = 3;

  const [visibleCount, setVisibleCount] = useState(initialCount);

  useEffect(() => {
    setVisibleCount(initialCount);
  }, [isTeamPage]);

  useEffect(() => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isMobile || prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3, rootMargin: "0px 0px -100px 0px" }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const membersToShow = teamMembers.slice(0, visibleCount);

  const handleViewMore = () => {
    setVisibleCount(teamMembers.length); 
  };

  return (
    <section ref={sectionRef} className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`mb-12 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          } transition-all duration-700`}
        >
          <Header
            variant="with-badge"
            text="Meet the People Behind HRN Group"
            badge="Our Core Team"
            size="medium"
            className="mb-6"
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mb-10">
          {membersToShow.map((member, index) => (
            <div
              key={index}
              className={`bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                width: "376px",
                height: "472px",
                borderRadius: "20px",
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Image */}
              <div
                className="overflow-hidden"
                style={{
                  height: "280px",
                  borderRadius: "20px 20px 0 0",
                  margin: "0 12px",
                }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <div
                className="p-6"
                style={{
                  height: "192px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div style={{ marginTop: "16px" }}>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                    {member.name}
                  </h3>
                  <p className="text-gray-800 font-semibold text-center">
                    {member.position}
                  </p>
                </div>

                {/* Icons */}
                <div className="flex gap-4 justify-center">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>

                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center cursor-pointer hover:bg-green-600 transition-colors">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-label="WhatsApp">
                      <path d="M20.52 3.48A11.78 11.78 0 0012.07 0C5.47 0 .14 5.33.14 11.93c0 2.1.55 4.17 1.6 5.99L0 24l6.23-1.62a11.86 11.86 0 005.84 1.5h.01c6.6 0 11.93-5.33 11.93-11.93 0-3.19-1.24-6.19-3.49-8.47z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          {/* Homepage button */}
          {!isTeamPage && (
            <Button variant="primary" onClick={() => router.push("/about/our-team")}>
              View All Team
            </Button>
          )}

          {/* View More button */}
          {isTeamPage && visibleCount < teamMembers.length && (
            <Button variant="primary" onClick={handleViewMore}>
              View More
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
