"use client"
const KiddiesCollegePage = () => {
  return (
    <main className="bg-white py-10">
      <section className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-4">Kiddie’s College</h1>
        <p className="text-lg text-gray-700 mb-6">
          At Kiddie’s College, we nurture young minds with a strong foundation in education, creativity, and personal development, preparing them for a bright future.
        </p>

        {/* Our Philosophy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Philosophy</h2>
          <p className="text-gray-700 mb-4">
            We believe that every child deserves a holistic education that fosters academic excellence, creativity, and character building. Our curriculum is designed to bring out the best in every student.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Encourage critical thinking and problem-solving skills.</li>
            <li>Promote creativity and innovation through hands-on activities.</li>
            <li>Instill values such as empathy, teamwork, and resilience.</li>
          </ul>
        </section>

        {/* Programs and Activities Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Programs and Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProgramCard
              title="Creative Arts"
              description="Explore creativity through painting, crafts, and performing arts."
              icon="/icons/creative_arts.png"
            />
            <ProgramCard
              title="STEM Education"
              description="Hands-on learning in Science, Technology, Engineering, and Math."
              icon="/icons/stem_education.png"
            />
            <ProgramCard
              title="Sports and Recreation"
              description="Engaging in physical activities to promote health and teamwork."
              icon="/icons/sports_recreation.png"
            />
            <ProgramCard
              title="Language Development"
              description="Building communication skills through interactive language programs."
              icon="/icons/language_development.png"
            />
            <ProgramCard
              title="Leadership Training"
              description="Fostering leadership skills through team projects and mentoring."
              icon="/icons/leadership_training.png"
            />
            <ProgramCard
              title="Environmental Awareness"
              description="Teaching children to care for and respect the environment."
              icon="/icons/environmental_awareness.png"
            />
          </div>
        </section>

        {/* Get Involved Section */}
        <section>
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Get Involved</h2>
          <p className="text-gray-700 mb-4">
            Join us in creating an enriching and supportive environment for children. Here’s how you can contribute:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SupportCard
              title="Volunteer"
              description="Share your skills and time to support our programs and activities."
              icon="/icons/volunteer.png"
            />
            <SupportCard
              title="Sponsor a Child"
              description="Provide financial support to ensure quality education for all."
              icon="/icons/sponsor_child.png"
            />
            <SupportCard
              title="Partner with Us"
              description="Collaborate with us to enhance educational opportunities."
              icon="/icons/partner_education.png"
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

export default KiddiesCollegePage;
