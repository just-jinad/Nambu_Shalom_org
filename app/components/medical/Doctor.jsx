// components/OurDoctors.js
export default function OurDoctors() {
    const doctors = [
      { name: 'Dr. Charlotte Brown', specialty: 'Dermatology', image: '/doctor1.jpg' },
      { name: 'Dr. Scott Peterson', specialty: 'Psychiatry', image: '/doctor2.jpg' },
      { name: 'Dr. Judith Perry', specialty: 'Gynecology', image: '/doctor3.jpg' },
    ];
  
    return (
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 lg:px-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Our Doctors</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-32 h-32 rounded-full mx-auto"
                />
                <h3 className="mt-4 font-semibold text-lg text-gray-800">{doctor.name}</h3>
                <p className="mt-2 text-gray-600">{doctor.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  