// const projects = [
//   {
//     id: 1,
//     title: "AI Assistant App",
//     description:
//       "AI-powered assistant web application featuring intelligent conversations, modern UI, and responsive design.",
//     tech: ["Next.js", "AI SDK", "Tailwind CSS"],
//     github: "#",
//     live: "https://ai-assistant-two-livid.vercel.app/",
//     image: "/ai.png",
//   },

//   {
//     id: 2,
//     title: "Sipsip – Charity Donation Platform",
//     description:
//       "A full-stack donation platform built with Next.js, MongoDB, Tailwind CSS, and OAuth authentication for secure user access.",
//     tech: ["Next.js", "React", "MongoDB", "Tailwind CSS", "OAuth"],
//     github: "#",
//     live: "#",
//     image: "/sipsip.png",
//   },

//   {
//     id: 3,
//     title: "Course App – Learning Platform",
//     description:
//       "An online learning platform providing structured course management, responsive layouts, and an intuitive user experience.",
//     tech: ["Next.js", "React", "Tailwind CSS", "MongoDB"],
//     github: "#",
//     live: "https://course-app-sand.vercel.app/",
//     image: "/course.png",
//   },

//   {
//     id: 4,
//     title: "Project Manager App",
//     description:
//       "Project management system with task tracking, vendor coordination, API integration, and workflow monitoring.",
//     tech: ["React", "Node.js", "Express.js", "MongoDB"],
//     github: "#",
//     live: "#",
//     image: "/manager.png",
//   },

//   {
//     id: 5,
//     title: "Escapism – Experience Platform",
//     description:
//       "Interactive experience platform featuring immersive layouts, smooth animations, and modern frontend design.",
//     tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
//     github: "#",
//     live: "https://escapism-three.vercel.app/",
//     image: "/escapism.png",
//   },
// ];

// export default projects;


import React from "react";
import { FaRobot, FaCreditCard, FaGraduationCap, FaServer, FaCompass } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "AI Assistant App",
    badge: "Featured AI App",
    description:
      "Intelligent conversational assistant enabling real-time AI interactions through an intuitive, responsive UI with scalable backend architecture.",
    tech: ["Next.js", "AI SDK", "Tailwind CSS"],
    github: "#",
    live: "https://ai-assistant-two-livid.vercel.app/",
    image: "/ai.png",
    icon: <FaRobot className="text-[#a3b18a]" />,
    highlights: [
      "Real-time streaming conversational AI interaction",
      "Intuitive, mobile-first responsive chat layout",
    ],
  },
  {
    id: 2,
    title: "SipSip Payment App",
    badge: "Fintech Platform",
    description:
      "Modern web payment application supporting seamless transactions via cards and UPI, integrated authentication, and secure data handling.",
    tech: ["Next.js", "React", "MongoDB", "Tailwind CSS"],
    github: "#",
    live: "https://sipsip-seven.vercel.app/",
    image: "/sipsip.png",
    icon: <FaCreditCard className="text-[#a3b18a]" />,
    highlights: [
      "UPI & Debit/Credit payment processing flows",
      "Secure user authentication & session handling",
    ],
  },
  {
    id: 3,
    title: "Course App Website",
    badge: "E-Learning Platform",
    description:
      "Interactive learning platform for exploring programming languages structured into chapters with clean navigation and engaging UI.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    github: "#",
    live: "https://course-app-sand.vercel.app/",
    image: "/course.png",
    icon: <FaGraduationCap className="text-[#a3b18a]" />,
    highlights: [
      "Structured chapter-by-chapter learning path",
      "Fast single-page application navigation & search",
    ],
  },
  {
    id: 4,
    title: "Project Manager App",
    badge: "Enterprise App",
    description:
      "Web-based client onboarding and project management system with task tracking, vendor coordination, and API configuration management.",
    tech: ["React", "Node.js", "Express.js"],
    github: "#",
    live: "https://github.com/UtakarshYadav",
    image: "/manager.png",
    icon: <FaServer className="text-[#a3b18a]" />,
    highlights: [
      "Role-based access control (RBAC) & status tracking",
      "Integrated REST APIs for real-time config management",
    ],
  },
  {
    id: 5,
    title: "Escapism Platform",
    badge: "Interactive Platform",
    description:
      "Interactive experience platform featuring immersive layouts, smooth Framer Motion animations, and modern responsive design.",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
    github: "#",
    live: "https://escapism-three.vercel.app/",
    image: "/escapism.png",
    icon: <FaCompass className="text-[#a3b18a]" />,
    highlights: [
      "Smooth motion transitions & gestures",
      "Modern aesthetic dark layout",
    ],
  },
];

export default projects;
