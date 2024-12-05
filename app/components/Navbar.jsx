"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
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
        <h1 className="text-2xl font-extrabold tracking-wide text-gray-800">
          <Link href="/">Nambu-Shalom</Link>
        </h1>

        {/* Large Screen Navigation */}
        <nav className="hidden lg:flex space-x-8 items-center">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/OurImpact">Our Impact</NavLink>
          <Dropdown
            title="More Pages"
            isOpen={openDropdown === "morePages"}
            onToggle={() => handleDropdown("morePages")}
          >
            <NavLink href="/ChallengesSupport">Challenges/Support</NavLink>
            <NavLink href="/Outreach">Outreach</NavLink>
            <NavLink href="/AboutUs">About Us</NavLink>
          </Dropdown>
          <Dropdown
            title="Projects"
            isOpen={openDropdown === "projects"}
            onToggle={() => handleDropdown("projects")}
          >
            <NavLink href="/StLukesMedical">St. Luke's Medical</NavLink>
            <NavLink href="/IntegratedFarming">Integrated Farming</NavLink>
            <NavLink href="/KiddiesCollege">Kiddies College</NavLink>
            <NavLink href="/SchoolOfMission">School of Mission</NavLink>
          </Dropdown>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-black"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="lg:hidden bg-white border-t border-gray-200">
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
    className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-green-100 hover:text-green-700 transition-all rounded-md"
  >
    {children}
  </Link>
);

const Dropdown = ({ title, children, isOpen, onToggle }) => (
  <div className="relative">
    {/* Dropdown Trigger */}
    <button
      onClick={onToggle}
      className="inline-flex items-center space-x-2 text-lg font-semibold text-gray-700 hover:text-green-600"
    >
      <span>{title}</span>
      <ChevronDownIcon className="w-5 h-5" />
    </button>

    {/* Dropdown Content */}
    {isOpen && (
      <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg min-w-[200px] z-50">
        <div className="py-2 space-y-2">{children}</div>
      </div>
    )}
  </div>
);

const MobileNavLink = ({ href, children }) => (
  <Link
    href={href}
    className="block px-4 py-2 text-lg font-medium text-gray-800 hover:bg-gray-100 transition-all"
  >
    {children}
  </Link>
);

const MobileDropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2 text-left text-lg font-medium text-gray-800 hover:bg-gray-100"
      >
        {title}
      </button>
      {isOpen && <div className="pl-4">{children}</div>}
    </div>
  );
};

export default Navbar;
