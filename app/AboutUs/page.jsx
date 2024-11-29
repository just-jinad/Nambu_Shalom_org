"use client"
const AboutUsPage = () => {
  return (
    <main className="bg-white py-10">
      <section className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-green-700 mb-4">About Us</h1>
        <p className="text-lg text-gray-700 mb-6">
          At Nambu-Shalom, we are dedicated to creating sustainable change in communities through innovative programs in healthcare, education, and agriculture. Our mission is to empower individuals and uplift underserved areas.
        </p>

        {/* Our Mission Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-green-600 mb-4">Our Mission</h2>
          <p className="text-gray-700">
            To improve the quality of life for vulnerable populations by providing accessible healthcare, quality education, and sustainable livelihood opportunities.
          </p>
        </section>

        {/* Our Vision Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-green-600 mb-4">Our Vision</h2>
          <p className="text-gray-700">
            To build self-reliant communities where everyone has the opportunity to thrive and reach their full potential.
          </p>
        </section>

        {/* Our Values Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-green-600 mb-4">Our Core Values</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>Integrity: Upholding the highest standards of honesty and accountability.</li>
            <li>Compassion: Addressing the needs of communities with empathy and care.</li>
            <li>Innovation: Implementing creative solutions to drive sustainable change.</li>
            <li>Collaboration: Working together with stakeholders to amplify our impact.</li>
          </ul>
        </section>

        {/* Meet the Team Section */}
        <section>
          <h2 className="text-3xl font-bold text-green-600 mb-4">Meet the Team</h2>
          <p className="text-gray-700 mb-6">
            Our dedicated team of professionals and volunteers work tirelessly to achieve our mission. Together, we are driving meaningful change.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamCard
              name="John Doe"
              role="Founder & CEO"
              image="/images/john_doe.jpg"
            />
            <TeamCard
              name="Jane Smith"
              role="Director of Programs"
              image="/images/jane_smith.jpg"
            />
            <TeamCard
              name="Michael Brown"
              role="Community Outreach Coordinator"
              image="/images/michael_brown.jpg"
            />
          </div>
        </section>
      </section>
    </main>
  );
};

const TeamCard = ({ name, role, image }) => {
  return (
    <div className="bg-green-50 rounded-lg shadow-md overflow-hidden">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-green-600 mb-2">{name}</h3>
        <p className="text-gray-700">{role}</p>
      </div>
    </div>
  );
};

export default AboutUsPage;
