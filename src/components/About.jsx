'use client';

import { motion } from 'framer-motion';
import { Heart, Target, Users } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To make enterprise-grade cybersecurity accessible to every small and midsize business and nonprofit, regardless of budget. The threats are enterprise-level. The protection should be too.',
  },
  {
    icon: Users,
    title: 'Who We Serve',
    description: 'Law firms, dental practices, accounting and finance firms, nonprofits, and any small to midsize organization that handles sensitive client data and can\'t afford to be wrong about security.',
  },
  {
    icon: Heart,
    title: 'Why We Built This',
    description: 'Our founders spent years working in nonprofits and small to midsize organizations, watching them get targeted precisely because they were assumed to be unprotected. We built Alchelogic to change that.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-violet-400 mb-3">About Us</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">Security Without Compromise</h2>
          <p className="mt-4 text-base sm:text-lg max-w-3xl mx-auto text-gray-400">
            We understand that small business owners can't dedicate a huge part of their budget, or their day, to IT and security. That is why we created Alchelogic.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="relative pl-5 border-l-2 border-violet-500/40">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-violet-500/15">
                      <Icon className="w-4 h-4 text-violet-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{value.title}</h3>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
