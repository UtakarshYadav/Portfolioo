// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import projects from "@/data/project";

// import { FaGithub, FaArrowRight } from "react-icons/fa";

// export default function Projects() {
//   return (
//     <section
//       id="projects"
//       className="relative py-28 px-6 md:px-12 lg:px-20 overflow-hidden"
//     >
//       {/* Background Patterns */}
//       <div className="absolute inset-0 pointer-events-none opacity-20">

//         {/* Zig Zag Top */}
//         <div className="absolute top-10 left-10 w-32 h-32 border-t-2 border-l-2 border-[#a3b18a]/30 rotate-12" />

//         {/* Dots */}
//         <div className="absolute bottom-20 right-10 grid grid-cols-6 gap-2">
//           {Array.from({ length: 36 }).map((_, i) => (
//             <span
//               key={i}
//               className="w-1 h-1 rounded-full bg-[#a3b18a]/40"
//             />
//           ))}
//         </div>

//         {/* Glow Blob */}
//         <div className="absolute top-1/3 -left-32 w-72 h-72 bg-[#a3b18a]/10 blur-[120px] rounded-full" />

//         <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#d4a373]/10 blur-[120px] rounded-full" />
//       </div>

//       {/* Heading */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//         className="text-center mb-20 relative z-10"
//       >
//         <h2 className="mt-4 text-4xl md:text-6xl font-bold text-[#f5f1e8] leading-tight">
//           Projects
//         </h2>

//         <p className="max-w-2xl mx-auto mt-5 text-[#cfc8bc] leading-relaxed text-align:center text-sm md:text-base">
//           A collection of projects focused on clean UI, smooth user experience,
//           and modern frontend development.
//         </p>

//         <div className="w-24 h-1 bg-[#a3b18a] mx-auto rounded-full mt-7" />
//       </motion.div>

//       {/* Grid */}
//       <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3 relative z-10">

//         {projects.map((project, index) => (
//           <motion.a
//             href={project.live}
//             target="_blank"
//             rel="noopener noreferrer"
//             key={project.id}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{
//               duration: 0.5,
//               delay: index * 0.1,
//             }}
//             viewport={{ once: true }}
//             whileHover={{ y: -10 }}
//             className="group block"
//           >
//             <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:border-[#a3b18a]/30 hover:shadow-[#a3b18a]/10 hover:shadow-2xl h-full">

//               {/* Noise Overlay */}
//               <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]" />

//               {/* Image */}
//               <div className="relative h-60 overflow-hidden">
//                 <Image
//                   src={project.image}
//                   alt={project.title}
//                   fill
//                   sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
//                   className="object-cover transition-transform duration-700 group-hover:scale-110"
//                 />

//                 {/* Gradient Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                
//               </div>

//               {/* Content */}
//               <div className="p-7 flex flex-col h-full">

//                 <div className="flex items-start justify-between gap-4">
//                   <h3 className="text-2xl font-bold text-[#f5f1e8] group-hover:text-[#a3b18a] transition-colors duration-300">
//                     {project.title}
//                   </h3>

//                   <FaArrowRight className="text-[#a3b18a] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0" />
//                 </div>

//                 <p className="mt-4 text-[#cfc8bc] text-sm leading-relaxed">
//                   {project.description}
//                 </p>

//                 {/* Tech Stack */}
//                 <div className="flex flex-wrap gap-2 mt-6">
//                   {project.tech.map((tech, i) => (
//                     <span
//                       key={i}
//                       className="px-3 py-1 rounded-full text-xs font-medium bg-[#a3b18a]/10 border border-[#a3b18a]/20 text-[#a3b18a] hover:bg-[#a3b18a]/20 transition-colors"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </motion.a>
//         ))}
//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import projects from "@/data/project";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden py-24 px-5 sm:px-8"
    >

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute -left-40 top-1/3 h-72 w-72 rounded-full bg-[#a3b18a]/10 blur-[120px]" />

        <div className="absolute -right-40 bottom-20 h-72 w-72 rounded-full bg-[#d4a373]/10 blur-[120px]" />

      </div>


      {/* Container */}
      <div className="relative z-10 mx-auto max-w-5xl">


        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >

          <h2 className="text-4xl md:text-5xl font-bold text-[#f5f1e8]">
            Featured
            <span className="text-[#a3b18a]">
              {" "}Projects
            </span>
          </h2>


          <p className="mx-auto mt-5 max-w-2xl text-sm md:text-base leading-7 text-[#cfc8bc]">
            A collection of modern web applications focused on clean UI,
            performance and user experience.
          </p>


          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#a3b18a]" />

        </motion.div>



        {/* Cards */}
        <div className="space-y-12">


          {projects.map((project, index) => (

            <motion.div
              key={project.id}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -6,
              }}
              className="
                group
                rounded-3xl
                border
                border-[#2d3a30]
                bg-[#171f19]
                p-6
                md:p-8
                transition-all
                duration-500
                hover:border-[#a3b18a]/50
                hover:shadow-[0_15px_40px_rgba(163,177,138,0.12)]
              "
            >


              {/* Title */}
              <h3 className="
                mb-7
                text-center
                text-2xl
                md:text-3xl
                font-bold
                text-[#f5f1e8]
                group-hover:text-[#a3b18a]
                transition-colors
              ">
                {project.title}
              </h3>



              {/* Browser */}
              <div className="overflow-hidden rounded-2xl border border-[#344137] bg-[#101512]">


                {/* Browser Header */}
                <div className="
                  flex
                  items-center
                  gap-2
                  border-b
                  border-[#29352d]
                  bg-[#151c17]
                  px-4
                  py-3
                ">

                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />


                  <div className="
                    ml-3
                    h-6
                    flex-1
                    rounded-full
                    border
                    border-[#303b33]
                    bg-[#101512]
                  "/>

                </div>



                {/* Image */}
                <div className="
                  relative
                  h-[260px]
                  overflow-hidden
                  md:h-[340px]
                ">

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width:768px) 100vw, 900px"
                    className="
                      object-cover
                      object-top
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />


                  {/* Fade */}
                  <div className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    h-32
                    bg-gradient-to-t
                    from-[#171f19]
                    to-transparent
                  "/>


                </div>


              </div>
                            {/* Description */}
              <p className="
                mx-auto
                mt-7
                max-w-2xl
                text-center
                text-sm
                md:text-base
                leading-7
                text-[#cfc8bc]
              ">
                {project.description}
              </p>


              {/* Github */}
              <div className="mt-7 flex justify-center">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-[#39463b]
                    bg-[#1b241d]
                    px-6
                    py-3
                    text-[#f5f1e8]
                    transition-all
                    hover:border-[#a3b18a]
                    hover:text-[#a3b18a]
                  "
                >

                  <FaGithub size={20}/>

                  Github

                </a>

              </div>


            </motion.div>

          ))}


        </div>


      </div>


    </section>
  );
}