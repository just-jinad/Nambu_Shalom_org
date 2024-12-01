"use client"
import React from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const OurMission = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: false,
    });
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8" data-aos="fade-up">
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src="https://i.pinimg.com/736x/7a/fe/59/7afe5949b766665ca0cafb8fe376fd17.jpg"
            alt="Our Mission"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">Our Mission</h2>
          <p className="mt-4 text-gray-600">
            At Nambu-Shalom Rural Ministry (NSRM), our mission is to transform lives and communities through a Christ-centered approach that addresses spiritual, educational, and economic needs.
          </p>
          <p className="mt-2 text-gray-600">
            We are committed to empowering individuals in rural areas with tools and opportunities to thrive. From advancing education to promoting sustainable farming and improving access to healthcare, every effort is rooted in faith and action.
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
