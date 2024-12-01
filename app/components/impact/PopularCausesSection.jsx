import Image from 'next/image';

export default function PopularCausesSection() {
  const causes = [
    {
      title: 'Empower Youth and Women',
      description: 'Providing financial aid and resources for small businesses to reduce poverty and improve livelihoods.',
      image: '/images/empowerment.jpg', // Update with an image representing empowerment
      raised: '₦1,700,000',
      goal: '₦4,000,000',
    },
    {
      title: 'Support Educational Development',
      description: 'Providing scholarships and quality education through Shalom Kiddies College for children in rural areas.',
      image: '/images/education.jpg', // Update with an image representing education
      raised: '₦130,087',
      goal: '₦500,000',
    },
    {
      title: 'Promote Organic Farming',
      description: 'Supporting organic agricultural programs for sustainable livelihoods and socio-economic development.',
      image: '/images/farming.jpg', // Update with an image representing organic farming
      raised: '₦8,325',
      goal: '₦20,000',
    },
    {
      title: 'Church Planting and Evangelism',
      description: 'Establishing new churches and evangelizing rural communities to promote spiritual growth.',
      image: '/images/church-planting.jpg', // Update with an image representing church planting
      raised: '₦2,500,000',
      goal: '₦5,000,000',
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-500">Our Impactful Causes</h2>
          <p className="text-gray-600 text-lg">
            Join us in supporting these initiatives that are transforming lives in Oke-Ogun and beyond.
          </p>
        </div>

        {/* Cause Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {causes.map((cause, index) => (
            <div key={index} className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
              <Image 
                src={cause.image} 
                alt={cause.title} 
                width={400} 
                height={300} 
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{cause.title}</h3>
                <p className="text-gray-600 mb-4">{cause.description}</p>
                <div className="flex justify-between items-center text-yellow-500 font-medium">
                  <span>Raised: {cause.raised}</span>
                  <span>Goal: {cause.goal}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
