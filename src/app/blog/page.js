'use client';

import AnimatedBackground from '@/components/AnimatedBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyScanner from '@/components/StickyScanner';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';

const posts = [
  {
    title: 'Why Law Firms Are the #1 Target for Ransomware in 2025',
    excerpt: 'Legal practices hold client financial data, confidential communications, and operate under strict confidentiality obligations — making them uniquely attractive to ransomware gangs who know deadline pressure forces payment.',
    category: 'Threat Intelligence',
    readTime: '6 min read',
    coming: true,
  },
  {
    title: 'What the HIPAA Security Rule Actually Requires — In Plain English',
    excerpt: 'Most dental and healthcare practices know HIPAA exists but don\'t understand what the Security Rule technically mandates. Here\'s a plain-English breakdown of the technical safeguards requirements and what they mean for your practice.',
    category: 'Compliance',
    readTime: '8 min read',
    coming: true,
  },
  {
    title: 'How to Read a Dark Web Credential Scan Report',
    excerpt: 'You requested a dark web scan and got a report back. Now what? This guide walks through exactly what the findings mean, which are urgent, which are low-risk, and what steps to take immediately.',
    category: 'Security Guides',
    readTime: '5 min read',
    coming: true,
  },
  {
    title: 'SentinelOne vs. Traditional Antivirus: What\'s Actually Different',
    excerpt: 'Traditional antivirus matches files against a database of known threats. SentinelOne uses AI behavioral analysis to detect threats based on what they do — catching zero-days and novel attacks that antivirus misses completely.',
    category: 'Product',
    readTime: '7 min read',
    coming: true,
  },
  {
    title: 'The FTC Safeguards Rule: What Accountants Need to Know',
    excerpt: 'The updated FTC Safeguards Rule affects tax preparers, accountants, and financial advisors. Here\'s what the rule requires technically, the deadline that already passed, and what happens if you\'re not compliant.',
    category: 'Compliance',
    readTime: '6 min read',
    coming: true,
  },
  {
    title: 'What Is a Security Operations Center (SOC) and Why Does It Matter?',
    excerpt: 'A SOC is a team of security analysts who monitor your environment around the clock. This post explains what they actually do, why automated tools alone aren\'t sufficient, and what 24/7 monitoring means in practice.',
    category: 'Education',
    readTime: '5 min read',
    coming: true,
  },
];

export default function BlogPage() {
  return (
    <>
      <AnimatedBackground />
      <main className="relative z-10 min-h-screen">
        <Navbar />

        <div className="pt-32 pb-16 px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-block text-sm font-semibold tracking-widest uppercase text-violet-400 mb-4">
              Blog
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
              Security Insights for Small Business
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-gray-400 max-w-xl mx-auto">
              Plain-English guides on cybersecurity, compliance, and protecting the businesses we serve.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-2xl border border-gray-700/50 bg-gray-800/20 p-6 flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-violet-400 uppercase tracking-wider">{post.category}</span>
                  {post.coming && (
                    <span className="text-xs bg-gray-700/60 text-gray-500 px-2 py-0.5 rounded-full">Coming Soon</span>
                  )}
                </div>
                <h2 className="text-base font-bold text-white mb-3 leading-snug flex-1">{post.title}</h2>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-2 text-xs text-gray-700 mt-auto">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-600 text-sm mb-4">Get notified when we publish</p>
            <a href="/#contact" className="inline-flex items-center gap-2 border-2 border-gray-700 hover:border-violet-500 text-gray-400 hover:text-violet-400 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300">
              Subscribe via Contact Form <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <Footer />
      </main>
      <StickyScanner />
    </>
  );
}
