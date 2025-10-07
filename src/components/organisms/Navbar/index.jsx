"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Logo from '../../atoms/logo';
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Linkedin, ChevronDown, Globe } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="w-full">
      {/* Top Info Bar */}
      <div className="bg-primary-light text-gray-700 py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm font-normal">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Hadigaun marga, kathmandu</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>info@hrnnepal.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>014534455</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="w-px h-4 bg-white/30"></div>
            <div className="flex space-x-3">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-sm border-t-4 border-primary relative z-50 overflow-visible">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Logo size="md" showText={false} />

            {/* Navigation Links */}
            <div className="hidden md:flex items-center" style={{ width: '442.5px', height: '13px', gap: '34px', opacity: 0.8 }}>
              {/* About Dropdown */}
              <div className="relative group">
                <a href="#" className="text-gray-700 hover:text-primary transition-colors text-lg font-normal leading-[27px] flex items-center">
                  About
                  <ChevronDown className="ml-1 w-4 h-4" />
                </a>
                <div className="absolute top-full left-0 mt-0 pt-2 w-56 bg-white rounded-md shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[9999] pointer-events-none group-hover:pointer-events-auto">
                  <div className="py-2">
                    <Link href="/about/about-hrn" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors">
                      About HRN
                    </Link>
                    <Link href="/about/our-team" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors">
                      Our Team
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <Link href="/services" className="text-gray-700 hover:text-primary transition-colors text-lg font-normal leading-[27px] flex items-center cursor-pointer">
                  Services
                  <ChevronDown className="ml-1 w-4 h-4" />
                </Link>
                {/* Services Dropdown */}
                <div className="absolute top-full left-0 mt-0 pt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[9999] pointer-events-none group-hover:pointer-events-auto">
                  <div className="py-2">
                    <Link href="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors cursor-pointer">
                      Interview Assistance
                    </Link>
                    <Link href="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors cursor-pointer">
                      Visa Guidance
                    </Link>
                    <Link href="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors cursor-pointer">
                      JPLT Training
                    </Link>
                    <Link href="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors cursor-pointer">
                      SSW Program
                    </Link>
                    <Link href="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors cursor-pointer">
                      Better Results
                    </Link>
                  </div>
                </div>
              </div>
              <Link href="/blog" className="text-gray-700 hover:text-primary transition-colors text-lg font-normal leading-[27px] cursor-pointer">
                Blogs
              </Link>
              <Link 
                href="/contact"
                className="text-gray-700 hover:text-primary transition-colors text-lg font-normal leading-[27px] cursor-pointer"
              >
                Contact
              </Link>
            </div>

            {/* Right Side - Login and Language */}
            <div className="flex items-center space-x-4">
              <Link 
                href="/login"
                className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors cursor-pointer"
              >
                Login
              </Link>
              
              <div className="flex items-center space-x-1 cursor-pointer text-primary transition-colors text-lg font-normal leading-[27px]">
                <Globe className="w-4 h-4" />
                <ChevronDown className="w-3 h-3" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
