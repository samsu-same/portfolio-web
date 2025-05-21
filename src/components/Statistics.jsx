// components/Statistics.jsx
import React from 'react';
import { FaProjectDiagram, FaUserClock, FaSmile } from 'react-icons/fa'; // Import icons from Font Awesome

const Statistics = () => {
  const stats = [
    {
      id: 1,
      value: "10+",
      label: "Projects Completed",
      icon: <FaProjectDiagram className="w-12 h-12 mb-4 text-blue-500" />, // Add icon
    },
    {
      id: 2,
      value: "2+",
      label: "Years of Experience",
      icon: <FaUserClock className="w-12 h-12 mb-4 text-green-500" />, // Add icon
    },
    {
      id: 3,
      value: "100%",
      label: "Client Satisfaction",
      icon: <FaSmile className="w-12 h-12 mb-4 text-yellow-500" />, // Add icon
    },
  ];

  return (
    <section id="statistics" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">My Stats</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center">
                {stat.icon} {/* Render the icon */}
              </div>
              <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;