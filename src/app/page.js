'use client';

import AnimatedBackground from '@/components/AnimatedBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Stats from '@/components/Stats';
import CredentialScan from '@/components/CredentialScan';
import ServicesOverview from '@/components/ServicesOverview';
import Features from '@/components/Features';
import QuoteCalculator from '@/components/QuoteCalculator';
import About from '@/components/About';
import PricingOverview from '@/components/PricingOverview';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <main className="relative z-10 min-h-screen">
        <Navbar />
        <Hero />
        <TrustBar />
        <Stats />
        <div id="free-trial" className="scroll-mt-24">
          <PricingOverview />
        </div>
        <CredentialScan />
        <ServicesOverview />
        <Features />
        <QuoteCalculator />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
