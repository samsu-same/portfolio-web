import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Float, Text3D, Center } from "@react-three/drei";
import {RESUME_URL} from '../../constant';
import * as THREE from "three";
import { 
  FaLinkedin, 
  FaGithub, 
  FaInstagram, 
  FaDownload,
  FaArrowRight,
  FaStar,
  FaCode,
  FaRocket,
  FaMouse,
  FaChevronDown,
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws
} from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiMongodb } from 'react-icons/si';
import { IoSparkles } from "react-icons/io5";

// 3D Floating Icons Component
function FloatingIcons() {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.7) * 0.5;
    }
  });

  return (
    <Float speed={3} rotationIntensity={1} floatIntensity={2}>
      <mesh 
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.2 : 1}
      >
        <torusKnotGeometry args={[1, 0.3, 128, 16]} />
        <meshPhysicalMaterial
          color="#8B5CF6"
          metalness={0.8}
          roughness={0.2}
          clearcoat={1}
          clearcoatRoughness={0}
          envMapIntensity={1}
        />
      </mesh>
    </Float>
  );
}

// 3D Tech Logos
function TechLogos() {
  const logos = [
    { Icon: FaReact, color: "#61DAFB", position: [-4, 2, 0] },
    { Icon: SiNextdotjs, color: "#FFFFFF", position: [4, 2, 0] },
    { Icon: FaNodeJs, color: "#68A063", position: [-4, -2, 0] },
    { Icon: SiTypescript, color: "#3178C6", position: [4, -2, 0] },
  ];

  return (
    <>
      {logos.map((logo, index) => (
        <Float key={index} speed={index * 0.5 + 1} rotationIntensity={0.5} floatIntensity={1}>
          <Text3D
            font="/fonts/helvetiker_regular.typeface.json"
            size={0.8}
            height={0.2}
            position={logo.position}
          >
            {logo.Icon.name.replace('Fa', '').replace('Si', '')}
            <meshNormalMaterial color={logo.color} />
          </Text3D>
        </Float>
      ))}
    </>
  );
}

const Hero3d = () => {
  const [currentHeader, setCurrentHeader] = useState(0);
  const [currentParagraph, setCurrentParagraph] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollIndicator, setScrollIndicator] = useState(true);
  const containerRef = useRef(null);

  const headers = [
    "Welcome to My Portfolio",
    "Hi, I'm Samsuddin Ansari",
    "Turning Ideas into Reality",
    "Let's Build Something Great",
    "Full Stack Developer",
    "Innovation Meets Execution",
  ];

  const paragraphs = [
    "I build amazing web experiences with cutting-edge technologies.",
    "Specializing in React, Next.js, and modern web development.",
    "Passionate about clean, performant, and accessible designs.",
    "Let's create something extraordinary together.",
    "Transforming concepts into functional, beautiful applications.",
    "Where creativity meets technical excellence.",
  ];

  const techStack = [
    { Icon: FaReact, name: "React", color: "text-cyan-400" },
    { Icon: SiNextdotjs, name: "Next.js", color: "text-white" },
    { Icon: SiTailwindcss, name: "Tailwind", color: "text-teal-400" },
    { Icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
    { Icon: SiTypescript, name: "TypeScript", color: "text-blue-500" },
    { Icon: SiMongodb, name: "MongoDB", color: "text-green-400" },
    { Icon: FaPython, name: "Python", color: "text-yellow-500" },
    { Icon: FaAws, name: "AWS", color: "text-orange-500" },
  ];

  useEffect(() => {
    const headerInterval = setInterval(() => {
      setCurrentHeader((prev) => (prev + 1) % headers.length);
    }, 3000);

    const paragraphInterval = setInterval(() => {
      setCurrentParagraph((prev) => (prev + 1) % paragraphs.length);
    }, 3500);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrollIndicator(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(headerInterval);
      clearInterval(paragraphInterval);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.section
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-transparent"></div>
        
        {/* Moving gradient orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl"
        />
      </div>

      {/* 3D Background */}
      <Canvas className="absolute inset-0 z-0">
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#8B5CF6" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#EC4899" />
        <Stars radius={300} depth={60} count={8000} factor={4} fade speed={2} />
        <FloatingIcons />
        <TechLogos />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.3}
          rotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>

      {/* Mouse following effect */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-purple-600/10 to-pink-600/10 blur-3xl pointer-events-none"
        animate={{
          x: mousePosition.x * 50,
          y: mousePosition.y * 50,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      />

      <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10 mb-6"
            >
              <IoSparkles className="text-yellow-400" />
              <span className="text-sm font-semibold text-white/80">Full Stack Developer</span>
            </motion.div>

            {/* Animated Header */}
            <div className="relative h-24 mb-4 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentHeader}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5 }}
                  className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight"
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                    {headers[currentHeader]}
                  </span>
                </motion.h1>
              </AnimatePresence>
            </div>

            {/* Animated Paragraph */}
            <div className="relative h-16 mb-8 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentParagraph}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-md md:text-lg text-gray-300 max-w-2xl"
                >
                  {paragraphs[currentParagraph]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start"
            >
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg backdrop-blur-sm bg-white/5 border border-white/10 ${tech.color}`}
                >
                  <tech.Icon className="text-lg" />
                  <span className="text-sm font-medium">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start"
            >
              <motion.a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-xl shadow-2xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center justify-center gap-3">
                  <FaDownload className="group-hover:animate-bounce" />
                  Download Resume
                  <FaArrowRight className="transform group-hover:translate-x-2 transition-transform" />
                </span>
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-300"
              >
                <span className="flex items-center justify-center gap-3">
                  Get In Touch
                  <FaRocket className="group-hover:animate-pulse" />
                </span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-6 justify-center lg:justify-start"
            >
              {[
                { Icon: FaLinkedin, href: "https://www.linkedin.com/in/samsuddin-ansari-232904143/", color: "hover:text-blue-400", bg: "hover:bg-blue-500/20" },
                { Icon: FaGithub, href: "https://github.com/Ninjajuk", color: "hover:text-gray-100", bg: "hover:bg-gray-500/20" },
                { Icon: FaInstagram, href: "https://www.instagram.com/samsu_same", color: "hover:text-pink-400", bg: "hover:bg-pink-500/20" },
                { Icon: FaCode, href: "#projects", color: "hover:text-green-400", bg: "hover:bg-green-500/20" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`relative p-3 rounded-full backdrop-blur-sm bg-white/5 border border-white/10 ${social.color} ${social.bg} transition-all duration-300`}
                >
                  <social.Icon className="text-2xl" />
                  <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-current opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:w-2/5 grid grid-cols-2 gap-6"
          >
            {[
              { label: "Projects Completed", value: "50+", icon: <FaCode />, color: "from-cyan-500 to-blue-500" },
              { label: "Happy Clients", value: "30+", icon: <FaStar />, color: "from-yellow-500 to-orange-500" },
              { label: "Years Experience", value: "3+", icon: <FaRocket />, color: "from-purple-500 to-pink-500" },
              { label: "Technologies", value: "15+", icon: <IoSparkles />, color: "from-green-500 to-teal-500" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 * index }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                <div className="relative p-6 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${stat.color}`}>
                      {stat.icon}
                    </div>
                    <span className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <AnimatePresence>
        {scrollIndicator && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="flex flex-col items-center gap-2"
            >
              <FaMouse className="text-white/60 text-2xl" />
              <FaChevronDown className="text-white/60 text-xl" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animated floating elements */}
      <div className="absolute top-1/4 right-8 animate-pulse">
        <div className="w-4 h-4 rounded-full bg-cyan-400/30"></div>
      </div>
      <div className="absolute bottom-1/3 left-8 animate-pulse animation-delay-1000">
        <div className="w-6 h-6 rounded-full bg-purple-400/30"></div>
      </div>
      <div className="absolute top-1/3 left-1/4 animate-pulse animation-delay-2000">
        <div className="w-3 h-3 rounded-full bg-pink-400/30"></div>
      </div>
    </motion.section>
  );
};

export default Hero3d;