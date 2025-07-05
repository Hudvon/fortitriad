'use client';

import { useEffect, useState } from 'react';
import Scene from './Scene';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import TechStack from './TechStack';
import Contact from './Contact';
import Footer from './Footer';
import Navbar from './Navbar';
import IntroLoader from './IntroLoader';

export default function ScrollSync() {
  const [scrollY, setScrollY] = useState(0);
  const [servicesVisible, setServicesVisible] = useState(false);
  const [introDone, setIntroDone] = useState(false);

  // Track scrolling to animate 3D
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Show animated loader screen first
  if (!introDone) {
    return <IntroLoader onFinish={() => setIntroDone(true)} />;
  }

  return (
    <main className="relative bg-black text-white overflow-x-hidden scroll-smooth">
      <Navbar />
      <Scene scrollY={scrollY} showConnection={servicesVisible} />
      <div className="relative z-10">
        <Hero />
        <About />
        <Services onReach={() => setServicesVisible(true)} />
        <TechStack />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
