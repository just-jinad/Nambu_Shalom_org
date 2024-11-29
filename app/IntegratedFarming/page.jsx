"use client"
const IntegratedFarmingPage = () => {
  return (
    <main className="bg-white py-10">
      <section className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-green-700 mb-4">Integrated Farming</h1>
        <p className="text-lg text-gray-700 mb-6">
          Integrated Farming is our sustainable approach to agriculture, combining modern techniques with traditional practices to promote environmental stewardship and food security.
        </p>

        {/* Objectives Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-green-600 mb-4">Our Objectives</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Promote sustainable agricultural practices to preserve natural resources.</li>
            <li>Improve food security by increasing productivity and reducing waste.</li>
            <li>Enhance rural livelihoods through capacity building and resource sharing.</li>
          </ul>
        </section>

        {/* Programs and Initiatives Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-green-600 mb-4">Programs and Initiatives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProgramCard
              title="Organic Farming"
              description="Adopting eco-friendly methods to grow healthy, chemical-free crops."
              icon="/icons/organic_farming.png"
            />
            <ProgramCard
              title="Livestock Integration"
              description="Combining crop and livestock farming for optimal resource use."
              icon="/icons/livestock_integration.png"
            />
            <ProgramCard
              title="Agroforestry"
              description="Blending agriculture with forestry to enhance biodiversity."
              icon="/icons/agroforestry.png"
            />
            <ProgramCard
              title="Water Conservation"
              description="Implementing practices to conserve and manage water resources effectively."
              icon="/icons/water_conservation.png"
            />
            <ProgramCard
              title="Renewable Energy Use"
              description="Utilizing renewable energy sources to power farming activities."
              icon="/icons/renewable_energy.png"
            />
            <ProgramCard
              title="Training and Workshops"
              description="Providing education and training to farmers on sustainable practices."
              icon="/icons/training_workshops.png"
            />
          </div>
        </section>

        {/* Get Involved Section */}
        <section>
          <h2 className="text-3xl font-bold text-green-600 mb-4">Get Involved</h2>
          <p className="text-gray-700 mb-4">
            Support our mission to promote sustainable agriculture. Here’s how you can contribute:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SupportCard
              title="Sponsor a Program"
              description="Provide funding to sustain and expand our farming initiatives."
              icon="/icons/sponsor_program.png"
            />
            <SupportCard
              title="Volunteer"
              description="Contribute your time and expertise to support our activities."
              icon="/icons/volunteer_farming.png"
            />
            <SupportCard
              title="Partner with Us"
              description="Collaborate to develop and implement impactful farming projects."
              icon="/icons/partner_agriculture.png"
            />
          </div>
        </section>
      </section>
    </main>
  );
};

const ProgramCard = ({ title, description, icon }) => {
  return (
    <div className="bg-green-50 rounded-lg shadow-md overflow-hidden p-4 flex items-center space-x-4">
      <img
        src={icon}
        alt={title}
        className="w-16 h-16 object-contain"
      />
      <div>
        <h3 className="text-xl font-semibold text-green-600 mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

const SupportCard = ({ title, description, icon }) => {
  return (
    <div className="bg-green-50 rounded-lg shadow-md overflow-hidden p-4 flex items-center space-x-4">
      <img
        src={icon}
        alt={title}
        className="w-16 h-16 object-contain"
      />
      <div>
        <h3 className="text-xl font-semibold text-green-600 mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default IntegratedFarmingPage;
