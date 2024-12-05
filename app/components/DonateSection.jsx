"use client"
import React from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const DonateSection = () => {
  useEffect(()=>{
    AOS.init({
      duration:3000,
      once:false
    })
  })
  return (
    <section
      className="relative py-24 bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('https://i.pinimg.com/736x/ab/62/de/ab62ded6fb63594397bf43cf4186795a.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Donate to Nambu-shalom Rural Ministry
        </h2>

        <p className="mt-4 max-w-2xl">
          We make every donation count
        </p>

        <div className="mt-6 space-x-4">
          <button className="px-6 py-3 bg-green-500 font-medium rounded-full hover:bg-green-600 transition duration-300">
            Donate Now
          </button>
          <button className="px-6 py-3 bg-transparent border border-green-500 font-medium rounded-full hover:bg-green-500 transition duration-300">
            Become a Volunteer
          </button>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
