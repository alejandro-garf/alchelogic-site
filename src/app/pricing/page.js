'use client';

import AnimatedBackground from '@/components/AnimatedBackground';
import Navbar from '@/components/Navbar';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

export default function PricingPage() {
  return (
    <>
      <AnimatedBackground />
      <main className="relative z-10 min-h-screen">
        <Navbar />
        <div className="pt-20">
          <Pricing />
        </div>
        <Footer />
      </main>
    </>
  );
}
