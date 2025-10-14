"use client";

import React, { useState } from "react";
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
  Briefcase,
  Globe2,
  Users,
  Menu,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const megaVariants = {
  hidden: { opacity: 0, y: -15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: { opacity: 0, y: -15, transition: { duration: 0.2 } },
};

const mobileDropdownVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
  exit: { opacity: 0, height: 0, transition: { duration: 0.2 } },
};

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <header className="w-full">
      {/* Top Info Bar */}
      <div className="bg-primary-light text-gray-700 py-2 px-4 hidden sm:block">
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
            <Facebook className="w-4 h-4 hover:text-primary cursor-pointer" />
            <Twitter className="w-4 h-4 hover:text-primary cursor-pointer" />
            <Instagram className="w-4 h-4 hover:text-primary cursor-pointer" />
            <Linkedin className="w-4 h-4 hover:text-primary cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-sm border-t-4 border-primary relative z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <Logo size="md" showText={false} />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 relative">
              {/* About */}
              <div
                className="relative"
                onMouseEnter={() => setOpenDropdown("about")}
                onMouseLeave={() => setOpenDropdown("")}
              >
                <button className="flex items-center text-lg font-normal text-gray-700 hover:text-primary">
                  About <ChevronDown className="ml-1 w-4 h-4" />
                </button>

                <AnimatePresence>
                  {openDropdown === "about" && (
                    <motion.div
                      variants={megaVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute top-full left-0 w-[600px] bg-white rounded-2xl shadow-2xl border border-gray-200 mt-4 p-6 grid grid-cols-2 gap-6 z-50"
                    >
                      <div>
                        <h3 className="text-primary font-semibold mb-2">
                          Who We Are
                        </h3>
                        <p className="text-sm text-gray-600 mb-3">
                          Learn more about our journey, values, and the passionate
                          team that powers HRN Nepal.
                        </p>
                        <Link
                          href="/about/about-hrn"
                          className="text-primary font-medium hover:underline"
                        >
                          About HRN →
                        </Link>
                      </div>

                      <div>
                        <h3 className="text-primary font-semibold mb-2">
                          Our People
                        </h3>
                        <ul className="space-y-2">
                          <li>
                            <Link
                              href="/about/our-team"
                              className="flex items-center space-x-2 text-gray-700 hover:text-primary"
                            >
                              <Users className="w-4 h-4" />
                              <span>Our Team</span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/about/mission"
                              className="flex items-center space-x-2 text-gray-700 hover:text-primary"
                            >
                              <Globe2 className="w-4 h-4" />
                              <span>Mission & Vision</span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/about/careers"
                              className="flex items-center space-x-2 text-gray-700 hover:text-primary"
                            >
                              <Briefcase className="w-4 h-4" />
                              <span>Careers</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Services */}
              <div
                className="relative"
                onMouseEnter={() => setOpenDropdown("services")}
                onMouseLeave={() => setOpenDropdown("")}
              >
                <button className="flex items-center text-lg font-normal text-gray-700 hover:text-primary">
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
                          className="p-3 rounded-lg hover:bg-gray-50 transition-all"
                        >
                          <div className="flex items-start space-x-3">
                            <item.icon className="w-5 h-5 text-primary mt-1" />
                            <div>
                              <h4 className="text-gray-800 font-medium">
                                {item.title}
                              </h4>
                              <p className="text-sm text-gray-600">{item.desc}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/blog"
                className="text-gray-700 hover:text-primary text-lg font-normal"
              >
                Blogs
              </Link>

              <Link
                href="/contact"
                className="text-gray-700 hover:text-primary text-lg font-normal"
              >
                Contact
              </Link>
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-4">
              <Link
                href="/login"
                className="hidden md:block px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition"
              >
                Login
              </Link>

              <div className="hidden md:flex items-center space-x-1 text-primary cursor-pointer">
                <Globe className="w-4 h-4" />
                <ChevronDown className="w-3 h-3" />
              </div>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden focus:outline-none"
              >
                {mobileOpen ? (
                  <X className="w-6 h-6 text-gray-800" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-800" />
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
                    className="flex justify-between items-center w-full text-gray-700 font-medium py-2"
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
                        <Link href="/about/about-hrn">About HRN</Link>
                        <Link href="/about/our-team">Our Team</Link>
                        <Link href="/about/mission">Mission & Vision</Link>
                        <Link href="/about/careers">Careers</Link>
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
                    className="flex justify-between items-center w-full text-gray-700 font-medium py-2"
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
                          <Link key={item.title} href={`/services/${item.id}`}>
                            {item.title}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Static Links */}
                <Link href="/blog" className="text-gray-700 font-medium py-2">
                  Blogs
                </Link>
                <Link href="/contact" className="text-gray-700 font-medium py-2">
                  Contact
                </Link>

                {/* Login Button */}
                <Link
                  href="/login"
                  className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition w-fit"
                >
                  Login
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
