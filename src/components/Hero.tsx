'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center text-center bg-black text-white relative z-10 px-4"
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold tracking-wide text-cyan-400"
      >
        FortiTriad
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="mt-4 text-lg md:text-2xl max-w-xl text-gray-300"
      >
        Securing Cloud, Code & Infrastructure.
      </motion.p>

      <motion.a
        href="#services"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, delay: 0.4 }}
        className="mt-10 inline-block bg-cyan-500 text-black font-semibold px-6 py-3 rounded shadow hover:bg-cyan-600 transition"
      >
        Explore Services
      </motion.a>
    </section>
  );
}
