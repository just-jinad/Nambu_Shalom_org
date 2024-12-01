"use client"
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: false,
    });
  }, []);

  return (
    <>
    
    
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center" data-aos="fade-up">
  
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src="https://i.pinimg.com/736x/36/e5/d8/36e5d854a9349bfa0b610bc5341da2ee.jpg"
            alt="About NSRM"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
     
        <div className="md:w-1/2 md:pl-10">
          <h3 className="text-lg text-yellow-600 font-semibold mb-2">About Us</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Building Sustainable Communities Through Faith and Action
          </h2>
          <p className="text-gray-600 mb-4">
            The Nambu-Shalom Rural Ministry (NSRM) is dedicated to transforming rural communities
            through a blend of spiritual outreach, education, and sustainable development programs.
            Inspired by Christ's Great Commission, we aim to bring hope and lasting change to the lives
            of underserved populations.
          </p>
          <p className="text-gray-600 mb-6">
            From church planting to rural medical missions, integrated farming, and educational initiatives,
            our work reflects our unwavering commitment to empowering individuals and communities
            to thrive spiritually, economically, and socially.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg">
            Learn More
          </button>
        </div>
      </div>
    </section>


    
    </>
  );
};

export default AboutUs;