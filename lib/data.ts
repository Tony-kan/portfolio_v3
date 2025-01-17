import { images } from "@/constants";

console.log(JSON.stringify(images, null, 2));

// About Data
export const about = {
  title: "about me",
  description:
    "Passionate programmer and freelance developer with a knack for coding, problem-solving, and exploring innovative tech solutions. Skilled in game development, 3D art creation with Blender, and crafting interactive user experiences. Ready to collaborate and bring innovative ideas to life",
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
  description: `With a strong foundation in software development and a passion for innovation, I've gained diverse experience across leadership, freelancing, and building impactful tech solutions. My journey reflects a commitment to delivering excellence and solving complex problems.`,
  items: [
    {
      company: "Digimax MW",
      position: "Lead Frontend Developer",
      duration: "Feb 2024  - October 2024",
    },
    {
      company: "Braining X",
      position: "Founder & CEO",
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
  description: `My educational journey blends formal academics with specialized bootcamps, equipping me with a strong foundation in computer science, software development, and cutting-edge technologies. These experiences have fueled my passion for continuous learning and innovation.`,
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

// projects
export const projects = [
  {
    num: "01",
    name: "CoffeeShop",
    category: "React Native",
    title: "Project 1",
    description:
      "CoffeeShop is a mobile application for coffee lovers, featuring Google authentication, dynamic coffee listings, and order management. Designed with modern tools like Expo SDK 52, Supabase, Tailwind CSS, and TypeScript for a seamless and scalable experience.",
    stack: [
      { name: "React Native" },
      { name: "Expo" },
      { name: "TypeScript" },
      { name: "Supabase" },
      { name: "Zustand" },
      { name: "Google Maps" },
    ],
    image: "/assets/work/coffeeShop.png",
    images: [
      images.coffee_images.coffee_signup_screen,
      images.coffee_images.coffee_signin_screen,
      images.coffee_images.coffee_home_screen,
      images.coffee_images.coffee_order_screen,
      images.coffee_images.coffee_details_screen,
      images.coffee_images.coffee_delivery_screen,
      images.coffee_images.coffee_profile_screen,
    ],
    live: "/",
    github: "/",
  },
  {
    num: "02",
    name: "HomeTrack",
    category: "React Native",
    title: "Project 2",
    description:
      "HomeTrack is a real estate application with React Native, featuring Google authentication, dynamic property listings, and user profiles. Designed with modern tools like Expo SDK 52, Appwrite, Tailwind CSS, and TypeScript for a seamless and scalable experience.",
    stack: [
      { name: "React Native" },
      { name: "Expo" },
      { name: "TypeScript" },
      { name: "Appwrite" },
      { name: "Nativewind" },
    ],
    image: "/assets/work/homeTrack.png",
    images: images.home_track_image.list,
    live: "/",
    github: "/",
  },
  {
    num: "03",
    name: "Ryde",
    category: "React Native",
    title: "Project 3",
    description:
      "Ryde is a mobile application built with React Native for handling the user interface, Google Maps for rendering maps with directions, Stripe for handling payments, and serverless Postgres for managing databases. The app is styled with TailwindCSS.",
    stack: [
      { name: "React Native" },
      { name: "Expo" },
      { name: "Stripe" },
      { name: "PostgreSQL" },
      { name: "Google Maps" },
      { name: "Zustand" },
      { name: "Clerk" },
    ],
    image: "/assets/work/uberClone.png",
    images: images.ryde_images.list,
    live: "/",
    github: "/",
  },
  {
    num: "01",
    name: "FurniShop",
    category: "Websites",
    title: "Project 1",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Hic dicta maiores rem sint ipsum saepe. Ab rem ut minima error itaque laudantium nam.`,
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/thumb1.png",
    images: ["/assets/work/thumb1.png"],
    live: "/",
    github: "/",
  },
  {
    num: "02",
    name: "Inferno",
    category: "Websites",
    title: "Project 2",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Hic dicta maiores rem sint ipsum saepe. Ab rem ut minima error itaque laudantium nam.`,
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "node.js" }],
    image: "/assets/work/thumb2.png",
    images: [
      "/assets/work/thumb2.png",
      "/assets/work/thumb2.png",
      "/assets/work/thumb2.png",
    ],
    live: "/",
    github: "/",
  },
  {
    num: "03",
    name: "Alina Lee",
    category: "Websites",
    title: "Project 3",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Hic dicta maiores rem sint ipsum saepe. Ab rem ut minima error itaque laudantium nam.`,
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }],
    image: "/assets/work/thumb3.png",
    images: [
      "/assets/work/thumb3.png",
      "/assets/work/thumb3.png",
      "/assets/work/thumb3.png",
      "/assets/work/thumb3.png",
    ],
    live: "/",
    github: "/",
  },
];
