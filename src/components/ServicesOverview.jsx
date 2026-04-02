'use client';

import { motion } from 'framer-motion';
import { Shield, Radio, Radar, Wrench, MonitorCheck } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const stack = [
  { icon: Shield, name: 'SentinelOne Complete', description: 'AI-powered endpoint protection on every device. Detects, blocks, and automatically rolls back ransomware and malware.' },
  { icon: Radio, name: 'StellarCyber XDR', description: 'Full network visibility across every asset. Extended detection and response with 90-day hot storage and 365-day cold storage.' },
  { icon: Radar, name: 'Coda Attack Surface Management', description: 'Continuously scans your external and internal attack surface for new vulnerabilities before attackers find them.' },
  { icon: Wrench, name: 'PDQ Patch Management', description: 'Automated software and OS patching across every machine on your network. Unpatched software is the #1 ransomware entry point.' },
  { icon: MonitorCheck, name: '24/7 SOC Monitoring', description: 'A dedicated security operations center watches your systems around the clock. Threats are contained — not just detected.' },
];

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

export default function ServicesOverview() {
  const { isDark } = useTheme();
  return (
    <section id="how-it-works" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-violet-500 mb-3">What&apos;s Included</span>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>One Package. Complete Coverage.</h2>
          <p className={`mt-4 text-base sm:text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Five enterprise tools. One flat price. Nothing to configure, nothing to manage. We handle everything.</p>
        </motion.div>
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stack.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <motion.div key={index} variants={item} className={`group relative overflow-hidden rounded-xl border p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg ${isDark ? 'bg-gray-800/30 border-gray-700/50 hover:border-violet-500/50' : 'bg-white/50 border-gray-200/50 hover:border-violet-300'}`}>
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${isDark ? 'bg-violet-500/20' : 'bg-violet-100'}`}><Icon className="w-5 h-5 text-violet-500" /></div>
                <h3 className={`text-base font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{tool.name}</h3>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{tool.description}</p>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.div>
            );
          })}
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="text-center mt-10">
          <a href="#quote" className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-violet-600/25">
            See What This Costs for My Business
          </a>
        </motion.div>
      </div>
    </section>
  );
}
