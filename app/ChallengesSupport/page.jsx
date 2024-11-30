'use client';
import Image from 'next/image';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const ChallengesSupport = () => {
  return (
    <>
    <Navbar/>
      <main className="mb-4 ">
        {/* Header Section */}
        <section
          className="relative h-40 sm:h-56 md:h-64 w-full bg-cover bg-center mb-12"
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/736x/99/69/6e/99696ea31d5989e64fd2e595f8f866ce.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-20"></div> {/* Reduced opacity for brighter text */}
          <div className="max-w-7xl mx-auto px-6 md:px-8 h-full flex items-center justify-center text-center">
            <div className="text-center  sm:px-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
                Challenges & Support
              </h1>
              <p className="text-sm sm:text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">
                At Nambu-Shalom, we tackle various challenges in our mission to serve communities and provide sustainable solutions. With your support, we can overcome these hurdles and make a lasting impact.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 md:px-8">
          {/* Challenges Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">Our Challenges</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
              {challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 hover:shadow-xl"
                >
                  <Image
                    src={challenge.icon}
                    alt="Challenge Icon"
                    width={60}
                    height={60}
                    className="mb-4"
                  />
                  <h3 className="text-xl font-semibold text-orange-600 mb-2">{challenge.title}</h3>
                  <p className="text-gray-700">{challenge.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Support Section */}
          <section>
            <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">How You Can Support Us</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto text-center">
              Your support enables us to continue our vital work. Explore the ways you can contribute below:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {supportOptions.map((support, index) => (
                <div
                  key={index}
                  className="rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 hover:shadow-xl"
                >
                  <Image
                    src={support.icon}
                    alt="Support Icon"
                    width={60}
                    height={60}
                    className="mb-4"
                  />
                  <h3 className="text-xl font-semibold text-orange-600 mb-2">{support.title}</h3>
                  <p className="text-gray-700">{support.description}</p>
                </div>
              ))}
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
};

const challenges = [
  {
    title: 'Limited Resources',
    description: 'Supporting healthcare and educational programs in remote areas is challenging due to limited funding and supplies.',
    icon: '/icons/limited-resources.png',
  },
  {
    title: 'Geographical Barriers',
    description: 'Reaching underserved communities in remote and hard-to-access areas.',
    icon: '/icons/geographical-barriers.png',
  },
  {
    title: 'Funding Constraints',
    description: 'Insufficient funding to expand our sustainable farming and livelihood initiatives.',
    icon: '/icons/funding-constraints.png',
  },
  {
    title: 'Raising Awareness',
    description: 'Spreading the word about our mission and reaching potential global supporters.',
    icon: '/icons/awareness.png',
  },
];

const supportOptions = [
  {
    title: 'Donate',
    description: 'Contribute to our projects and help us bring positive change to those in need.',
    icon: '/icons/donate.png',
  },
  {
    title: 'Volunteer',
    description: 'Join our team and help us directly in the field or with administrative tasks.',
    icon: '/icons/volunteer.png',
  },
  {
    title: 'Partner',
    description: 'Collaborate with us as an organization to amplify our efforts and reach.',
    icon: '/icons/partner.png',
  },
];

export default ChallengesSupport;
