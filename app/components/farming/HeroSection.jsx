// components/HeroSection.js
export default function HeroSection() {
    return (
      <div className="relative bg-cover bg-center h-[500px]" style={{ backgroundImage: 'url(/hero-bg.jpg)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl font-bold">Making your surroundings beautiful for 40 years</h1>
          <p className="mt-2 text-lg">EXPERT LANDSCAPING SERVICES</p>
        </div>
      </div>
    );
  }
  