import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";

import {
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
  FaAws,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
} from "react-icons/si";

import { IoSparkles } from "react-icons/io5";
import { RESUME_URL, socialLinks } from "../../constant";

// ===============================
// 3D FLOATING SHAPE
// ===============================

function FloatingShape() {
  const meshRef = useRef(null);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    meshRef.current.rotation.x += delta * 0.12;
    meshRef.current.rotation.y += delta * 0.18;
    meshRef.current.position.y =
      Math.sin(state.clock.elapsedTime * 0.5) * 0.18;
  });

  return (
    <Float speed={1.2} floatIntensity={0.5}>
      <mesh ref={meshRef} scale={0.85}>
        <torusKnotGeometry args={[1.1, 0.24, 96, 12]} />
        <meshStandardMaterial
          color="#8b5cf6"
          metalness={0.4}
          roughness={0.5}
          wireframe
        />
      </mesh>
    </Float>
  );
}

// ===============================
// 3D BACKGROUND
// ===============================

function HeroBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 55 }}
      dpr={1}
      gl={{ alpha: true, antialias: false }}
      style={{ pointerEvents: "none" }}
    >
      <ambientLight intensity={0.8} />

      <pointLight
        position={[4, 4, 4]}
        intensity={1.5}
        color="#8b5cf6"
      />

      <pointLight
        position={[-4, -3, 3]}
        intensity={0.8}
        color="#ec4899"
      />

      <FloatingShape />
    </Canvas>
  );
}

// ===============================
// DATA
// ===============================

const headers = [
  "Hi, I'm Samsuddin Ansari",
  "Full Stack Developer",
  "Turning Ideas into Reality",
  "Let's Build Something Great",
];

const paragraphs = [
  "I build modern web experiences that look beautiful and perform exceptionally well.",
  "Specializing in React, Next.js, and scalable full-stack applications.",
  "Passionate about clean code, responsive interfaces, and accessible design.",
  "Have an idea? Let's turn it into something extraordinary.",
];

const techStack = [
  { Icon: FaReact, name: "React", color: "text-cyan-400" },
  { Icon: SiNextdotjs, name: "Next.js", color: "text-white" },
  { Icon: SiTailwindcss, name: "Tailwind", color: "text-teal-400" },
  { Icon: FaNodeJs, name: "Node.js", color: "text-green-400" },
  { Icon: SiTypescript, name: "TypeScript", color: "text-blue-400" },
  { Icon: SiMongodb, name: "MongoDB", color: "text-green-400" },
  { Icon: FaPython, name: "Python", color: "text-yellow-400" },
  { Icon: FaAws, name: "AWS", color: "text-orange-400" },
];

const stats = [
  {
    label: "Projects Completed",
    value: "50+",
    Icon: FaCode,
    color: "from-cyan-500 to-blue-500",
  },
  {
    label: "Happy Clients",
    value: "30+",
    Icon: FaStar,
    color: "from-yellow-500 to-orange-500",
  },
  {
    label: "Years Experience",
    value: "3+",
    Icon: FaRocket,
    color: "from-purple-500 to-pink-500",
  },
  {
    label: "Technologies",
    value: "15+",
    Icon: IoSparkles,
    color: "from-green-500 to-teal-500",
  },
];

// ===============================
// MAIN HERO COMPONENT
// ===============================

const Hero3d = () => {
  const [currentHeader, setCurrentHeader] = useState(0);
  const [currentParagraph, setCurrentParagraph] = useState(0);
  const [showScroll, setShowScroll] = useState(true);

  const prefersReducedMotion = useReducedMotion();

  // Rotate headings and paragraphs
  useEffect(() => {
    if (prefersReducedMotion) return;

    const headerTimer = setInterval(() => {
      setCurrentHeader((prev) => (prev + 1) % headers.length);
    }, 4000);

    const paragraphTimer = setInterval(() => {
      setCurrentParagraph((prev) => (prev + 1) % paragraphs.length);
    }, 4500);

    return () => {
      clearInterval(headerTimer);
      clearInterval(paragraphTimer);
    };
  }, [prefersReducedMotion]);

  // Scroll indicator visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY < 100);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative isolate min-h-[100svh] overflow-hidden bg-[#090816] text-white"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[#090816] via-[#17102d] to-[#0b1023]" />

      {/* Purple glow */}
      <div className="pointer-events-none absolute -left-32 top-10 -z-10 h-72 w-72 rounded-full bg-purple-600/20 blur-[100px] sm:h-96 sm:w-96" />

      {/* Cyan glow */}
      <div className="pointer-events-none absolute -right-32 bottom-10 -z-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px] sm:h-96 sm:w-96" />

      {/* Decorative 3D background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-35"
      >
        <HeroBackground />
      </div>

      {/* Responsive content container */}
      <div className="mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col justify-center px-5 pb-20 pt-28 sm:px-8 sm:pb-24 sm:pt-32 lg:px-12 lg:py-28">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12 xl:gap-20">

          {/* LEFT CONTENT */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="min-w-0 text-center lg:text-left"
          >
            {/* Role badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-400/[0.08] px-4 py-2 text-sm text-purple-200 backdrop-blur-md">
              <IoSparkles className="text-yellow-300" />
              <span>Full Stack Developer</span>

              <span className="relative ml-1 flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>
            </div>

            {/* Animated heading */}
            <div className="mb-5 min-h-[5.5rem] sm:min-h-[6.5rem] lg:min-h-[7.5rem]">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentHeader}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={prefersReducedMotion ? undefined : { opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                  className="break-words text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"
                >
                  {currentHeader === 0 ? (
                    <>
                      Hi, I am{" "}
                      <span className="bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Samsuddin Ansari
                      </span>
                    </>
                  ) : (
                    <span className="bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      {headers[currentHeader]}
                    </span>
                  )}
                </motion.h1>
              </AnimatePresence>
            </div>

            {/* Animated description */}
            <div className="mx-auto mb-8 min-h-[5rem] max-w-xl lg:mx-0">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentParagraph}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="text-base leading-7 text-gray-300 sm:text-lg sm:leading-8"
                >
                  {paragraphs[currentParagraph]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Technology badges */}
            <div className="mb-9 flex flex-wrap justify-center gap-2.5 lg:justify-start">
              {techStack.map(({ Icon, name, color }, index) => (
                <motion.div
                  key={name}
                  initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: prefersReducedMotion ? 0 : index * 0.05 }}
                  whileHover={prefersReducedMotion ? undefined : { y: -3 }}
                  className={`inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.05] px-3 py-2 backdrop-blur-sm transition-colors hover:bg-white/10 ${color}`}
                >
                  <Icon className="text-base sm:text-lg" />
                  <span className="text-xs font-medium text-gray-200 sm:text-sm">
                    {name}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="mb-9 flex flex-col justify-center gap-3 min-[420px]:flex-row lg:justify-start">
              <motion.a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={prefersReducedMotion ? undefined : { y: -3 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-purple-900/30 transition-shadow hover:shadow-purple-500/25 sm:px-7 sm:text-base"
              >
                <FaDownload />
                Download Resume
                <FaArrowRight />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={prefersReducedMotion ? undefined : { y: -3 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/[0.06] px-6 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-colors hover:bg-white/10 sm:px-7 sm:text-base"
              >
                Get In Touch
                <FaRocket className="text-purple-300" />
              </motion.a>
            </div>

            {/* Social links */}
            <div className="flex items-center justify-center gap-4 lg:justify-start">
              <span className="hidden text-sm text-gray-500 sm:inline">
                Find me on
              </span>

              {socialLinks.map((social, index) => {
                const SocialIcon = social.Icon;

                return (
                  <motion.a
                    key={social.href || index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${social.name || "social profile"}`}
                    whileHover={prefersReducedMotion ? undefined : { y: -4 }}
                    whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
                    className={`flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] transition-colors hover:bg-white/10 ${social.color || ""} ${social.bg || ""}`}
                  >
                    {SocialIcon && <SocialIcon className="text-xl" />}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT CONTENT: STATS */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto grid w-full max-w-xl grid-cols-2 gap-3 sm:gap-5 lg:max-w-none lg:gap-4 xl:gap-5"
          >
            {stats.map(({ label, value, Icon, color }, index) => (
              <motion.div
                key={label}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: prefersReducedMotion ? 0 : 0.2 + index * 0.08,
                }}
                whileHover={prefersReducedMotion ? undefined : { y: -4 }}
                className="group relative min-w-0"
              >
                <div
                  className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${color} opacity-15 blur-md transition-opacity group-hover:opacity-35`}
                />

                <div className="relative flex h-full min-h-[135px] flex-col justify-between rounded-2xl border border-white/10 bg-[#131126]/80 p-4 backdrop-blur-xl sm:min-h-[165px] sm:p-6 lg:min-h-[155px] lg:p-5 xl:min-h-[175px] xl:p-6">
                  <div className="flex items-start justify-between gap-2">
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white shadow-lg sm:h-11 sm:w-11`}
                    >
                      <Icon className="text-base sm:text-xl" />
                    </div>

                    <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-2xl font-extrabold tracking-tight text-transparent sm:text-3xl lg:text-2xl xl:text-3xl">
                      {value}
                    </span>
                  </div>

                  <p className="mt-5 break-words text-xs leading-5 text-gray-400 sm:text-sm">
                    {label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <AnimatePresence>
        {showScroll && (
          <motion.a
            href="#about"
            aria-label="Scroll to about section"
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-gray-400 transition-colors hover:text-white sm:flex"
          >
            <span className="text-[10px] font-medium uppercase tracking-[0.25em]">
              Scroll to explore
            </span>

            <motion.div
              animate={prefersReducedMotion ? undefined : { y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="flex flex-col items-center"
            >
              <FaMouse className="text-sm" />
              <FaChevronDown className="mt-1 text-xs" />
            </motion.div>
          </motion.a>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero3d;