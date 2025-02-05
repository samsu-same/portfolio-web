import React from 'react';
import { motion } from 'framer-motion';
import AnimatedButton from './AnimatedButoon';



const AboutMe = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-8">
        
      <div className="container mx-auto flex flex-col  lg:flex-row items-center justify-between ">
        {/* Left Div - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }} // Ensures animation only happens once
          className="w-full md:w-1/2 mb-2 md:mb-0 p-4"
        >
          <img
            src="/images/samsu.jpg" // Replace with your image URL
            alt="Samsuddin Ansari"
            className=" rounded-lg shadow-2xl"
          />
        </motion.div>

        {/* Right Div - Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }} // Ensures animation only happens once
          className="w-full md:w-1/2 text-white px-4"
        >
 <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
        className="text-4xl font-bold mb-4"
      >
        I'm Samsuddin Ansari
      </motion.h1>

      {/* Subheading */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: false }}
        className="text-2xl font-semibold mb-4"
      >
        Full Stack Developer
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: false }}
        className="mb-4"
      >
        I am a Full-Stack developer based in Patna, Bihar, India. I am very passionate about improving my coding skills & developing applications & websites. I build Websites and WebApps using MERN Stack. Working At Freelancing. Love to build Full-Stack .
      </motion.p>

      {/* Email */}
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: false }}
        className="mb-4"
      >
        Email: biosamsuddin@gmail.com
      </motion.p>

      {/* Place */}
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        viewport={{ once: false }}
        className="mb-4"
      >
        Place: Patna, Bihar, India
      </motion.p>
     <AnimatedButton/>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;