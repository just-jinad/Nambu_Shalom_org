"use client"
import React from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Newsletter = () => {
  useEffect(()=>{
    AOS.init(
      {
        duration:3000,
        once:false
      }
    )
  })
  return (
    <section className="py-16 bg-yellow-100">
      <div className="max-w-4xl mx-auto px-4 text-center" data-aos="fade-updated">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Subscribe to Our Newsletter
        </h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Stay updated with the latest news and updates from our organization.
        </p>
        
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full sm:w-auto px-4 py-3 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:border-yellow-500"
          />
          <button className="px-6 py-3 bg-yellow-500 text-white font-medium rounded-md hover:bg-yellow-600 transition duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
