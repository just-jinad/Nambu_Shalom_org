"use client"
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">Nambu Shalom</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-yellow-400">About Us</a>
            <a href="#causes" className="hover:text-yellow-400">Our Causes</a>
            <a href="#volunteers" className="hover:text-yellow-400">Volunteer</a>
            <a href="#contact" className="hover:text-yellow-400">Contact</a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle menu">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">About Us</a>
            <a href="#causes" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Our Causes</a>
            <a href="#volunteers" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Volunteer</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
