"use client";

import React, { useState } from 'react';
import Button from '../../atoms/buttons';
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
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full border-4 border-primary flex items-center justify-center">
                <div className="text-lg font-bold">
                  <span className="text-secondary">HR</span>
                  <span className="text-primary">N</span>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center" style={{ width: '442.5px', height: '13px', gap: '34px', opacity: 0.8 }}>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors text-lg font-normal leading-[27px]">
                About
              </a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors text-lg font-normal leading-[27px]">
                How It Works
              </a>
              <div className="relative group">
                <a href="#" className="text-gray-700 hover:text-primary transition-colors text-lg font-normal leading-[27px] flex items-center">
                  Services
                  <ChevronDown className="ml-1 w-4 h-4" />
                </a>
              </div>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors text-lg font-normal leading-[27px]">
                Blogs
              </a>
            </div>

            {/* Right Side - Buttons and Language */}
            <div className="flex items-center space-x-4">
              <Button variant="primary">
                Contact Us
              </Button>
              
              <div className="flex items-center space-x-1 cursor-pointer hover:text-primary transition-colors text-lg font-normal leading-[27px]">
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
