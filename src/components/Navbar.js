"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-5 left-0 w-full z-50 flex justify-center px-4">
      <div className="w-full max-w-7xl">

        {/* NAVBAR */}
        <nav
          className="
          flex items-center justify-between

          px-8 py-5

          rounded-3xl

          bg-white/5
          backdrop-blur-xl

          border border-cyan-500/10

          shadow-[0_8px_40px_rgba(0,0,0,0.35)]

          "
        >

          {/* LOGO */}
          <a href="#home" className="flex items-center gap-4">

            <div
              className="
              h-12
              w-12

              rounded-2xl

              bg-gradient-to-br
              from-cyan-400
              via-sky-400
              to-blue-500

              flex
              items-center
              justify-center

              font-bold
              text-lg
              text-black

              shadow-lg
              shadow-cyan-500/30
              "
            >
              UY
            </div>

            <div className="leading-tight">
              <h1 className="text-xl font-bold text-white">
                UTAKARSH
              </h1>

              <p className="text-xs text-cyan-400 tracking-[3px]">
                FRONTEND DEVELOPER
              </p>
            </div>

          </a>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-10">

            {[
              "Home",
              "About",
              "Skills",
              "Experience",
              "Projects",
              "Contact",
            ].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="
                  text-gray-300
                  hover:text-cyan-400

                  transition-all
                  duration-300

                  text-sm
                  tracking-wide
                  "
                >
                  {item}
                </a>
              </li>
            ))}

          </ul>

          {/* RESUME BUTTON */}
          <a
            href="/EUtakarsh.pdf"
            target="_blank"
            className="
            hidden md:flex

            items-center
            justify-center

            px-7 py-3

            rounded-2xl

            bg-cyan-500

            text-black
            font-semibold

            hover:bg-cyan-400

            transition-all
            duration-300

            shadow-lg
            shadow-cyan-500/30
            "
          >
            Resume
          </a>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden text-white text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

        </nav>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div
            className="
            md:hidden

            mt-4

            rounded-3xl

            bg-[#0f172a]/90
            backdrop-blur-xl

            border border-cyan-500/10

            p-6
            "
          >
            <ul className="space-y-5 text-gray-300">

              <li>
                <a href="#home">Home</a>
              </li>

              <li>
                <a href="#about">About</a>
              </li>

              <li>
                <a href="#skills">Skills</a>
              </li>

              <li>
                <a href="#experience">Experience</a>
              </li>

              <li>
                <a href="#projects">Projects</a>
              </li>

              <li>
                <a href="#contact">Contact</a>
              </li>

            </ul>
          </div>
        )}

      </div>
    </header>
  );
}
