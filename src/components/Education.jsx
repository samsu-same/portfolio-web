import { motion } from "framer-motion";

const educationData = [
  {
    id: 1,
    institution: "Mizoram University",
    degree: "Bachelor of Civil Engineering",
    duration: "2015 - 2019",
    description: "Graduated with honors",
    logo: "/images/Mizoram_University_logo.png", 
  },
  {
    id: 2,
    institution: "Ramanuj Gupta Junior College",
    degree: "Higher Secondary +2",
    duration: "2011 - 2013",
    description: "Secured first class distinction.Studied Physic, Chemistry, Mathematics, Biology, English, Alt English.",
    logo: "", 
  },
  {
    id: 3,
    institution: "High School",
    degree: "Sacred Heart High School ",
    duration: "2011",
    description: "Passed with First Divison..",
    logo: "", 
  },
];

const EducationCard = ({ education }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="p-6 bg-white rounded-2xl shadow-lg border border-gray-200 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
  >
    <div className="flex items-center space-x-4 mb-4">
    {education.logo && (
    <img
      src={education.logo}
      alt={education.institution}
      className="w-16 h-16 object-cover rounded-full"
    />
  )}
      <div>
        <h3 className="text-xl font-bold text-gray-800">{education.institution}</h3>
        <p className="text-gray-600">{education.degree}</p>
      </div>
    </div>
    <p className="text-gray-600 mb-2">{education.duration}</p>
    <p className="text-gray-600">{education.description}</p>
  </motion.div>
);

const Education = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="education"
      className="p-8 bg-gradient-to-r from-blue-50 to-purple-50"
    >
      <div className="container mx-auto">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-12 text-center
                   text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-purple-800 
                   drop-shadow-lg animate-bounce">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationData.map((education) => (
            <EducationCard key={education.id} education={education} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Education;