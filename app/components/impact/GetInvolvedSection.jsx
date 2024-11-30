export default function GetInvolvedSection() {
    return (
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-8">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-orange-500">Get Involved</h2>
            <p className="text-gray-600 text-lg">
              Join us in making a difference. Your support can change lives and transform communities.
            </p>
          </div>
  
          {/* Call to Action */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Help Us Make an Impact
              </h3>
              <p className="text-gray-600 mb-6">
                Your donations and participation in our causes are instrumental in driving change. 
                Become a volunteer or donate to support those in need.
              </p>
            </div>
  
            <div className="flex flex-col md:flex-row gap-4">
              <button className="px-6 py-3 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 transition">
                Donate Now
              </button>
              <button className="px-6 py-3 bg-white text-orange-500 border border-orange-500 rounded-lg shadow-md hover:bg-orange-500 hover:text-white transition">
                Become a Volunteer
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
  