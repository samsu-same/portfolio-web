// components/Hobbies.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Hobbies = () => {
  const hobbies = [
    {
      id: 1,
      name: "Watching Football",
      description: "Enjoying thrilling matches and supporting my favorite teams.",
      icon: "⚽",
    },
    {
      id: 2,
      name: "Traveling",
      description: "Exploring new cultures and cuisines around the world.",
      icon: "✈️",
    },
    {
      id: 3,
      name: "Coding",
      description: "Building cool projects and solving problems with code.",
      icon: "💻",
    },
    {
      id: 4,
      name: "Gaming",
      description: "Playing strategy and adventure games in my free time.",
      icon: "🎮",
    },
    {
      id: 5,
      name: "Photography",
      description: "Capturing moments and landscapes with my camera.",
      icon: "📸",
    },
    {
      id: 6,
      name: "Reading",
      description: "Diving into books about technology, history, and fiction.",
      icon: "📚",
    },
  ];

  return (
    <section id="hobbies" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Hobbies & Interests</h2>
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {hobbies.map((hobby) => (
            <SwiperSlide key={hobby.id}>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center h-full">
                <span className="text-4xl mb-4">{hobby.icon}</span>
                <h3 className="text-xl font-semibold mb-2">{hobby.name}</h3>
                <p className="text-gray-600">{hobby.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Hobbies;