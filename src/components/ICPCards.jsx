'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Scale, Stethoscope, Calculator, ArrowRight } from 'lucide-react';

const icps = [
  {
    icon: Scale,
    title: 'Law Firms',
    description: 'Protect attorney-client privilege, client financial data, and case files. Meet ABA cybersecurity guidance and state bar requirements.',
    risks: ['Wire fraud & email compromise', 'Client confidentiality breaches', 'Ransomware targeting case files'],
    href: '/for/law-firms',
    color: 'from-violet-400/10 to-purple-400/10',
    border: 'hover:border-violet-400/50',
  },
  {
    icon: Stethoscope,
    title: 'Dental Practices',
    description: 'Maintain HIPAA compliance, protect patient records, and prevent the disruption that shuts down your practice.',
    risks: ['HIPAA violations & fines', 'Patient record breaches', 'Practice management software attacks'],
    href: '/for/dental-practices',
    color: 'from-purple-400/10 to-fuchsia-400/10',
    border: 'hover:border-purple-400/50',
  },
  {
    icon: Calculator,
    title: 'Accounting & Finance Firms',
    description: 'Secure client financial data for accounting firms, wealth managers, and family offices. Meet IRS and FTC requirements and protect against targeted attacks.',
    risks: ['IRS & FTC data security mandates', 'Client financial data theft', 'Tax season and transaction-targeted attacks'],
    href: '/for/accounting-firms',
    color: 'from-fuchsia-400/10 to-violet-400/10',
    border: 'hover:border-fuchsia-400/50',
  },
];

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

export default function ICPCards() {
  const router = useRouter();
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-violet-400 mb-3">
            Who We Protect
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Built for Data-Sensitive Industries
          </h2>
          <p className="mt-4 text-base sm:text-lg max-w-2xl mx-auto text-gray-400">
            We specialize in industries where a breach doesn't just cost money. It destroys client trust and can end your practice.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {icps.map((icp, index) => {
            const Icon = icp.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                onClick={() => router.push(icp.href)}
                className={`group relative rounded-2xl border border-gray-700/50 ${icp.border} bg-gradient-to-br ${icp.color} p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-violet-500/10 cursor-pointer`}
              >
                <div className="bg-gray-800/60 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-violet-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{icp.title}</h3>
                <p className="text-sm text-white leading-relaxed mb-4">{icp.description}</p>
                <ul className="space-y-1.5 mb-5">
                  {icp.risks.map((risk) => (
                    <li key={risk} className="text-xs text-white flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-white flex-shrink-0" />
                      {risk}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 text-sm font-semibold text-violet-400 group-hover:gap-3 transition-all duration-200">
                  See {icp.title} Protection <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
