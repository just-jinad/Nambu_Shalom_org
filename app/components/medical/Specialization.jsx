// components/Specializations.js
export default function Specializations() {
    const services = [
      { title: 'Dermatology', description: 'Expert skin care and treatment.', icon: '🌟' },
      { title: 'Psychology', description: 'Mental health guidance and support.', icon: '🧠' },
      { title: 'Psychiatry', description: 'Advanced mental health therapy.', icon: '💊' },
      { title: 'Gynecology', description: 'Women’s healthcare support.', icon: '⚕️' },
    ];
  
    return (
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center">Specializations</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <div className="text-4xl">{service.icon}</div>
                <h3 className="mt-4 font-semibold text-lg text-gray-800">{service.title}</h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  