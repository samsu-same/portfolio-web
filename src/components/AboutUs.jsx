import { motion } from "framer-motion";
import { FaReact, FaCss3Alt, FaJsSquare } from "react-icons/fa"; // Importing icons

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="about"
      className="p-8 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-6 text-shadow-md">About Me</h2>
        <p className="text-lg mb-6">
          I am a passionate web developer with expertise in{" "}
          <span className="font-bold text-yellow-300">React</span>,{" "}
          <span className="font-bold text-teal-300">Tailwind CSS</span>, and{" "}
          <span className="font-bold text-blue-300">Framer Motion</span>. I love building interactive and responsive websites with great user experiences.
        </p>
        <div className="flex justify-center space-x-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl"
          >
            <FaReact />
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl"
          >
            <FaCss3Alt />
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-4xl"
          >
            <FaJsSquare />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
