import { motion } from "framer-motion";
import { 
  SiReact, SiTailwindcss, SiFramer, SiJavascript, SiHtml5, 
  SiCss3, SiTypescript, SiRedux, SiNodedotjs, SiExpress, 
  SiMongodb, SiNextdotjs 
} from "react-icons/si";
import { useState } from "react";

const skillsGroups = [
  [
    { name: "React", icon: <SiReact className="text-blue-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "Framer Motion", icon: <SiFramer className="text-pink-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "React", icon: <SiReact className="text-blue-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "Framer Motion", icon: <SiFramer className="text-pink-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "React", icon: <SiReact className="text-blue-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "Framer Motion", icon: <SiFramer className="text-pink-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> }
  ],
  [
    { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <SiCss3 className="text-blue-600" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
    { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <SiCss3 className="text-blue-600" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
    { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <SiCss3 className="text-blue-600" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-500" /> }
  ],
  [
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
    { name: "Express", icon: <SiExpress className="text-gray-400" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
    { name: "Express", icon: <SiExpress className="text-gray-400" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
    { name: "Express", icon: <SiExpress className="text-gray-400" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },

  ]
];

const rowVariants = (direction, isPaused) => ({
  animate: {
    x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
    transition: {
      x: {
        repeat: isPaused ? 0 : Infinity,
        repeatType: "loop",
        duration: 60,
        ease: "linear"
      }
    }
  }
});

const Skills = () => {
  const [pausedRows, setPausedRows] = useState([false, false, false]);

  const handleHover = (index, isHovered) => {
    const updatedPausedRows = [...pausedRows];
    updatedPausedRows[index] = isHovered;
    setPausedRows(updatedPausedRows);
  };

  return (
    <section id="skills" className="p-8 bg-black text-white overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-12 text-center
                   text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-purple-800 
                   drop-shadow-lg animate-bounce" aria-label="Skills Section">
          Skills
        </h2>
        <div className="space-y-4">
          {["left", "right", "left"].map((direction, rowIndex) => (
            <motion.div
              key={rowIndex}
              className="flex gap-4 whitespace-nowrap"
              variants={rowVariants(direction, pausedRows[rowIndex])}
              animate="animate"
              onMouseEnter={() => handleHover(rowIndex, true)}
              onMouseLeave={() => handleHover(rowIndex, false)}
            >
              {[...skillsGroups[rowIndex], ...skillsGroups[rowIndex]].map((skill, index) => (
                <motion.div
                  key={`${skill.name}-${index}`}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-300 text-black rounded-md text-sm md:text-lg font-medium shadow-md hover:shadow-lg transition duration-300 ease-in-out"
                  whileHover={{ scale: 1.1 }}
                >
                  {skill.icon}
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
