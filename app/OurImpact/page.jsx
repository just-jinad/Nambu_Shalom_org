"use client"
import Footer from "../components/Footer"
import GetInvolvedSection from "../components/impact/GetInvolvedSection"
import HeroSection from "../components/impact/HeroSection"
import IntroductionSection from "../components/impact/IntroductionSection"
import PopularCausesSection from "../components/impact/PopularCausesSection"
import Navbar from "../components/Navbar"
const page = () => {
  return (
   <>
   <Navbar/>
  {/* <HeroSection/> */}
  <IntroductionSection/>
  <PopularCausesSection/>
  <GetInvolvedSection/>
  <Footer/>
   </>
  )
}

export default page