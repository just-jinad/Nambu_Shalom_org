// components/WelcomeSection.js
export default function WelcomeSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-8">
        {/* Left Text Section */}
        <div>
          <h2 className="text-3xl font-bold text-green-700">Welcome to GreensKeeper</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Exceeding Landscaping and Maintenance Services. Vivamus vehicula ex id lectus gravida, sit amet condimentum lacus fermentum.
          </p>
          {/* <button className="mt-6 px-6 py-2 bg-green-600 text-white font-medium rounded hover:bg-green-700">
            Read More About Us
          </button> */}
        </div>

        {/* Right Image Grid */}
        <div className="grid grid-cols-2 gap-4">
          <img src="/image1.jpg" alt="Plant" className="w-full h-full object-cover rounded" />
          <img src="/image2.jpg" alt="Tools" className="w-full h-full object-cover rounded" />
          <img src="/image3.jpg" alt="Seedling" className="w-full h-full object-cover rounded col-span-2" />
        </div>
      </div>
    </section>
  );
}
