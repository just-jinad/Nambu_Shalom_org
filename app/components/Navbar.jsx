"use client";

import React, { Fragment } from "react";  // Import React here
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-lg relative z-40">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold  "> 
          <Link href="/">
          Nambu-Shalom
          </Link>
          </h1>
        {/* Large Screen Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="  hover:text-yellow-600 font-bold">
            Home
          </Link>
          <Link href="/OurImpact" className=" hover:text-yellow-600 font-bold">
            Our Impact
          </Link>
          <Dropdown className="px-5" title="More Pages">
            <Link href="/ChallengesSupport" className=" hover:text-yellow-600 font-bold block">
              Challenges/Support
            </Link>
            <Link href="/Outreach" className="hover:text-yellow-500 block">
              Outreach
            </Link>
            <Link href="/AboutUs" className="hover:text-yellow-500 block">
              About Us
            </Link>
          </Dropdown>
          <Dropdown title="Projects">
            <Link href="/StLukesMedical" className="hover:text-yellow-500 block">
              St. Luke's Medical
            </Link>
            <Link href="/IntegratedFarming" className="hover:text-yellow-500 block">
              Integrated Farming
            </Link>
            <Link href="/KiddiesCollege" className="hover:text-yellow-500 block">
              Kiddies College
            </Link>
            <Link href="/SchoolOfMission" className="hover:text-yellow-500 block">
              School of Mission
            </Link>
          </Dropdown>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-black" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-gray-50 border-t border-gray-200">
          <Link href="/" className="block px-4 py-2 hover:bg-gray-100">
            Home
          </Link>
          <Link href="/OurImpact" className="block px-4 py-2 hover:bg-gray-100">
            Our Impact
          </Link>
          <Dropdown title="More Pages" mobile>
            <Link href="/ChallengesSupport" className="block px-4 py-2 hover:bg-gray-100">
              Challenges/Support
            </Link>
            <Link href="/Outreach" className="block px-4 py-2 hover:bg-gray-100">
              Outreach
            </Link>
            <Link href="/AboutUs" className="block px-4 py-2 hover:bg-gray-100">
              About Us
            </Link>
          </Dropdown>
          <Dropdown title="Projects" mobile>
            <Link href="/StLukesMedical" className="block px-4 py-2 hover:bg-gray-100">
              St. Luke's Medical
            </Link>
            <Link href="/IntegratedFarming" className="block px-4 py-2 hover:bg-gray-100">
              Integrated Farming
            </Link>
            <Link href="/KiddiesCollege" className="block px-4 py-2 hover:bg-gray-100">
              Kiddies College
            </Link>
            <Link href="/SchoolOfMission" className="block px-4 py-2 hover:bg-gray-100">
              School of Mission
            </Link>
          </Dropdown>
        </nav>
      )}
    </header>
  );
};

// Dropdown Component
const Dropdown = ({ title, children, mobile }) => {
  return (
    <Menu as="div" className={`relative inline-block text-left ${mobile ? "w-full" : ""}`}>
      <div className="group">
        <Menu.Button className="inline-flex items-center space-x-2 hover:text-yellow-500">
          <span className="font-bold">{title}</span>
          <ChevronDownIcon className="w-5 h-5" />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-150"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className={`absolute ${mobile ? "w-full left-0" : "right-0"} mt-2 origin-top-right bg-white border border-gray-200 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50 group-hover:block`}
          >
            {React.Children.map(children, (child) => (
              <div className="px-6 py-3 font-bold hover:bg-gray-100">{child}</div>
            ))}
          </Menu.Items>
        </Transition>
      </div>
    </Menu>
  );
};

export default Navbar;
