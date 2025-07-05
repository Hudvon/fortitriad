'use client';

import { motion } from 'framer-motion';

export default function ContactForm() {
  return (
    <section
      id="contact"
      className="relative z-10 bg-black py-24 px-6 md:px-12 lg:px-24 text-center"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-cyan-400 mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Contact Us
      </motion.h2>

      <form
        className="max-w-xl mx-auto flex flex-col space-y-4 text-left"
        onSubmit={(e) => {
          e.preventDefault();
          alert('Message sent! (not wired yet)');
        }}
      >
        <input
          type="text"
          placeholder="Your Name"
          className="bg-black border border-cyan-500 p-3 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="bg-black border border-cyan-500 p-3 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          required
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="bg-black border border-cyan-500 p-3 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          required
        ></textarea>
        <button
          type="submit"
          className="self-start px-6 py-2 bg-cyan-400 text-black font-semibold rounded hover:bg-cyan-300 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
