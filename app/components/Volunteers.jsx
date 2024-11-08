import React from 'react';

const Volunteers = () => {
  const volunteers = [
    { name: 'Ara Farrington', role: 'Volunteer', img: '/path-to-image1.jpg' },
    { name: 'Kevin Haley', role: 'Volunteer', img: '/path-to-image2.jpg' },
    { name: 'Alishia Fulton', role: 'Volunteer', img: '/path-to-image3.jpg' },
    { name: 'Bill Marcatis', role: 'Volunteer', img: '/path-to-image4.jpg' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">Meet Our Volunteers</h2>
        <p className="mt-4 text-gray-600">Volunteering for good causes</p>
        
        <div className="mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {volunteers.map((volunteer, index) => (
            <div key={index} className="text-center">
              <img
                src={volunteer.img}
                alt={volunteer.name}
                className="w-40 h-40 mx-auto rounded-full object-cover shadow-lg"
              />
              <h3 className="mt-4 text-lg font-semibold text-gray-800">{volunteer.name}</h3>
              <p className="text-gray-500">{volunteer.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Volunteers;
