import Image from 'next/image';
import Navbar from '../Navbar';

export default function HeroSection() {
  return (
    <>
    
    <Navbar/>
    <div className="relative bg-cover bg-center h-[600px] flex items-center justify-center" 
         style={{ backgroundImage: 'url(https://i.pinimg.com/736x/be/e5/bc/bee5bc41b9dd4b9178bbc8c6a9d513e2.jpg)' }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 md:px-8">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 ">Helping Them Today</h1>
        <p className="text-4xl md:text-6xl font-bold mb-6">We Can Make A Difference</p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-lg font-medium shadow-md">
          Learn More
        </button>
      </div>
    </div>
    </>
  );
}
