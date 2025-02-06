import React from 'react';
import { motion } from 'framer-motion';
import AnimatedButton from './AnimatedButoon';



const AboutMe = () => {
  return (
    <div id='about' className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-purple-400 p-8">
        
            {/* About Me Heading */}
            <motion.h2
        initial={{ opacity: 0, y: -20, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-extrabold mb-12 text-center
                   text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-purple-800 
                   drop-shadow-lg animate-bounce"
      >
        About Me
      </motion.h2>
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
            src="/images/samsu.jpg" 
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
  className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-800 to-yellow-800 animate-gradient"
>
  I'm Samsuddin Ansari
</motion.h1>

{/* Subheading */}
<motion.h2
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.2 }}
  viewport={{ once: false }}
  className="text-3xl md:text-4xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-purple-800 animate-gradient"
>
  Full Stack Developer
</motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: false }}
        className="mb-4 text-black"
      >
        I am a Full-Stack developer based in Patna, Bihar, India. I am very passionate about improving my coding skills & developing applications & websites. I build Websites and WebApps using MERN Stack. Working At Freelancing. Love to build Full-Stack .
      </motion.p>

      {/* Phone */}
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: false }}
        className="mb-4 text-blue-800 font-semibold"
      >
        <span className='font-bold text-black'>Phone:</span> +91-7542067763
      </motion.p>
           {/* Email */}
           <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: false }}
        className="mb-4 text-blue-800 font-semibold"
      >
        <span className='font-bold text-black'>Email:</span> biosamsuddin@gmail.com
      </motion.p>

      {/* Place */}
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        viewport={{ once: false }}
        className="mb-4 text-blue-800 font-semibold"
      >
        <span className='font-bold text-black'>Place:</span> Patna, Bihar, India
      </motion.p>
     <AnimatedButton/>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;