'use client';

import AnimatedBackground from '@/components/AnimatedBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Search, FileText, Zap, MonitorCheck, BarChart3, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Search,
    step: '01',
    title: 'Free Dark Web Scan',
    description: 'We start with a free scan of the dark web for credentials tied to your business domain. This takes 24 hours and gives you an immediate picture of your current exposure, at zero cost.',
    detail: 'No credit card. No obligation. Just an honest look at whether your team\'s credentials are already compromised.',
  },
  {
    icon: FileText,
    step: '02',
    title: 'Custom Quote',
    description: 'You tell us how many employees or devices need coverage. We calculate your exact monthly cost: $49.99 per seat, nothing else. There are no tiers, no add-ons, no negotiation.',
    detail: 'Use the instant calculator on our pricing page to see your number right now without talking to anyone.',
  },
  {
    icon: Zap,
    step: '03',
    title: 'Deployment in 48 Hours',
    description: 'We deploy all five tools and handle the full setup. SentinelOne, StellarCyber XDR, Coda, and PDQ are configured and verified on every device within two business days.',
    detail: 'Your 7-day free trial begins at deployment. You can verify everything is working before your first invoice.',
  },
  {
    icon: MonitorCheck,
    step: '04',
    title: '24/7 Monitoring Begins',
    description: 'From the moment deployment is complete, our security operations center begins watching your environment. Threats are detected and contained automatically, and our team escalates anything that needs human judgment.',
    detail: 'You\'ll receive an onboarding call with a summary of what we found in your environment and how we\'ve configured your protection.',
  },
  {
    icon: BarChart3,
    step: '05',
    title: 'Ongoing: You Focus on Your Business',
    description: 'Monthly reports summarize what was detected, contained, and patched. You get visibility without needing to understand every alert. We handle the security. You handle everything else.',
    detail: 'Any time you have questions, or something feels off, you can reach us directly. We\'re a call or text away.',
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <AnimatedBackground />
      <main className="relative z-10 min-h-screen">
        <Navbar />

        <section className="pt-32 pb-16 px-4 sm:px-6 max-w-3xl mx-auto text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-block text-sm font-semibold tracking-widest uppercase text-violet-400 mb-4">
            How It Works
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            From Zero to Protected in 48 Hours
          </motion.h1>
        </section>

        <section className="pb-24 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-xl bg-violet-500/15 border border-violet-500/30 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-violet-400" />
                      </div>
                      {index < steps.length - 1 && (
                        <div className="flex-1 w-px bg-gradient-to-b from-violet-500/30 to-transparent mt-3" />
                      )}
                    </div>
                    <div className="pb-8">
                      <span className="text-xs font-bold text-violet-400 tracking-widest">STEP {step.step}</span>
                      <h3 className="text-xl font-bold text-white mt-1 mb-3">{step.title}</h3>
                      <p className="text-gray-400 leading-relaxed mb-3">{step.description}</p>
                      <p className="text-sm text-gray-600 italic">{step.detail}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-8 text-center">
              <a href="/free-credential-scan" className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 shadow-xl shadow-violet-600/30">
                Start with a Free Dark Web Scan
                <ArrowRight className="w-5 h-5" />
              </a>
              <p className="mt-3 text-sm text-gray-600">No credit card. Results in 24 hours. No obligation.</p>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
