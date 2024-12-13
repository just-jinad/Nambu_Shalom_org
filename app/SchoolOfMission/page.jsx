"use client"

import Footer from "../components/Footer";
import { CTASection } from "../components/mission/CTAsection";
import { HeroSection } from "../components/mission/HeroSection";
import { InfoSection } from "../components/mission/InfoSection";
import { ProgramsSection } from "../components/mission/ProgramSection";
import { StudentCards } from "../components/mission/StudentCard";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const SchoolOfMissionPage = () => {
  return (
   <>
    <Navbar/>
    <HeroSection/>
    <StudentCards/>
    <ProgramsSection/>
    <CTASection/>
    <InfoSection/>
    <Newsletter/>
    <Footer/>

   </>
  );
};

export default SchoolOfMissionPage;
