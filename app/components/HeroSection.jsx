import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full py-12 md:py-20  bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 px-6 md:px-8">
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0">
          <h1 className="text-3xl sm:text-4xl mt-10 md:text-5xl font-bold leading-tight text-gray-800">
            Together, We Empower <br />
            Communities and Restore <span className="text-green-400">Hope</span>
          </h1>
          <p className="mt-4 text-gray-600 text-sm sm:text-base">
            Join us in making a difference. Through education, support, and innovative programs,
            we bring hope and sustainable change to communities around the world.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg">
              Support Our Mission
            </button>
            <button className="bg-white text-gray-800 font-semibold py-2 px-4 rounded-lg border hover:bg-gray-200">
              <Link href={"/AboutUs"}>
              Discover More
              </Link>
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src="https://i.pinimg.com/736x/ab/62/de/ab62ded6fb63594397bf43cf4186795a.jpg"
            alt="Empowering Communities"
            className="w-full md:w-[70%] rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
