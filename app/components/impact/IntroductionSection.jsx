import Image from 'next/image';

export default function IntroductionSection() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text Section */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-orange-500">
              Give a Helping Hand to the Needy
            </h2>
            <p className="text-gray-700 text-base sm:text-lg mb-6">
              We make a lot of effort to help achieve the global poverty rate decline and support education for children living in poor families.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-medium shadow-md transition">
              Learn More
            </button>
          </div>

          {/* Image Section */}
          <div className="relative">
            <Image 
              src="/images/helping-hand.jpg" 
              alt="Helping Hand" 
              width={500} 
              height={400} 
              className="rounded-lg shadow-lg object-cover w-full h-auto" 
              priority 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
