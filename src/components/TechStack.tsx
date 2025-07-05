'use client';

import {
  FaAws,
  FaGithub,
  FaDocker,
  FaReact,
  FaLinux,
  FaPython,
} from 'react-icons/fa';
import { SiKaliLinux, SiNmap, SiMetasploit, SiTailwindcss } from 'react-icons/si';

const tech = [
  { name: 'AWS', icon: <FaAws size={40} /> },
  { name: 'Kali Linux', icon: <SiKaliLinux size={40} /> },
  { name: 'Nmap', icon: <SiNmap size={40} /> },
  { name: 'Metasploit', icon: <SiMetasploit size={40} /> },
  { name: 'GitHub', icon: <FaGithub size={40} /> },
  { name: 'React', icon: <FaReact size={40} /> },
  { name: 'Tailwind', icon: <SiTailwindcss size={40} /> },
  { name: 'Docker', icon: <FaDocker size={40} /> },
  { name: 'Linux', icon: <FaLinux size={40} /> },
  { name: 'Python', icon: <FaPython size={40} /> },
];

export default function TechStack() {
  return (
    <section
      id="tech"
      className="bg-black text-white py-20 px-6 border-t border-zinc-800"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-10">
          Tools We Use
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 place-items-center text-cyan-400">
          {tech.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 hover:text-cyan-300 transition"
            >
              {item.icon}
              <span className="text-sm">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
