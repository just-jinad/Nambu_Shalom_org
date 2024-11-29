"use client"
const SchoolOfMissionPage = () => {
  return (
    <main className="bg-white py-10">
      <section className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-4">School of Mission</h1>
        <p className="text-lg text-gray-700 mb-6">
          Empowering individuals with the knowledge and skills to carry out their missions with dedication, wisdom, and impact.
        </p>

        {/* Vision and Mission Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Vision and Mission</h2>
          <p className="text-gray-700 mb-4">
            We aim to develop leaders equipped with spiritual, intellectual, and practical tools to transform communities and advance their missions effectively.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Build a strong spiritual foundation.</li>
            <li>Foster intellectual growth and critical thinking.</li>
            <li>Encourage practical application through service projects.</li>
          </ul>
        </section>

        {/* Training Programs Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Training Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProgramCard
              title="Theology and Leadership"
              description="Explore theological studies combined with leadership training to prepare for ministry."
              icon="/icons/theology_leadership.png"
            />
            <ProgramCard
              title="Community Development"
              description="Learn practical skills for impactful community projects and social initiatives."
              icon="/icons/community_development.png"
            />
            <ProgramCard
              title="Mission Strategies"
              description="Develop strategies for effective and sustainable mission work in diverse settings."
              icon="/icons/mission_strategies.png"
            />
            <ProgramCard
              title="Intercultural Training"
              description="Gain insights into navigating cultural differences and building cross-cultural relationships."
              icon="/icons/intercultural_training.png"
            />
            <ProgramCard
              title="Spiritual Formation"
              description="Deepen your spiritual practices and grow in personal faith."
              icon="/icons/spiritual_formation.png"
            />
            <ProgramCard
              title="Project Management"
              description="Acquire essential project planning and management skills for mission activities."
              icon="/icons/project_management.png"
            />
          </div>
        </section>

        {/* Join Us Section */}
        <section>
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Join Us</h2>
          <p className="text-gray-700 mb-4">
            Become part of a community committed to making a difference. Here’s how you can get involved:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SupportCard
              title="Enroll as a Student"
              description="Begin your journey with us to develop your mission skills."
              icon="/icons/enroll_student.png"
            />
            <SupportCard
              title="Volunteer with Us"
              description="Contribute your time and expertise to support our mission programs."
              icon="/icons/volunteer_mission.png"
            />
            <SupportCard
              title="Partner with Us"
              description="Collaborate to expand our reach and impact."
              icon="/icons/partner_mission.png"
            />
          </div>
        </section>
      </section>
    </main>
  );
};

const ProgramCard = ({ title, description, icon }) => {
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

export default SchoolOfMissionPage;
