"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaProjectDiagram,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiSap,
} from "react-icons/si";

const categories = {
  Technical: [
    {
      name: "HTML5",
      icon: <FaHtml5 />,
    },

    {
      name: "CSS3",
      icon: <FaCss3Alt />,
    },

    {
      name: "JavaScript",
      icon: <FaJs />,
    },

    {
      name: "React.js",
      icon: <FaReact />,
    },

    {
      name: "Next.js",
      icon: <SiNextdotjs />,
    },

    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
    },

    {
      name: "Node.js",
      icon: <FaNodeJs />,
    },

    {
      name: "Express.js",
      icon: <SiExpress />,
    },

    {
      name: "MongoDB",
      icon: <SiMongodb />,
    },

    {
      name: "SQL",
      icon: <SiMysql />,
    },
  ],

  Tools: [
    {
      name: "Git",
      icon: <FaGitAlt />,
    },

    {
      name: "GitHub",
      icon: <FaGithub />,
    },

    {
      name: "SAP SCM",
      icon: <SiSap />,
    },

    {
      name: "Excel",
      icon: "📊",
    },
  ],

  "Non-Tech": [
    {
      name: "Project Mgmt",
      icon: <FaProjectDiagram />,
    },

    {
      name: "Communication",
      icon: "💬",
    },

    {
      name: "Leadership",
      icon: "🚀",
    },

    {
      name: "Team Work",
      icon: "🤝",
    },
  ],
};

export default function Skills() {
  const [active, setActive] =
    useState("Technical");

  return (
    <section
      id="skills"
      className="py-28 overflow-hidden"
    >
      <div className="container-custom">
        {/* HEADING */}

        <div className="text-center mb-20">
          <p
            className="
            text-[#a3b18a]
            uppercase
            tracking-[4px]
            text-sm
            font-semibold
            "
          >
            MY SKILLS
          </p>

          <h2
            className="
            mt-4
            text-5xl
            md:text-6xl
            font-black
            tracking-[-2px]
            "
          >
            Skills &
            <span className="gradient-text">
              {" "}
              Technologies
            </span>
          </h2>

          <p
            className="
            mt-6
            max-w-[700px]
            mx-auto
            text-slate-400
            text-lg
            leading-8
            "
          >
            Technologies and tools I use to
            build scalable and modern digital
            experiences.
          </p>
        </div>

        {/* MAIN */}

        <div
          className="
          grid
          lg:grid-cols-[0.8fr_1.2fr]
          gap-16
          items-start
          "
        >
          {/* LEFT SIDE */}

<motion.div
  initial={{
    opacity: 0,
    x: -30,
  }}
  whileInView={{
    opacity: 1,
    x: 0,
  }}
  transition={{
    duration: 0.7,
  }}
  viewport={{ once: true }}
  className="
  relative
  min-h-[520px]
  flex
  items-center
  justify-center
  "
>
  {/* GLOW */}

  <div
    className="
    absolute
    w-[320px]
    h-[320px]
    rounded-full
    bg-[#a3b18a]/10
    blur-[90px]
    "
  />

  {/* CENTER */}

  <motion.div
    whileHover={{
      scale: 1.05,
    }}
    className="
    absolute
    z-20
    w-[130px]
    h-[130px]
    rounded-full
    border
    border-[#a3b18a]/30
    bg-[#1f2b22]
    flex
    items-center
    justify-center
    shadow-[0_0_40px_rgba(163,177,138,0.15)]
    "
  >
    <div className="text-center">
      <h3
        className="
        text-3xl
        font-black
        gradient-text
        "
      >
        MERN
      </h3>

      <p className="text-slate-400 text-sm mt-1">
        Stack
      </p>
    </div>
  </motion.div>

  {/* FRONTEND */}

  <div
    className="
    absolute
    top-8
    left-16
    z-10
    "
  >
    <div
      className="
      px-5
      py-4
      rounded-[18px]
      border
      border-white/10
      bg-white/[0.03]
      backdrop-blur-xl
      "
    >
      <h4
        className="
        text-white
        font-semibold
        "
      >
        Frontend
      </h4>

      <p
        className="
        text-[#a3b18a]
        text-sm
        mt-1
        "
      >
        92%
      </p>
    </div>
  </div>

  {/* BACKEND */}

  <div
    className="
    absolute
    top-12
    right-10
    z-10
    "
  >
    <div
      className="
      px-5
      py-4
      rounded-[18px]
      border
      border-white/10
      bg-white/[0.03]
      backdrop-blur-xl
      "
    >
      <h4
        className="
        text-white
        font-semibold
        "
      >
        Backend
      </h4>

      <p
        className="
        text-[#a3b18a]
        text-sm
        mt-1
        "
      >
        72%
      </p>
    </div>
  </div>

  {/* SAP */}

  <div
    className="
    absolute
    bottom-16
    left-12
    z-10
    "
  >
    <div
      className="
      px-5
      py-4
      rounded-[18px]
      border
      border-white/10
      bg-white/[0.03]
      backdrop-blur-xl
      "
    >
      <h4
        className="
        text-white
        font-semibold
        "
      >
        SAP SCM
      </h4>

      <p
        className="
        text-[#a3b18a]
        text-sm
        mt-1
        "
      >
        60%
      </p>
    </div>
  </div>

  {/* PM */}

  <div
    className="
    absolute
    bottom-10
    right-14
    z-10
    "
  >
    <div
      className="
      px-5
      py-4
      rounded-[18px]
      border
      border-white/10
      bg-white/[0.03]
      backdrop-blur-xl
      "
    >
      <h4
        className="
        text-white
        font-semibold
        "
      >
        PM Skills
      </h4>

      <p
        className="
        text-[#a3b18a]
        text-sm
        mt-1
        "
      >
        70%
      </p>
    </div>
  </div>

  {/* CONNECTION LINES */}

  <div
    className="
    absolute
    w-[2px]
    h-[120px]
    bg-gradient-to-b
    from-[#a3b18a]/40
    to-transparent
    top-[120px]
    left-[170px]
    rotate-[40deg]
    "
  />

  <div
    className="
    absolute
    w-[2px]
    h-[120px]
    bg-gradient-to-b
    from-[#a3b18a]/40
    to-transparent
    top-[120px]
    right-[170px]
    rotate-[-40deg]
    "
  />

  <div
    className="
    absolute
    w-[2px]
    h-[120px]
    bg-gradient-to-b
    from-[#a3b18a]/40
    to-transparent
    bottom-[120px]
    left-[170px]
    rotate-[-40deg]
    "
  />

  <div
    className="
    absolute
    w-[2px]
    h-[120px]
    bg-gradient-to-b
    from-[#a3b18a]/40
    to-transparent
    bottom-[120px]
    right-[170px]
    rotate-[40deg]
    "
  />
</motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{ once: true }}
          >
            {/* TOP TABS */}

            <div
              className="
              flex
              flex-wrap
              gap-4
              mb-8
              "
            >
              {Object.keys(categories).map(
                (category) => (
                  <button
                    key={category}
                    onClick={() =>
                      setActive(category)
                    }
                    className={`
                      px-7
                      py-3
                      rounded-[12px]
                      border
                      text-[15px]
                      font-semibold
                      transition-all
                      duration-300

                      ${
                        active === category
                          ? "bg-[#a3b18a]/15 border-[#a3b18a]/40 text-[#dce4c7]"
                          : "bg-white/[0.03] border-white/10 text-slate-400 hover:border-[#a3b18a]/30"
                      }
                    `}
                  >
                    {category}
                  </button>
                )
              )}
            </div>

            {/* SKILLS */}

            <motion.div
              key={active}
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
              grid
              grid-cols-2
              md:grid-cols-4
              gap-4
              "
            >
              {categories[active].map(
                (skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{
                      y: -4,
                    }}
                    className="
                    border
                    border-white/10
                    bg-white/[0.03]
                    rounded-[12px]
                    h-[120px]
                    flex
                    flex-col
                    items-center
                    justify-center
                    text-center
                    gap-3
                    transition-all
                    duration-300
                    hover:border-[#a3b18a]/30
                    hover:bg-white/[0.05]
                    "
                  >
                    {/* ICON */}

                    <div
                      className="
                      text-[30px]
                      text-[#a3b18a]
                      "
                    >
                      {skill.icon}
                    </div>

                    {/* TEXT */}

                    <p
                      className="
                      text-[14px]
                      font-medium
                      text-white
                      leading-5
                      px-2
                      "
                    >
                      {skill.name}
                    </p>
                  </motion.div>
                )
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}