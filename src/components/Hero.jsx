// // import { motion } from "framer-motion";
// // import { useEffect, useState } from "react";

// // const floatingShapes = Array.from({ length: 8 }, (_, i) => i);

// // const Hero = () => {
// //   const [headerText, setHeaderText] = useState("Welcome to My Portfolio");
// //   const [paragraphText, setParagraphText] = useState("I build amazing web experiences.");

// //   const headers = [
// //     "Welcome to My Portfolio",
// //     "Hi, I'm Samsuddin Ansari",
// //     "Turning Ideas into Reality",
// //     "Let's Build Something Great",
// //   ];

// //   const paragraphs = [
// //     "I build amazing web experiences.",
// //     "Specializing in React, Tailwind, and Framer Motion.",
// //     "Passionate about clean and modern designs.",
// //     "Let's create something extraordinary together.",
// //   ];

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       const randomHeader = headers[Math.floor(Math.random() * headers.length)];
// //       const randomParagraph = paragraphs[Math.floor(Math.random() * paragraphs.length)];
// //       setHeaderText(randomHeader);
// //       setParagraphText(randomParagraph);
// //     }, 3000);

// //     return () => clearInterval(interval);
// //   }, []);

// //   return (
// //     <motion.section
// //       initial={{ opacity: 0 }}
// //       animate={{ opacity: 1 }}
// //       transition={{ duration: 1 }}
// //       className="relative h-screen flex items-center justify-center bg-gradient-to-r from-purple-900 to-indigo-900 text-white overflow-hidden"
// //     >
// //       {/* Floating Shapes */}
// //       {floatingShapes.map((shape) => (
// //         <motion.div
// //           key={shape}
// //           className="absolute bg-white bg-opacity-20 rounded-full"
// //           style={{ width: `${20 + shape * 10}px`, height: `${20 + shape * 10}px`, top: `${shape * 10}%`, left: `${shape * 12}%` }}
// //           animate={{
// //             y: [0, -20, 0],
// //             rotate: [0, 360, 0],
// //           }}
// //           transition={{
// //             duration: 6 + shape,
// //             repeat: Infinity,
// //             ease: "easeInOut",
// //           }}
// //         />
// //       ))}

// //       <div className="text-center z-10">
// //         <motion.h1
// //           key={headerText}
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8 }}
// //           className="text-5xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-400"
// //         >
// //           {headerText}
// //         </motion.h1>

// //         <motion.p
// //           key={paragraphText}
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8, delay: 0.2 }}
// //           className="text-xl md:text-2xl text-gray-200"
// //         >
// //           {paragraphText}
// //         </motion.p>

// //         <motion.div
// //           initial={{ opacity: 0, scale: 0.8 }}
// //           animate={{ opacity: 1, scale: 1 }}
// //           transition={{ duration: 0.8, delay: 0.4 }}
// //           className="mt-8"
// //         >
// //           <a
// //             href="#about"
// //             className="px-8 py-3 bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold rounded-full shadow-lg hover:shadow-2xl hover:from-yellow-500 hover:to-pink-500 transition-transform transform hover:scale-105 duration-300"
// //           >
// //             Learn More
// //           </a>
// //         </motion.div>
// //       </div>
// //     </motion.section>
// //   );
// // };

// // export default Hero;


// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Stars } from "@react-three/drei";
// import { FaLinkedin, FaGithub, FaInstagram, FaDev,FaDownload  } from 'react-icons/fa';

// const Hero = () => {
//   const [headerText, setHeaderText] = useState("Welcome to My Portfolio");
//   const [paragraphText, setParagraphText] = useState("I build amazing web experiences.");

//   const headers = [
//     "Welcome to My Portfolio",
//     "Hi, I'm Samsuddin Ansari",
//     "Turning Ideas into Reality",
//     "Let's Build Something Great",
//   ];

//   const paragraphs = [
//     "I build amazing web experiences.",
//     "Specializing in React, Tailwind, and Framer Motion.",
//     "Passionate about clean and modern designs.",
//     "Let's create something extraordinary together.",
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const randomHeader = headers[Math.floor(Math.random() * headers.length)];
//       const randomParagraph = paragraphs[Math.floor(Math.random() * paragraphs.length)];
//       setHeaderText(randomHeader);
//       setParagraphText(randomParagraph);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <motion.section
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//       className="relative h-screen flex items-center justify-center bg-gradient-to-r from-purple-900 to-indigo-900 text-white overflow-hidden"
//     >
//       {/* 3D Background */}
//       <Canvas className="absolute inset-0 z-0">
//         <ambientLight intensity={0.5} />
//         <pointLight position={[10, 10, 10]} />
//         <Stars radius={100} depth={50} count={5000} factor={4} fade />
//         <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
//       </Canvas>

//       <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
//         <motion.h1
//           key={headerText}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-5xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-400"
//         >
//           {headerText}
//         </motion.h1>

//         <motion.p
//           key={paragraphText}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="text-xl md:text-2xl text-gray-200"
//         >
//           {paragraphText}
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           className="mt-8"
//         >
//           <motion.a
//             href="#about"
//             className="relative px-8 py-3 bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold rounded-full shadow-lg hover:shadow-2xl hover:from-yellow-500 hover:to-pink-500 transition-transform transform hover:scale-105 duration-300 flex items-center justify-center overflow-hidden"
//             whileHover="hover"
//           >
//             {/* About Me Text */}
//             <motion.span
//               className="flex items-center"
//               initial={{ opacity: 1, y: 0 }}
//               variants={{
//                 hover: { opacity: 0, y: -20, transition: { duration: 0.2 } },
//               }}
//             >
//               About Me
//             </motion.span>

//             {/* Download Icon */}
//             <motion.span
//               className="absolute"
//               initial={{ opacity: 0, y: 20 }}
//               variants={{
//                 hover: { opacity: 1, y: 0, transition: { duration: 0.2, delay: 0.1 } },
//               }}
//             >
//               <FaDownload size={20} />
//             </motion.span>
//           </motion.a>

//           {/* Social Icons */}
//           <div className="flex justify-center lg:justify-start gap-4 mt-6 text-2xl text-gray-800">
//             <FaLinkedin className="cursor-pointer hover:text-blue-600" />
//             <FaGithub className="cursor-pointer hover:text-gray-900" />
//             <FaInstagram className="cursor-pointer hover:text-pink-500" />
//             <FaDev className="cursor-pointer hover:text-black" />
//           </div>
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// };

// export default Hero;

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { FaLinkedin, FaGithub, FaInstagram, FaDev, FaDownload } from 'react-icons/fa';

const Hero = () => {
  const [headerText, setHeaderText] = useState("Welcome to My Portfolio");
  const [paragraphText, setParagraphText] = useState("I build amazing web experiences.");

  const headers = [
    "Welcome to My Portfolio",
    "Hi, I'm Samsuddin Ansari",
    "Turning Ideas into Reality",
    "Let's Build Something Great",
  ];

  const paragraphs = [
    "I build amazing web experiences.",
    "Specializing in React, Tailwind, and Framer Motion.",
    "Passionate about clean and modern designs.",
    "Let's create something extraordinary together.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomHeader = headers[Math.floor(Math.random() * headers.length)];
      const randomParagraph = paragraphs[Math.floor(Math.random() * paragraphs.length)];
      setHeaderText(randomHeader);
      setParagraphText(randomParagraph);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative h-screen flex items-center justify-center bg-gradient-to-r from-purple-900 to-indigo-900 text-white overflow-hidden"
    >
      {/* 3D Background */}
      <Canvas className="absolute inset-0 z-0">
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Stars radius={100} depth={50} count={5000} factor={4} fade />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
        <motion.h1
          key={headerText}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold py-4 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-400 "
        >
          {headerText}
        </motion.h1>

        <motion.p
          key={paragraphText}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-200"
        >
          {paragraphText}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8"
        >
          <motion.a
            // href="https://drive.google.com/file/d/1jtJhlnr6j8W7dfPrULwLJhpg6B8IaJwv/view?usp=sharing"
            href="https://drive.google.com/file/d/1uC1QPBLYcTbwchp8aehvsq0lBCbc226x/view?usp=sharing"
            target='_blank'
            className="relative px-8 py-3 bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold rounded-full shadow-lg hover:shadow-2xl hover:from-yellow-500 hover:to-pink-500 transition-transform transform hover:scale-105 duration-300 flex items-center justify-center overflow-hidden"
            whileHover="hover"
          >
            {/* About Me Text */}
            <motion.span
              className="flex items-center"
              initial={{ opacity: 1, y: 0 }}
              variants={{
                hover: { opacity: 0, y: -20, transition: { duration: 0.2 } },
              }}
            >
              About Me
            </motion.span>

            {/* Download Icon */}
            <motion.span
              className="absolute animate-bounce"
              initial={{ opacity: 0, y: 20 }}
              variants={{
                hover: { opacity: 1, y: 0, transition: { duration: 0.2, delay: 0.1 } },
              }}
            >
              <FaDownload size={20} />
            </motion.span>
          </motion.a>

          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start gap-6 mt-8">
            <motion.a
              href="https://www.linkedin.com/in/samsuddin-ansari-232904143/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-gray-200 hover:text-blue-600 transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://github.com/Ninjajuk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-gray-200 hover:text-gray-900 transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/samsu_same?igsh=djZmMGlzMmJzZ2N1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-gray-200 hover:text-pink-500 transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaInstagram />
            </motion.a>
            <motion.a
              href="https://dev.to"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-gray-200 hover:text-black transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaDev />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;