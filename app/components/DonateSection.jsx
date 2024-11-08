import React from 'react';

const DonateSection = () => {
  return (
    <section
      className="relative py-24 bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('/path-to-donate-background.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Donate to Homeless People
        </h2>
        <p className="mt-4 max-w-2xl">
          We make every donation count
        </p>
        <div className="mt-6 space-x-4">
          <button className="px-6 py-3 bg-yellow-500 font-medium rounded-full hover:bg-yellow-600 transition duration-300">
            Donate Now
          </button>
          <button className="px-6 py-3 bg-transparent border border-yellow-500 font-medium rounded-full hover:bg-yellow-500 transition duration-300">
            Become a Volunteer
          </button>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
