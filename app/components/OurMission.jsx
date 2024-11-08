"use client"
import React from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const OurMission = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8" data-aos="fade-up">
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src="/path-to-mission-image.jpg"
            alt="Our Mission"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">Our Mission</h2>
          <p className="mt-4 text-gray-600">
            We’re on a mission to solve the water crisis and reinvent charity. We believe in a world where everyone
            has access to clean water. Join us in building and creating sustainable solutions for communities in need.
          </p>
          <p className="mt-2 text-gray-600">
            Our team works tirelessly to develop innovative methods for water delivery and health improvement in
            underserved areas.
          </p>
          <button className="mt-6 px-6 py-3 bg-yellow-500 text-white font-medium rounded-full hover:bg-yellow-600 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
