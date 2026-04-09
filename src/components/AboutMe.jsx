// // import React, { useEffect, useState } from 'react';
// // import { motion } from 'framer-motion';
// // import AnimatedButton from './AnimatedButoon';



// // const AboutMe = () => {
// //   const [headerText, setHeaderText] = useState("Full Stack Developer");
// //   const jobProfile = [
// //     "Full Stack Developer",
// //     "MERN STack",
// //     "Frontend Developer",
// //     "Backend Developer",
// //     "Civil Engineer"
// //   ];
// //     useEffect(() => {
// //       const interval = setInterval(() => {
// //         const randomHeader = jobProfile[Math.floor(Math.random() * jobProfile.length)];
// //         setHeaderText(randomHeader);
// //       }, 1000);
  
// //       return () => clearInterval(interval);
// //     }, []);

// //   return (
// //     <div id='about' className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-purple-400 p-4">

// //       {/* About Me Heading */}
// //       <motion.h2
// //         initial={{ opacity: 0, y: -20, scale: 0.9 }}
// //         whileInView={{ opacity: 1, y: 0, scale: 1 }}
// //         transition={{ duration: 0.8, ease: "easeOut" }}
// //         viewport={{ once: true }}
// //         className="text-5xl md:text-6xl font-extrabold mb-12 text-center
// //                    text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-purple-800 
// //                    drop-shadow-lg animate-bounce"
// //       >
// //         About Me
// //       </motion.h2>
// //       <div className="container mx-auto flex flex-col  lg:flex-row items-center justify-between ">
// //         {/* Left Div - Image */}
// //         <motion.div
// //           initial={{ opacity: 0, x: -50 }}
// //           whileInView={{ opacity: 1, x: 0 }}
// //           transition={{ duration: 0.8 }}
// //           viewport={{ once: true }} // Ensures animation only happens once
// //           className="w-full md:w-1/2 mb-2 md:mb-0 p-4"
// //         >
// //           <img
// //             src="/images/samsu.jpg"
// //             alt="Samsuddin Ansari"
// //             className=" rounded-lg shadow-2xl"
// //           />
// //         </motion.div>

// //         {/* Right Div - Text */}
// //         <motion.div
// //           initial={{ opacity: 0, x: 50 }}
// //           whileInView={{ opacity: 1, x: 0 }}
// //           transition={{ duration: 0.8 }}
// //           viewport={{ once: true }} // Ensures animation only happens once
// //           className="w-full md:w-1/2 text-white px-4"
// //         >
// //           <motion.h1
// //             initial={{ opacity: 0, y: 50 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.5 }}
// //             viewport={{ once: false }}
// //             className="text-xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-800 to-yellow-800 animate-gradient"
// //           >
// //             I'm <span className='text-2xl md:text-6xl'>Samsuddin Ansari</span>
// //           </motion.h1>

// //           {/* Subheading */}
// //           <motion.h2
// //           key={headerText}
// //             initial={{ opacity: 0, y: 50 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.5, delay: 0.2 }}
// //             viewport={{ once: false }}
// //             className="text-2xl md:text-4xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-purple-800 animate-gradient"
// //           >
// //             {headerText}
// //           </motion.h2>

// //           {/* Description */}
// //           <motion.p
// //             initial={{ opacity: 0, y: 50 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.5, delay: 0.4 }}
// //             viewport={{ once: false }}
// //             className="mb-4 text-black"
// //           >
// //             I am a Full-Stack developer based in Patna, Bihar, India. I am very passionate about improving my coding skills & developing applications & websites. I build Websites and WebApps using MERN Stack. Working At Freelancing. Love to build Full-Stack .
// //           </motion.p>

// //           {/* Phone */}
// //           <motion.p
// //             initial={{ opacity: 0, y: 50 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.5, delay: 0.6 }}
// //             viewport={{ once: false }}
// //             className="mb-4 text-blue-800 font-semibold"
// //           >
// //             <span className='font-bold text-black'>Phone:</span> +91-7542067763
// //           </motion.p>
// //           {/* Email */}
// //           <motion.p
// //             initial={{ opacity: 0, y: 50 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.5, delay: 0.6 }}
// //             viewport={{ once: false }}
// //             className="mb-4 text-blue-800 font-semibold"
// //           >
// //             <span className='font-bold text-black'>Email:</span> biosamsuddin@gmail.com
// //           </motion.p>

// //           {/* Place */}
// //           <motion.p
// //             initial={{ opacity: 0, y: 50 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.5, delay: 0.8 }}
// //             viewport={{ once: false }}
// //             className="mb-4 text-blue-800 font-semibold"
// //           >
// //             <span className='font-bold text-black'>Place:</span> Patna, Bihar, India
// //           </motion.p>
// //           <AnimatedButton />
// //         </motion.div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AboutMe;

// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import AnimatedButton from './AnimatedButoon';


// const AboutMe = () => {
//   const jobProfiles = [
//     "Full Stack Developer",
//     "MERN Stack Developer",
//     "Frontend Developer",
//     "Backend Developer",
//     "Civil Engineer"
//   ];

//   const [headerText, setHeaderText] = useState("");
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [charIndex, setCharIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);
  
//   useEffect(() => {
//     const currentWord = jobProfiles[currentIndex];
//     const typingSpeed = isDeleting ? 50 : 100; // Faster when deleting

//     const timeout = setTimeout(() => {
//       if (!isDeleting && charIndex < currentWord.length) {
//         // Typing effect
//         setHeaderText((prev) => prev + currentWord[charIndex]);
//         setCharIndex(charIndex + 1);
//       } else if (isDeleting && charIndex > 0) {
//         // Deleting effect
//         setHeaderText((prev) => prev.slice(0, -1));
//         setCharIndex(charIndex - 1);
//       } else if (!isDeleting && charIndex === currentWord.length) {
//         // Pause before starting to delete
//         setTimeout(() => setIsDeleting(true), 1000);
//       } else if (isDeleting && charIndex === 0) {
//         // Move to the next word after deleting
//         setIsDeleting(false);
//         setCurrentIndex((prev) => (prev + 1) % jobProfiles.length);
//       }
//     }, typingSpeed);

//     return () => clearTimeout(timeout);
//   }, [charIndex, isDeleting, currentIndex]);

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

//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
//         {/* Left Div - Image */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 ,delay: 0.5}}
//           // viewport={{ once: true }}
//           className="w-full md:w-1/2 mb-2 md:mb-0 p-4"
//         >
//           <img
//             src="/images/samsu.png"
//             alt="Samsuddin Ansari"
//             className="rounded-lg shadow-2xl"
//           />
//         </motion.div>

//         {/* Right Div - Text */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
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

//           {/* Typing Effect Subheading */}
//           <motion.h2
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             viewport={{ once: false }}
//             className="text-2xl md:text-4xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-purple-800 animate-gradient"
//           >
//             {headerText}
//             <span className="animate-blink">|</span>
//           </motion.h2>

//           {/* Description */}
//           <motion.p
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             viewport={{ once: false }}
//             className="mb-4 text-black"
//           >
//             I am a Full-Stack developer based in Patna, Bihar, India. I am very passionate about improving my coding skills & developing applications & websites. I build Websites and WebApps using the MERN Stack. I work as a freelancer and love to build full-stack applications.
//           </motion.p>

//           {/* Contact Info */}
//           <motion.p className="mb-4 text-blue-800 font-semibold">
//             <span className='font-bold text-black'>Phone:</span> +91-7542067763
//           </motion.p>
//           <motion.p className="mb-4 text-blue-800 font-semibold">
//             <span className='font-bold text-black'>Email:</span> biosamsuddin@gmail.com
//           </motion.p>
//           <motion.p className="mb-4 text-blue-800 font-semibold">
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
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCode, FaServer, FaPaintBrush, FaWrench, FaBuilding } from 'react-icons/fa';
import AnimatedButton from './AnimatedButoon';


const AboutMe = () => {
  const jobProfiles = [
    { text: "Full Stack Developer", icon: <FaCode />, color: "from-blue-500 to-cyan-500" },
    { text: "MERN Stack Developer", icon: <FaCode />, color: "from-purple-500 to-pink-500" },
    { text: "Frontend Developer", icon: <FaPaintBrush />, color: "from-green-500 to-emerald-500" },
    { text: "Backend Developer", icon: <FaServer />, color: "from-orange-500 to-red-500" },
    { text: "Civil Engineer", icon: <FaBuilding />, color: "from-amber-500 to-yellow-500" }
  ];

  const [headerText, setHeaderText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeProfile, setActiveProfile] = useState(jobProfiles[0]);

  useEffect(() => {
    const currentWord = jobProfiles[currentIndex].text;
    const typingSpeed = isDeleting ? 30 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentWord.length) {
        setHeaderText((prev) => prev + currentWord[charIndex]);
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setHeaderText((prev) => prev.slice(0, -1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        const nextIndex = (currentIndex + 1) % jobProfiles.length;
        setCurrentIndex(nextIndex);
        setActiveProfile(jobProfiles[nextIndex]);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentIndex]);

  return (
    <div id='about' className="min-h-screen relative flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 z-0"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 md:w-2 md:h-2 bg-blue-400 dark:bg-blue-500 rounded-full opacity-30"
            initial={{ y: 0, x: 0 }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.sin(i) * 20, 0]
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              left: `${(i * 10) % 100}%`,
              top: `${(i * 15) % 100}%`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* About Me Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
              About Me
            </span>
          </h2>
          <div className="w-32 h-1 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Div - Image with Card Effect */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: -20 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, type: "spring" }}
            viewport={{ once: true }}
            className="w-full lg:w-5/12"
          >
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
              
              {/* Image container */}
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-100 dark:to-gray-900 opacity-50"></div>
                <img
                  src="/images/samsu.png"
                  alt="Samsuddin Ansari"
                  className="w-full h-auto object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Image overlay badge */}
                <div className="absolute bottom-6 left-6">
                  <div className="flex items-center gap-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                    <FaWrench className="text-blue-600 dark:text-blue-400" />
                    <span className="font-semibold text-gray-800 dark:text-white">Developer</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Div - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full lg:w-7/12"
          >
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 dark:border-gray-700/30">
              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6"
              >
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                  Samsuddin
                </span>
              </motion.h1>

              {/* Animated Role */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mb-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${activeProfile.color} text-white transform rotate-12`}>
                    <motion.div
                      key={currentIndex}
                      initial={{ scale: 0, rotate: -45 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring" }}
                    >
                      {activeProfile.icon}
                    </motion.div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
                    {headerText}
                    <span className="ml-1 animate-pulse">|</span>
                  </h2>
                </div>
                
                {/* Role indicators */}
                <div className="flex gap-2 ">
                  {jobProfiles.map((profile, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setCurrentIndex(index);
                        setCharIndex(0);
                        setIsDeleting(true);
                        setActiveProfile(profile);
                      }}
                      className={`p-2 rounded-lg transition-all duration-300 ${
                        currentIndex === index 
                          ? `bg-gradient-to-r ${profile.color} text-white shadow-lg` 
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                      }`}
                    >
                      {profile.icon}
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-gray-700 dark:text-gray-300 text-md  leading-relaxed bg-gradient-to-r from-gray-100 to-transparent dark:from-gray-800/50 dark:to-transparent p-6 rounded-xl"
              >
                I'm a passionate Full-Stack Developer based in Bengaluru, India. With expertise in the MERN stack, I craft beautiful, functional web applications that deliver exceptional user experiences. I thrive on turning complex problems into elegant solutions and continuously expanding my skills in modern web technologies.
              </motion.p>

              {/* Contact Info Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4"
              >
                {[
                  { icon: <FaPhone />, label: "Phone", value: "+91-7542067763", color: "from-blue-500 to-cyan-500" },
                  { icon: <FaEnvelope />, label: "Email", value: "biosamsuddin@gmail.com", color: "from-purple-500 to-pink-500" },
                  { icon: <FaMapMarkerAlt />, label: "Location", value: "Delhi, India", color: "from-green-500 to-emerald-500" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className={`bg-gradient-to-br ${item.color} rounded-xl p-4 text-white shadow-lg`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                        {item.icon}
                      </div>
                      <span className="font-semibold">{item.label}</span>
                    </div>
                    <p className="font-bold text-sm">{item.value}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Skills Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mb-10"
              >
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Technologies I Work With</h3>
                <div className="flex flex-wrap gap-3">
                  {["React", "Node.js", "MongoDB", "Express", "JavaScript", "TypeScript", "Tailwind CSS", "Next.js"].map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 
                               text-gray-800 dark:text-gray-200 rounded-full text-sm font-semibold 
                               shadow-md hover:shadow-lg transition-shadow"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex justify-center"
              >
                <AnimatedButton />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
    </div>
  );
};

export default AboutMe;