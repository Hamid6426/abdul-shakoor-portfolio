import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-2xl font-bold text-[#0ff]">
          <a href="/">Dr. Shakoor</a>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <a href="/" className="hover:text-[#0ff]">Home</a>
          <a href="/about" className="hover:text-[#0ff]">About</a>
          <a href="/projects" className="hover:text-[#0ff]">Projects</a>
          <a href="/blogs" className="hover:text-[#0ff]">Blogs</a>
          <a href="/contact" className="hover:text-[#0ff]">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-gray-800`}>
        <a href="/" className="block py-2 px-6 text-white hover:bg-gray-700">Home</a>
        <a href="/about" className="block py-2 px-6 text-white hover:bg-gray-700">About</a>
        <a href="/projects" className="block py-2 px-6 text-white hover:bg-gray-700">Projects</a>
        <a href="/blogs" className="block py-2 px-6 text-white hover:bg-gray-700">Blogs</a>
        <a href="/contact" className="block py-2 px-6 text-white hover:bg-gray-700">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
