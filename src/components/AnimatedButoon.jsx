import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa"; // Import an icon from react-icons

const AnimatedButton = () => {
  return (
    <motion.a
      href="https://drive.google.com/file/d/10yQb5ZTfkP4mC7Ukehr7EmAos9SABD32/view?usp=sharing"
      target="_blank"
      className="relative px-8 py-3 bg-gradient-to-r from-pink-700 to-yellow-700 text-white font-bold rounded-full shadow-lg hover:shadow-2xl hover:from-yellow-500 hover:to-pink-500 transition-transform transform hover:scale-105 duration-300 flex items-center justify-center overflow-hidden cursor-pointer"
      whileHover="hover"
    >
      {/* Text */}
      <motion.span
        className="flex items-center"
        initial={{ opacity: 1, y: 0 }}
        variants={{
          hover: { opacity: 0, y: -20, transition: { duration: 0.2 } },
        }}
      >
        View Resume
      </motion.span>

      {/* Icon */}
      <motion.span
        className="absolute animate-bounce"
        initial={{ opacity: 0, y: 20 }}
        variants={{
          hover: { opacity: 1, y: 0, transition: { duration: 0.2, delay: 0.1 } },
        }}
      >
        <FaArrowRight size={20} />
      </motion.span>
    </motion.a>
  );
};

export default AnimatedButton;