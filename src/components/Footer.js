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
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#1e2a22] py-5 sm:py-6 w-full">

      {/* Top Subtle Gradient Glow Line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#a3b18a]/60 to-transparent" />

      {/* Background Soft Radial Ambient Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[220px] bg-[#a3b18a]/[0.04] blur-[130px] pointer-events-none rounded-full" />

      {/* Properly Centered Container with Symmetrical Side Padding */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top Content Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4">

          {/* Left: Brand / Logo */}
          <div className="flex justify-center md:justify-start">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2.5 group text-left transition-all duration-300"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#a3b18a] to-[#588157] text-[#f5f1e8] font-bold text-sm shadow-md shadow-[#a3b18a]/15 transition-transform duration-300 group-hover:scale-105 shrink-0">
                UY
              </div>

              <div className="flex flex-col">
                <h2 className="text-base font-bold text-[#f5f1e8] tracking-tight group-hover:text-[#a3b18a] transition-colors">
                  Utakarsh<span className="text-[#a3b18a]">.</span>Yadav
                </h2>
                <span className="text-[10px] text-slate-400 font-medium">Software Developer</span>
              </div>
            </button>
          </div>

          {/* Center: Tagline */}
          <div className="text-center">
            <p className="text-[#cfc8bc]/80 text-xs sm:text-sm font-normal leading-relaxed">
              Built with passion, curiosity & creativity ✨
            </p>
          </div>

          {/* Right: Quick Social Action Icons */}
          <div className="flex justify-center md:justify-end items-center gap-2">
            <a
              href="https://linkedin.com/in/utakarshyadav2023"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-lg border border-white/10 bg-white/5 p-2.5 text-[#cfc8bc] hover:text-[#a3b18a] hover:border-[#a3b18a]/40 hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
            >
              <FaLinkedin size={16} />
            </a>

            <a
              href="https://github.com/UtakarshYadav"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-lg border border-white/10 bg-white/5 p-2.5 text-[#cfc8bc] hover:text-[#a3b18a] hover:border-[#a3b18a]/40 hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
            >
              <FaGithub size={16} />
            </a>

            <a
              href="mailto:uttkarshyadavdb@gmail.com"
              aria-label="Email"
              className="rounded-lg border border-white/10 bg-white/5 p-2.5 text-[#cfc8bc] hover:text-[#a3b18a] hover:border-[#a3b18a]/40 hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Mail size={16} />
            </a>

            <button
              onClick={scrollToTop}
              title="Back to top"
              aria-label="Back to top"
              className="rounded-lg border border-[#a3b18a]/30 bg-[#a3b18a]/15 p-2.5 text-[#a3b18a] hover:bg-[#a3b18a] hover:text-black transition-all duration-300 hover:-translate-y-0.5 ml-1"
            >
              <ArrowUp size={16} />
            </button>
          </div>

        </div>

        {/* Divider */}
        <div className="my-4 h-px bg-white/10" />

        {/* Bottom Bar: Copyright & System Status */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">

          <p className="text-center sm:text-left">
            © {currentYear} Utakarsh Yadav. All rights reserved.
          </p>

          <div className="flex items-center gap-2 font-mono text-[11px]">
            <span className="text-slate-500">SYSTEM STATUS:</span>
            <span className="inline-flex items-center gap-1.5 text-[#a3b18a]/90 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a3b18a] animate-pulse" />
              OPTIMIZED
            </span>
          </div>

        </div>

      </div>

    </footer>
  );
}
