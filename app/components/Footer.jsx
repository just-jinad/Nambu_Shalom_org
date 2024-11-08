import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-semibold text-white">Nambu Shalom</h2>
          <p className="mt-4 text-gray-400">
            Bringing hope and support to communities in need. Join us in making a difference.
          </p>
        </div>
        
        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-medium text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#about" className="hover:text-white">About Us</a></li>
            <li><a href="#causes" className="hover:text-white">Our Causes</a></li>
            <li><a href="#volunteers" className="hover:text-white">Volunteer</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        
        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-medium text-white">Contact Us</h3>
          <ul className="mt-4 space-y-2">
            <li>123 Charity Street</li>
            <li>City, State, ZIP</li>
            <li>+123 456 7890</li>
            <li>info@nambushalom.org</li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-medium text-white">Follow Us</h3>
          <div className="flex mt-4 space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white">
              <FaInstagram />
            </a>
          </div>
        </div>

      </div>
      <div className="text-center text-gray-500 text-sm mt-8">
        &copy; {new Date().getFullYear()} Nambu Shalom. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
