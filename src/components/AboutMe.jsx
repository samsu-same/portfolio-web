// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import AnimatedButton from './AnimatedButoon';



// const AboutMe = () => {
//   const [headerText, setHeaderText] = useState("Full Stack Developer");
//   const jobProfile = [
//     "Full Stack Developer",
//     "MERN STack",
//     "Frontend Developer",
//     "Backend Developer",
//     "Civil Engineer"
//   ];
//     useEffect(() => {
//       const interval = setInterval(() => {
//         const randomHeader = jobProfile[Math.floor(Math.random() * jobProfile.length)];
//         setHeaderText(randomHeader);
//       }, 1000);
  
//       return () => clearInterval(interval);
//     }, []);

//   return (
//     <div id='about' className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-purple-400 p-4">

//       {/* About Me Heading */}
//       <motion.h2
//         initial={{ opacity: 0, y: -20, scale: 0.9 }}
//         whileInView={{ opacity: 1, y: 0, scale: 1 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         viewport={{ once: true }}
//         className="text-5xl md:text-6xl font-extrabold mb-12 text-center
//                    text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-purple-800 
//                    drop-shadow-lg animate-bounce"
//       >
//         About Me
//       </motion.h2>
//       <div className="container mx-auto flex flex-col  lg:flex-row items-center justify-between ">
//         {/* Left Div - Image */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }} // Ensures animation only happens once
//           className="w-full md:w-1/2 mb-2 md:mb-0 p-4"
//         >
//           <img
//             src="/images/samsu.jpg"
//             alt="Samsuddin Ansari"
//             className=" rounded-lg shadow-2xl"
//           />
//         </motion.div>

//         {/* Right Div - Text */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }} // Ensures animation only happens once
//           className="w-full md:w-1/2 text-white px-4"
//         >
//           <motion.h1
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: false }}
//             className="text-xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-800 to-yellow-800 animate-gradient"
//           >
//             I'm <span className='text-2xl md:text-6xl'>Samsuddin Ansari</span>
//           </motion.h1>

//           {/* Subheading */}
//           <motion.h2
//           key={headerText}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             viewport={{ once: false }}
//             className="text-2xl md:text-4xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-purple-800 animate-gradient"
//           >
//             {headerText}
//           </motion.h2>

//           {/* Description */}
//           <motion.p
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             viewport={{ once: false }}
//             className="mb-4 text-black"
//           >
//             I am a Full-Stack developer based in Patna, Bihar, India. I am very passionate about improving my coding skills & developing applications & websites. I build Websites and WebApps using MERN Stack. Working At Freelancing. Love to build Full-Stack .
//           </motion.p>

//           {/* Phone */}
//           <motion.p
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.6 }}
//             viewport={{ once: false }}
//             className="mb-4 text-blue-800 font-semibold"
//           >
//             <span className='font-bold text-black'>Phone:</span> +91-7542067763
//           </motion.p>
//           {/* Email */}
//           <motion.p
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.6 }}
//             viewport={{ once: false }}
//             className="mb-4 text-blue-800 font-semibold"
//           >
//             <span className='font-bold text-black'>Email:</span> biosamsuddin@gmail.com
//           </motion.p>

//           {/* Place */}
//           <motion.p
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.8 }}
//             viewport={{ once: false }}
//             className="mb-4 text-blue-800 font-semibold"
//           >
//             <span className='font-bold text-black'>Place:</span> Patna, Bihar, India
//           </motion.p>
//           <AnimatedButton />
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default AboutMe;

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedButton from './AnimatedButoon';


const AboutMe = () => {
  const jobProfiles = [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Civil Engineer"
  ];

  const [headerText, setHeaderText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const currentWord = jobProfiles[currentIndex];
    const typingSpeed = isDeleting ? 50 : 100; // Faster when deleting

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentWord.length) {
        // Typing effect
        setHeaderText((prev) => prev + currentWord[charIndex]);
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        // Deleting effect
        setHeaderText((prev) => prev.slice(0, -1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentWord.length) {
        // Pause before starting to delete
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        // Move to the next word after deleting
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % jobProfiles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentIndex]);

  return (
    <div id='about' className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-purple-400 p-4">
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

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Div - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 mb-2 md:mb-0 p-4"
        >
          <img
            src="/images/samsu.jpg"
            alt="Samsuddin Ansari"
            className="rounded-lg shadow-2xl"
          />
        </motion.div>

        {/* Right Div - Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 text-white px-4"
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
            className="text-xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-800 to-yellow-800 animate-gradient"
          >
            I'm <span className='text-2xl md:text-6xl'>Samsuddin Ansari</span>
          </motion.h1>

          {/* Typing Effect Subheading */}
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false }}
            className="text-2xl md:text-4xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-purple-800 animate-gradient"
          >
            {headerText}
            <span className="animate-blink">|</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: false }}
            className="mb-4 text-black"
          >
            I am a Full-Stack developer based in Patna, Bihar, India. I am very passionate about improving my coding skills & developing applications & websites. I build Websites and WebApps using the MERN Stack. I work as a freelancer and love to build full-stack applications.
          </motion.p>

          {/* Contact Info */}
          <motion.p className="mb-4 text-blue-800 font-semibold">
            <span className='font-bold text-black'>Phone:</span> +91-7542067763
          </motion.p>
          <motion.p className="mb-4 text-blue-800 font-semibold">
            <span className='font-bold text-black'>Email:</span> biosamsuddin@gmail.com
          </motion.p>
          <motion.p className="mb-4 text-blue-800 font-semibold">
            <span className='font-bold text-black'>Place:</span> Patna, Bihar, India
          </motion.p>

          <AnimatedButton />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
