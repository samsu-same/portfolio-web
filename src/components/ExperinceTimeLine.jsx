// import { motion } from "framer-motion";
// import { FaBriefcase } from "react-icons/fa";

// const experiences = [
// {
// id: 1,
// title: "Full Stack Developer",
// company: "Codevue Technology Pvt Ltd",
// start: "2024-04-01",
// end: "2025-12-29",
// durationLabel: "April 2024 – Dec 2025",
// side: "right",
// },
// {
// id: 2,
// title: "MERN Developer",
// company: "Third Eye Automation Pvt Ltd",
// start: "2022-10-01",
// end: "2024-03-01",
// durationLabel: "Oct 2022 – March 2024",
// side: "left",
// },
// {
// id: 3,
// title: "Civil Engineer",
// company: "ABCI Infrastructure Pvt Ltd",
// start: "2019-12-01",
// end: "2021-01-01",
// durationLabel: "Dec 2019 – Jan 2020",
// side: "right",
// },
// ];

// // Helper to calculate experience duration
// const calcYears = (start, end = new Date()) => {
// const s = new Date(start);
// const e = end === "Present" ? new Date() : new Date(end);
// const months = (e.getFullYear() - s.getFullYear()) * 12 + (e.getMonth() - s.getMonth());
// return `${Math.floor(months / 12)}.${months % 12} yrs`;
// };

// const ExperienceTimeline = () => {

//   // total experience calculation
// const totalMonths = experiences.reduce((acc, exp) => {
// const s = new Date(exp.start);
// const e = exp.end === "Present" ? new Date() : new Date(exp.end);
// return acc + ((e.getFullYear() - s.getFullYear()) * 12 + (e.getMonth() - s.getMonth()));
// }, 0);


// const totalExperience = `${Math.floor(totalMonths / 12)}+ Years Experience`;
//   return (
//     <section id='experience' className="py-12 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <h2 className="text-5xl md:text-6xl font-extrabold mb-2 text-center
//                    text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-purple-800 
//                    drop-shadow-lg animate-bounce">
//           Experience
//         </h2>
//         {/* Total Experience */}
//         <p className="text-center text-sm md:text-base text-gray-700 mb-16 tracking-wide">
//           {totalExperience}
//         </p>

//         <div className="relative flex flex-col items-center">
//           {/* Center Vertical Line */}
//           <div className="absolute w-1 bg-blue-600 h-full left-1/2 transform -translate-x-1/2 hidden md:block"></div>

//           {experiences.map((exp, index) => (
//             <motion.div
//               key={exp.id}
//               initial={{ opacity: 0, x: exp.side === "left" ? -100 : 100 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//               className={`relative flex items-center w-full max-w-4xl ${
//                 exp.side === "left" ? "justify-start" : "justify-end"
//               }  md:mb-4`}
//             >
//               {/* Suitcase Icon */}
//               <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 bg-blue-600 text-white p-3 rounded-full shadow-lg z-10">
//                 <FaBriefcase className="w-5 h-5" />
//               </div>

//               {/* Experience Card */}
//               <div
//                 className={`relative bg-gradient-to-r from-purple-900 to-indigo-900 text-white p-6 rounded-lg shadow-lg w-full md:w-80 mt-10 ${
//                   exp.side === "left" ? "mr-0 md:mr-16" : "ml-0 md:ml-16"
//                 }`}
//               >
//                 <h3 className="font-bold text-md md:text-lg">{exp.company}</h3>
//                 <p className="text-sm md:text-base">{exp.title}</p>
//                 <p className="text-xs md:text-sm mt-1 opacity-80">
//                   {exp.durationLabel}
//                 </p>
//                 {/* Company Experience */}
// <p className="text-xs text-gray-300 mt-3">
// Duration: {calcYears(exp.start, exp.end)}
// </p>

//                 {/* Pointed Arrows */}
//                 <div
//                   className={`hidden lg:block absolute top-1/2 transform -translate-y-1/2 w-0 h-0 border-8 border-transparent ${
//                     exp.side === "left"
//                       ? "border-r-orange-500 -right-4 md:-right-6"
//                       : "border-l-orange-500 -left-4 md:-left-6"
//                   }`}
//                 />
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Progress Button */}
//         <div className="text-center mt-10">
//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             className="px-6 py-2 bg-gradient-to-r from-pink-700 to-yellow-700 text-white font-bold rounded-full shadow-lg hover:shadow-2xl hover:from-yellow-500 hover:to-pink-500 transition-transform transform hover:scale-105 duration-300 cursor-pointer"
//           >
//             Still Building 🚀
//           </motion.button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ExperienceTimeline;


import { motion } from "framer-motion";
import { 
  FaBriefcase, 
  FaCalendarAlt, 
  FaClock, 
  FaRocket, 
  FaCode, 
  FaBuilding, 
  FaUserTie,
  FaChartLine 
} from "react-icons/fa";
import { MdLocationOn, MdTrendingUp } from "react-icons/md";

const experiences = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "SWIFT SOLUTIONS Pvt Ltd",
    start: "2024-04-01",
    end: "2025-12-29",
    durationLabel: "July 2022 – Present",
    side: "right",
    location: "Remote",
    achievements: [
      "Built 10+ scalable web applications",
      "Improved performance by 40%",
      "Led team of 3 developers"
    ],
    tech: ["React", "Node.js", "MongoDB", "AWS"],
    color: "from-blue-500 to-cyan-500"
  },
  // {
  //   id: 2,
  //   title: "MERN Stack Developer",
  //   company: "Third Eye Automation Pvt Ltd",
  //   start: "2022-10-01",
  //   end: "2024-03-01",
  //   durationLabel: "Oct 2022 – March 2024",
  //   side: "left",
  //   location: "Bengaluru, India",
  //   achievements: [
  //     "Developed ERP system serving 500+ users",
  //     "Reduced load time by 60%",
  //     "Implemented real-time features"
  //   ],
  //   tech: ["MongoDB", "Express", "React", "Node.js"],
  //   color: "from-purple-500 to-pink-500"
  // },
  {
    id: 2,
    title: "Civil Engineer",
    company: "ABCI Infrastructure Pvt Ltd",
    start: "2019-12-01",
    end: "2021-01-01",
    durationLabel: "Dec 2019 – Jan 2020",
    side: "right",
    location: "Patna, India",
    achievements: [
      "Managed construction projects",
      "Optimized resource allocation",
      "Ensured quality standards"
    ],
    tech: ["AutoCAD", "Project Management", "Quality Control"],
    color: "from-amber-500 to-orange-500"
  },
];

// Helper to calculate experience duration
const calcYears = (start, end = new Date()) => {
  const s = new Date(start);
  const e = end === "Present" ? new Date() : new Date(end);
  const months = (e.getFullYear() - s.getFullYear()) * 12 + (e.getMonth() - s.getMonth());
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  
  if (years === 0) {
    return `${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`;
  } else if (remainingMonths === 0) {
    return `${years} year${years !== 1 ? 's' : ''}`;
  }
  return `${years} yr ${remainingMonths} mo`;
};

const ExperienceTimeline = () => {
  // Total experience calculation
  const totalMonths = experiences.reduce((acc, exp) => {
    const s = new Date(exp.start);
    const e = exp.end === "Present" ? new Date() : new Date(exp.end);
    return acc + ((e.getFullYear() - s.getFullYear()) * 12 + (e.getMonth() - s.getMonth()));
  }, 0);

  const totalYears = Math.floor(totalMonths / 12);
  const remainingMonths = totalMonths % 12;
  const totalExperience = `${totalYears}${remainingMonths > 0 ? `+` : ''} Years Experience`;

  return (
    <section id='experience' className="relative py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 dark:from-blue-500/10 dark:to-purple-500/10"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(i) * 50, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              left: `${(i * 20) % 100}%`,
              top: `${(i * 10) % 100}%`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg">
              <FaBriefcase className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
                Experience
              </span>
            </h2>
          </div>
          
          {/* Total Experience Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-full shadow-lg mb-8"
          >
            <div className="flex items-center gap-2">
              <FaClock className="text-blue-600 dark:text-blue-400" />
              <span className="text-2xl font-bold text-gray-800 dark:text-white">
                {totalYears}{remainingMonths > 0 ? `+` : ''}
              </span>
            </div>
            <span className="text-gray-600 dark:text-gray-300 font-semibold">
              Years of Excellence
            </span>
            <MdTrendingUp className="text-green-500 text-xl" />
          </motion.div>

          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Journey through my professional career, marked by continuous learning and impactful contributions
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            
            {/* Animated dots on timeline */}
            {experiences.map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="absolute w-6 h-6 rounded-full bg-white border-4 border-blue-500 shadow-lg left-1/2 transform -translate-x-1/2"
                style={{ top: `${(i * 33) + 10}%` }}
              />
            ))}
          </div>

          {/* Experience Cards */}
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: exp.side === "left" ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative flex ${exp.side === "left" ? "md:justify-start" : "md:justify-end"} mb-16 md:mb-24`}
            >
              {/* Main Card */}
              <div className={`relative w-full md:w-96 group cursor-pointer`}>
                {/* Card Glow Effect */}
                <div className={`absolute -inset-2 bg-gradient-to-r ${exp.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                
                {/* Card Content */}
                <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-3xl">
                  {/* Gradient Header */}
                  <div className={`bg-gradient-to-r ${exp.color} p-6`}>
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          {exp.title.includes("Developer") ? (
                            <FaCode className="w-6 h-6 text-white" />
                          ) : (
                            <FaBuilding className="w-6 h-6 text-white" />
                          )}
                          <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        </div>
                        <h4 className="text-lg font-semibold text-white/90">{exp.company}</h4>
                      </div>
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="p-2 bg-white/20 rounded-full backdrop-blur-sm"
                      >
                        <FaBriefcase className="w-5 h-5 text-white" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    {/* Location & Duration */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <MdLocationOn />
                        <span className="text-sm font-medium">{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <FaCalendarAlt />
                        <span className="text-sm font-medium">{exp.durationLabel}</span>
                      </div>
                    </div>

                    {/* Duration Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-full mb-4">
                      <FaClock className="text-blue-500 text-sm" />
                      <span className="text-sm font-bold text-gray-800 dark:text-gray-200">
                        {calcYears(exp.start, exp.end)}
                      </span>
                    </div>

                    {/* Key Achievements */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <FaChartLine className="text-green-500" />
                        <h5 className="font-semibold text-gray-800 dark:text-gray-200">Key Achievements</h5>
                      </div>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-start gap-2"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mt-2"></div>
                            <span className="text-sm text-gray-600 dark:text-gray-300">{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <FaCode className="text-purple-500" />
                        <h5 className="font-semibold text-gray-800 dark:text-gray-200">Technologies</h5>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech, i) => (
                          <motion.span
                            key={i}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ scale: 1.1 }}
                            className="px-3 py-1 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 
                                     text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full shadow-sm"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Progress Indicator */}
                  <div className="px-6 pb-4">
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                      <span>Progress</span>
                      <span>{Math.round((index + 1) / experiences.length * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(index + 1) / experiences.length * 100}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className={`h-1.5 rounded-full bg-gradient-to-r ${exp.color}`}
                      />
                    </div>
                  </div>
                </div>

                {/* Connector Line for Mobile */}
                <div className="md:hidden absolute top-1/2 right-full w-8 h-1 bg-gradient-to-r from-gray-300 to-transparent"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Career Progress Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-2xl">
            <div className="relative">
              <FaRocket className="w-8 h-8 text-yellow-400 animate-pulse" />
              <div className="absolute inset-0 bg-yellow-400 rounded-full blur-lg opacity-50"></div>
            </div>
            <div className="text-left">
              <h4 className="text-xl font-bold text-white">Career Journey Continues</h4>
              <p className="text-gray-300 text-sm">Building the future, one line of code at a time</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                Next Chapter 
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </span>
            </motion.button>
          </div>

          {/* Current Focus */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-8 inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-full"
          >
            <div className="w-3 h-3 rounded-full bg-green-500 animate-ping"></div>
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              Currently: Enhancing skills in Next.js & TypeScript
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;