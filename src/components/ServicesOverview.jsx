'use client';

import { motion } from 'framer-motion';
import { Shield, Radio, Radar, Wrench, MonitorCheck } from 'lucide-react';

const stack = [
  {
    icon: Shield,
    name: 'SentinelOne Complete',
    what: 'AI-powered endpoint detection & response',
    description: 'Stops malware, ransomware, and zero-day attacks on every device — before they execute. One-click rollback restores systems to their pre-attack state.',
  },
  {
    icon: Radio,
    name: 'StellarCyber XDR',
    what: 'Extended detection & response across your entire network',
    description: 'Full visibility into every device, server, and connection on your network. 90 days hot storage, 365 days cold. No log limits.',
  },
  {
    icon: Radar,
    name: 'Coda Attack Surface Management',
    what: 'Continuous vulnerability scanning',
    description: 'Continuously maps and monitors your external attack surface. Finds exposures before attackers do — and alerts us so we can act.',
  },
  {
    icon: Wrench,
    name: 'PDQ Patch Management',
    what: 'Automated software patching',
    description: 'Unpatched software is the #1 ransomware entry point. PDQ automatically pushes patches across every machine so nothing falls behind.',
  },
  {
    icon: MonitorCheck,
    name: '24/7 SOC Monitoring',
    what: 'Human analysts watching around the clock',
    description: 'A dedicated security operations center monitors your environment 24 hours a day. When something triggers, humans investigate and contain — not just alert.',
  },
];

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

export default function ServicesOverview() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-violet-400 mb-3">
            What's Included
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            One Package. Five Enterprise Tools.
          </h2>
          <p className="mt-4 text-base sm:text-lg max-w-2xl mx-auto text-gray-400">
            Everything at $49.99/seat/month. No add-ons. No tiers. We handle setup, monitoring, and response.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {stack.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                className="group relative rounded-2xl border border-gray-700/50 hover:border-violet-500/40 bg-gray-800/20 p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/10"
              >
                <div className="w-10 h-10 rounded-xl bg-violet-500/15 border border-violet-500/20 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-violet-400" />
                </div>
                <h3 className="text-base font-bold text-white mb-1">{tool.name}</h3>
                <p className="text-xs font-medium text-violet-400 mb-3">{tool.what}</p>
                <p className="text-sm text-gray-400 leading-relaxed">{tool.description}</p>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-10"
        >
          <a href="#quote" className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-violet-600/25">
            See What This Costs for My Business
          </a>
        </motion.div>
      </div>
    </section>
  );
}
