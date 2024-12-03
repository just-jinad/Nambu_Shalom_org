"use client";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState } from "react";

export default function OutreachPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "https://via.placeholder.com/800x400?text=Image+1",
    "https://via.placeholder.com/800x400?text=Image+2",
    "https://via.placeholder.com/800x400?text=Image+3",
    "https://via.placeholder.com/800x400?text=Image+4",
    "https://via.placeholder.com/800x400?text=Image+5",
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <section className="relative w-full h-[500px]">
          <video
            src="https://i.pinimg.com/236x/29/44/b4/2944b44fe1ad9dd244c6ab729c1ffeab.jpg"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h1 className="text-white text-4xl md:text-5xl font-bold">
              Outreach
            </h1>
          </div>
        </section>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto py-12 px-6 lg:px-8">
          {/* Carousel */}
          <div className="relative mb-12">
            <div className="relative w-full overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-[300px] object-cover flex-shrink-0"
                  />
                ))}
              </div>

              {/* Navigation Buttons */}
              <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
                onClick={handlePrev}
              >
                ◀
              </button>
              <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
                onClick={handleNext}
              >
                ▶
              </button>
            </div>
          </div>

          {/* Sermons Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card Example */}
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={`https://via.placeholder.com/400x250?text=Sermon+${
                    index + 1
                  }`}
                  alt={`Sermon ${index + 1}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">
                    Sermon Title {index + 1}
                  </h2>
                  <p className="text-sm text-gray-500 mb-4">
                    March 25, 2023 | Category
                  </p>
                  <p className="text-sm text-gray-700">
                    A brief description or excerpt from the sermon goes here.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
      <Footer/>
    </>
  );
}
