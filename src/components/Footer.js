// "use client";

// import { Mail } from "lucide-react";
// import { FaLinkedin, FaGithub } from "react-icons/fa";

// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <footer className="relative overflow-hidden border-t border-white/10 bg-[#1e2a22] py-12">

//       {/* Top Glow */}
//       <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#a3b18a] to-transparent opacity-70" />

//       <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10">

//         {/* Top Row */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-10">

//           {/* Logo */}
//           <div className="flex justify-center lg:justify-start">
//             <button
//               onClick={scrollToTop}
//               className="flex items-center gap-3 group"
//             >
//               <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#a3b18a] to-[#588157] text-[#f5f1e8] font-bold shadow-lg shadow-[#a3b18a]/20 transition-all duration-300 group-hover:scale-105">
//                 UY
//               </div>

//               <h2 className="text-xl font-semibold text-[#f5f1e8]">
//                 Utakarsh
//                 <span className="text-[#a3b18a]">.</span>
//                 Yadav
//               </h2>
//             </button>
//           </div>

//           {/* Center Text */}
//           <div className="text-center">
//             <p className="text-[#cfc8bc] text-sm md:text-base">
//               Built with passion, curiosity & creativity.
//             </p>
//           </div>

//           {/* Socials */}
//           <div className="flex justify-center lg:justify-end gap-4">

//             <a
//               href="https://linkedin.com/in/utakarshyadav2023"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="rounded-xl border border-white/10 bg-white/5 p-3 text-[#cfc8bc] transition-all duration-300 hover:-translate-y-1 hover:border-[#a3b18a] hover:text-[#a3b18a]"
//             >
//               <FaLinkedin size={18} />
//             </a>

//             <a
//               href="https://github.com/UtakarshYadav"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="rounded-xl border border-white/10 bg-white/5 p-3 text-[#cfc8bc] transition-all duration-300 hover:-translate-y-1 hover:border-[#a3b18a] hover:text-[#a3b18a]"
//             >
//               <FaGithub size={18} />
//             </a>

//             <a
//               href="mailto:uttkarshyadavdb@gmail.com"
//               className="rounded-xl border border-white/10 bg-white/5 p-3 text-[#cfc8bc] transition-all duration-300 hover:-translate-y-1 hover:border-[#a3b18a] hover:text-[#a3b18a]"
//             >
//               <Mail size={18} />
//             </a>

//           </div>

//         </div>

//         {/* Divider */}
//         <div className="my-8 h-px bg-white/10" />

//         {/* Bottom */}
//         <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">

//           <p className="text-center md:text-left">
//             © {currentYear} Utkarsh Yadav. All rights reserved.
//           </p>

//           <p className="font-mono">
//             SYSTEM STATUS :
//             <span className="ml-2 text-[#a3b18a] animate-pulse">
//               ● OPTIMIZED
//             </span>
//           </p>

//         </div>

//       </div>

//     </footer>
//   );
// }




"use client";

import { Mail, ArrowUp } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#1e2a22] py-14 sm:py-16 md:py-20 w-full">

      {/* Top Subtle Gradient Glow Line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#a3b18a]/80 to-transparent" />

      {/* Background Soft Radial Ambient Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#a3b18a]/5 blur-[140px] pointer-events-none rounded-full" />

      {/* Properly Centered Container with Symmetrical Side Padding */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">

        {/* Top Content Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 md:gap-6">

          {/* Left: Brand / Logo */}
          <div className="flex justify-center md:justify-start">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-3 group text-left transition-all duration-300"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#a3b18a] to-[#588157] text-[#f5f1e8] font-extrabold text-lg shadow-lg shadow-[#a3b18a]/20 transition-transform duration-300 group-hover:scale-105 shrink-0">
                UY
              </div>

              <div className="flex flex-col">
                <h2 className="text-xl font-bold text-[#f5f1e8] tracking-tight group-hover:text-[#a3b18a] transition-colors">
                  Utakarsh<span className="text-[#a3b18a]">.</span>Yadav
                </h2>
                <span className="text-[11px] text-slate-400 font-medium">Software Developer</span>
              </div>
            </button>
          </div>

          {/* Center: Tagline */}
          <div className="text-center">
            <p className="text-[#cfc8bc] text-sm sm:text-base font-normal leading-relaxed">
              Built with passion, curiosity & creativity ✨
            </p>
          </div>

          {/* Right: Quick Social Action Icons */}
          <div className="flex justify-center md:justify-end items-center gap-3">
            <a
              href="https://linkedin.com/in/utakarshyadav2023"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-xl border border-white/10 bg-white/5 p-3 text-[#cfc8bc] hover:text-[#a3b18a] hover:border-[#a3b18a]/40 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 shadow-md"
            >
              <FaLinkedin size={19} />
            </a>

            <a
              href="https://github.com/UtakarshYadav"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-xl border border-white/10 bg-white/5 p-3 text-[#cfc8bc] hover:text-[#a3b18a] hover:border-[#a3b18a]/40 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 shadow-md"
            >
              <FaGithub size={19} />
            </a>

            <a
              href="mailto:uttkarshyadavdb@gmail.com"
              aria-label="Email"
              className="rounded-xl border border-white/10 bg-white/5 p-3 text-[#cfc8bc] hover:text-[#a3b18a] hover:border-[#a3b18a]/40 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 shadow-md"
            >
              <Mail size={19} />
            </a>

            <button
              onClick={scrollToTop}
              title="Back to top"
              aria-label="Back to top"
              className="rounded-xl border border-[#a3b18a]/30 bg-[#a3b18a]/15 p-3 text-[#a3b18a] hover:bg-[#a3b18a] hover:text-black transition-all duration-300 hover:-translate-y-1 shadow-md ml-1"
            >
              <ArrowUp size={19} />
            </button>
          </div>

        </div>

        {/* Divider */}
        <div className="my-8 sm:my-10 h-px bg-white/10" />

        {/* Bottom Bar: Copyright & System Status */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-400">

          <p className="text-center sm:text-left">
            © {currentYear} Utkarsh Yadav. All rights reserved.
          </p>

          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="text-slate-400">SYSTEM STATUS:</span>
            <span className="inline-flex items-center gap-1.5 text-[#a3b18a] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#a3b18a] animate-pulse" />
              OPTIMIZED
            </span>
          </div>

        </div>

      </div>

    </footer>
  );
}

