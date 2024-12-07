// components/ServicesSection.js
export default function ServicesSection() {
    const services = [
      { title: 'Landscaping', image: '/service1.jpg' },
      { title: 'Garden Design', image: '/service2.jpg' },
      { title: 'Planting', image: '/service3.jpg' },
      { title: 'Maintenance', image: '/service4.jpg' },
    ];
  
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-16 text-center">
          <h2 className="text-2xl font-bold text-green-700">Our Plantings</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-gray-100 p-4 rounded shadow">
                <img src={service.image} alt={service.title} className="w-full h-40 object-cover rounded" />
                <h3 className="mt-4 font-medium text-gray-800">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  