"use client"
const OutreachPage = () => {
  return (
    <main className="bg-white py-10">
      <section className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-purple-700 mb-4">Outreach</h1>
        <p className="text-lg text-gray-700 mb-6">
          At Nambu-Shalom, our outreach programs aim to extend a helping hand to the most vulnerable communities. Through strategic partnerships and dedicated efforts, we strive to improve lives and inspire hope.
        </p>

        {/* Outreach Initiatives */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-purple-600 mb-4">Our Initiatives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <OutreachCard
              title="Community Health Drives"
              description="Bringing essential medical care and health education directly to underserved areas."
              image="/images/health_drive.jpg"
            />
            <OutreachCard
              title="Youth Empowerment"
              description="Providing skill acquisition programs and mentorship for young individuals."
              image="/images/youth_empowerment.jpg"
            />
            <OutreachCard
              title="Emergency Relief"
              description="Offering immediate assistance and resources to communities affected by disasters."
              image="/images/emergency_relief.jpg"
            />
          </div>
        </section>

        {/* Get Involved */}
        <section>
          <h2 className="text-3xl font-bold text-purple-600 mb-4">How You Can Get Involved</h2>
          <p className="text-gray-700 mb-4">
            Join us in making a difference. Here's how you can be part of our outreach programs:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <InvolvementCard
              title="Sponsor a Program"
              description="Support a specific outreach initiative with your resources."
              icon="/icons/sponsor.png"
            />
            <InvolvementCard
              title="Volunteer"
              description="Dedicate your time and skills to help our outreach efforts."
              icon="/icons/volunteer.png"
            />
            <InvolvementCard
              title="Advocate"
              description="Raise awareness about our mission and programs in your community."
              icon="/icons/advocate.png"
            />
          </div>
        </section>
      </section>
    </main>
  );
};

const OutreachCard = ({ title, description, image }) => {
  return (
    <div className="bg-purple-50 rounded-lg shadow-md overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-purple-600 mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

const InvolvementCard = ({ title, description, icon }) => {
  return (
    <div className="bg-purple-50 rounded-lg shadow-md overflow-hidden p-4 flex items-center space-x-4">
      <img
        src={icon}
        alt={title}
        className="w-16 h-16 object-contain"
      />
      <div>
        <h3 className="text-xl font-semibold text-purple-600 mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default OutreachPage;
