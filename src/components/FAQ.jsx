'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';

const faqs = [
  {
    q: 'How much does managed cybersecurity cost for a small business?',
    a: 'Alchelogic charges $49.99 per seat per month — a "seat" meaning one employee or device. A 10-person office pays $499.90/month. This includes SentinelOne Complete endpoint protection, StellarCyber XDR, Coda Attack Surface Management, PDQ Patch Management, and 24/7 SOC monitoring. There are no add-ons, no setup fees, and no long-term contracts.',
  },
  {
    q: 'What is included in the managed cybersecurity package?',
    a: 'The package includes five enterprise security tools: SentinelOne Complete (AI-powered endpoint detection and response), StellarCyber XDR (full network visibility with unlimited log ingestion), Coda Attack Surface Management (continuous vulnerability scanning), PDQ Patch Management (automated software patching), and 24/7 SOC monitoring with human security analysts. Setup and onboarding are included at no additional cost.',
  },
  {
    q: 'What is a dark web credential scan and why do I need one?',
    a: 'A dark web credential scan searches criminal marketplaces and breach databases for usernames and passwords tied to your business email domain. When employees reuse passwords across services, a breach at one company can expose your entire organization. We offer this scan completely free — we search, compile a report of any found credentials, and send it to you within 24 hours with no obligation to become a client.',
  },
  {
    q: 'Does my dental practice need cybersecurity compliance tools?',
    a: 'Yes. The HIPAA Security Rule requires covered entities including dental practices to implement technical safeguards protecting electronic protected health information (ePHI). This includes access controls, audit controls, integrity controls, and transmission security. A managed security package like ours addresses these technical safeguards directly and can significantly reduce your risk of HIPAA breach notification requirements and associated fines, which can reach $1.9 million per violation category per year.',
  },
  {
    q: 'Is there a contract or minimum commitment?',
    a: 'No contracts and no minimum seat count. Service is month-to-month and you can cancel anytime. We also offer a 7-day free trial so you can verify the tools are working in your environment before you pay anything.',
  },
  {
    q: 'How long does setup take?',
    a: 'Most businesses are fully onboarded within 48 hours. We handle the deployment of all five tools remotely — you do not need to purchase hardware or schedule IT visits. Our team configures everything, verifies it is working correctly, and walks you through what to expect.',
  },
  {
    q: 'What happens if my business gets hit with ransomware?',
    a: 'SentinelOne Complete includes a patented one-click rollback feature that restores affected systems to their pre-attack state. Our 24/7 SOC team also responds immediately to contain the threat, prevent lateral movement, and begin forensic investigation. In most cases, ransomware is stopped before it can encrypt files. If it does execute, rollback recovers the systems without paying a ransom.',
  },
  {
    q: 'What is the difference between antivirus and managed endpoint detection?',
    a: 'Traditional antivirus matches files against a database of known threats — it only catches malware that has been seen before. SentinelOne uses AI behavioral analysis to detect threats based on what they do, not what they look like. This means it catches novel attacks, zero-days, and fileless malware that antivirus completely misses. Additionally, managed EDR includes human analysts who investigate alerts and respond — antivirus just blocks and alerts with no follow-through.',
  },
  {
    q: 'Can cybersecurity insurance require this type of protection?',
    a: 'Yes. Cyber insurance underwriters increasingly require evidence of endpoint detection and response (EDR), multi-factor authentication, and 24/7 monitoring as conditions of coverage. Having a managed security stack like ours can qualify you for coverage that would otherwise be denied, and often reduces premiums significantly. We can provide documentation of your security controls for your insurance application.',
  },
  {
    q: 'Do you work with nonprofits?',
    a: 'Yes. We were founded by people with nonprofit backgrounds and we understand budget constraints. Our pricing model — per seat, month-to-month, no minimums — was designed to be accessible to organizations that cannot commit to large enterprise contracts. Contact us directly to discuss nonprofit pricing.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
};

export default function FAQ({ limit }) {
  const [openIndex, setOpenIndex] = useState(null);
  const displayFaqs = limit ? faqs.slice(0, limit) : faqs;

  return (
    <section id="faq" className="py-16 sm:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-violet-400 mb-3">FAQ</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">Common Questions</h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400">Everything you need to know before getting started.</p>
        </motion.div>

        <div className="space-y-3">
          {displayFaqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-xl border border-gray-700/50 bg-gray-800/20 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 hover:bg-gray-800/40 transition-colors"
              >
                <span className="font-semibold text-white text-sm sm:text-base">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-sm sm:text-base text-gray-400 leading-relaxed border-t border-gray-700/50 pt-4">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {limit && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <a href="/faq" className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 font-semibold text-sm transition-colors">
              See all {faqs.length} questions <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
