import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

// About Data
export const about = {
  title: "about me",
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Cras et ante lectus. In hac habitasse platea dictumst. Donec id fringilla justo. Nam nec feugiat mi.`,
  info: [
    {
      fieldName: "Name",
      fieldValue: "Tony Kanyamuka",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+265) 996008328",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Malawi",
    },
    {
      fieldName: "Email",
      fieldValue: "tonykanyamuka@gmail.com",
    },

    {
      fieldName: "Experience",
      fieldValue: "3+ years",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English",
    },
  ],
};

// Experience Data
export const experience = {
  icon: "/assets/resume/badge.svg",
  title: "my experience",
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Cras et ante lectus. In hac habitasse platea dictumst. Donec id fringilla justo. Nam nec feugiat mi.`,
  items: [
    {
      company: "Digimax MW",
      position: "Frontend Developer",
      duration: "Feb 2024  - present",
    },
    {
      company: "Stun Bustle Studios",
      position: "CEO",
      duration: "Present",
    },
    {
      company: "Upwork",
      position: "Freelance Developer",
      duration: "Present",
    },
  ],
};

// Education Data
export const education = {
  icon: "/assets/resume/cap.svg",
  title: "my education",
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Cras et ante lectus. In hac habitasse platea dictumst. Donec id fringilla justo. Nam nec feugiat mi.`,
  items: [
    {
      institution: "University of malawi",
      degree: "Bachelor of science in computer science",
      duration: "2019  - 2025",
    },
    {
      institution: "dev",
      degree: "frontend development bootcamp",
      duration: "2023",
    },
    {
      institution: "bootcamp",
      degree: "python and artificial intelligence bootcamp",
      duration: "2023",
    },
    {
      institution: "GameDev.tv",
      degree: "Unreal  Engine ",
      duration: "2024",
    },
    {
      institution: "Africans to  Silicon  Valley(A2SV)",
      degree: "DSA,Python",
      duration: "2023 - 2024",
    },
  ],
};

// skills data
export const skills = {
  title: "my skills",
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Cras et ante lectus. In hac habitasse platea dictumst. Donec id fringilla justo. Nam nec feugiat mi.`,
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

// projects
export const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Project 1",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Hic dicta maiores rem sint ipsum saepe. Ab rem ut minima error itaque laudantium nam.`,
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/thumb1.png",
    live: "/",
    github: "/",
  },
  {
    num: "02",
    category: "fullstack",
    title: "Project 2",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Hic dicta maiores rem sint ipsum saepe. Ab rem ut minima error itaque laudantium nam.`,
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "node.js" }],
    image: "/assets/work/thumb2.png",
    live: "/",
    github: "/",
  },
  {
    num: "03",
    category: "frontend",
    title: "Project 3",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Hic dicta maiores rem sint ipsum saepe. Ab rem ut minima error itaque laudantium nam.`,
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }],
    image: "/assets/work/thumb3.png",
    live: "/",
    github: "/",
  },
];
