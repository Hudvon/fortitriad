'use client';

import Hero from '@/components/Hero';
import Services from '@/components/Services';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Services />
      <ContactForm />
    </main>
  );
}
