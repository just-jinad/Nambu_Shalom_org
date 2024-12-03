import React from 'react';

const RecentCauses = () => {
  const causes = [
    {
      title: 'Empowering Rural Economies',
      description: 'Providing training and resources to foster entrepreneurship and sustainable farming practices.',
      raised: 10565,
      goal: 20000,
      image: 'https://i.pinimg.com/736x/7f/8f/09/7f8f091635047704d08f5e653780a98d.jpg',
    },
    {
      title: 'Expanding Educational Access',
      description: 'Creating opportunities for children in underserved areas through the Kiddie’s College program.',
      raised: 10465,
      goal: 20000,
      image: 'https://i.pinimg.com/736x/86/a9/26/86a9266c85a35b3d030781d2428083b7.jpg',
    },
    {
      title: 'Improving Rural Healthcare',
      description: 'Delivering essential medical care and supplies through St. Luke’s Medical Mission.',
      raised: 10365,
      goal: 20000,
      image: 'https://i.pinimg.com/736x/38/b2/e9/38b2e953c2f1598886e6595afe08046f.jpg',
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-800">Our Focus Areas</h2>
        {/* <p className="mt-4 text-center text-gray-600">Recent Initiatives</p> */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {causes.map((cause, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={cause.image} alt={cause.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{cause.title}</h3>
                <p className="text-gray-600 mt-2">{cause.description}</p>
                <div className="mt-4">
                  {/* <div className="text-sm font-medium text-gray-600">
                    Raised: ${cause.raised.toLocaleString()} / Goal: ${cause.goal.toLocaleString()}
                  </div> */}
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div
                      className="bg-yellow-500 h-2 rounded-full"
                      style={{ width: `${(cause.raised / cause.goal) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentCauses;
