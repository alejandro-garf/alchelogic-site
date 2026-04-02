'use client';

import AnimatedBackground from '@/components/AnimatedBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuoteCalculator from '@/components/QuoteCalculator';
import CredentialScan from '@/components/CredentialScan';
import { motion } from 'framer-motion';
import { Calculator, AlertTriangle, ShieldCheck } from 'lucide-react';

const risks = [
  { title: 'IRS Data Security Requirements', description: 'IRS Publication 4557 and the FTC Safeguards Rule require tax preparers and accounting firms to maintain a written information security plan and implement technical safeguards. Non-compliance risks your PTIN.' },
  { title: 'Tax Season Ransomware Surge', description: 'Ransomware attacks on accounting firms spike 400%+ during January–April. Attackers time attacks to maximize pressure from filing deadlines, when you cannot afford downtime.' },
  { title: 'Client Financial Data Theft', description: 'Tax returns, financial statements, and bank records are among the most valuable information available. Your client data is a premium target year-round.' },
  { title: 'Business Email Compromise', description: 'Attackers impersonate partners or clients to redirect bank transfers and payroll. Accounting firms are the highest-value BEC targets due to direct access to financial transactions.' },
];

const included = [
  'SentinelOne Complete: stops malware before it executes',
  'StellarCyber XDR: monitors every connection on your network',
  'Coda Attack Surface Management: finds your vulnerabilities first',
  'PDQ Patch Management: keeps all software current automatically',
  '24/7 SOC monitoring: real humans watching around the clock',
  'IRS Publication 4557 technical safeguard documentation available',
  'Setup & onboarding included',
  'No contracts, month-to-month',
];

export default function AccountingFirmsPage() {
  return (
    <>
      <AnimatedBackground />
      <main className="relative z-10 min-h-screen">
        <Navbar />

        <section className="pt-32 pb-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 mb-6">
              <Calculator className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium text-amber-400">Cybersecurity for Accounting & Finance Firms</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
              Protect Client Financial Data.<br />
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Year-Round. Not Just at Tax Time.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Accounting firms, wealth managers, and family offices all face IRS data security mandates,
              FTC Safeguards Rule requirements, and rising ransomware targeting.
              We make compliance and protection simple at $49.99/seat/month.
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

        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold tracking-widest uppercase text-red-400 mb-3">The Threat Landscape</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Why Finance Firms Are Targeted</h2>
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

        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block text-sm font-semibold tracking-widest uppercase text-violet-400 mb-3">Protection Package</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Everything at $49.99/Seat/Month</h2>
            </div>
            <div className="rounded-2xl border border-violet-500/30 bg-gray-800/30 p-8">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {included.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300">
                    <ShieldCheck className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
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
