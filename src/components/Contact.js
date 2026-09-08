"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-36 px-6 sm:px-10 lg:px-16 bg-[#1e2a22] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Top Glow Line - matches Footer */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#a3b18a]/60 to-transparent" />

      {/* Background Soft Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[750px] h-[500px] bg-[#a3b18a]/10 blur-[170px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[350px] bg-[#588157]/10 blur-[150px] pointer-events-none rounded-full" />

      {/* Main Container */}
      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-start w-full">

        {/* Section Heading - Left Aligned */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 md:mb-16 max-w-2xl w-full text-left flex flex-col items-start space-y-4"
        >
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#a3b18a]/15 text-[#a3b18a] uppercase tracking-[3px] text-xs sm:text-sm font-semibold border border-[#a3b18a]/30">
              CONTACT & CONNECT
            </span>
          </div>

          <h2 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#f5f1e8] leading-tight tracking-tight text-left">
            Turning Ideas <br className="hidden sm:inline" />
            <span className="text-[#a3b18a]">Into Reality 🚀</span>
          </h2>

          {/* <p className="mt-2 text-[#cfc8bc] text-base sm:text-lg max-w-xl font-normal leading-relaxed text-left">
            Building modern and user-focused digital experiences with clean UI and smooth interactions.
          </p> */}
        </motion.div>

        {/* Main Grid: Contact Info (3) : Socials (2) — clean 3:2 split */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 w-full items-start">

          {/* Left Side (3 Cols): Email -> Phone -> Location Line by Line */}
          <div className="lg:col-span-3 flex flex-col gap-4 w-full">

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

          {/* Right Side (2 Cols): GitHub & LinkedIn Buttons */}
          <div className="lg:col-span-2 flex flex-col gap-4 w-full">

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