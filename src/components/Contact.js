// "use client";

// import { motion } from "framer-motion";
// import {
//   Mail,
//   Phone,
//   MapPin,
// } from "lucide-react";

// import {
//   FaGithub,
//   FaLinkedin,
// } from "react-icons/fa";

// export default function Contact() {
//   return (
//     <section
//       id="contact"
//       className="relative py-28 px-6 md:px-12 lg:px-20"
//     >
//       <div className="max-w-7xl mx-auto">

//         {/* Top Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="mb-16"
//         >
//           <p className="uppercase tracking-[4px] text-sm text-[#a3b18a]">
//             Contact
//           </p>

//           <h2 className="mt-4 text-5xl md:text-7xl font-bold text-[#f5f1e8] leading-tight">
//             Turning Ideas
//             <br />
//             Into Reality 🚀
//           </h2>

//           <p className="mt-6 text-[#cfc8bc] max-w-2xl text-lg leading-relaxed">
//             Building modern and user-focused digital experiences
//             with clean UI and smooth interactions.
//           </p>
//         </motion.div>

//         {/* Main Layout */}
//         <div className="grid lg:grid-cols-[1.5fr_.5fr] gap-10 items-stretch">

//           {/* Left Side */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl p-10 md:p-14"
//           >

//             {/* Email */}
//             <div className="flex items-center justify-between border-b border-white/10 py-8">

//               <div>
//                 <p className="text-sm text-[#a3b18a] uppercase tracking-[3px]">
//                   Email
//                 </p>

//                 <h3 className="mt-2 text-2xl md:text-3xl text-[#f5f1e8] font-semibold break-all">
//                   uttkarshyadavdb@gmail.com
//                 </h3>
//               </div>

//               <Mail
//                 size={30}
//                 className="text-[#a3b18a]"
//               />
//             </div>

//             {/* Phone */}
//             <div className="flex items-center justify-between border-b border-white/10 py-8">

//               <div>
//                 <p className="text-sm text-[#a3b18a] uppercase tracking-[3px]">
//                   Phone
//                 </p>

//                 <h3 className="mt-2 text-2xl md:text-3xl text-[#f5f1e8] font-semibold">
//                   +91 8743065285
//                 </h3>
//               </div>

//               <Phone
//                 size={30}
//                 className="text-[#a3b18a]"
//               />
//             </div>

//             {/* Location */}
//             <div className="flex items-center justify-between py-8">

//               <div>
//                 <p className="text-sm text-[#a3b18a] uppercase tracking-[3px]">
//                   Location
//                 </p>

//                 <h3 className="mt-2 text-2xl md:text-3xl text-[#f5f1e8] font-semibold">
//                   Delhi, India
//                 </h3>
//               </div>

//               <MapPin
//                 size={30}
//                 className="text-[#a3b18a]"
//               />
//             </div>
//           </motion.div>

//           {/* Right Side Socials */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//             className="flex lg:flex-col gap-6"
//           >

//             {/* Github */}
//             <a
//               href="https://github.com/UtakarshYadav"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex-1 rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl flex flex-col items-center justify-center hover:border-[#a3b18a]/40 transition-all duration-300 group min-h-[180px]"
//             >
//               <FaGithub
//                 size={42}
//                 className="text-[#f5f1e8] group-hover:text-[#a3b18a] transition-all duration-300"
//               />

//               <p className="mt-5 text-[#cfc8bc] tracking-[3px] uppercase text-sm">
//                 Github
//               </p>
//             </a>

//             {/* Linkedin */}
//             <a
//               href="https://linkedin.com/in/utakarshyadav2023"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex-1 rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl flex flex-col items-center justify-center hover:border-[#a3b18a]/40 transition-all duration-300 group min-h-[180px]"
//             >
//               <FaLinkedin
//                 size={42}
//                 className="text-[#f5f1e8] group-hover:text-[#a3b18a] transition-all duration-300"
//               />

//               <p className="mt-5 text-[#cfc8bc] tracking-[3px] uppercase text-sm">
//                 Linkedin
//               </p>
//             </a>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-36 px-6 sm:px-10 lg:px-16 bg-[#0b120c] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[750px] h-[500px] bg-[#a3b18a]/10 blur-[170px] pointer-events-none rounded-full" />

      {/* Main Container - Shifted towards the right side (ml-auto with right spacing) */}
      <div className="max-w-5xl ml-auto mr-0 sm:mr-2 md:mr-8 lg:mr-12 relative z-10 flex flex-col items-end w-full">

        {/* Section Heading - Right Aligned / Shifted Right */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 md:mb-16 max-w-2xl text-right flex flex-col items-end space-y-4"
        >
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#a3b18a]/15 text-[#a3b18a] uppercase tracking-[3px] text-xs sm:text-sm font-semibold border border-[#a3b18a]/30">
              CONTACT & CONNECT
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#f5f1e8] leading-tight tracking-tight text-right">
            Turning Ideas <br className="hidden sm:inline" />
            <span className="text-[#a3b18a]">Into Reality 🚀</span>
          </h2>

          <p className="mt-2 text-[#cfc8bc] text-base sm:text-lg max-w-xl font-normal leading-relaxed text-right">
            Building modern and user-focused digital experiences with clean UI and smooth interactions.
          </p>
        </motion.div>

        {/* Main Grid: Line-by-line Contact Info on Left, GitHub & LinkedIn Buttons on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full items-start">

          {/* Left Side (7 Cols): Email -> Phone -> Location Line by Line */}
          <div className="lg:col-span-7 flex flex-col gap-4 w-full">

            {/* Email Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 sm:p-6 flex items-center justify-between shadow-xl hover:border-[#a3b18a]/40 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 min-w-0 pr-2">
                <div className="w-11 h-11 rounded-xl bg-[#a3b18a]/15 border border-[#a3b18a]/25 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail size={20} className="text-[#a3b18a]" />
                </div>
                <div className="min-w-0 text-left">
                  <p className="text-[11px] text-[#a3b18a] uppercase tracking-[2px] font-semibold">
                    Email
                  </p>
                  <a
                    href="mailto:uttkarshyadavdb@gmail.com"
                    className="mt-0.5 text-sm sm:text-base md:text-lg font-bold text-[#f5f1e8] hover:text-[#a3b18a] transition-colors duration-300 block truncate"
                  >
                    uttkarshyadavdb@gmail.com
                  </a>
                </div>
              </div>

              <a
                href="mailto:uttkarshyadavdb@gmail.com"
                className="w-9 h-9 rounded-xl bg-[#a3b18a]/15 border border-[#a3b18a]/30 flex items-center justify-center text-[#a3b18a] hover:bg-[#a3b18a] hover:text-black transition-all duration-300 shrink-0 shadow-sm"
                title="Send Email"
              >
                <Mail size={16} />
              </a>
            </motion.div>

            {/* Phone Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 sm:p-6 flex items-center justify-between shadow-xl hover:border-[#a3b18a]/40 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 min-w-0 pr-2">
                <div className="w-11 h-11 rounded-xl bg-[#a3b18a]/15 border border-[#a3b18a]/25 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Phone size={20} className="text-[#a3b18a]" />
                </div>
                <div className="min-w-0 text-left">
                  <p className="text-[11px] text-[#a3b18a] uppercase tracking-[2px] font-semibold">
                    Phone
                  </p>
                  <a
                    href="tel:+918743065285"
                    className="mt-0.5 text-sm sm:text-base md:text-lg font-bold text-[#f5f1e8] hover:text-[#a3b18a] transition-colors duration-300 block truncate"
                  >
                    +91 8743065285
                  </a>
                </div>
              </div>

              <a
                href="tel:+918743065285"
                className="w-9 h-9 rounded-xl bg-[#a3b18a]/15 border border-[#a3b18a]/30 flex items-center justify-center text-[#a3b18a] hover:bg-[#a3b18a] hover:text-black transition-all duration-300 shrink-0 shadow-sm"
                title="Call Phone"
              >
                <Phone size={16} />
              </a>
            </motion.div>

            {/* Location Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 sm:p-6 flex items-center justify-between shadow-xl hover:border-[#a3b18a]/40 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 min-w-0 pr-2">
                <div className="w-11 h-11 rounded-xl bg-[#a3b18a]/15 border border-[#a3b18a]/25 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <MapPin size={20} className="text-[#a3b18a]" />
                </div>
                <div className="min-w-0 text-left">
                  <p className="text-[11px] text-[#a3b18a] uppercase tracking-[2px] font-semibold">
                    Location
                  </p>
                  <h4 className="mt-0.5 text-sm sm:text-base md:text-lg font-bold text-[#f5f1e8]">
                    Delhi, India
                  </h4>
                </div>
              </div>

              <div className="w-9 h-9 rounded-xl bg-[#a3b18a]/15 border border-[#a3b18a]/30 flex items-center justify-center text-[#a3b18a] shrink-0 shadow-sm">
                <MapPin size={16} />
              </div>
            </motion.div>

          </div>

          {/* Right Side (5 Cols): GitHub & LinkedIn Buttons */}
          <div className="lg:col-span-5 flex flex-col gap-4 w-full">

            {/* GitHub Button Box */}
            <motion.a
              href="https://github.com/UtakarshYadav"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 sm:p-6 flex items-center justify-between shadow-xl hover:border-[#a3b18a]/50 hover:bg-white/[0.08] transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center gap-4 text-left">
                <div className="w-11 h-11 rounded-xl bg-[#a3b18a]/15 border border-[#a3b18a]/25 flex items-center justify-center shrink-0 text-[#a3b18a] group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <FaGithub size={22} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#f5f1e8] group-hover:text-[#a3b18a] transition-colors duration-300">
                    GitHub
                  </h4>
                  <p className="text-xs text-slate-400">UtakarshYadav</p>
                </div>
              </div>

              <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#a3b18a]/15 border border-[#a3b18a]/30 text-xs font-semibold text-[#a3b18a] group-hover:bg-[#a3b18a] group-hover:text-black transition-all duration-300 shrink-0 shadow-sm">
                <span>Visit</span>
                <ExternalLink size={13} />
              </span>
            </motion.a>

            {/* LinkedIn Button Box */}
            <motion.a
              href="https://linkedin.com/in/utakarshyadav2023"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 sm:p-6 flex items-center justify-between shadow-xl hover:border-[#a3b18a]/50 hover:bg-white/[0.08] transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center gap-4 text-left">
                <div className="w-11 h-11 rounded-xl bg-[#a3b18a]/15 border border-[#a3b18a]/25 flex items-center justify-center shrink-0 text-[#a3b18a] group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <FaLinkedin size={22} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#f5f1e8] group-hover:text-[#a3b18a] transition-colors duration-300">
                    LinkedIn
                  </h4>
                  <p className="text-xs text-slate-400">utakarshyadav2023</p>
                </div>
              </div>

              <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#a3b18a]/15 border border-[#a3b18a]/30 text-xs font-semibold text-[#a3b18a] group-hover:bg-[#a3b18a] group-hover:text-black transition-all duration-300 shrink-0 shadow-sm">
                <span>Connect</span>
                <ExternalLink size={13} />
              </span>
            </motion.a>

          </div>

        </div>
      </div>
    </section>
  );
}


