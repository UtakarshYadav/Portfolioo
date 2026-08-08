"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaChartLine,
  FaBriefcase,
  FaCogs,
  FaRocket,
} from "react-icons/fa";

export default function About() {
  const stats = [
    { value: "8+", label: "Projects Built" },
    { value: "12+", label: "Technologies" },
    { value: "SAP", label: "SCM Learning" },
    { value: "PM", label: "Certified" },
  ];

  const journey = [
    {
      icon: <FaGraduationCap />,
      title: "B.Tech ECE",
      year: "2020 - 2024",
      desc: "Built a strong engineering foundation and developed analytical problem-solving skills.",
    },
    {
      icon: <FaLaptopCode />,
      title: "MERN Stack",
      year: "2023",
      desc: "Learned React, Next.js, Node.js and MongoDB through real-world projects.",
    },
    {
      icon: <FaChartLine />,
      title: "Project Management",
      year: "2024",
      desc: "Completed Google's PM Program and learned Agile, stakeholder and workflow management.",
    },
    {
      icon: <FaBriefcase />,
      title: "Frontend Developer",
      year: "2024-2025",
      desc: "Worked as a Frontend Developer building responsive web applications, creating modern UI components, integrating REST APIs, fixing production issues, and collaborating with cross-functional teams using Git."
    },
    {
      icon: <FaCogs />,
      title: "SAP SCM",
      year: "Present",
      desc: "Exploring procurement, logistics and enterprise systems.",
    },
    {
      icon: <FaRocket />,
      title: "Next Chapter",
      year: "Future",
      desc: "Building impactful products and scaling as an engineer.",
    },
  ];

  return (
    <section id="about" className="relative py-32 overflow-hidden bg-[#1e2a22]">

      {/* glow */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-10 w-[420px] h-[420px] bg-[#a3b18a]/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-20 right-10 w-[520px] h-[520px] bg-[#a3b18a]/10 blur-[160px] rounded-full" />
      </div>

      <div className="container-custom relative z-10">

        {/* HERO */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#a3b18a] uppercase tracking-[6px] text-xs">
              About Me
            </span>

            <h2 className="mt-6 text-5xl md:text-7xl font-black leading-[0.95] text-[#f5f1e8]">
              Not Just Building
              <br />
              Websites.
              <br />
              <span className="text-[#a3b18a]">Building Experiences.</span>
            </h2>

            <p className="mt-8 text-[#cfc8bc] text-lg leading-8">
              I'm an ECE graduate passionate about crafting modern digital experiences
              using MERN stack and scalable UI systems.
            </p>

            <div className="mt-10 px-6 py-4 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl">
              <p className="mt-10 text-sm md:text-base italic text-[#a3b18a]">
                "Great products start with curiosity and grow through consistency."
              </p>
            </div>
          
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center items-center px-6 sm:px-4"
          >
            <div className="relative w-full max-w-[380px] sm:max-w-[460px] h-[340px] sm:h-[460px] flex items-center justify-center mx-auto overflow-visible">

              {/* Glow */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] rounded-full bg-[#a3b18a]/20 blur-[100px]" />
              </div>

              {/* Image */}
              <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[290px] md:w-[340px] md:h-[340px] rounded-[32px] overflow-hidden border border-white/10 bg-white/5 p-3 z-10">
                <Image
                  src="/profileN.jpg"
                  alt="profile"
                  fill
                  sizes="(max-width:768px) 260px, 360px"
                  className="object-cover rounded-[24px]"
                />
              </div>

              {/* Badge 1 */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-8 right-8 z-20 rounded-xl border border-white/10 bg-white/10 px-2.5 py-1.5 backdrop-blur-xl text-[9px] sm:px-3 sm:py-2 sm:text-sm"
              >
                ⚡ Frontend Dev
              </motion.div>

              {/* Badge 2 */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute left-6 top-[52%] -translate-y-1/2 z-20 rounded-xl border border-white/10 bg-white/10 px-2.5 py-1.5 backdrop-blur-xl text-[9px] sm:px-3 sm:py-2 sm:text-sm"
              >
                🚀 Problem Solver
              </motion.div>

              {/* Badge 3 */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity }}
                className="absolute bottom-8 right-8 z-20 rounded-xl border border-white/10 bg-white/10 px-2.5 py-1.5 backdrop-blur-xl text-[9px] sm:px-3 sm:py-2 sm:text-sm"
              >
                🌱 Learner
              </motion.div>

            </div>
          </motion.div>

        </div>

        {/* STATS */}
      
        <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl text-center"
            >
              <h3 className="text-4xl font-black text-[#a3b18a]">{s.value}</h3>
              <p className="mt-2 text-xs uppercase tracking-[2px] text-slate-400">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* JOURNEY */}
        <div className="mt-36">
          <div className="text-center">
            <span className="text-[#a3b18a] uppercase tracking-[6px] text-xs">
              My Journey
            </span>
            <h3 className="mt-6 text-4xl md:text-5xl font-black text-[#f5f1e8]">
              The Road So Far
            </h3>
          </div>

          {/* ROADMAP (RESTORED ORIGINAL FLOW) */}
          <div className="relative mt-24">

            <svg className="absolute inset-0 w-full h-full hidden lg:block pointer-events-none"
              viewBox="0 0 1200 700" preserveAspectRatio="none">
              <path
                d="M120 120 C350 120, 350 250, 600 250 S850 400, 1050 400 S900 600, 600 600"
                fill="none"
                stroke="#a3b18a"
                strokeWidth="4"
                strokeDasharray="10 10"
                opacity="0.35"
              />
            </svg>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 relative z-10">
              {journey.map((j, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="p-8 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl text-center hover:border-[#a3b18a]/40 transition"
                >
                  <div className="text-3xl text-[#a3b18a] flex justify-center">
                    {j.icon}
                  </div>

                  <p className="mt-3 text-xs uppercase tracking-[2px] text-slate-400">
                    {j.year}
                  </p>

                  <h4 className="mt-2 text-xl font-bold text-[#f5f1e8]">
                    {j.title}
                  </h4>

                  <p className="mt-3 text-sm text-slate-400 leading-7">
                    {j.desc}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}