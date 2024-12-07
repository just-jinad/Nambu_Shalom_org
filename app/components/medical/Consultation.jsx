// components/ConsultationSection.js
export default function ConsultationSection() {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-8">
          {/* Image */}
          <div className="lg:w-1/2">
            <img src="/consultation.jpg" alt="Consultation" className="rounded-lg shadow-lg" />
          </div>
  
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-gray-800">Consultation with our professional doctors</h2>
            <p className="mt-4 text-gray-600">
              Our doctors are available to provide quality healthcare guidance remotely. Book an appointment today.
            </p>
            <button className="mt-6 px-6 py-3 bg-green-600 text-white font-medium rounded hover:bg-green-700">
              Book Now
            </button>
          </div>
        </div>
      </section>
    );
  }
  