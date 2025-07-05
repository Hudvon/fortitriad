'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="contact"
      className="min-h-screen bg-zinc-900 text-white py-20 px-6 relative z-10"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-8">
          Contact Us
        </h2>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-green-400 font-semibold text-lg"
          >
            Message sent! We’ll get back to you shortly.
          </motion.div>
        ) : (
          <form
            action="https://formspree.io/f/xgvybyjo"  {/* replace with your actual link */}
            method="POST"
            onSubmit={() => setSubmitted(true)}
            className="flex flex-col gap-6 mt-6"
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="bg-black border border-zinc-700 p-3 rounded text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="bg-black border border-zinc-700 p-3 rounded text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Your Message"
              className="bg-black border border-zinc-700 p-3 rounded text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <button
              type="submit"
              className="bg-cyan-500 text-black font-semibold px-6 py-3 rounded hover:bg-cyan-600 transition"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
