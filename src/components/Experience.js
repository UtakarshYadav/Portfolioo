"use client";

import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaCode,
  FaReact,
  FaJs,
  FaDatabase,
  FaNodeJs,
  FaCheckCircle,
  FaMobileAlt,
  FaPlug,
  FaTachometerAlt,
  FaLayerGroup,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

const coreExpertise = [
  { title: "Responsive UI", desc: "Fluid layouts & cross-device compatibility", icon: <FaMobileAlt /> },
  { title: "API Integration", desc: "RESTful endpoints & async state flow", icon: <FaPlug /> },
  { title: "Performance", desc: "Vite optimization & fast load times", icon: <FaTachometerAlt /> },
  { title: "Component Architecture", desc: "Modular, reusable & scalable React code", icon: <FaLayerGroup /> },
];

const primaryStack = [
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "SQL", icon: <FaDatabase /> },
];

const responsibilities = [
  "Building reusable UI components to improve maintainability & dev efficiency",
  "Converting UI/UX wireframes & designs into responsive web applications",
  "Developing Client Onboarding Dashboard with RBAC & REST API analytics",
  "Ensuring optimal web application performance & cross-browser compatibility",
];

const technologies = [
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "SQL", icon: <FaDatabase /> },
  { name: "Node", icon: <FaNodeJs /> },
];

const AnimatedDivider = ({ origin = "origin-left", delay = 0.2 }) => (
  <motion.div
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className={`h-[1px] w-full bg-gradient-to-r from-transparent via-[#a3b18a]/20 to-transparent ${origin}`}
  />
);

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-36 overflow-hidden relative">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#a3b18a]/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="container-custom relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 md:mb-28"
        >
          <p className="text-[#a3b18a] uppercase tracking-[4px] text-sm font-semibold">
            PROFESSIONAL JOURNEY
          </p>
          <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-black tracking-[-2px]">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        {/* Outer Container */}
        <div className="bg-white/[0.02] backdrop-blur-xl rounded-[30px] p-8 sm:p-10 lg:p-12 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            
            {/* LEFT PANEL */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-full bg-white/[0.02] border border-white/[0.06] rounded-[28px] p-6 sm:p-8 flex flex-col gap-6 shadow-xl"
            >
              {/* Role */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-start gap-4 p-5 sm:p-6 rounded-2xl bg-[#1f2b22] border border-white/[0.05] shadow-md hover:border-[#a3b18a]/20 transition-all duration-300"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#a3b18a]/15 flex items-center justify-center text-[#a3b18a] text-xl sm:text-2xl shrink-0 shadow-inner">
                  <FaBriefcase />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold leading-tight text-white">
                    Frontend Developer
                  </h3>
                  <p className="mt-1 text-[#a3b18a] font-semibold text-sm sm:text-base">Telica Telecom</p>
                  <p className="text-slate-400 text-xs sm:text-sm mt-0.5 font-medium">Nov 2024 – Dec 2025</p>
                </div>
              </motion.div>

              <AnimatedDivider delay={0.2} />

              {/* Core Expertise */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h4 className="text-base sm:text-lg font-bold mb-3 flex items-center gap-2.5 text-slate-100">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#a3b18a] shadow-[0_0_8px_#a3b18a]" />
                  Core Expertise
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {coreExpertise.map((item, idx) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 + idx * 0.08 }}
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-[#1f2b22] border border-white/[0.05] hover:border-[#a3b18a]/40 hover:bg-[#243329] transition-all duration-300 shadow-md"
                    >
                      <div className="w-9 h-9 rounded-xl bg-[#a3b18a]/15 flex items-center justify-center text-[#a3b18a] text-sm shrink-0">
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="text-white text-sm sm:text-base font-semibold">{item.title}</span>
                          <span className="text-[#a3b18a] text-xs"><FaCheckCircle /></span>
                        </div>
                        <p className="text-slate-300 text-xs sm:text-sm mt-0.5 leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <AnimatedDivider delay={0.4} />

              {/* Primary Stack */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex-1 flex flex-col"
              >
                <h4 className="text-base sm:text-lg font-bold mb-3 flex items-center gap-2.5 text-slate-100">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#a3b18a] shadow-[0_0_8px_#a3b18a]" />
                  Primary Stack
                </h4>
                <div className="flex-1 flex gap-3">
                  {primaryStack.map((item, idx) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.5 + idx * 0.08 }}
                      whileHover={{ scale: 1.08, y: -3 }}
                      className="flex-1 bg-[#243329] hover:bg-[#2b3d31] border border-white/[0.05] hover:border-[#a3b18a]/40 rounded-2xl flex flex-col items-center justify-center p-2.5 transition-all duration-300 shadow-md"
                    >
                      <span className="text-[#a3b18a] text-2xl mb-1.5">{item.icon}</span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-100 text-center leading-tight">
                        {item.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT PANEL */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-full bg-white/[0.02] border border-white/[0.06] rounded-[28px] p-6 sm:p-8 flex flex-col gap-6 shadow-xl"
            >
              {/* Professional Summary */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-2xl bg-[#1f2b22] border border-white/[0.05] hover:border-[#a3b18a]/20 p-5 sm:p-6 shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#a3b18a]/15 flex items-center justify-center text-[#a3b18a] text-lg shrink-0 shadow-inner">
                    <FaCode />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                    Professional Summary
                  </h3>
                </div>
                <p className="text-slate-200 leading-relaxed text-sm sm:text-base font-normal">
                  Frontend Developer with hands-on experience building responsive web applications using React.js, Next.js and Tailwind CSS. Passionate about reusable components, clean UI architecture and creating smooth user experiences across modern web platforms.
                </p>
              </motion.div>

              <AnimatedDivider origin="origin-right" delay={0.2} />

              {/* Key Responsibilities */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="rounded-2xl bg-[#1f2b22] border border-white/[0.05] p-6 sm:p-7 shadow-md"
              >
                <h3 className="text-2xl sm:text-3xl font-extrabold mb-5 text-white flex items-center gap-3">
                  🚀 Key Responsibilities
                </h3>
                <div className="space-y-3.5">
                  {responsibilities.map((item, idx) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: 0.25 + idx * 0.06 }}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-4 p-4 sm:p-4.5 rounded-2xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.07] hover:border-[#a3b18a]/40 transition-all duration-300 shadow-sm"
                    >
                      <div className="w-9 h-9 rounded-xl bg-[#a3b18a]/20 flex items-center justify-center text-[#a3b18a] text-base shrink-0">
                        <FaCheckCircle />
                      </div>
                      <span className="text-slate-100 font-bold text-sm sm:text-base md:text-lg leading-snug">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <AnimatedDivider origin="origin-right" delay={0.35} />

              {/* Technologies Used */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h4 className="text-base sm:text-lg font-bold mb-3 flex items-center gap-2.5 text-slate-100">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#a3b18a] shadow-[0_0_8px_#a3b18a]" />
                  Technologies Used
                </h4>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                  {technologies.map((tech, idx) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.4 + idx * 0.08 }}
                      whileHover={{ scale: 1.08, y: -3 }}
                      className="aspect-square bg-[#1f2b22] hover:bg-[#25352a] border border-white/[0.05] hover:border-[#a3b18a]/40 rounded-2xl flex flex-col items-center justify-center p-2.5 transition-all duration-300 shadow-md"
                    >
                      <span className="text-[#a3b18a] text-2xl mb-1.5">{tech.icon}</span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-100 text-center leading-tight">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}