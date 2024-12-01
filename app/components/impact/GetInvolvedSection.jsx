import AOS from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'
export default function GetInvolvedSection() {
  useEffect(()=>{
    AOS.init({
      duration: 3000,
      once:false
    })
  })
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 md:px-8" data-aos="fade-up">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-500">Get Involved</h2>
          <p className="text-gray-600 text-lg">
            Your support can make a lasting impact in Oke-Ogun and beyond. Join us in transforming lives through empowerment, education, and sustainable development.
          </p>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Make a Difference Today
            </h3>
            <p className="text-gray-600 mb-6">
              Whether it's through donations or volunteering, your involvement helps us uplift communities and provide essential resources like education, employment, and healthcare.
              Together, we can empower individuals and create sustainable change.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <button className="px-6 py-3 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 transition">
              Donate Now
            </button>
            <button className="px-6 py-3 bg-white text-yellow-500 border border-yellow-500 rounded-lg shadow-md hover:bg-yellow-500 hover:text-white transition">
              Become a Volunteer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
