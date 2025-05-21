// components/Awards.jsx
import React from 'react';

const Awards = () => {
  const awards = [
    {
      id: 1,
      title: "Best Developer Award 2023",
      issuer: "Tech Conference",
      date: "2023",
    },
    {
      id: 2,
      title: "Certified React Developer",
      issuer: "React Academy",
      date: "2022",
    },
  ];

  return (
    <section id="awards" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Awards & Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {awards.map((award) => (
            <div key={award.id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{award.title}</h3>
              <p className="text-gray-600">{award.issuer}</p>
              <p className="text-gray-500">{award.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;