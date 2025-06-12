// components/CallToAction.jsx
import React from 'react';

const CallToAction = () => {
  return (
    <section id="cta" className="w-full py-16 bg-gradient-to-r from-purple-900 to-indigo-900">
      <div className="max-w-7xl mx-auto  text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Let's Work Together!</h2>
        <p className="text-gray-200 mb-8">I'm always open to new opportunities and collaborations. Feel free to reach out.</p>
        <a href="#contact" className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-50 transition duration-300">
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default CallToAction;