"use client"
const StLukesMedicalMissionPage = () => {
  return (
    <main className="bg-white py-10">
      <section className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-4">St. Luke's Medical Mission</h1>
        <p className="text-lg text-gray-700 mb-6">
          St. Luke's Medical Mission is dedicated to providing quality healthcare services to underserved communities. Through compassion, innovation, and unwavering commitment, we aim to improve lives and promote wellness.
        </p>

        {/* Mission and Vision Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-6">
            To offer accessible healthcare services to the most vulnerable populations, ensuring every individual receives the care they deserve.
          </p>
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Vision</h2>
          <p className="text-gray-700">
            To build healthier communities where everyone has access to affordable and quality medical care.
          </p>
        </section>

        {/* Services Offered Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Services Offered</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Free Medical Consultations"
              description="Providing expert advice and diagnosis to those in need."
              icon="/icons/medical_consultation.png"
            />
            <ServiceCard
              title="Health Education"
              description="Promoting awareness and prevention through health workshops."
              icon="/icons/health_education.png"
            />
            <ServiceCard
              title="Medication Assistance"
              description="Offering essential medications to patients at no cost."
              icon="/icons/medication_assistance.png"
            />
            <ServiceCard
              title="Vaccination Programs"
              description="Ensuring community immunity through accessible vaccinations."
              icon="/icons/vaccination.png"
            />
            <ServiceCard
              title="Maternal and Child Care"
              description="Specialized care for mothers and children to ensure healthy futures."
              icon="/icons/maternal_care.png"
            />
            <ServiceCard
              title="Chronic Disease Management"
              description="Support and resources for managing long-term health conditions."
              icon="/icons/chronic_disease.png"
            />
          </div>
        </section>

        {/* Volunteer and Support Section */}
        <section>
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Get Involved</h2>
          <p className="text-gray-700 mb-4">
            Join us in transforming lives through accessible healthcare. Here are ways you can help:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SupportCard
              title="Donate"
              description="Contribute funds or medical supplies to support our mission."
              icon="/icons/donate.png"
            />
            <SupportCard
              title="Volunteer"
              description="Offer your skills and time to assist in our medical programs."
              icon="/icons/volunteer_medical.png"
            />
            <SupportCard
              title="Partner"
              description="Collaborate with us to expand the reach of our healthcare services."
              icon="/icons/partner.png"
            />
          </div>
        </section>
      </section>
    </main>
  );
};

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="bg-blue-50 rounded-lg shadow-md overflow-hidden p-4 flex items-center space-x-4">
      <img
        src={icon}
        alt={title}
        className="w-16 h-16 object-contain"
      />
      <div>
        <h3 className="text-xl font-semibold text-blue-600 mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

const SupportCard = ({ title, description, icon }) => {
  return (
    <div className="bg-blue-50 rounded-lg shadow-md overflow-hidden p-4 flex items-center space-x-4">
      <img
        src={icon}
        alt={title}
        className="w-16 h-16 object-contain"
      />
      <div>
        <h3 className="text-xl font-semibold text-blue-600 mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default StLukesMedicalMissionPage;
