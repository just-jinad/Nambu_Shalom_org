import React from 'react';
import { FaHandHoldingHeart, FaHeartbeat, FaGraduationCap, FaWater } from 'react-icons/fa';

const CoreSectors = () => {
  const sectors = [
    { icon: <FaHandHoldingHeart className="text-4xl text-yellow-500" />, title: 'Economic Opportunity', description: 'We provide support for economic development to improve livelihoods and reduce poverty.' },
    { icon: <FaHeartbeat className="text-4xl text-red-500" />, title: 'Health and Nutrition', description: 'We promote health and nutrition programs to improve community well-being.' },
    { icon: <FaGraduationCap className="text-4xl text-blue-500" />, title: 'Education', description: 'We support education programs to ensure access to quality learning.' },
    { icon: <FaWater className="text-4xl text-green-500" />, title: 'Water & Sanitation', description: 'We work to improve access to clean water and sanitation facilities.' },
  ];

  return (
    <section className="py-16 bg-gray-100 text-center">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">Our Core Sectors</h2>
        <p className="mt-4 text-gray-600">We Invest In Four Key Areas</p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {sectors.map((sector, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">{sector.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{sector.title}</h3>
              <p className="mt-2 text-gray-600">{sector.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreSectors;
