// "use client";

// import { motion } from "framer-motion";
// import { FaGithub, FaLinkedin } from "react-icons/fa";

// export default function Hero() {
//   return (
//     <section
//       id="home"
//       className="min-h-screen flex items-center overflow-hidden py-20"
//     >
//       <div className="container-custom">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">

//           {/* LEFT */}

//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <span
//               className="
//               text-[#a3b18a]
//               uppercase
//               tracking-[8px]
//               text-xs
//               "
//             >
//               Welcome
//             </span>

//             <h1
//               className="
//               mt-6
//               text-6xl
//               md:text-8xl
//               font-black
//               leading-[0.88]
//               "
//             >
//               Hi.
//               <br />
//               Get Ready
//               <br />
//               To Build
//               <br />
//               Something
//               <span className="text-[#a3b18a]">
//                 {" "}Amazing.
//               </span>
//             </h1>

//             <p
//               className="
//               mt-8
//               text-lg
//               max-w-xl
//               text-[#cfc8bc]
//               leading-8
//               "
//             >
//               Great things aren't built alone.
//               <br />
//               They start with ideas,
//               grow through collaboration,
//               and leave a lasting impact.
//             </p>

//             {/* BUTTONS */}

//             <div
//               className="
//               mt-12
//               grid
//               grid-cols-2
//               md:grid-cols-4
//               gap-4
//               "
//             >
//               <a
//                 href="#projects"
//                 className="
//                 h-14
//                 rounded-xl
//                 border border-white/10
//                 bg-white/5
//                 backdrop-blur-md
//                 flex items-center justify-center
//                 hover:border-[#a3b18a]
//                 hover:bg-[#a3b18a]/10
//                 transition-all duration-300
//                 "
//               >
//                 Projects
//               </a>

//               <a
//                 href="/EUtakarsh.pdf"
//                 target="_blank"
//                 className="
//                 h-14
//                 rounded-xl
//                 border border-white/10
//                 bg-white/5
//                 backdrop-blur-md
//                 flex items-center justify-center
//                 hover:border-[#a3b18a]
//                 hover:bg-[#a3b18a]/10
//                 transition-all duration-300
//                 "
//               >
//                 Resume
//               </a>

//               <a
//                 href="https://github.com/UtakarshYadav"
//                 target="_blank"
//                 className="
//                 h-14
//                 rounded-xl
//                 border border-white/10
//                 bg-white/5
//                 backdrop-blur-md
//                 flex items-center justify-center gap-2
//                 hover:border-[#a3b18a]
//                 hover:bg-[#a3b18a]/10
//                 transition-all duration-300
//                 "
//               >
//                 <FaGithub />
//                 GitHub
//               </a>

//               <a
//                 href="https://linkedin.com/in/utakarshyadav2023"
//                 target="_blank"
//                 className="
//                 h-14
//                 rounded-xl
//                 border border-white/10
//                 bg-white/5
//                 backdrop-blur-md
//                 flex items-center justify-center gap-2
//                 hover:border-[#a3b18a]
//                 hover:bg-[#a3b18a]/10
//                 transition-all duration-300
//                 "
//               >
//                 <FaLinkedin />
//                 LinkedIn
//               </a>
//             </div>

//             <p
//               className="
//               mt-10
//               text-[#a3b18a]
//               text-xl
//               italic
//               "
//             >
//               "Let's make history together."
//             </p>
//           </motion.div>
          
          
//   {/* RIGHT */}

//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="flex justify-center items-center"
//           >
//             <div className="relative flex items-center justify-center w-full py-10">

//               {/* Glow */}
//               <div className="absolute w-[520px] h-[520px] rounded-full bg-[#a3b18a]/20 blur-[140px]" />

//               {/* Floating Card */}
//               <motion.div
//                 animate={{
//                   y: [0, -12, 0],
//                 }}
//                 transition={{
//                   duration: 6,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 className="
//         relative
//         w-full
//         max-w-[420px]
//         aspect-square
//         rounded-[40px]
//         border
//         border-white/10
//         bg-white/5
//         backdrop-blur-xl
//         overflow-hidden
//         flex
//         items-center
//         justify-center
//       "
//               >
//                 {/* Decorative Glow */}
//                 <div className="absolute top-8 right-8 w-28 h-28 rounded-full bg-[#a3b18a]/10 blur-3xl" />
//                 <div className="absolute bottom-8 left-8 w-28 h-28 rounded-full bg-[#a3b18a]/10 blur-3xl" />

//                 <div className="text-center px-8">

//                   <p className="text-[#a3b18a] uppercase tracking-[4px] text-sm">
//                     Together
//                   </p>

//                   <h2 className="mt-4 text-5xl md:text-6xl font-black leading-tight">
//                     Build.
//                     <br />
//                     Create.
//                     <br />
//                     Inspire.
//                   </h2>

//                   <div className="mt-8 space-y-2 text-[#cfc8bc]">
//                     <p>🚀 Big Ideas</p>
//                     <p>⚡ Fast Execution</p>
//                     <p>🌍 Real Impact</p>
//                     <p>🤝 Build Together</p>
//                   </div>

//                 </div>
//               </motion.div>

//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center overflow-hidden py-20"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span
              className="
              text-[#a3b18a]
              uppercase
              tracking-[8px]
              text-xs
              "
            >
              Welcome
            </span>

            <h1
              className="
              mt-6
              text-6xl
              md:text-8xl
              font-black
              leading-[0.88]
              "
            >
              Hi.
              <br />
              Get Ready
              <br />
              To Build
              <br />
              Something
              <span className="text-[#a3b18a]">
                {" "}Amazing.
              </span>
            </h1>

            <p
              className="
              mt-8
              text-lg
              max-w-xl
              text-[#cfc8bc]
              leading-8
              "
            >
              Great things aren't built alone.
              <br />
              They start with ideas,
              grow through collaboration,
              and leave a lasting impact.
            </p>

            {/* BUTTONS */}

            <div
              className="
              mt-12
              grid
              grid-cols-2
              md:grid-cols-4
              gap-4
              "
            >
              <a
                href="#projects"
                className="
                h-14
                rounded-xl
                border border-white/10
                bg-white/5
                backdrop-blur-md
                flex items-center justify-center
                hover:border-[#a3b18a]
                hover:bg-[#a3b18a]/10
                transition-all duration-300
                "
              >
                Projects
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                className="
                h-14
                rounded-xl
                border border-white/10
                bg-white/5
                backdrop-blur-md
                flex items-center justify-center
                hover:border-[#a3b18a]
                hover:bg-[#a3b18a]/10
                transition-all duration-300
                "
              >
                Resume
              </a>

              <a
                href="https://github.com/UtakarshYadav"
                target="_blank"
                className="
                h-14
                rounded-xl
                border border-white/10
                bg-white/5
                backdrop-blur-md
                flex items-center justify-center gap-2
                hover:border-[#a3b18a]
                hover:bg-[#a3b18a]/10
                transition-all duration-300
                "
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/utakarshyadav2023"
                target="_blank"
                className="
                h-14
                rounded-xl
                border border-white/10
                bg-white/5
                backdrop-blur-md
                flex items-center justify-center gap-2
                hover:border-[#a3b18a]
                hover:bg-[#a3b18a]/10
                transition-all duration-300
                "
              >
                <FaLinkedin />
                LinkedIn
              </a>
            </div>

            <p
              className="
              mt-10
              text-[#a3b18a]
              text-xl
              italic
              "
            >
              "Let's make history together."
            </p>
          </motion.div>
          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center items-center"
          >
            <div className="relative flex items-center justify-center w-full py-10">

              {/* Glow */}
              <div className="absolute w-[520px] h-[520px] rounded-full bg-[#a3b18a]/20 blur-[140px]" />

              {/* Floating Card */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
        relative
        w-full
        max-w-[420px]
        min-h-[420px]
        rounded-[40px]
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        overflow-hidden
        flex
        items-center
        justify-center
        py-10
      "
              >
                {/* Decorative Glow */}
                <div className="absolute top-8 right-8 w-28 h-28 rounded-full bg-[#a3b18a]/10 blur-3xl" />
                <div className="absolute bottom-8 left-8 w-28 h-28 rounded-full bg-[#a3b18a]/10 blur-3xl" />

                <div className="text-center px-8">

                  <p className="text-[#a3b18a] uppercase tracking-[4px] text-sm">
                    Together
                  </p>

                  <h2 className="mt-3 text-4xl md:text-5xl font-black leading-tight">
                    Build.
                    <br />
                    Create.
                    <br />
                    Inspire.
                  </h2>

                  <div className="mt-6 space-y-1.5 text-[#cfc8bc]">
                    <p>🚀 Big Ideas</p>
                    <p>⚡ Fast Execution</p>
                    <p>🌍 Real Impact</p>
                    <p>🤝 Build Together</p>
                  </div>

                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}