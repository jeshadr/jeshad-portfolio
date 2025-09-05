"use client";

import Image from "next/image";
import { FaGithub, FaGlobe, FaInstagram, FaLinkedin } from "react-icons/fa";
import Box from "./Box";

export default function ArtistBar() {
  return (
    <div
      className="
        hidden xl:flex
        flex-col
        bg-black
        w-[400px]
        p-2
        h-full
        overflow-hidden
      "
    >
      {/* Single scroll region that holds ALL cards */}
      <div className="flex-1 overflow-y-auto flex flex-col gap-y-2 no-scrollbar">
        {/* About card */}
        <Box className="h-full">
          <div className="p-4">
            <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden bg-neutral-900">
              <Image
                src="/images/about/jeshad.png"
                alt="Jeshad"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="mt-4 text-white text-lg font-semibold">About Jeshad</h2>
            <p className="mt-2 text-sm text-neutral-300">
              Full-stack developer with hands-on experience in healthcare tech, distributed systems, and AI/ML. I design secure, scalable apps and intuitive UIs while driving projects from architecture to deployment.
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              <span className="text-xs bg-white/10 text-white px-2 py-1 rounded">React</span>
              <span className="text-xs bg-white/10 text-white px-2 py-1 rounded">Next.js</span>
              <span className="text-xs bg-white/10 text-white px-2 py-1 rounded">Java</span>
              <span className="text-xs bg-white/10 text-white px-2 py-1 rounded">Python</span>
              <span className="text-xs bg-white/10 text-white px-2 py-1 rounded">Javascript</span>
            </div>

            <div className="mt-4 flex gap-2">
              <a href="https://github.com/jeshadr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition">
                <FaGithub size={20} className="text-white" />
              </a>
              <a href="https://www.linkedin.com/in/jeshad-rahman" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-500 transition">
                <FaLinkedin size={20} className="text-white" />
              </a>
              <a href="https://www.instagram.com/jeshadr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 hover:opacity-90 transition">
                <FaInstagram size={20} className="text-white" />
              </a>
              <a href="https://www.jeshadr.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-green-600 hover:bg-green-500 transition">
                <FaGlobe size={20} className="text-white" />
              </a>
            </div>
          </div>
        </Box>

        {/* Highlights */}
        <Box className="h-full">
          <div className="p-4">
            <h3 className="text-white font-semibold">Highlights</h3>
            <ul className="mt-3 space-y-2 text-sm text-neutral-300">
              <li>Software Engineering Intern @ Irenic Therapeutic Services</li>
              <li>Junior Software Engineer @ Web Surfing Studios</li>
              <li>Digital Navigator @ IDIA</li>
            </ul>
          </div>
        </Box>

        {/* Fun Facts */}
        <Box className="h-full">
          <div className="p-4">
            <h3 className="text-white font-semibold">Fun Facts</h3>
            <div className="mt-3 text-sm text-neutral-300">
              • Love going on hikes<br />
              • Big fan of movies & shows <br />
              • Love to eat out<br />
              • Big fan of hot chicken... <br />
              • Coffee enthusiast <br />
              • Love cats<br />
              • Enjoy going to the gym
            </div>
          </div>
        </Box>

        {/* Currently Building */}
        <Box className="h-full">
          <div className="p-4">
            <h3 className="text-white font-semibold">Currently Building</h3>
            <div className="mt-2 text-sm text-neutral-300">
              ASL Translator using Python + Tensorflow + OpenCV. Exploring small LLM tools.
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
}
