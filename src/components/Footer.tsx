'use client';

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-cyan-500 py-10 px-6 text-white relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-cyan-400 tracking-wide">
            FortiTriad
          </h3>
          <p className="text-gray-400 text-sm mt-2">
            &copy; {new Date().getFullYear()} FortiTriad. All rights reserved.
          </p>
        </div>

        <ul className="flex gap-6 text-sm">
          <li>
            <a href="#hero" className="hover:text-cyan-400 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-cyan-400 transition">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </li>
        </ul>

        <div className="flex gap-4 text-cyan-400 text-lg">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}
