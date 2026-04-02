'use client';

import AnimatedBackground from '@/components/AnimatedBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuoteCalculator from '@/components/QuoteCalculator';
import CredentialScan from '@/components/CredentialScan';
import { motion } from 'framer-motion';
import { Scale, Check, AlertTriangle, ShieldCheck } from 'lucide-react';

const risks = [
  { title: 'Wire Fraud & Email Compromise', description: 'Law firms are the #1 target for business email compromise. Attackers intercept wire transfer instructions mid-deal, and clients lose everything.' },
  { title: 'Client Confidentiality Breaches', description: 'Attorney-client privilege is your bedrock. A breach exposing client communications can expose you to bar discipline and civil liability.' },
  { title: 'Ransomware Targeting Case Files', description: 'Attackers encrypt case files and demand payment before hearings or closings, knowing the deadline pressure forces compliance.' },
  { title: 'ABA Cybersecurity Requirements', description: 'ABA Model Rule 1.6(c) requires reasonable efforts to prevent unauthorized disclosure. Most bar associations have issued formal guidance on what that means technically.' },
];

const included = [
  'SentinelOne Complete: stops malware before execution',
  'StellarCyber XDR: monitors every connection on your network',
  'Coda Attack Surface Management: finds vulnerabilities first',
  'PDQ Patch Management: keeps all software current',
  '24/7 SOC: human analysts watching around the clock',
  'Remote forensics: investigate incidents immediately',
  'Setup & onboarding included',
  'No contracts, month-to-month',
];

export default function LawFirmsPage() {
  return (
    <>
      <AnimatedBackground />
      <main className="relative z-10 min-h-screen">
        <Navbar />

        {/* Hero */}
        <section className="pt-32 pb-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-1.5 mb-6">
              <Scale className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-400">Cybersecurity for Law Firms</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
              Protect Attorney-Client Privilege.<br />
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">For $49.99/Seat/Month.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Law firms are among the most targeted organizations in the country. Client financial data,
              confidential communications, and tight deal deadlines make you the perfect target.
              Enterprise-grade protection shouldn't require enterprise-grade spending.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/free-credential-scan" className="inline-flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 shadow-xl shadow-violet-600/30">
                Get Your Free Dark Web Scan
              </a>
              <a href="https://calendly.com/alchelogic/alchelogic" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border-2 border-gray-600 hover:border-violet-500 text-gray-300 hover:text-violet-400 px-8 py-4 rounded-xl font-semibold transition-all duration-300">
                Book a Free Consultation
              </a>
            </motion.div>
          </div>
        </section>

        {/* Risks */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold tracking-widest uppercase text-red-400 mb-3">The Threat Landscape</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Why Law Firms Are Targeted</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {risks.map((risk, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-xl border border-gray-700/50 bg-gray-800/20 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0" />
                    <h3 className="font-bold text-white">{risk.title}</h3>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">{risk.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block text-sm font-semibold tracking-widest uppercase text-violet-400 mb-3">Protection Package</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Everything at $49.99/Seat/Month</h2>
            </div>
            <div className="rounded-2xl border border-violet-500/30 bg-gray-800/30 p-8">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {included.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300">
                    <ShieldCheck className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-4">Month-to-month · 7-day free trial · No contracts</p>
              </div>
            </div>
          </div>
        </section>

        <QuoteCalculator />
        <CredentialScan />
        <Footer />
      </main>
    </>
  );
}
