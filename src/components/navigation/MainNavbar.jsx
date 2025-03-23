"use client";

import React, { useState, useRef } from "react";
import { MdMenu, MdClose, MdKeyboardArrowDown } from "react-icons/md";
import Link from "next/link";

const MainNavbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef(null); // Store timeout reference

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 300); // Delay hiding to avoid instant disappearance
  };

  const aboutLinks = [
    { href: "/about/experiences", label: "Experiences" },
    { href: "/about/research", label: "Research" },
    { href: "/about/publications", label: "Publications" },
    { href: "/about/partnerships", label: "Partnerships" },
    { href: "/about", label: "More" },
  ];

  const mainLinks = [
    { href: "/", label: "Home" },
    { href: "/blogs", label: "Blogs" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-blue-500 w-full text-white">
      {/* Mobile Menu Button */}
      <div className="md:hidden flex justify-between items-center px-6 py-3">
        <Link href="/" className="text-xl font-bold">
          Dr. Abdul Shakoor
        </Link>

        <button
          onClick={toggleMobileMenu}
          className="focus:outline-none text-2xl"
        >
          {isMobileMenuOpen ? <MdClose /> : <MdMenu />}
        </button>
      </div>

      {/* Mobile Navigation Links */}
      <div
        className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"} bg-gray-800`}
      >
        {mainLinks.map(({ href, label }) => (
          <Link
            className="block py-2 px-6 text-white"
            key={href}
            href={href}
          >
            {label}
          </Link>
        ))}
        <button
          onClick={() => setDropdownOpen(!isDropdownOpen)}
          className="flex items-center justify-between w-full py-2 px-6 text-white focus:outline-none"
        >
          About <MdKeyboardArrowDown />
        </button>
        <div>
          {isDropdownOpen && (
            <div className="bg-gray-700">
              {aboutLinks.map(({ href, label }) => (
                <Link
                  className="block py-2 px-6 text-white"
                  key={href}
                  href={href}
                >
                  {label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex justify-between items-center px-6 py-3">
        <Link href="/" className="text-2xl font-bold">
          Dr. Abdul Shakoor
        </Link>

        <div className="flex items-center">
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center text-white focus:outline-none mr-2">
              About&nbsp; <MdKeyboardArrowDown className="w-5 h-5" />
            </button>
            {isDropdownOpen && (
              <div className="absolute mt-2 bg-gray-700 rounded-md shadow-lg min-w-[150px]">
                {aboutLinks.map(({ href, label }) => (
                  <Link
                    className="block py-2 px-6 text-white hover:bg-gray-600"
                    key={href}
                    href={href}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {mainLinks.map(({ href, label }) => (
            <Link
              className="text-white px-5 py-2 hover:bg-blue-600 rounded-md transition-colors"
              key={href}
              href={href}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;