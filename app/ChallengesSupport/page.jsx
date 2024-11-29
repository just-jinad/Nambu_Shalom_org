"use client"
const ChallengesSupport = () => {
  return (
    <main className="bg-white py-10">
      <section className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-4">Challenges & Support</h1>
        <p className="text-lg text-gray-700 mb-6">
          At Nambu-Shalom, we face various challenges in our mission to serve communities and provide sustainable solutions. However, with the support of generous individuals and organizations, we overcome these challenges to make a lasting impact.
        </p>

        {/* Challenges Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Challenges</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>
              Limited resources to support healthcare and educational programs in remote areas.
            </li>
            <li>
              Difficulty in accessing underserved communities due to geographical barriers.
            </li>
            <li>
              Insufficient funding to scale sustainable farming and livelihood projects.
            </li>
            <li>
              Raising awareness about our mission and reaching potential supporters globally.
            </li>
          </ul>
        </section>

        {/* Support Section */}
        <section>
          <h2 className="text-3xl font-bold text-blue-600 mb-4">How You Can Support Us</h2>
          <p className="text-gray-700 mb-4">
            Your support enables us to continue our vital work and expand our reach. Here are some ways you can help:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SupportCard
              title="Donate"
              description="Contribute to our projects and help us bring positive change to those in need."
              icon="/icons/donate.png"
            />
            <SupportCard
              title="Volunteer"
              description="Join our team and help us directly in the field or with administrative tasks."
              icon="/icons/volunteer.png"
            />
            <SupportCard
              title="Partner"
              description="Collaborate with us as an organization to amplify our efforts and reach."
              icon="/icons/partner.png"
            />
          </div>
        </section>
      </section>
    </main>
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

export default ChallengesSupport;
