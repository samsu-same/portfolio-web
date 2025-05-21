// components/Testimonials.jsx
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "P. Sravan Kumar Reddy",
      role: "Senior Developer",
      comment: "Working with Samsu was a pleasure. Their attention to detail and problem-solving skills are exceptional.",
      image: "https://media.licdn.com/dms/image/v2/D5603AQH6EjAVBcYkcw/profile-displayphoto-shrink_100_100/B56ZWH19.yGQAU-/0/1741740827680?e=1753315200&v=beta&t=jP71XSaC9y2UL3Kb6ke6n8C9hS7BWjZRa9b5cdREay8",
    },
    {
      id: 2,
      name: "Anuj Nath",
      role: "Senior Backend Engineer",
      comment: "Samsuddin Ansari is a highly skilled professional who delivers quality work on time.",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQG3qFLolFlhmw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1683949614094?e=1753315200&v=beta&t=R96H-pcdQGtswj6CiSSGJrgeS1HOJNrG2FoU1rvTP3A",
    },
  ];

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">What People Say About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-md shadow-md text-center">
              <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
              <p className="text-gray-600 italic">"{testimonial.comment}"</p>
              <h3 className="text-xl font-semibold mt-4">{testimonial.name}</h3>
              <p className="text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;