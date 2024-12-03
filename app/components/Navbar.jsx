"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolling ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold">
          <Link href="/">Nambu-Shalom</Link>
        </h1>

        {/* Large Screen Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/OurImpact">Our Impact</NavLink>
          <Dropdown title="More Pages">
            <NavLink href="/ChallengesSupport">Challenges/Support</NavLink>
            <NavLink href="/Outreach">Outreach</NavLink>
            <NavLink href="/AboutUs">About Us</NavLink>
          </Dropdown>
          <Dropdown title="Projects">
            <NavLink href="/StLukesMedical">St. Luke's Medical</NavLink>
            <NavLink href="/IntegratedFarming">Integrated Farming</NavLink>
            <NavLink href="/KiddiesCollege">Kiddies College</NavLink>
            <NavLink href="/SchoolOfMission">School of Mission</NavLink>
          </Dropdown>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-black"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200">
          <MobileNavLink href="/">Home</MobileNavLink>
          <MobileNavLink href="/OurImpact">Our Impact</MobileNavLink>
          <MobileDropdown title="More Pages">
            <MobileNavLink href="/ChallengesSupport">
              Challenges/Support
            </MobileNavLink>
            <MobileNavLink href="/Outreach">Outreach</MobileNavLink>
            <MobileNavLink href="/AboutUs">About Us</MobileNavLink>
          </MobileDropdown>
          <MobileDropdown title="Projects">
            <MobileNavLink href="/StLukesMedical">
              St. Luke's Medical
            </MobileNavLink>
            <MobileNavLink href="/IntegratedFarming">
              Integrated Farming
            </MobileNavLink>
            <MobileNavLink href="/KiddiesCollege">Kiddies College</MobileNavLink>
            <MobileNavLink href="/SchoolOfMission">
              School of Mission
            </MobileNavLink>
          </MobileDropdown>
        </nav>
      )}
    </header>
  );
};

const NavLink = ({ href, children }) => (
  <Link
    href={href}
    className="hover:text-yellow-600 font-bold transition-all"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ href, children }) => (
  <Link
    href={href}
    className="block px-4 py-2 hover:bg-gray-100 font-bold"
  >
    {children}
  </Link>
);

const Dropdown = ({ title, children }) => (
  <div className="relative group">
    <button className="inline-flex items-center space-x-2 hover:text-yellow-600 font-bold">
      <span>{title}</span>
      <ChevronDownIcon className="w-5 h-5" />
    </button>
    <div className="absolute hidden group-hover:block mt-2 bg-white border border-gray-200 rounded-md shadow-lg z-50">
      <div className="py-2">{children}</div>
    </div>
  </div>
);

const MobileDropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2 text-left font-bold hover:bg-gray-100"
      >
        {title}
      </button>
      {isOpen && <div className="pl-4">{children}</div>}
    </div>
  );
};

export default Navbar;
