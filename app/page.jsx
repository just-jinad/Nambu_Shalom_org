
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CoreSectors from "./components/CoreSectors";
import AboutUs from "./components/AboutUs";
import RecentCauses from "./components/RecentCauses";
import Statistics from "./components/Statistics";
import OurMission from "./components/OurMission";
import Volunteers from "./components/Volunteers";
import DonateSection from "./components/DonateSection";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function Home() {
  return (
   <>
      <Navbar/>
      <HeroSection/>
      <CoreSectors/>
      <AboutUs/>
      <RecentCauses/>
      <Statistics/>
      <OurMission/>
      {/* <Volunteers/> */}
      <Testimonials/>
      <DonateSection/>
      <Newsletter/>
      <Footer/>
   </>
  );
}
