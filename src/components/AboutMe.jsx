import  { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaCode,
  FaServer,
  FaPaintBrush,
  FaWrench,
  FaBuilding,
} from "react-icons/fa";

import AnimatedButton from "./AnimatedButoon";
import { myTechStack } from "../constant";

const jobProfiles = [
  {
    text: "Full Stack Developer",
    icon: <FaCode />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    text: "MERN Stack Developer",
    icon: <FaCode />,
    color: "from-purple-500 to-pink-500",
  },
  {
    text: "Frontend Developer",
    icon: <FaPaintBrush />,
    color: "from-green-500 to-emerald-500",
  },
  {
    text: "Backend Developer",
    icon: <FaServer />,
    color: "from-orange-500 to-red-500",
  },
  {
    text: "Civil Engineer",
    icon: <FaBuilding />,
    color: "from-amber-500 to-yellow-500",
  },
];

const contactInfo = [
  {
    icon: <FaPhone />,
    label: "Phone",
    value: "+91-9288067764",
    color:
      "text-blue-600 bg-blue-100 dark:bg-blue-500/15 dark:text-blue-400",
  },
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "biosamsuddin@gmail.com",
    color:
      "text-purple-600 bg-purple-100 dark:bg-purple-500/15 dark:text-purple-400",
  },
  // {
  //   icon: <FaMapMarkerAlt />,
  //   label: "Location",
  //   value: "Bengaluru, India",
  //   color:
  //     "text-green-600 bg-green-100 dark:bg-green-500/15 dark:text-green-400",
  // },
];

const AboutMe = () => {
  const [headerText, setHeaderText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const activeProfile = jobProfiles[currentIndex];

  // Typing animation
  useEffect(() => {
    const currentWord = jobProfiles[currentIndex].text;
    let timeout;

    if (!isDeleting && charIndex < currentWord.length) {
      timeout = setTimeout(() => {
        setHeaderText(currentWord.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 85);
    } else if (!isDeleting && charIndex === currentWord.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1500);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setHeaderText(currentWord.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 35);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % jobProfiles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, currentIndex, isDeleting]);



  return (
    <section
      id="about"
      className="relative isolate flex min-h-screen flex-col justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 px-4 py-16 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950 sm:px-6 md:px-8 lg:py-24"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-300/20 blur-3xl dark:bg-blue-600/10" />

        <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-purple-300/20 blur-3xl dark:bg-purple-600/10" />

        {[...Array(12)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute h-1.5 w-1.5 rounded-full bg-blue-500/30 md:h-2 md:w-2"
            animate={{
              y: [0, -20, 0],
              x: [0, Math.sin(index) * 15, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + index * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${(index * 17) % 100}%`,
              top: `${(index * 23) % 100}%`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-12 text-center md:mb-16"
        >
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
              About Me
            </span>
          </h2>

          <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-gray-600 dark:text-gray-400">
            Get to know more about my background, skills, and passion for
            building modern web applications.
          </p>
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          {/* Left Column: Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
              {/* Image Glow */}
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-25 blur-2xl transition-opacity duration-500 hover:opacity-40" />

              {/* Image Frame */}
              <div className="relative rounded-[2rem] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1 shadow-2xl">
                <div className="relative overflow-hidden rounded-[1.8rem] bg-gray-100 dark:bg-gray-900">
                  <img
                    src="https://atfheruscdrriozd.public.blob.vercel-storage.com/samsu.png"
                    alt="Samsuddin Ansari"
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-gray-950/90 via-gray-950/40 to-transparent p-6 pt-24">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/15 text-white backdrop-blur-md">
                        <FaWrench size={22} />
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white">
                          Samsuddin Ansari
                        </h3>

                        <p className="text-sm text-gray-200">
                          Developer & Problem Solver
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Availability Badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-2 top-8 flex items-center gap-2 rounded-2xl border border-white/70 bg-white/95 px-3 py-3 shadow-xl backdrop-blur-md dark:border-gray-700 dark:bg-gray-900/95 sm:-right-5 sm:px-4"
              >
                <span className="h-3 w-3 shrink-0 rounded-full bg-green-500 ring-4 ring-green-500/20" />

                <span className="text-xs font-semibold text-gray-800 dark:text-white sm:text-sm">
                  Open to Opportunities
                </span>
              </motion.div>
            </div>
          </motion.div>
{/* Right Column: About Content */}
<motion.div
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.15 }}
  viewport={{ once: true }}
  className="flex w-full min-w-0 lg:justify-end"
>
  <div className="flex w-full flex-col rounded-3xl border border-white/70 bg-white/85 p-5 shadow-xl backdrop-blur-xl dark:border-gray-700/70 dark:bg-gray-900/80 sm:p-6 lg:max-w-[95%] lg:p-7 xl:p-8">

    {/* Introduction */}
    <h1 className="mb-4 text-2xl font-extrabold leading-tight text-gray-900 dark:text-white sm:text-3xl xl:text-4xl">
      Hi, I am
      <span className=" pl-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
        Samsuddin Ansari
      </span>
    </h1>

    {/* Animated Role */}
    <div className="mb-5">
      <div className="flex min-h-12 items-center gap-3">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r ${activeProfile.color} text-white shadow-md`}
        >
          {activeProfile.icon}
        </div>

        <h2 className="min-w-0 break-words text-lg font-bold text-gray-800 dark:text-white sm:text-xl">
          {headerText}
          <span className="ml-1 animate-pulse text-blue-600">|</span>
        </h2>
      </div>

      {/* Role Selectors */}
      {/* <div className="mt-3 flex flex-wrap gap-2">
        {jobProfiles.map((profile, index) => (
          <motion.button
            key={profile.text}
            type="button"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleProfileChange(index)}
            aria-label={profile.text}
            aria-pressed={currentIndex === index}
            className={`flex h-9 w-9 items-center justify-center rounded-lg transition-all ${
              currentIndex === index
                ? `bg-gradient-to-r ${profile.color} text-white shadow-md`
                : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300"
            }`}
          >
            {profile.icon}
          </motion.button>
        ))}
      </div> */}
    </div>

    {/* Description */}
    <p className="mb-5 text-sm leading-6 text-gray-600 dark:text-gray-300">
      I am a passionate Full-Stack Developer based in Bengaluru, India.
      With expertise in the MERN stack, I build beautiful and functional
      web applications that deliver great user experiences. 
    </p>

    {/* Contact Information */}
    <div className="mb-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
      {contactInfo.map((item) => (
        <div
          key={item.label}
          className={`flex min-w-0 items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-3 dark:border-gray-700 dark:bg-gray-800/70 ${
            item.label === "Location" ? "sm:col-span-2" : ""
          }`}
        >
          <div
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${item.color}`}
          >
            {item.icon}
          </div>

          <div className="min-w-0">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {item.label}
            </p>

            <p className="break-words text-xs font-semibold text-gray-800 dark:text-gray-100 sm:text-sm">
              {item.value}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* Technologies */}
    <div className="mb-6">
      <h3 className="mb-3 text-base font-bold text-gray-900 dark:text-white">
        Technologies I Work With
      </h3>

      <div className="flex flex-wrap gap-2">
        {myTechStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-gray-200 bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-700 transition hover:border-blue-300 hover:text-blue-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>

    {/* CTA */}
    <div className="mt-auto pt-1">
      <AnimatedButton />
    </div>

  </div>
</motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;