import { motion } from "framer-motion";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white shadow-2xl fixed w-full z-50 rounded-b-2xl"
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">
          Samsuddin Ansari
        </h1>

        <nav>
          <ul className={`md:flex space-x-6 ${isMenuOpen ? 'block' : 'hidden'} md:block bg-purple-800 md:bg-transparent absolute md:static top-16 left-0 w-full md:w-auto text-center md:text-left rounded-md md:rounded-none shadow-lg md:shadow-none transition-all duration-500 ease-in-out`}> 
            <li>
              <a href="#about" className="block py-2 md:py-0 px-4 relative group overflow-hidden transition duration-300 rounded-md hover:rounded-xl">
                <span className="absolute inset-0 bg-yellow-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out rounded-md group-hover:rounded-xl"></span>
                <span className="relative z-10 text-white group-hover:text-purple-900 transition duration-300">About</span>
              </a>
            </li>
            <li>
              <a href="#projects" className="block py-2 md:py-0 px-4 relative group overflow-hidden transition duration-300 rounded-md hover:rounded-xl">
                <span className="absolute inset-0 bg-yellow-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out rounded-md group-hover:rounded-xl"></span>
                <span className="relative z-10 text-white group-hover:text-purple-900 transition duration-300">Projects</span>
              </a>
            </li>
            <li>
              <a href="#skills" className="block py-2 md:py-0 px-4 relative group overflow-hidden transition duration-300 rounded-md hover:rounded-xl">
                <span className="absolute inset-0 bg-yellow-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out rounded-md group-hover:rounded-xl"></span>
                <span className="relative z-10 text-white group-hover:text-purple-900 transition duration-300">Skills</span>
              </a>
            </li>
            <li>
              <a href="#contact" className="block py-2 md:py-0 px-4 relative group overflow-hidden transition duration-300 rounded-md hover:rounded-xl">
                <span className="absolute inset-0 bg-yellow-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out rounded-md group-hover:rounded-xl"></span>
                <span className="relative z-10 text-white group-hover:text-purple-900 transition duration-300">Contact</span>
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
