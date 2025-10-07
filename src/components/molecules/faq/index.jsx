"use client";

import React, { useState, useEffect, useRef } from 'react';
import Header from '@/components/atoms/header';

const FAQSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState(0);
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

  const faqs = [
    {
      question: "What is the specified skilled worker (ssw) visa?",
      answer: "We provide complete preparation for the specified skilled worker (ssw) visa, a Japanese government-approved program that allows skilled Nepali youth to work in 14 labor-scarce industries in Japan."
    },
    {
      question: "What industries are included in the ssw program?",
      answer: "The SSW program covers 14 specific industries including construction, shipbuilding, automobile maintenance, aviation, accommodation, elderly care, building cleaning, agriculture, food service, food manufacturing, fishery, materials industry, industrial machinery, and electronics."
    },
    {
      question: "What is the hrn special course?",
      answer: "The HRN special course is our comprehensive training program that includes Japanese language education, cultural orientation, technical skills training, and job preparation specifically designed for successful placement in Japanese companies."
    },
    {
      question: "Does hrn help with student visas for japan?",
      answer: "Yes, HRN Group provides complete support for student visa applications to Japan, including language school enrollment, document preparation, and guidance throughout the application process."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section 
      ref={sectionRef}
      className="py-16 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Header */}
          <div className={`${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          } transition-all duration-700`}>
            {/* Header with Badge */}
            <Header 
              variant="with-badge"
              text="Frequently asked questions"
              badge="FAQs"
              size="medium"
              className="mb-6"
            />

            {/* Description */}
            <p className="text-gray-600 leading-relaxed text-lg">
              Have questions? We've got answers, for everything else email us on{' '}
              <a 
                href="mailto:info@hrnnepal.com" 
                className="text-blue-600 underline hover:text-blue-700 transition-colors"
              >
                info@hrnnepal.com
              </a>
            </p>
          </div>

          {/* Right Side - FAQ Items */}
          <div className={`space-y-4 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          } transition-all duration-700 delay-300`}>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl overflow-hidden transition-all duration-300 w-full"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <span className="font-semibold text-gray-800 pr-4 text-base sm:text-lg">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    )}
                  </div>
                </button>

                {/* Answer */}
                {openIndex === index && (
                  <div className="px-6 pb-6 pt-2">
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
