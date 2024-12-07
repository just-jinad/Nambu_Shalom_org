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
        {/* Logo */}
        <h1 className="text-2xl font-extrabold tracking-wide text-gray-800">
          <Link href="/">Nambu-Shalom</Link>
        </h1>

        {/* Large Screen Navigation */}
        <nav className="hidden lg:flex justify-between items-center w-full">
          <div className="flex items-center space-x-4 text-gray-600 text-sm font-semibold uppercase tracking-wide">
          
            {/* Other Tabs */}
            <NavLink href="/shalom-center">Shalom Center</NavLink>
            <Divider />
            <NavLink href="/OurImpact">Our Impact</NavLink>
            <Divider />
            <NavLink href="/StLukesMedical">St. Luke's Medical</NavLink>
            <Divider />
            <NavLink href="/IntegratedFarming">Integrated Farming</NavLink>
            <Divider />
            <NavLink href="/SchoolOfMission">School of Mission</NavLink>
            <Divider />
            <NavLink href="/KiddiesCollege">Kiddies College</NavLink>

              {/* ABOUT US */}
            <Divider />
              <Dropdown
              title="ABOUT US"
              isOpen={openDropdown === "aboutUs"}
              onToggle={() => handleDropdown("aboutUs")}
            >
              <NavLink href="/History">History</NavLink>
              <NavLink href="/ChallengesSupport">Challenges & Support</NavLink>
              <NavLink href="/Outreach">Outreach</NavLink>
            </Dropdown>

          </div>
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
          {/* ABOUT US Dropdown for Mobile */}
          <MobileDropdown title="ABOUT US">
            <MobileNavLink href="/History">History</MobileNavLink>
            <MobileNavLink href="/ChallengesSupport">
              Challenges & Support
            </MobileNavLink>
            <MobileNavLink href="/Outreach">Outreach</MobileNavLink>
          </MobileDropdown>
          {/* Other Mobile Links */}
          <MobileNavLink href="/SchoolOfMission">Mission</MobileNavLink>
          <MobileNavLink href="/OurImpact">Our Impact</MobileNavLink>
          <MobileNavLink href="/StLukesMedical">St. Luke's Medical</MobileNavLink>
          <MobileNavLink href="/IntegratedFarming">Integrated Farming</MobileNavLink>
          <MobileNavLink href="/KiddiesCollege">Kiddies College</MobileNavLink>
          <MobileNavLink href="/shalom-center">Shalom Center</MobileNavLink>
        </nav>
      )}
    </header>
  );
};

const NavLink = ({ href, children }) => (
  <Link
    href={href}
    className="hover:text-green-600 transition-all"
  >
    {children}
  </Link>
);

const Divider = () => <span className="text-gray-400 mx-2">|</span>;

const Dropdown = ({ title, children, isOpen, onToggle }) => (
  <div className="relative">
    {/* Dropdown Trigger */}
    <button
      onClick={onToggle}
      className="inline-flex items-center space-x-2 hover:text-green-600"
    >
      <span>{title}</span>
      <ChevronDownIcon className="w-4 h-4" />
    </button>

    {/* Dropdown Content */}
    {isOpen && (
      <div className="absolute left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg py-3 w-[200px] z-50">
        <div className="flex flex-col space-y-2">{children}</div>
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
