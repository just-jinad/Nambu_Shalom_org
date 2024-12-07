// components/WhyChooseUs.js
export default function WhyChooseUs() {
  const features = [
    { title: 'Independent Venture', icon: '🌱' },
    { title: 'High Quality', icon: '🌟' },
    { title: 'Local Impact', icon: '🌍' },
    { title: 'Simple Pricing', icon: '💲' },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-16 text-center">
        <h2 className="text-2xl font-bold text-green-700">Areas We Have Touched</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 mx-auto bg-green-200 flex items-center justify-center rounded-full text-3xl">
                {feature.icon}
              </div>
              <h3 className="mt-4 font-semibold text-lg text-gray-800">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
