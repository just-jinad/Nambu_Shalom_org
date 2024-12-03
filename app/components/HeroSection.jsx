import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full py-12 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center px-6 md:px-8">
        {/* Image Section */}
      

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0 md:ml-8">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-gray-800">
            Together, We Empower <br />
            Communities and Restore <span className="text-yellow-400">Hope</span>
          </h1>
          <p className="mt-4 text-gray-600">
            Join us in making a difference. Through education, support, and innovative programs,
            we bring hope and sustainable change to communities around the world.
          </p>
          <div className="mt-6 flex justify-center md:justify-start space-x-4 mb-3">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg">
              Support Our Mission
            </button>
            <button className="bg-white text-gray-800 font-semibold py-2 px-4 rounded-lg border hover:bg-gray-200">
              Discover More
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <img
            src="https://i.pinimg.com/564x/17/ca/75/17ca75f01313485042a4a2d7d42beee7.jpg"
            alt="Empowering Communities"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
