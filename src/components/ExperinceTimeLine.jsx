import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {

  FaCalendarAlt,
  FaClock,
  FaRocket,
  FaCode,
  FaBuilding,
  FaChartLine,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";

const experiences = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "SWIFT SOLUTIONS Pvt Ltd",
    start: "2022-07-01",
    end: "Present",
    durationLabel: "July 2022 – Present",
    side: "right",
    location: "Remote",
    achievements: [
      "Built scalable web applications",
      "Improved application performance",
    ],
    tech: ["React", "Node.js", "MongoDB", "AWS"],
    color: "blue",
  },
  {
    id: 2,
    title: "Civil Engineer",
    company: "ABCI Infrastructure Pvt Ltd",
    start: "2019-12-01",
    end: "2021-01-01",
    durationLabel: "December 2019 – January 2021",
    side: "left",
    location: "Patna, India",
    achievements: [
      "Managed construction projects",
      "Maintained quality and safety standards",
    ],
    tech: ["AutoCAD", "Project Management", "Quality Control"],
    color: "orange",
  },
];

const colorStyles = {
  blue: {
    icon: "bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400",
    badge:
      "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300",
    dot: "bg-blue-500",
    line: "from-blue-500 to-cyan-400",
    tag: "border-blue-100 bg-blue-50 text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-300",
  },
  orange: {
    icon:
      "bg-orange-50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400",
    badge:
      "bg-orange-50 text-orange-700 dark:bg-orange-500/10 dark:text-orange-300",
    dot: "bg-orange-500",
    line: "from-orange-500 to-amber-400",
    tag: "border-orange-100 bg-orange-50 text-orange-700 dark:border-orange-500/20 dark:bg-orange-500/10 dark:text-orange-300",
  },
};

const calcDuration = (start, end) => {
  const startDate = new Date(start);
  const endDate = end === "Present" ? new Date() : new Date(end);

  let months =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    endDate.getMonth() -
    startDate.getMonth();

  if (endDate.getDate() < startDate.getDate()) {
    months--;
  }

  months = Math.max(0, months);

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years === 0) {
    return `${remainingMonths} month${remainingMonths !== 1 ? "s" : ""}`;
  }

  if (remainingMonths === 0) {
    return `${years} year${years !== 1 ? "s" : ""}`;
  }

  return `${years} yr ${remainingMonths} mo`;
};

const getTotalExperience = () => {
  const totalMonths = experiences.reduce((total, exp) => {
    const start = new Date(exp.start);
    const end = exp.end === "Present" ? new Date() : new Date(exp.end);

    let months =
      (end.getFullYear() - start.getFullYear()) * 12 +
      end.getMonth() -
      start.getMonth();

    if (end.getDate() < start.getDate()) {
      months--;
    }

    return total + Math.max(0, months);
  }, 0);

  return Math.floor(totalMonths / 12);
};

const ExperienceCard = ({ exp }) => {
  const styles = colorStyles[exp.color] || colorStyles.blue;

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -3 }}
      className="w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
    >
      {/* Top accent */}
      <div className={`h-1 bg-gradient-to-r ${styles.line}`} />

      <div className="p-4 sm:p-5">
        {/* Job title and company */}
        <div className="flex items-start gap-3">
          <div
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${styles.icon}`}
          >
            {exp.title.toLowerCase().includes("developer") ? (
              <FaCode size={17} />
            ) : (
              <FaBuilding size={17} />
            )}
          </div>

          <div className="min-w-0 flex-1">
            {exp.end === "Present" && (
              <span className="mb-1.5 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-semibold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Current Role
              </span>
            )}

            <h3 className="text-base font-bold leading-snug text-gray-900 dark:text-white sm:text-lg">
              {exp.title}
            </h3>

            <p className="mt-1 break-words text-sm text-gray-500 dark:text-gray-400">
              {exp.company}
            </p>
          </div>
        </div>

        {/* Date and location */}
        <div className="mt-4 space-y-2 border-y border-gray-100 py-3 dark:border-gray-700">
          <div className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-300">
            <FaCalendarAlt className="mt-0.5 shrink-0 text-blue-500" />
            <span>{exp.durationLabel}</span>
          </div>

          <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300">
            <FaMapMarkerAlt className="shrink-0 text-blue-500" />
            <span>{exp.location}</span>
          </div>

          <div
            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${styles.badge}`}
          >
            <FaClock />
            {calcDuration(exp.start, exp.end)}
          </div>
        </div>

        {/* Key Achievements: reduced to two */}
        <div className="mt-4">
          <div className="mb-2 flex items-center gap-2">
            <FaChartLine className="text-emerald-500" />
            <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-100">
              Key Achievements
            </h4>
          </div>

          <ul className="space-y-2">
            {exp.achievements.map((achievement) => (
              <li
                key={achievement}
                className="flex items-start gap-2 text-xs leading-5 text-gray-600 dark:text-gray-300 sm:text-sm"
              >
                <FaCheckCircle className="mt-1 shrink-0 text-emerald-500" />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="mt-4">
          <h4 className="mb-2 text-sm font-semibold text-gray-800 dark:text-gray-100">
            Technologies & Skills
          </h4>

          <div className="flex flex-wrap gap-1.5">
            {exp.tech.map((tech) => (
              <span
                key={tech}
                className={`rounded-md border px-2 py-1 text-[10px] font-medium sm:text-xs ${styles.tag}`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

// Fix: define PropTypes for the exp prop.
ExperienceCard.propTypes = {
  exp: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
    durationLabel: PropTypes.string.isRequired,
    side: PropTypes.oneOf(["left", "right"]).isRequired,
    location: PropTypes.string.isRequired,
    achievements: PropTypes.arrayOf(PropTypes.string).isRequired,
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,
    color: PropTypes.oneOf(["blue", "orange"]).isRequired,
  }).isRequired,
};

const ExperienceTimeline = () => {
  const totalYears = getTotalExperience();

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-gray-50 py-14 dark:bg-gray-950 sm:py-16"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-64 w-64 rounded-full bg-blue-200/30 blur-3xl dark:bg-blue-900/20" />

      <div className="pointer-events-none absolute -right-32 bottom-20 h-64 w-64 rounded-full bg-purple-200/30 blur-3xl dark:bg-purple-900/20" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center sm:mb-14"
        >

          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl">
            Professional{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Experience
            </span>
                      {/* Total experience */}
          <div className="ml-4  mx-auto  inline-flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-5 py-3 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
              <FaClock size={18} />
            </div>

            <div className="text-left">
              <p className="text-xl font-bold text-gray-900 dark:text-white">
                {totalYears}+ Years
              </p>

            </div>
          </div>
            
          </h2>



        </motion.div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-5xl">
          {/* Center line */}
          <div className="absolute bottom-6 left-1/2 top-6 hidden w-px -translate-x-1/2 bg-gray-300 dark:bg-gray-700 md:block" />

          {/* Mobile line */}
          <div className="absolute bottom-6 left-[15px] top-6 w-px bg-gray-300 dark:bg-gray-700 md:hidden" />

          <div className="space-y-8 md:space-y-10">
            {experiences.map((exp, index) => {
              const styles = colorStyles[exp.color] || colorStyles.blue;

              return (
                <div
                  key={exp.id}
                  className="relative grid grid-cols-[32px_minmax(0,1fr)] items-start gap-3 md:grid-cols-[minmax(0,1fr)_48px_minmax(0,1fr)] md:gap-3"
                >
                  {/* Desktop left/right card */}
                  <div
                    className={`hidden min-w-0 md:block ${
                      exp.side === "left"
                        ? "col-start-1 row-start-1"
                        : "col-start-3 row-start-1"
                    }`}
                  >
                    <ExperienceCard exp={exp} />
                  </div>

                  {/* Timeline dot */}
                  <div className="relative z-10 col-start-1 row-start-1 flex justify-center pt-5 md:col-start-2">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        type: "spring",
                        stiffness: 250,
                        delay: index * 0.1,
                      }}
                      className={`flex h-7 w-7 items-center justify-center rounded-full border-[3px] border-gray-50 shadow-sm dark:border-gray-950 ${styles.dot}`}
                    >
                      <span className="h-2 w-2 rounded-full bg-white" />
                    </motion.div>
                  </div>

                  {/* Mobile card */}
                  <div className="col-start-2 row-start-1 min-w-0 md:hidden">
                    <ExperienceCard exp={exp} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-12 flex max-w-3xl flex-col items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:flex-row sm:px-6"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-50 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400">
              <FaRocket size={19} />
            </div>

            <div>
              <h3 className="text-sm font-bold text-gray-900 dark:text-white sm:text-base">
                The journey continues
              </h3>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Always learning. Always building.
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 text-xs font-medium text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            Exploring Next.js & TypeScript
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;