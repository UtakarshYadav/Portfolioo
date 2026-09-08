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
  FaFileExcel,
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
      year: "2025",
      desc: "Exploring procurement, logistics and enterprise systems.",
    },
    {
      icon: <FaFileExcel />,
      title: "Excel",
      year: "Present",
      desc: "Sharpening data analysis, reporting and automation skills using advanced Excel.",
    },
  ];

  const nextChapter = {
    icon: <FaRocket />,
    title: "Next Chapter",
    year: "Future",
    desc: "Building impactful products and scaling as an engineer.",
  };

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

            <div className="mt-10 px-6 py-5 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl flex items-center justify-center">
              <p className="text-sm md:text-base italic text-[#a3b18a] text-center">
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
                  src="/ProfileN.jpg"
                  alt="profile"
                  fill
                  sizes="(max-width:768px) 260px, 360px"
                  // className="object-cover rounded-[24px]"
                  className="object-contain rounded-[24px]"
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
      
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl text-center transition-all duration-300 hover:border-[#a3b18a]/40 hover:bg-white/[0.06] hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(163,177,138,0.15)]"
            >
              <h3 className="text-4xl font-black gradient-text">{s.value}</h3>
              <p className="mt-2 text-xs uppercase tracking-[2px] text-slate-400">
                {s.label}
              </p>
              <div className="mx-auto mt-3 h-0.5 w-8 rounded-full bg-[#a3b18a]/40 transition-all duration-300 group-hover:w-12 group-hover:bg-[#a3b18a]" />
            </motion.div>
          ))}
        </div>

        {/* JOURNEY */}
        <div className="mt-20">
          <div className="text-center">
            <span className="text-[#a3b18a] uppercase tracking-[6px] text-xs">
              My Journey
            </span>
            <h3 className="mt-6 text-4xl md:text-5xl font-black text-[#f5f1e8]">
              The Road So Far
            </h3>
          </div>

          {/* ROADMAP (RESTORED ORIGINAL FLOW) */}
          <div className="relative mt-14">

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

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 relative z-10">
              {journey.map((j, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="p-6 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl text-center hover:border-[#a3b18a]/40 transition"
                >
                  <div className="text-2xl text-[#a3b18a] flex justify-center">
                    {j.icon}
                  </div>

                  <p className="mt-2 text-xs uppercase tracking-[2px] text-slate-400">
                    {j.year}
                  </p>

                  <h4 className="mt-1.5 text-xl font-bold text-[#f5f1e8]">
                    {j.title}
                  </h4>

                  <p className="mt-2 text-sm text-slate-400 leading-6">
                    {j.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* NEXT CHAPTER — standalone highlight, not a grid box */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative mt-8 overflow-hidden rounded-2xl border border-[#a3b18a]/30 bg-gradient-to-r from-[#a3b18a]/15 via-[#588157]/10 to-[#a3b18a]/15 p-8 sm:p-10 text-center"
            >
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[300px] h-[150px] bg-[#a3b18a]/25 blur-[90px] pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#a3b18a] to-[#588157] text-[#f5f1e8] text-2xl shadow-lg shadow-[#a3b18a]/30">
                  {nextChapter.icon}
                </div>

                <p className="text-xs uppercase tracking-[3px] text-[#a3b18a] font-semibold">
                  {nextChapter.year}
                </p>

                <h4 className="text-2xl sm:text-3xl font-black text-[#f5f1e8]">
                  {nextChapter.title}
                </h4>

                <p className="max-w-md text-sm sm:text-base text-[#cfc8bc] leading-6">
                  {nextChapter.desc}
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}

// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import {
//   FaGraduationCap,
//   FaLaptopCode,
//   FaChartLine,
//   FaBriefcase,
//   FaCogs,
//   FaRocket,
//   FaFileExcel,
// } from "react-icons/fa";

// export default function About() {
//   const stats = [
//     { value: "8+", label: "Projects Built" },
//     { value: "12+", label: "Technologies" },
//     { value: "SAP", label: "SCM Learning" },
//     { value: "PM", label: "Certified" },
//   ];

//   const journey = [
//     {
//       icon: <FaGraduationCap />,
//       title: "B.Tech ECE",
//       year: "2020 - 2024",
//       desc: "Built a strong engineering foundation and developed analytical problem-solving skills.",
//     },
//     {
//       icon: <FaLaptopCode />,
//       title: "MERN Stack",
//       year: "2023",
//       desc: "Learned React, Next.js, Node.js and MongoDB through real-world projects.",
//     },
//     {
//       icon: <FaChartLine />,
//       title: "Project Management",
//       year: "2024",
//       desc: "Completed Google's PM Program and learned Agile, stakeholder and workflow management.",
//     },
//     {
//       icon: <FaBriefcase />,
//       title: "Frontend Developer",
//       year: "2024-2025",
//       desc: "Worked as a Frontend Developer building responsive web applications, creating modern UI components, integrating REST APIs, fixing production issues, and collaborating with cross-functional teams using Git.",
//     },
//     {
//       icon: <FaCogs />,
//       title: "SAP SCM",
//       year: "2025",
//       desc: "Exploring procurement, logistics and enterprise systems.",
//     },
//     {
//       icon: <FaFileExcel />,
//       title: "Excel",
//       year: "Present",
//       desc: "Sharpening data analysis, reporting and automation skills using advanced Excel.",
//     },
//   ];

//   const nextChapter = {
//     icon: <FaRocket />,
//     title: "Next Chapter",
//     year: "Future",
//     desc: "Building impactful products and scaling as an engineer.",
//   };

//   return (
//     <section
//       id="about"
//       className="relative overflow-hidden bg-[#1e2a22] py-32"
//     >
//       {/* Glow */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute left-10 top-40 h-[420px] w-[420px] rounded-full bg-[#a3b18a]/10 blur-[140px]" />
//         <div className="absolute bottom-20 right-10 h-[520px] w-[520px] rounded-full bg-[#a3b18a]/10 blur-[160px]" />
//       </div>

//       <div className="container-custom relative z-10">

//         {/* HERO */}
//         <div className="grid items-center gap-20 lg:grid-cols-2">

//           {/* LEFT */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <span className="text-xs uppercase tracking-[6px] text-[#a3b18a]">
//               About Me
//             </span>

//             <h2 className="mt-6 text-5xl font-black leading-[0.95] text-[#f5f1e8] md:text-7xl">
//               Not Just Building
//               <br />
//               Websites.
//               <br />
//               <span className="text-[#a3b18a]">
//                 Building Experiences.
//               </span>
//             </h2>

//             <p className="mt-8 text-lg leading-8 text-[#cfc8bc]">
//               I'm an ECE graduate passionate about crafting modern digital
//               experiences using MERN stack and scalable UI systems.
//             </p>

//             <div className="mt-10 flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-5 backdrop-blur-xl">
//               <p className="text-center text-sm italic text-[#a3b18a] md:text-base">
//                 "Great products start with curiosity and grow through
//                 consistency."
//               </p>
//             </div>
//           </motion.div>

//           {/* RIGHT IMAGE */}
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="flex items-center justify-center px-6 sm:px-4"
//           >
//             <div className="relative mx-auto flex h-[420px] w-full max-w-[380px] items-center justify-center overflow-visible sm:h-[480px] sm:max-w-[460px]">

//               {/* Image Glow */}
//               <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
//                 <div className="h-[300px] w-[300px] rounded-full bg-[#a3b18a]/20 blur-[100px] sm:h-[360px] sm:w-[360px]" />
//               </div>

//               {/* IMAGE - MADE SMALLER */}
//               <div className="relative z-10 h-[320px] w-[240px] overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-2xl shadow-black/20 sm:h-[380px] sm:w-[290px] md:h-[400px] md:w-[310px]">
//                 <Image
//                   src="/ProfileN.jpg"
//                   alt="Profile"
//                   fill
//                   priority
//                   sizes="(max-width: 640px) 240px, (max-width: 768px) 290px, 310px"
//                   className="rounded-[32px] object-cover object-center"
//                 />

//                 <div className="pointer-events-none absolute inset-0 rounded-[32px] bg-gradient-to-t from-[#1e2a22]/20 via-transparent to-transparent" />
//               </div>

//               {/* Badge 1 */}
//               <motion.div
//                 animate={{ y: [0, -8, 0] }}
//                 transition={{ duration: 4, repeat: Infinity }}
//                 className="absolute right-2 top-8 z-20 rounded-xl border border-white/10 bg-white/10 px-2.5 py-1.5 text-[9px] backdrop-blur-xl sm:right-6 sm:px-3 sm:py-2 sm:text-sm"
//               >
//                 ⚡ Frontend Dev
//               </motion.div>

//               {/* Badge 2 */}
//               <motion.div
//                 animate={{ y: [0, 8, 0] }}
//                 transition={{ duration: 5, repeat: Infinity }}
//                 className="absolute left-0 top-[52%] z-20 -translate-y-1/2 rounded-xl border border-white/10 bg-white/10 px-2.5 py-1.5 text-[9px] backdrop-blur-xl sm:left-2 sm:px-3 sm:py-2 sm:text-sm"
//               >
//                 🚀 Problem Solver
//               </motion.div>

//               {/* Badge 3 */}
//               <motion.div
//                 animate={{ y: [0, -8, 0] }}
//                 transition={{ duration: 4.5, repeat: Infinity }}
//                 className="absolute bottom-8 right-2 z-20 rounded-xl border border-white/10 bg-white/10 px-2.5 py-1.5 text-[9px] backdrop-blur-xl sm:right-6 sm:px-3 sm:py-2 sm:text-sm"
//               >
//                 🌱 Learner
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>

//         {/* STATS */}
//         <div className="mb-12 mt-14 grid grid-cols-2 gap-6 lg:grid-cols-4">
//           {stats.map((s, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.1 }}
//               className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#a3b18a]/40 hover:bg-white/[0.06] hover:shadow-[0_15px_35px_rgba(163,177,138,0.15)]"
//             >
//               <h3 className="text-4xl font-black gradient-text">
//                 {s.value}
//               </h3>

//               <p className="mt-2 text-xs uppercase tracking-[2px] text-slate-400">
//                 {s.label}
//               </p>

//               <div className="mx-auto mt-3 h-0.5 w-8 rounded-full bg-[#a3b18a]/40 transition-all duration-300 group-hover:w-12 group-hover:bg-[#a3b18a]" />
//             </motion.div>
//           ))}
//         </div>

//         {/* JOURNEY */}
//         <div className="mt-20">
//           <div className="text-center">
//             <span className="text-xs uppercase tracking-[6px] text-[#a3b18a]">
//               My Journey
//             </span>

//             <h3 className="mt-6 text-4xl font-black text-[#f5f1e8] md:text-5xl">
//               The Road So Far
//             </h3>
//           </div>

//           {/* ROADMAP */}
//           <div className="relative mt-14">

//             <svg
//               className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
//               viewBox="0 0 1200 700"
//               preserveAspectRatio="none"
//             >
//               <path
//                 d="M120 120 C350 120, 350 250, 600 250 S850 400, 1050 400 S900 600, 600 600"
//                 fill="none"
//                 stroke="#a3b18a"
//                 strokeWidth="4"
//                 strokeDasharray="10 10"
//                 opacity="0.35"
//               />
//             </svg>

//             <div className="relative z-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
//               {journey.map((j, i) => (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, y: 40 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: i * 0.15 }}
//                   className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center backdrop-blur-xl transition hover:border-[#a3b18a]/40"
//                 >
//                   <div className="flex justify-center text-2xl text-[#a3b18a]">
//                     {j.icon}
//                   </div>

//                   <p className="mt-2 text-xs uppercase tracking-[2px] text-slate-400">
//                     {j.year}
//                   </p>

//                   <h4 className="mt-1.5 text-xl font-bold text-[#f5f1e8]">
//                     {j.title}
//                   </h4>

//                   <p className="mt-2 text-sm leading-6 text-slate-400">
//                     {j.desc}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>

//             {/* NEXT CHAPTER */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.3 }}
//               className="relative mt-8 overflow-hidden rounded-2xl border border-[#a3b18a]/30 bg-gradient-to-r from-[#a3b18a]/15 via-[#588157]/10 to-[#a3b18a]/15 p-8 text-center sm:p-10"
//             >
//               <div className="pointer-events-none absolute -top-10 left-1/2 h-[150px] w-[300px] -translate-x-1/2 bg-[#a3b18a]/25 blur-[90px]" />

//               <div className="relative z-10 flex flex-col items-center gap-3">
//                 <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#a3b18a] to-[#588157] text-2xl text-[#f5f1e8] shadow-lg shadow-[#a3b18a]/30">
//                   {nextChapter.icon}
//                 </div>

//                 <p className="text-xs font-semibold uppercase tracking-[3px] text-[#a3b18a]">
//                   {nextChapter.year}
//                 </p>

//                 <h4 className="text-2xl font-black text-[#f5f1e8] sm:text-3xl">
//                   {nextChapter.title}
//                 </h4>

//                 <p className="max-w-md text-sm leading-6 text-[#cfc8bc] sm:text-base">
//                   {nextChapter.desc}
//                 </p>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }