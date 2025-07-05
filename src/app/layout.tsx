'use client';

import './globals.css';
import { ReactNode, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import LoadingScreen from '@/components/LoadingScreen';

export default function RootLayout({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 3000); // 3s loader
    return () => clearTimeout(timeout);
  }, []);

  return (
    <html lang="en">
      <body className="bg-black text-white">
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <>
            <Navbar />
            <AnimatePresence mode="wait">
              <motion.div
                key="page"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                {children}
              </motion.div>
            </AnimatePresence>
          </>
        )}
      </body>
    </html>
  );
}
