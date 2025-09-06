"use client";

import React, { useState } from 'react';
import Button from '@/components/atoms/buttons';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with email: ${email}`);
      setEmail('');
    }
  };

  const quickLinks = [
    "About us",
    "How it works", 
    "FAQs",
    "Terms of service",
    "Blogposts"
  ];

  const services = [
    "Interview assistance",
    "Visa guidance", 
    "JPLT",
    "SSW",
    "Better result"
  ];

  return (
    <footer className="bg-blue-50">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1 - HRN Info & Newsletter */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="mb-6">
              <div className="w-16 h-16 bg-white rounded-full border-4 border-blue-600 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-red-600 font-bold text-lg">HRN</div>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-700 text-sm leading-relaxed mb-8">
              HRN Group is dedicated to helping Nepalese individuals achieve their dreams of working and studying in Japan. We provide comprehensive support throughout your journey.
            </p>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Subscribe to our Newsletter
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Stay informed. Stay ahead with HRN Group
              </p>
              
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Button
                  variant="primary"
                  size="small"
                  onClick={handleSubscribe}
                  className="px-4 py-2"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Our Services */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-6">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact Info & Social Links */}
          <div>
            {/* Contact Information */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-gray-600 text-sm">014534455</span>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-gray-600 text-sm">info@hrnnepal.com</span>
                </div>

                {/* Address */}
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-600 text-sm">Hadigaun marga, kathmandu</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Social Links
              </h3>
              <div className="flex gap-3">
                {/* Facebook */}
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white rounded flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-200"
                >
                  <span className="font-bold text-sm">f</span>
                </a>
                
                {/* X (Twitter) */}
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white rounded flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-200"
                >
                  <span className="font-bold text-sm">X</span>
                </a>
                
                {/* LinkedIn */}
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white rounded flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-200"
                >
                  <span className="font-bold text-sm">in</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-blue-900 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-white text-sm">
              © Copyright 2025 HRN Group & Management Company All Rights Reserved.
            </div>
            <div className="text-white text-sm">
              Designed & Developed By: Lishnu Tech
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
