"use client"
import React from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const RecentCauses = () => {
  useEffect(() => {
    AOS.init({
      duration:3000,
      once:false
    })
  }, [])
  
  const causes = [
    {
      title: 'Our programs foster enterprises',
      description: 'Empowering communities through sustainable economic development.',
      raised: 10565,
      goal: 20000,
      image: '/path-to-cause-image1.jpg',
    },
    {
      title: 'Our education programs create safe spaces',
      description: 'Providing quality education to underprivileged communities.',
      raised: 10465,
      goal: 20000,
      image: '/path-to-cause-image2.jpg',
    },
    {
      title: 'Restore access to clean drinking water',
      description: 'Ensuring access to safe drinking water in drought-prone areas.',
      raised: 10365,
      goal: 20000,
      image: '/path-to-cause-image3.jpg',
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-800">We Are Fighting For</h2>
        <p className="mt-4 text-center text-gray-600">Recent Causes</p>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {causes.map((cause, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={cause.image} alt={cause.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{cause.title}</h3>
                <p className="text-gray-600 mt-2">{cause.description}</p>
                <div className="mt-4">
                  <div className="text-sm font-medium text-gray-600">
                    Raised: ${cause.raised.toLocaleString()} / Goal: ${cause.goal.toLocaleString()}
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div
                      className="bg-yellow-500 h-2 rounded-full"
                      style={{ width: `${(cause.raised / cause.goal) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentCauses;
