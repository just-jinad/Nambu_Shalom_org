import Image from 'next/image';

export default function PopularCausesSection() {
  const causes = [
    {
      title: 'Donate to poor children to return school',
      description: 'Many kids can’t come back to school because of poverty.',
      image: '/images/cause-1.jpg',
      raised: '$1.7 million',
      goal: '$4.0 million',
    },
    {
      title: 'Raise fund for people living in poverty',
      description: 'Low-income people need to supply food and other basic needs.',
      image: '/images/cause-2.jpg',
      raised: '$130,087.00',
      goal: '$4,000.00',
    },
    {
      title: 'Give food & clothing for the homeless',
      description: 'We want to provide the basic necessities for them.',
      image: '/images/cause-3.jpg',
      raised: '$8,325.00',
      goal: '$2,000.00',
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-orange-500">Our Popular Causes</h2>
          <p className="text-gray-600 text-lg">
            Help the people by supporting these impactful causes.
          </p>
        </div>

        {/* Cause Cards */}
        <div className="grid md:grid-cols-3 gap-8">
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
                <div className="flex justify-between items-center text-orange-500 font-medium">
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
