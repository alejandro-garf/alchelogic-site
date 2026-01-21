'use client';

import AnimatedBackground from '@/components/AnimatedBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import ServicesOverview from '@/components/ServicesOverview';
import Features from '@/components/Features';
import PricingOverview from '@/components/PricingOverview';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <main className="relative z-10 min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Stats />
        <ServicesOverview />
        <Features />
        <PricingOverview />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
