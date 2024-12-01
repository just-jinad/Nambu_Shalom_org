"use client";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ChallengesSupport = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: false,
    });
  });
  return (
    <>
      <Navbar />
      <main className="mb-4">
        {/* Header Section */}
        <section
          className="relative h-40 sm:h-56 md:h-64 w-full bg-cover bg-center mb-12"
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/736x/99/69/6e/99696ea31d5989e64fd2e595f8f866ce.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>{" "}
          {/* Reduced opacity for brighter text */}
          <div
            className="max-w-7xl mx-auto px-6 md:px-8 h-full flex items-center justify-center text-center"
            data-aos="fade-up"
          >
            <div className="text-center sm:px-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
                Challenges & Support
              </h1>
              <p className="text-sm sm:text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">
                At Nambu-Shalom, we tackle various challenges in our mission to
                serve communities and provide sustainable solutions. With your
                support, we can overcome these hurdles and make a lasting
                impact.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 md:px-8" data-aos="fade-up">
          {/* Challenges Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-yellow-600 mb-6 text-center">
              Our Challenges
            </h2>
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
                  <h3 className="text-xl font-semibold text-yellow-600 mb-2">
                    {challenge.title}
                  </h3>
                  <p className="text-gray-700">{challenge.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Support Section */}
          <section data-aos="fade-up">
            <h2 className="text-3xl font-bold text-yellow-600 mb-6 text-center">
              How You Can Support Us
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto text-center">
              Your support enables us to continue our vital work. Explore the
              ways you can contribute below:
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
                  <h3 className="text-xl font-semibold text-yellow-600 mb-2">
                    {support.title}
                  </h3>
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
    title: "Access to Education",
    description:
      "Many children in rural areas lack access to quality education due to the absence of schools, learning materials, and trained teachers.",
    icon: "/icons/education.png", // Replace with actual image path
  },
  {
    title: "Healthcare Challenges",
    description:
      "Limited access to medical facilities and healthcare professionals leads to preventable illnesses and deaths in underserved communities.",
    icon: "/icons/healthcare.png", // Replace with actual image path
  },
  {
    title: "Economic Hardship",
    description:
      "Poverty and unemployment in rural areas hinder community development and self-sustainability.",
    icon: "/icons/economic-hardship.png", // Replace with actual image path
  },
  {
    title: "Environmental Degradation",
    description:
      "Deforestation and unsustainable farming practices contribute to soil erosion and reduced agricultural productivity.",
    icon: "/icons/environment.png", // Replace with actual image path
  },
  {
    title: "Prevalence of Preventable Diseases",
    description:
      "Lack of resources for preventive healthcare measures results in high rates of treatable diseases.",
    icon: "/icons/preventable-diseases.png", // Replace with actual image path
  },
  {
    title: "Community Awareness Challenges",
    description:
      "Limited knowledge about sustainable practices hinders long-term development in rural areas.",
    icon: "/icons/community-awareness.png", // Replace with actual image path
  },
];

const supportOptions = [
  {
    title: "Donate",
    description:
      "Contribute to our projects and help us bring positive change to those in need.",
    icon: "/icons/donate.png", // Replace with actual image path
  },
  {
    title: "Volunteer",
    description:
      "Join our team and help us directly in the field or with administrative tasks.",
    icon: "/icons/volunteer.png", // Replace with actual image path
  },
  {
    title: "Partner",
    description:
      "Collaborate with us as an organization to amplify our efforts and reach.",
    icon: "/icons/partner.png", // Replace with actual image path
  },
];

export default ChallengesSupport;
