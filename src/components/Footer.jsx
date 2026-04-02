'use client';

import { motion } from 'framer-motion';

const links = {
  Product: [
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Free Credential Scan', href: '/free-credential-scan' },
  ],
  'Who We Serve': [
    { label: 'Law Firms', href: '/for/law-firms' },
    { label: 'Dental Practices', href: '/for/dental-practices' },
    { label: 'Accounting & Finance', href: '/for/accounting-firms' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Blog', href: '/blog' },
  ],
  Connect: [
    { label: 'info@alchelogic.com', href: 'mailto:info@alchelogic.com' },
    { label: '(650) 436-3490', href: 'tel:+16504363490' },
    { label: 'Book a Call', href: 'https://calendly.com/alchelogic/alchelogic' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative py-16 border-t border-gray-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-12 mb-12">
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <span className="text-xl font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              {'{Alchelogic}'}
            </span>
            <p className="mt-2 text-sm text-gray-600">Cybersecurity & Software Solutions</p>
            <p className="mt-3 text-xs text-gray-700 leading-relaxed max-w-xs">
              Enterprise-grade managed cybersecurity for small businesses and nonprofits. $49.99/seat/month.
            </p>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4 text-gray-400 text-sm">{category}</h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-sm text-gray-600 hover:text-violet-400 transition-colors duration-200"
                      {...(item.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-700">© 2025 Alchelogic. All rights reserved.</p>
          <p className="text-xs text-gray-800">Powered by SentinelOne · StellarCyber · Coda · PDQ</p>
        </div>
      </div>
    </footer>
  );
}
