import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center z-10"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/564x/17/ca/75/17ca75f01313485042a4a2d7d42beee7.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white max-w-2xl px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Together, We Empower <br />
            Communities and Restore <span className="text-yellow-400">Hope</span>
          </h1>
          <div className="mt-6 flex justify-center space-x-4">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg">
              Support Our Mission
            </button>
            <button className="bg-white text-black font-semibold py-2 px-4 rounded-lg hover:bg-gray-200">
              Discover More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
