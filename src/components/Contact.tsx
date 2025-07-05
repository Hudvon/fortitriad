// src/components/Contact.tsx

'use client';

import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-black text-white px-6 py-20">
      <form
        action="https://formspree.io/f/xgvybyjo"
        method="POST"
        className="w-full max-w-xl space-y-6 bg-zinc-900 p-8 rounded-2xl shadow-xl"
      >
        <h2 className="text-3xl font-bold text-cyan-400 text-center">Contact Us</h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-3 rounded bg-black border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-3 rounded bg-black border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="w-full p-3 rounded h-32 bg-black border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
        ></textarea>

        <button
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-400 transition text-black font-semibold px-6 py-3 rounded-xl w-full"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
