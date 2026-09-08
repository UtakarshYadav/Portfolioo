"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import projects from "@/data/project";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden py-24 px-5 sm:px-8"
    >

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute -left-40 top-1/3 h-72 w-72 rounded-full bg-[#a3b18a]/10 blur-[120px]" />

        <div className="absolute -right-40 bottom-20 h-72 w-72 rounded-full bg-[#d4a373]/10 blur-[120px]" />

      </div>


      {/* Container */}
      <div className="relative z-10 mx-auto w-full max-w-6xl">


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
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">


          {projects.map((project, index) => {
            const hasLive = project.live && project.live !== "#";
            const BrowserContent = (
              <>
                {/* Browser Header */}
                <div className="
                  flex
                  items-center
                  gap-2
                  border-b
                  border-[#29352d]
                  bg-[#151c17]
                  px-3
                  py-2
                ">

                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />


                  <div className="
                    ml-3
                    h-5
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
                  h-[160px]
                  overflow-hidden
                  sm:h-[180px]
                  md:h-[200px]
                ">

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width:768px) 100vw, 450px"
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
                    h-20
                    bg-gradient-to-t
                    from-[#171f19]
                    to-transparent
                  "/>


                </div>
              </>
            );

            return (

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
                flex
                flex-col
                rounded-2xl
                border
                border-[#2d3a30]
                bg-[#171f19]
                p-4
                md:p-5
                transition-all
                duration-500
                hover:border-[#a3b18a]/50
                hover:shadow-[0_15px_40px_rgba(163,177,138,0.12)]
              "
            >


              {/* Title */}
              <h3 className="
                mb-4
                text-center
                text-lg
                md:text-xl
                font-bold
                text-[#f5f1e8]
                group-hover:text-[#a3b18a]
                transition-colors
              ">
                {project.title}
              </h3>



              {/* Browser - clickable to live site when available */}
              {hasLive ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Open live site"
                  className="block overflow-hidden rounded-xl border border-[#344137] bg-[#101512] cursor-pointer"
                >
                  {BrowserContent}
                </a>
              ) : (
                <div className="overflow-hidden rounded-xl border border-[#344137] bg-[#101512]">
                  {BrowserContent}
                </div>
              )}
                            {/* Description */}
              <p className="
                mx-auto
                mt-4
                max-w-md
                text-center
                text-xs
                md:text-sm
                leading-6
                text-[#cfc8bc]
              ">
                {project.description}
              </p>


              {/* Github */}
              <div className="mt-5 flex justify-center">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-lg
                    border
                    border-[#39463b]
                    bg-[#1b241d]
                    px-4
                    py-2
                    text-sm
                    text-[#f5f1e8]
                    transition-all
                    hover:border-[#a3b18a]
                    hover:text-[#a3b18a]
                  "
                >

                  <FaGithub size={16}/>

                  Github

                </a>

              </div>


            </motion.div>

            );
          })}


        </div>


      </div>


    </section>
  );
}