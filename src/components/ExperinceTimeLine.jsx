import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
    {
    id: 1,
    title: "Full Stack Developer",
    company: "Codevue technology",
    duration: "April 2024 - APresent",
    side: "right",
  },
  // {
  //   id: 2,
  //   title: "Full Stack Developer",
  //   company: "Sutraa Technosoft pvt ltd",
  //   duration: "Aug 2024 - Oct 2024",
  //   side: "left",
  // },
  {
    id: 2,
    title: "MERN Developer",
    company: "Third Eye Automation Pvt Ltd",
    duration: "Oct 2022 - March 2024",
    side: "left",
  },
  // {
  //   id: 4,
  //   title: "MERN Developer",
  //   company: "Codevue technology",
  //   duration: "November 2024 - APresent",
  //   side: "left",
  // },
];

const ExperienceTimeline = () => {
  return (
    <section id='experience' className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-2 text-center
                   text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-purple-800 
                   drop-shadow-lg animate-bounce">
          Experience
        </h2>

        <div className="relative flex flex-col items-center">
          {/* Center Vertical Line */}
          <div className="absolute w-1 bg-blue-600 h-full left-1/2 transform -translate-x-1/2 hidden md:block"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: exp.side === "left" ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`relative flex items-center w-full max-w-4xl ${
                exp.side === "left" ? "justify-start" : "justify-end"
              }  md:mb-4`}
            >
              {/* Suitcase Icon */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 bg-blue-600 text-white p-3 rounded-full shadow-lg z-10">
                <FaBriefcase className="w-5 h-5" />
              </div>

              {/* Experience Card */}
              <div
                className={`relative bg-gradient-to-r from-purple-900 to-indigo-900 text-white p-6 rounded-lg shadow-lg w-full md:w-80 mt-10 ${
                  exp.side === "left" ? "mr-0 md:mr-16" : "ml-0 md:ml-16"
                }`}
              >
                <h3 className="font-bold text-lg md:text-xl">{exp.company}</h3>
                <p className="text-sm md:text-base">{exp.title}</p>
                <p className="text-xs md:text-sm mt-1 opacity-80">
                  {exp.duration}
                </p>

                {/* Pointed Arrows */}
                <div
                  className={`hidden lg:block absolute top-1/2 transform -translate-y-1/2 w-0 h-0 border-8 border-transparent ${
                    exp.side === "left"
                      ? "border-r-orange-500 -right-4 md:-right-6"
                      : "border-l-orange-500 -left-4 md:-left-6"
                  }`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Progress Button */}
        <div className="text-center mt-10">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="px-6 py-2 bg-gradient-to-r from-pink-700 to-yellow-700 text-white font-bold rounded-full shadow-lg hover:shadow-2xl hover:from-yellow-500 hover:to-pink-500 transition-transform transform hover:scale-105 duration-300 cursor-pointer"
          >
            Work In Progress →
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;