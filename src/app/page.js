'use client';

import AnimatedBackground from '@/components/AnimatedBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import ICPCards from '@/components/ICPCards';
import ServicesOverview from '@/components/ServicesOverview';
import Features from '@/components/Features';
import QuoteCalculator from '@/components/QuoteCalculator';
import CredentialScan from '@/components/CredentialScan';
import FAQ from '@/components/FAQ';
import PricingOverview from '@/components/PricingOverview';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import StickyScanner from '@/components/StickyScanner';

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <main className="relative z-10 min-h-screen">
        <Navbar />
        <Hero />
        <Stats />
        <ICPCards />
        <ServicesOverview />
        <Features />
        <QuoteCalculator />
        <CredentialScan />
        <FAQ limit={6} />
        <PricingOverview />
        <About />
        <Contact />
        <Footer />
      </main>
      <StickyScanner />
    </>
  );
}
