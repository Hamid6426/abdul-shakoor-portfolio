"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { MdMenu, MdClose } from "react-icons/md"; // Import icons
import ThemeToggle from "../buttons/ThemeToggle";

const MainNavbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Get current route

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to check if a link is active
  const getLinkClass = (path) =>
    pathname === path
      ? "text-blue-700 dark:text-blue-700 hover:text-blue-500" // Active link styles
      : "hover:text-gray-500";

  return (
    <nav className="bg-gray-100 dark:text-white dark:bg-gray-950 text-white border-b-2 border-gray-500">
      <div className="max-w-7xl mx-auto p-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-2xl font-bold text-gray-950">
          <a href="/" className="dark:text-white">
            Dr. Abdul Shakoor
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8 text-black font-bold dark:text-white">
          <a href="/" className={getLinkClass("/")}>About</a>
          <a href="/blogs" className={getLinkClass("/blogs")}>Blogs</a>
          <a href="/projects" className={getLinkClass("/projects")}>Projects</a>
          <a href="/contact" className={getLinkClass("/contact")}>Contact</a>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none text-2xl">
            {isMobileMenuOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"} bg-gray-800`}>
        <a href="/" className={`block py-2 px-6 text-white ${getLinkClass("/")}`}>About</a>
        <a href="/blogs" className={`block py-2 px-6 text-white ${getLinkClass("/blogs")}`}>Blogs</a>
        <a href="/projects" className={`block py-2 px-6 text-white ${getLinkClass("/projects")}`}>Projects</a>
        <a href="/contact" className={`block py-2 px-6 text-white ${getLinkClass("/contact")}`}>Contact</a>
      </div>
    </nav>
  );
};

export default MainNavbar;
