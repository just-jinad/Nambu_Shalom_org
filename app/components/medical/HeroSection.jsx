// components/HeroSection.js
export default function HeroSection() {
    return (
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-8">
          {/* Text Content */}
          <div className="lg:w-1/2 mt-10 text-center lg:text-left">
            <h1 className="text-4xl font-bold text-gray-800">
              Consult your doctor <br /> from home
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Professional healthcare consultations available online. Stay safe and comfortable at home.
            </p>
            <button className="mt-6 px-6 py-3 bg-green-600 text-white font-medium rounded hover:bg-green-700">
              Book a consultation
            </button>
          </div>
  
          {/* Image */}
          <div className="lg:w-1/2">
            <img src="/doctor-hero.jpg" alt="Doctors" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>
    );
  }
  