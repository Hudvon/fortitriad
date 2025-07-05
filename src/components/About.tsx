'use client';

import { FaCode, FaCloud, FaShieldAlt } from 'react-icons/fa';

const team = [
  {
    name: 'Web Security Lead',
    icon: <FaCode size={32} className="text-cyan-400" />,
    desc: 'Specializes in frontend security, full-stack hardening, and secure UI architecture.',
  },
  {
    name: 'Cloud Architect',
    icon: <FaCloud size={32} className="text-cyan-400" />,
    desc: 'Expert in AWS, Azure, and cloud infrastructure with secure deployment pipelines.',
  },
  {
    name: 'Offensive Analyst',
    icon: <FaShieldAlt size={32} className="text-cyan-400" />,
    desc: 'Conducts penetration testing, red teaming, and exploit development.',
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white py-20 px-6 relative z-10"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-10">
          Meet the Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {team.map((person, idx) => (
            <div
              key={idx}
              className="bg-zinc-900 rounded-xl p-6 border border-zinc-700 hover:border-cyan-500 transition"
            >
              <div className="flex justify-center mb-4">{person.icon}</div>
              <h3 className="text-xl font-semibold text-cyan-300 mb-2">
                {person.name}
              </h3>
              <p className="text-gray-400 text-sm">{person.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
