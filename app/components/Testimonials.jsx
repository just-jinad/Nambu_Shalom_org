import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      feedback: 'This organization has changed my life in so many ways. Their support has been invaluable.',
      img: '/path-to-image1.jpg',
    },
    {
      name: 'Jane Smith',
      feedback: 'I am grateful for all the amazing work they do. They truly make a difference.',
      img: '/path-to-image2.jpg',
    },
    {
      name: 'Alex Johnson',
      feedback: 'It’s inspiring to see how they help communities and bring hope to people’s lives.',
      img: '/path-to-image3.jpg',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-8">What People Say</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
              <p className="text-gray-600 mt-2">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
