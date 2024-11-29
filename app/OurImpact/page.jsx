"use client"

const OurImpact = () => {
  return (
    <main className="bg-white py-10">
      <section className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-green-700 mb-4">Our Impact</h1>
        <p className="text-lg text-gray-700 mb-6">
          At Nambu-Shalom, we are committed to transforming lives and building sustainable communities. Our impact spans across healthcare, education, and agricultural initiatives that empower individuals and foster growth.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ImpactCard
            title="Healthcare Outreach"
            description="Providing essential medical care and education to underserved communities."
            image="/images/healthcare.jpg"
          />
          <ImpactCard
            title="Educational Programs"
            description="Equipping children and adults with the knowledge and skills to thrive."
            image="/images/education.jpg"
          />
          <ImpactCard
            title="Sustainable Farming"
            description="Promoting agricultural practices that ensure food security and economic stability."
            image="/images/farming.jpg"
          />
        </div>
      </section>
    </main>
  );
};

const ImpactCard = ({ title, description, image }) => {
  return (
    <div className="bg-green-50 rounded-lg shadow-md overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-green-600 mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default OurImpact;
