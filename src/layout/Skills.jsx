import {
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaSass,
  FaReact,
  FaCogs,
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

const skillsData = [
  {
    icon: <FaHtml5 className="icon" />,
    name: "HTML5",
  },
  {
    icon: <FaCss3 className="icon" />,
    name: "CSS3",
  },
  {
    icon: <FaJsSquare className="icon" />,
    name: "JavaScript",
  },
  {
    icon: <FaReact className="icon" />,
    name: "React",
  },
  {
    icon: <FaSass className="icon" />,
    name: "Sass",
  },
  {
    icon: <SiTailwindcss className="icon" />,
    name: "Tailwind CSS",
  },
  {
    icon: <FaCogs className="icon" />,
    name: "RESTful APIs",
  },
  {
    icon: <SiTypescript className="icon" />,
    name: "TypeScript",
  },
];
export default function Skills() {
  return (
    <section className="skills">
      <h2 className="skills__heading">Skills, Tools, & Technologies</h2>
      <ul className="skills__ul">
        {skillsData.map(({ name, icon }) => (
          <li className="skills__ul__li">
            {icon}
            <small>{name}</small>
          </li>
        ))}
      </ul>
    </section>
  );
}
