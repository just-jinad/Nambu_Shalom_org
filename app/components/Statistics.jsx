"use client"
import React from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'

const Statistics = () => {
  useEffect(()=>{
    AOS.init({
      duration:3000,
      once:false
    })
  })
  const stats = [
    { number: '3.7M', label: 'Services provided to people in 2023' },
    { number: '85', label: 'Countries We Work' },
    { number: '7.5K', label: 'Finished Projects' },
    // { number: '$320M', label: 'Invested in all our programs last year' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center" data-aos="fade-up">
        <div className="flex flex-col md:flex-row md:justify-around items-center space-y-8 md:space-y-0">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-4xl font-bold text-gray-800">{stat.number}</h3>
              <p className="mt-2 text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
