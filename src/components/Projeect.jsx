import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import PropTypes from "prop-types";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import projects from "../data/project.json";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25 }}
      className="flex h-full w-full flex-col rounded-2xl border border-gray-200 bg-white p-4 shadow-lg transition-shadow hover:shadow-2xl"
      style={{
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Project Image */}
      <img
        src={project.image}
        alt={project.name}
        loading="lazy"
        className="h-40 w-full rounded-lg bg-gray-100 object-cover"
      />

      {/* Project Details */}
      <div className="flex flex-1 flex-col p-3">
        <h3 className="text-xl font-bold text-gray-800">
          {project.name}
        </h3>

        <p className="mt-2 flex-1 text-sm leading-6 text-gray-600">
          {project.description}
        </p>

        {/* Project Link */}
        <div className="mt-5">
          {project.link && project.link !== "#" ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-md bg-primary px-4 py-2 text-white shadow-md transition hover:opacity-80"
            >
              View Project
            </a>
          ) : (
            <span className="inline-block rounded-md bg-gray-200 px-4 py-2 text-gray-500">
              Coming Soon
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string.isRequired,
    link: PropTypes.string,
  }).isRequired,
};

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalProjects = projects.length;

  if (totalProjects === 0) {
    return null;
  }

  // Display three projects on desktop, wrapping around at the end.
  const visibleProjects = Array.from(
    { length: Math.min(3, totalProjects) },
    (_, index) => projects[(currentIndex + index) % totalProjects]
  );

  const nextSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % totalProjects
    );
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + totalProjects) % totalProjects
    );
  };

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5 }}
      className="bg-white px-4 py-10 sm:px-6 md:py-16"
    >
      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <h2 className="mb-10 bg-gradient-to-r from-blue-800 to-purple-800 bg-clip-text text-center text-4xl font-extrabold text-transparent sm:text-5xl md:mb-12">
          Projects
        </h2>

        {/* Desktop Slider */}
        <div className="hidden items-stretch gap-4 md:flex">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous projects"
            className="my-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-md transition hover:scale-105"
          >
            <FiChevronLeft size={24} />
          </button>

          <div className="grid min-w-0 flex-1 grid-cols-3 items-stretch gap-5 lg:gap-6">
            <AnimatePresence initial={false} mode="popLayout">
              {visibleProjects.map((project, index) => (
                <motion.div
                  key={`${project.id}-${currentIndex}`}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{
                    duration: 0.2,
                    delay: index * 0.04,
                  }}
                  className="min-w-0"
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next projects"
            className="my-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-md transition hover:scale-105"
          >
            <FiChevronRight size={24} />
          </button>
        </div>

        {/* Mobile Slider */}
        <div className="mx-auto max-w-lg md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              <ProjectCard project={projects[currentIndex]} />
            </motion.div>
          </AnimatePresence>

          {/* Mobile Navigation */}
          <div className="mt-5 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous project"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-md transition hover:opacity-80"
            >
              <FiChevronLeft size={22} />
            </button>

            <span className="text-sm font-medium text-gray-500">
              {currentIndex + 1} / {totalProjects}
            </span>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next project"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-md transition hover:opacity-80"
            >
              <FiChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Desktop Pagination */}
        {totalProjects > 1 && (
          <div className="mt-8 hidden flex-wrap justify-center gap-2 md:flex">
            {projects.map((project, index) => (
              <button
                key={project.id}
                type="button"
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to project ${index + 1}`}
                aria-current={
                  currentIndex === index ? "true" : undefined
                }
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "w-7 bg-primary"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default Projects;