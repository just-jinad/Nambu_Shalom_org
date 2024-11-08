import React from 'react';

const AboutUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Image */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src="/path-to-your-about-image.jpg"
            alt="About Us"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        {/* Text Content */}
        <div className="md:w-1/2 md:pl-10">
          <h3 className="text-lg text-yellow-600 font-semibold mb-2">About Us</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            We’re a worldwide non-profit charity foundation.
          </h2>
          <p className="text-gray-600 mb-4">
            We are dedicated to supporting communities around the globe through targeted
            initiatives in economic development, health, education, and water access.
            Our goal is to create sustainable change and empower communities to thrive.
          </p>
          <p className="text-gray-600 mb-6">
            Our approach combines local expertise and global resources to ensure that
            the support we provide makes a lasting impact. Join us in our mission to
            bring hope and help to those in need.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
