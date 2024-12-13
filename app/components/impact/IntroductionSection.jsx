import Image from 'next/image';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';


export default function IntroductionSection() {
  useEffect(()=>{
    AOS.init({
      duration:3000,
      once: false,
    })
  })
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid  items-center" data-aos="fade-up">
          {/* Text Section */}
          <div>
            <h2 className="text-2xl mt-10 sm:text-3xl md:text-4xl font-bold mb-4 text-green-500">
              Impact of Nambu-Shalom Rural Ministry
            </h2>
            <p className="text-gray-700 text-base sm:text-lg mb-6">
              The impression and impact which Nambu-Shalom Rural Ministry has made in Oke-Ogun Area, North West of Oyo State in Nigeria, particularly as it involves the development of Oje-Owode town and its environs, are remarkable, especially at the headquarters of the mission.
            </p>
            <p className="text-gray-700 text-base sm:text-lg mb-6">
              Notable influences for positive transformation are evident in church planting, youth and women empowerment, primary school education, rural evangelism, employment for socio-economic development, and the promotion of organic agricultural programs.
            </p>
            <h3 className="text-xl font-bold mt-6 mb-4 text-gray-800">Youth and Women Empowerment</h3>
            <p className="text-gray-700 text-base sm:text-lg mb-6">
              NSRM combats poverty by providing financial aid as capital to establish small-scale businesses for self-sustenance. Beneficiaries have received resources such as autobikes, grinding machines, and financial support to expand their trade in raw food, helping improve their lives and their families.
            </p>
            <h3 className="text-xl font-bold mt-6 mb-4 text-gray-800">Educational Development</h3>
            <p className="text-gray-700 text-base sm:text-lg mb-6">
              Shalom Kiddies College, established in September 2011, aims to bring quality education, sound morals, and the fear of God to pupils in rural areas. With the slogan "Catch Them Young," the school also provides scholarships for some students, contributing to community growth.
            </p>
            <p className="text-gray-700 text-base sm:text-lg mb-6">
              Additionally, the Aba-Church Village has a two-classroom block where about forty children learn. However, attracting qualified teachers to rural settings remains a challenge that NSRM hopes to address through missionary training programs.
            </p>
          </div>

          {/* Image Section */}
          {/* <div className="relative">
            <Image 
              src="/images/impactful-change.jpg" 
              alt="Impactful Change" 
              width={500} 
              height={400} 
              className="rounded-lg shadow-lg object-cover w-full h-auto" 
              priority 
            />
          </div> */}
        </div>
      </div>
    </section>
  );
}
