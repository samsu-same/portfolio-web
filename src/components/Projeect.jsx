import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  { id: 1, name: "Project 1", description: "A cool project", link: "#", image: "https://via.placeholder.com/300" },
  { id: 2, name: "Project 2", description: "AK Construction ", link: "#", image: "/images/akconstruction.png" },
  { id: 3, name: "Project 3", description: "A fantastic project", link: "#", image: "https://via.placeholder.com/300" },
  { id: 4, name: "Project 4", description: "An innovative project", link: "#", image: "https://via.placeholder.com/300" },
];

const ProjectCard = ({ project }) => (
  <motion.div
    whileHover={{ scale: 1.05, rotateY: 5 }}
    className="p-6 bg-white rounded-2xl shadow-2xl border border-gray-200 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 w-full"
    style={{ perspective: "1000px", boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)" }}
  >
    <img src={project.image} alt={project.name} className="w-full h-40 object-cover rounded-md mb-4" />
    <h3 className="text-xl font-bold text-gray-800">{project.name}</h3>
    <p className="text-gray-600 mt-2">{project.description}</p>
    <a href={project.link} className="mt-4 inline-block text-blue-500 hover:text-blue-700 transition-all">
      View Project →
    </a>
  </motion.div>
);

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleProjects = projects.length > 3 ? projects.slice(currentIndex, currentIndex + 3) : projects;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="projects"
    //   className="p-8 bg-gray-100"
      className="p-8 bg-gradient-to-r from-blue-500 to-purple-500"
    >
      <div className="container mx-auto relative">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Projects</h2>
        <div className="hidden md:flex items-center justify-between relative">
          <button onClick={prevSlide} className="absolute left-0 p-2 bg-gray-300 rounded-full">◀</button>
          <div className="grid grid-cols-3 gap-6 w-full px-8">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <button onClick={nextSlide} className="absolute right-0 p-2 bg-gray-300 rounded-full">▶</button>
        </div>
        <div className="md:hidden relative flex items-center justify-center w-full">
          <button onClick={prevSlide} className="absolute left-0 p-2 bg-gray-300 rounded-full">◀</button>
          <div className="w-full px-8">
            <ProjectCard project={projects[currentIndex]} />
          </div>
          <button onClick={nextSlide} className="absolute right-0 p-2 bg-gray-300 rounded-full">▶</button>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
