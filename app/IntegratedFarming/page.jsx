import React from "react";
import HeroSection from "../components/farming/HeroSection";
import WelcomeSection from "../components/farming/WelcomeSection";
import WhyChooseUs from "../components/farming/WhyChooseUs";
import Services from "../components/farming/ServicesSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const page = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WelcomeSection />
      <WhyChooseUs />
      <Services />
      <Footer />
    </>
  );
};

export default page;
