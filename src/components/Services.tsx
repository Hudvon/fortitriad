'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Services({ onReach }: { onReach?: () => void }) {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.5 });

  useEffect(() => {
    if (inView && onReach) onReach();
  }, [inView, onReach]);

  return (
    <motion.section
      ref={ref}
      id="services"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative z-10 bg-black py-24 px-6 text-center border-t border-gray-700"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-cyan-400 mb-8"
        initial={{ scale: 0.9 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.4 }}
      >
        Our Services
      </motion.h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        <motion.div
          className="bg-gray-900 rounded-xl p-6 shadow-xl border border-cyan-500"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <h3 className="text-xl font-semibold text-white mb-2">Web Security</h3>
          <p className="text-gray-300">
            Protect your websites from modern threats using WAFs, hardening, and penetration testing.
          </p>
        </motion.div>

        <motion.div
          className="bg-gray-900 rounded-xl p-6 shadow-xl border border-cyan-500"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <h3 className="text-xl font-semibold text-white mb-2">Cloud Hardening</h3>
          <p className="text-gray-300">
            Secure your cloud infrastructure (AWS, GCP, Azure) with best practices and audits.
          </p>
        </motion.div>

        <motion.div
          className="bg-gray-900 rounded-xl p-6 shadow-xl border border-cyan-500"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <h3 className="text-xl font-semibold text-white mb-2">Penetration Testing</h3>
          <p className="text-gray-300">
            Ethical hacking to reveal vulnerabilities before real attackers do.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
