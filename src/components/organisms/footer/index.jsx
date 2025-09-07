import React from 'react';
import Image from "next/image";
import Button from "../../atoms/buttons";
import Logo from "../../atoms/logo";
import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const socialLinks = [
  { icon: Facebook, link: "https://www.facebook.com/profile.php?id=61558444111385" },
  { icon: Instagram, link: "https://www.instagram.com/lishnutech/" },
  { icon: Linkedin, link: "https://www.linkedin.com/company/lishnu-tech/?viewAsMember=true" },
];

const quickLinks = ["Services", "Process", "Portfolio", "Blogs"];
const companyLinks = ["About Us", "Contact", "Career"];
const contactDetails = [
  { icon: MapPin, text: "Hadigaun marga, kathmandu" },
  { icon: Mail, text: "info@hrnnepal.com" },
  { icon: Phone, text: "014534455" },
];

export default function Footer() {
  return (
    <>
      {/* Start Your Journey Section */}
    
      {/* Main Footer */}
      <footer className="bg-[#DFF1FF] text-gray-800 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 overflow-x-hidden">

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-10 sm:gap-y-12 md:gap-y-0 gap-x-6 sm:gap-x-8 md:gap-x-10 lg:gap-x-16 xl:gap-x-24">
        {/* Left Section */}
        <div className="space-y-6 sm:space-y-10 md:col-span-2">
          <Logo size="md" showText={false} />
          <p className="text-sm sm:text-base font-medium text-gray-700">
            We have been managing and apply directing all the nepalese aspiring to go to japan, and the organizations working in the various sectors in japan, similarly, from arranging the documentation processes of all sectors.
          </p>
          
          {/* Newsletter Subscription */}
          <div className="space-y-4">
            <h3 className="text-gray-800 font-semibold text-lg">Subscribe to our Newsletter</h3>
            <p className="text-gray-600 text-sm">Stay informed. stay ahead with hrn group</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="primary" className="rounded-l-none px-4">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-2 gap-x-10 md:gap-x-20 gap-y-8 md:col-span-2">
          <div className="w-full md:w-auto">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4 sm:mb-8">
              QUICK LINKS
            </h3>
            <ul className="space-y-3 sm:space-y-5 text-sm sm:text-base font-semibold">
              <li><a href="#" className="hover:text-primary transition-colors text-gray-700">About us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors text-gray-700">How it works</a></li>
              <li><a href="#" className="hover:text-primary transition-colors text-gray-700">FAQs</a></li>
              <li><a href="#" className="hover:text-primary transition-colors text-gray-700">Terms of service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors text-gray-700">Blogposts</a></li>
            </ul>
          </div>
          <div className="w-full md:w-auto">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4 sm:mb-8">
              OUR SERVICES
            </h3>
            <ul className="space-y-3 sm:space-y-5 text-sm sm:text-base font-semibold">
              <li><a href="#" className="hover:text-primary transition-colors text-gray-700">Interview assistance</a></li>
              <li><a href="#" className="hover:text-primary transition-colors text-gray-700">Visa guidance</a></li>
              <li><a href="#" className="hover:text-primary transition-colors text-gray-700">JPLT</a></li>
              <li><a href="#" className="hover:text-primary transition-colors text-gray-700">SSW</a></li>
              <li><a href="#" className="hover:text-primary transition-colors text-gray-700">Better result</a></li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-between space-y-6 md:space-y-0 md:col-span-2">
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4 sm:mb-8">
              CONTACT INFORMATION
            </h3>
            <ul className="space-y-3 sm:space-y-5 mb-6">
              {contactDetails.map((contact, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-3"
                >
                  <contact.icon className="mt-1 w-5 h-5 sm:w-7 sm:h-7 text-secondary" />
                  <span className="text-xs sm:text-sm md:text-base text-gray-700">
                    {contact.text}
                  </span>
                </li>
              ))}
            </ul>

            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">
              SOCIAL LINKS
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.link} className="cursor-pointer text-gray-700 hover:text-primary transition-colors">
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-b border-gray-300 max-w-7xl mx-auto my-8 sm:my-12" />

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center pt-6 text-xs sm:text-sm text-gray-600 gap-y-4 sm:gap-y-0 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
          <a href="#" className="hover:text-primary transition-colors">
          <p>© 2025 HRN Group & Management Company. All Rights Reserved.</p>
          </a>
        
      
        </div>
        <div className="text-center sm:text-left">
         
          <p className=""> 
            Created by{" "}
            <a 
              href="https://lishnutech.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors underline"
            >
              Lishnu Tech
            </a>
          </p>
        </div>
      </div>
      </footer>
    </>
  );
};