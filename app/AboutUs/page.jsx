"use client"
import Image from 'next/image';
import Navbar from '../components/Navbar';
const AboutUs = () => {
  return (
    <>
    <Navbar/>
    <main className="bg-white py-16">
      {/* Header Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800">About Us</h1>
      </section>

      {/* Mission Section */}
      <section className="bg-blue-500 py-12 text-white">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            To dedicate efforts that empower communities and generate sustainable impacts. 
            By merging education, healthcare, and livelihood initiatives, we aim to elevate 
            underprivileged communities and create lasting opportunities.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="relative py-12">
        <div className="absolute inset-0">
          <Image
            src="/images/vision-bg.jpg"
            alt="Vision Background"
            layout="fill"
            objectFit="cover"
            className="opacity-50"
          />
        </div>
        <div className="relative max-w-5xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            To inspire a world where every community thrives with equal opportunities 
            and sustainable solutions. Our vision is rooted in fostering self-reliance, 
            resilience, and innovation to address the challenges of today and tomorrow.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Values</h2>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>✔ Commitment to creating a meaningful impact in every community.</li>
            <li>✔ Integrity and transparency in all our actions and partnerships.</li>
            <li>✔ Collaboration to amplify the power of change and progress.</li>
          </ul>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={120}
                  height={120}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
    </>
  );
};

const team = [
  { name: 'Roy Agustin', role: 'Program Lead', photo: '/team/roy.jpg' },
  { name: 'Janet Wilson', role: 'Education Specialist', photo: '/team/janet.jpg' },
  { name: 'Leo Carter', role: 'Sustainability Expert', photo: '/team/leo.jpg' },
  { name: 'Grace Dunbar', role: 'Outreach Coordinator', photo: '/team/grace.jpg' },
];

export default AboutUs;
