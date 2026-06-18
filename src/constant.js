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
const RESUME_URL = "https://drive.google.com/file/d/1YUHz-lZlepkJ3Q5hT2yT-EYiIIJesu5-/view?usp=sharing";

export { RESUME_URL };

// const contactDetails = {
//     phone ="+91-9288067764",
//     email = "biosamsuddin@gmail.com"
// }
// export {contactDetails}

export const myTechStack = [
    "React", "Node.js", "MongoDB", "Express", "JavaScript", "TypeScript", "MYSQL", "Tailwind CSS", "Next.js"
]

export const socialLinks =
    [
        { Icon: FaLinkedin, href: "https://www.linkedin.com/in/samsuddin-ansari-232904143/", color: "hover:text-blue-400", bg: "hover:bg-blue-500/20" },
        { Icon: FaGithub, href: "https://github.com/Ninjajuk", color: "hover:text-gray-100", bg: "hover:bg-gray-500/20" },
        { Icon: FaInstagram, href: "https://www.instagram.com/samsu_same", color: "hover:text-pink-400", bg: "hover:bg-pink-500/20" },
        { Icon: FaCode, href: "#projects", color: "hover:text-green-400", bg: "hover:bg-green-500/20" },
    ]