import React from 'react'
import HeroSection from '../components/medical/HeroSection'
import Specializations from '../components/medical/Specialization'
import ConsultationSection from '../components/medical/Consultation'
import Testimonials from '../components/Testimonials'
import OurDoctors from '../components/medical/Doctor'
import CallToAction from '../components/medical/Cta'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const page = () => {
  return (
  <>
  <Navbar/>
  <HeroSection/>
  <Specializations/>
  <ConsultationSection/>
  <Testimonials/>
  <OurDoctors/>
  <CallToAction/>
  <Footer/>
  </>
  )
}

export default page