"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Logo from "../../atoms/logo";
import { servicesData } from "../../../servicesData,";

import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ChevronDown,
  Globe,
  Menu,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const megaVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.05,
    },
  },
  exit: { opacity: 0 },
};
const itemVariants = {
  hidden: { opacity: 0, x: -16, y: 4 },
  visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.25, ease: "easeOut" } },
};

const mobileDropdownVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
  exit: { opacity: 0, height: 0, transition: { duration: 0.2 } },
};

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const languageRef = useRef(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        setLanguageOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full ">
      {/* Top Info Bar */}
      <div className="bg-white text-black font-bold py-2 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm font-normal">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Hadigaun marga, Kathmandu</span>
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

          <div className="flex items-center space-x-3">
            <Facebook className="w-4 h-4  hover:text-stonewhite cursor-pointer" />
            <Twitter className="w-4 h-4  hover:text-stonewhite cursor-pointer" />
            <Instagram className="w-4 h-4  hover:text-stonewhite cursor-pointer" />
            <Linkedin className="w-4 h-4  hover:text-stonewhite cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-primary sticky top-0 z-50 !text-[#0D1B2E] shadow-sm border-t-4 border-primary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <Logo size="md" showText={false} />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 relative text-stonewhite">
              {/* About */}
              <div
                className="relative"
                onMouseEnter={() => setOpenDropdown("about")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center text-lg font-normal hover:text-stonewhite cursor-pointer">
                  About <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                <AnimatePresence>
                  {openDropdown === "about" && (
                    <motion.div
                      variants={megaVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      style={{ position: "absolute", top: "100%", left: 0, marginTop: "8px", zIndex: 50, display: "flex", flexDirection: "column", gap: "8px" }}
                    >
                      <motion.div variants={itemVariants}>
                        <Link href="/about/about-group" style={{ display: "block", width: "fit-content", whiteSpace: "nowrap" }} className="font-semibold px-4 py-2 text-sm text-stonewhite bg-white/20 backdrop-blur-md rounded-xl shadow-lg border border-white/30 hover:bg-white/30 transition-colors">
                          会社概要
                        </Link>
                      </motion.div>
                      <motion.div variants={itemVariants}>
                        <Link href="/about/our-team" style={{ display: "block", width: "fit-content", whiteSpace: "nowrap" }} className="font-semibold px-4 py-2 text-sm text- bg-white/20 backdrop-blur-md rounded-xl shadow-lg border border-white/30 hover:bg-white/30 transition-colors">
                          役員紹介
                        </Link>
                      </motion.div>


   <motion.div variants={itemVariants}>
                        <Link href="/about/company" style={{ display: "block", width: "fit-content", whiteSpace: "nowrap" }} className="font-semibold px-4 py-2 text-sm text- bg-white/20 backdrop-blur-md rounded-xl shadow-lg border border-white/30 hover:bg-white/30 transition-colors">
HRN グループとは                        </Link>
                      </motion.div>

                      <motion.div variants={itemVariants}>
                        <Link href="/about/why-hrn" style={{ display: "block", width: "fit-content", whiteSpace: "nowrap" }} className="font-semibold px-4 py-2 text-sm text-stonewhite bg-white/20 backdrop-blur-md rounded-xl shadow-lg border border-white/30 hover:bg-white/30 transition-colors">
                          なぜHRNグループ
                        </Link>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div
                className="relative"
                onMouseEnter={() => setOpenDropdown("team")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center text-lg font-normal hover:text- cursor-pointer">
                  Team <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                <AnimatePresence>
                  {openDropdown === "team" && (
                    <motion.div
                      variants={megaVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      style={{ position: "absolute", top: "100%", left: 0, marginTop: "8px", zIndex: 50, display: "flex", flexDirection: "column", gap: "8px" }}
                    >
                      <motion.div variants={itemVariants}>
                        <Link href="/about/company" style={{ display: "block", width: "fit-content", whiteSpace: "nowrap" }} className="font-semibold px-4 py-2 text-sm text- bg-white/20 backdrop-blur-md rounded-xl shadow-lg border border-white/30 hover:bg-white/30 transition-colors">
                           送り出し機関紹介
                        </Link>
                      </motion.div>
                      
                      <motion.div variants={itemVariants}>
                        <Link href="/about/our-team" style={{ display: "block", width: "fit-content", whiteSpace: "nowrap" }} className="font-semibold px-4 py-2 text-sm text- bg-white/20 backdrop-blur-md rounded-xl shadow-lg border border-white/30 hover:bg-white/30 transition-colors">
                         送り出し機関紹介
                        </Link>
                      </motion.div>
                  
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Team Dropdown */}
              {/* <div
                className="relative"
                onMouseEnter={() => setOpenDropdown("team")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center text-lg font-normal hover:text- cursor-pointer">
                  Team <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                <AnimatePresence>
                  {openDropdown === "team" && (
                    <motion.div
                      variants={megaVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      style={{ position: "absolute", top: "100%", left: 0, marginTop: "8px", zIndex: 50, display: "flex", flexDirection: "column", gap: "8px" }}
                    >
                      <motion.div variants={itemVariants}>
                     
                      </motion.div>
                      <motion.div variants={itemVariants}>
                        <Link href="/team/leadership" style={{ display: "block", width: "fit-content", whiteSpace: "nowrap" }} className="font-semibold px-4 py-2 text-sm text- bg-white/20 backdrop-blur-md rounded-xl shadow-lg border border-white/30 hover:bg-white/30 transition-colors">
                        送り出し機関紹介
                        </Link>
                         <Link href="/team/leadership" style={{ display: "block", width: "fit-content", whiteSpace: "nowrap" }} className="font-semibold px-4 mt-2 py-2 text-sm text- bg-white/20 backdrop-blur-md rounded-xl shadow-lg border border-white/30 hover:bg-white/30 transition-colors">
                                                          日本語学校紹介

                        </Link>


                      </motion.div>
                    
                    </motion.div>
                  )}
                </AnimatePresence>
              </div> */}

              {/* Services */}
              <div
                className="relative"
                onMouseEnter={() => setOpenDropdown("services")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center text-lg font-normal hover:text-">
                  Services <ChevronDown className="ml-1 w-4 h-4" />
                </button>

                <AnimatePresence>
                  {openDropdown === "services" && (
                    <motion.div
                      variants={megaVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute top-full left-0 w-[700px] bg-white rounded-2xl shadow-2xl border border-gray-200 mt-4 p-6 grid grid-cols-3 gap-6 z-50"
                    >
                      {servicesData.map((item) => (
                        <Link
                          key={item.title}
                          href={`/services/${item.id}`}
                          className="p-4 rounded-lg hover:bg-gray-50 transition-all group"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                              <item.icon className="w-5 h-5 text-primary" />
                            </div>
                            <h4 className="text-gray-800 font-semibold group-hover:text- transition-colors">
                              {item.title}
                            </h4>
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/blog"
                className="hover:text- text-lg font-normal"
              >
                News & Updates
              </Link>

              <Link
                href="/contact"
                className="hover:text- text-lg font-normal"
              >
                Contact
              </Link>
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-4">
            

              <div className="hidden md:block relative" ref={languageRef}>
                <div 
                  className="flex items-center space-x-2 text-golden cursor-pointer  transition-colors"
                  onClick={() => setLanguageOpen(!languageOpen)}
                >
                  <Globe className="w-4 h-4"  />
                  <ChevronDown className={`w-3 h-3 transition-transform ${languageOpen ? 'rotate-180' : ''}`} />
                    <Link
                href="https://system.hrnnepal.com"
                className="hidden md:block px-4 py-2 font-bold text-[30px]  text-primary-light rounded-md hover:bg-primary/90 text-lg transition"
              >
                Login
              </Link>
                </div>
                

                {/* Language Dropdown */}
                <AnimatePresence>
                  {languageOpen && (
                    <motion.div
                      variants={megaVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute top-full right-0 mt-3 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 py-3 z-50 overflow-hidden"
                    >
                      <div className="px-4 py-2 text-sm text-gray-600 font-medium border-b border-gray-100 bg-gray-50">
                        Choose Language
                      </div>
                      <div className="py-2">
                        <button
                          className="w-full px-4 py-4 text-left hover:bg-red-50 flex items-center space-x-4 transition-all duration-200 group"
                          onClick={() => {
                            setLanguageOpen(false);
                            // Handle language change
                          }}
                        >
                          <div className="w-8 h-6 rounded-md overflow-hidden shadow-sm ring-1 ring-gray-200 bg-white flex items-center justify-center">
                            <img 
                              src="https://flagcdn.com/w40/jp.png"
                              alt="Japan Flag"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-gray-800 group-hover:text-red-600 transition-colors">日本語</div>
                            <div className="text-sm text-gray-500">Japanese</div>
                          </div>
                          <div className="w-2 h-2 rounded-full bg-red-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </button>
                        
                        <div className="mx-4 my-2 border-t border-gray-100"></div>
                        
                        <button
                          className="w-full px-4 py-4 text-left hover:bg-blue-50 flex items-center space-x-4 transition-all duration-200 group"
                          onClick={() => {
                            setLanguageOpen(false);
                            // Handle language change
                          }}
                        >
                          <div className="w-8 h-6 rounded-md overflow-hidden shadow-sm ring-1 ring-gray-200 bg-white flex items-center justify-center">
                            <img 
                              src="https://flagcdn.com/w40/us.png"
                              alt="United States Flag"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">English</div>
                            <div className="text-sm text-gray-500">United States</div>
                          </div>
                          <div className="w-2 h-2 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Login */}
              <Link
                href="https://system.hrnnepal.com"
                className="md:hidden px-4 py-2 font-bold text-[30px] text-primary-light rounded-md hover:bg-primary/90 text-lg transition"
              >
                Login
              </Link>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden focus:outline-none"
              >
                {mobileOpen ? (
                  <X className="w-6 h-6 text-white" />
                ) : (
                  <Menu className="w-6 h-6 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-white border-t border-gray-200 shadow-inner overflow-hidden"
            >
              <div className="flex flex-col p-4 space-y-2">
                {/* About Mobile */}
                <div>
                  <button
                    onClick={() =>
                      toggleDropdown(openDropdown === "about" ? null : "about")
                    }
                    className="flex justify-between items-center w-full text- font-medium py-2"
                  >
                    About <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        openDropdown === "about" ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {openDropdown === "about" && (
                      <motion.div
                        variants={mobileDropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="pl-4 pt-2 space-y-2 text-gray-600"
                      >
                        <Link href="/about/company" className="block py-1">会社概要</Link>
                        <Link href="/about/our-team" className="block py-1">役員紹介</Link>
                        <Link href="/about/why-hrn" className="block py-1">なぜHRNグループ</Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Team Mobile */}
                <div>
                  <button
                    onClick={() =>
                      toggleDropdown(openDropdown === "team" ? null : "team")
                    }
                    className="flex justify-between items-center w-full text- font-medium py-2"
                  >
                    Team <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        openDropdown === "team" ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {openDropdown === "team" && (
                      <motion.div
                        variants={mobileDropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="pl-4 pt-2 space-y-2 text-gray-600"
                      >
                        <Link href="/about/our-team" className="block py-1">Our Team</Link>
                        <Link href="" className="block py-1">送り出し機関紹介</Link>
                   
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Services Mobile */}
                <div>
                  <button
                    onClick={() =>
                      toggleDropdown(openDropdown === "services" ? null : "services")
                    }
                    className="flex justify-between items-center w-full text- font-medium py-2"
                  >
                    Services <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        openDropdown === "services" ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {openDropdown === "services" && (
                      <motion.div
                        variants={mobileDropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="pl-4 pt-2 space-y-2 text-gray-600"
                      >
                        {servicesData.map((item) => (
                          <Link key={item.title} href={`/services/${item.id}`} className="block py-1">
                            {item.title}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Static Links */}
                <Link href="/blog" className="text- font-medium py-2">
                  News & Updates
                </Link>
                <Link href="/contact" className="text- font-medium py-2">
                  Contact
                </Link>

                {/* Login Button */}
            
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}