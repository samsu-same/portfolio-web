import { motion } from "framer-motion";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const projects = [
  { 
    id: 1, 
    name: "Portfolio Website", 
    description: "An innovative project to showcase my projects, skills education", 
    link: "https://portfolio-web-orpin-two.vercel.app/", 
    image: "/images/portfolio.png" },
  { 
    id: 2, 
    name: "Teghiya Travels", 
    description: "Bus Ticket Booking Application.Developing a user-friendly bus booking platform with features like dynamic bus listing, filtering, seat selection, cart, and checkout system.", 
    link: "https://www.teghiyatravels.in/", 
    image: "/images/teghiyatravels.png" 
  },
  { id: 3, name: "Yingkiong Store", 
    description: "A E-commerce website for fruits, vegetables deliverey.Developed Features: product listing, cart, checkout, search, user authentication, order emails.Implemented lazy loading.", 
    link: "#", 
    image: "/images/yingkiongstore.png" },
  { 
    id: 4, 
    name: "AK Construction ", 
    description: " comprehensive and user-friendly website for a construction company, focusing on showcasing their services, portfolio, and client testimonials", 
    link: "https://akconstruction.tech/", 
    image: "/images/akconstruction.png" 
  },
  { 
    id: 5, 
    name: "Next IAS Education", 
    description: "An innovative project for edutech field.", 
    link: "https://ias-app-six.vercel.app/", 
    image: "/images/nextias.png" 
  },
  { 
    id: 6, 
    name: "Dashboard", 
    description: "An innovative project built on Next js.", 
    link: "#", 
    image: "/images/dashboard.png" 
  },
  { 
    id: 7, 
    name: "Hotel Clermont", 
    description: "An innovative hotel booking project built on Next js.", 
    link: "https://www.hotelclermont.com/", 
    image: "/images/hotelclermont.png" 
  },
  { 
    id: 8, 
    name: "Gausiya Tyre Works", 
    description: "All your tyre soltion at one place", 
    link: "https://gausiya-tyres.vercel.app/", 
    image: "/images/gausiya-tyre.png" 
  },
  { 
    id: 9, 
    name: "Sacred Heart School", 
    description: "An intuitive and modern website for Sacred Heart School, designed to enhance the learning experience with seamless navigation and engaging features.", 
    link: "https://sacred-heart-school.vercel.app/", 
    image: "/images/shs.png" 
  },
  { 
    id: 10, 
    name: "InstaNinja", 
    description: "You can download instagram videos, reels at this place", 
    link: "https://insta-reels-downloader-nu.vercel.app/", 
    image: "/images/instareels.png" 
  },
  { 
    id: 11, 
    name: "Expense Tracker", 
    description: "Helps ypu track your financial goal.", 
    link: "https://expense-tracker-pi-gilt.vercel.app/dashboard", 
    image: "/images/expensetracker.png" 
  },
];

const ProjectCard = ({ project }) => (
  <motion.div
    whileHover={{ scale: 1.05, rotateY: 5 }}
    className="p-4 bg-white rounded-2xl shadow-2xl border border-gray-200 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 w-full h-92  cursor-pointer flex flex-col "
    style={{ perspective: "1000px", boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)" }}
  >
    {/* Image */}
    <img
      src={project.image}
      alt={project.name}
      className="w-full h-36 object-cover rounded-md"
    />

    {/* Text Content */}
    <div className="flex flex-col  p-4">
      <h3 className="text-xl font-bold text-gray-800">{project.name}</h3>
      <p className="text-gray-600 mt-1 text-sm">{project.description}</p>
    </div>

    <div className="flex justify-center  mt-auto">
        <a
          target="_blank"
          href={project.link}
          className=" inline-block px-4 py-2 bg-gray-200 text-primary hover:text-hoverPrimary transition-all rounded-md shadow-lg"
        >
          View Project
        </a>
      </div>


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
      className="p-4 bg-white"
    >
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-12 text-center
                   text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-purple-800 
                   drop-shadow-lg animate-bounce">Projects</h2>
        <div className="hidden md:flex items-center justify-between relative">
          <button onClick={prevSlide} className="absolute left-0 p-2 bg-primary rounded-full cursor-pointer">
            <FiChevronLeft size={24} className="text-white" />
          </button>
          <div className="grid grid-cols-3 gap-6 w-full px-8 ">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          {/* <FiChevronLeft size={24} className="text-white" /> */}
          <button onClick={nextSlide} className="absolute right-0 p-2 bg-primary rounded-full cursor-pointer"><FiChevronRight size={24} className="text-white" /></button>
        </div>
        <div className="md:hidden relative flex items-center justify-center w-full">
          <div className="w-full ">
            <ProjectCard project={projects[currentIndex]} />
          </div>
          <button onClick={prevSlide} className="absolute top-1/2 left-2 transform -translate-y-1/2 p-2 bg-primary rounded-full cursor-pointer"><FiChevronLeft size={24} className="text-white" /></button>
          <button onClick={nextSlide} className="absolute right-0 p-2 bg-primary rounded-full cursor-pointer"><FiChevronRight size={24} className="text-white" /></button>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
