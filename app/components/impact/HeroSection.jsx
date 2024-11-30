import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="relative bg-cover bg-center h-[600px] flex items-center justify-center" 
         style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 md:px-8">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Helping Them Today</h1>
        <p className="text-4xl md:text-6xl font-bold mb-6">We Can Make A Difference</p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-medium shadow-md">
          Learn More
        </button>
      </div>
    </div>
  );
}
