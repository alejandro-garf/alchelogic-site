import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata = {
  title: 'Alchelogic | Managed Cybersecurity for Small Business — $49.99/seat/month',
  description:
    'Enterprise-grade managed cybersecurity for small businesses. SentinelOne, StellarCyber XDR, 24/7 SOC monitoring — $49.99/seat/month. 7-day free trial, no contracts. Serving law firms, dental practices, and accounting firms.',
  metadataBase: new URL('https://alchelogic.com'),
  openGraph: {
    title: 'Alchelogic | Enterprise Security. Small Business Pricing.',
    description:
      'Complete managed cybersecurity for small businesses at $49.99/seat/month. SentinelOne endpoint protection, StellarCyber XDR, 24/7 SOC monitoring. Free dark web credential scan. No contracts.',
    url: 'https://alchelogic.com',
    siteName: 'Alchelogic',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alchelogic | Enterprise Security. Small Business Pricing.',
    description: 'Managed cybersecurity for small businesses. $49.99/seat/month. 7-day free trial. No contracts.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://alchelogic.com' },
  keywords: [
    'managed cybersecurity small business',
    'cybersecurity for law firms',
    'cybersecurity for dental practices',
    'cybersecurity for accounting firms',
    'SentinelOne small business',
    'dark web credential scan',
    'managed security service provider',
    'MSSP small business',
    '24/7 SOC monitoring',
  ],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://alchelogic.com/#org',
      name: 'Alchelogic',
      url: 'https://alchelogic.com',
      logo: 'https://alchelogic.com/images/logo.png',
      description: 'Managed cybersecurity for small businesses and nonprofits.',
      telephone: '+16504363490',
      email: 'info@alchelogic.com',
      foundingDate: '2024',
      areaServed: 'United States',
      sameAs: [],
    },
    {
      '@type': 'Service',
      '@id': 'https://alchelogic.com/#service',
      name: 'Managed Cybersecurity Package',
      provider: { '@id': 'https://alchelogic.com/#org' },
      description:
        'Complete managed cybersecurity stack including SentinelOne Complete endpoint protection, StellarCyber XDR, Coda Attack Surface Management, PDQ Patch Management, and 24/7 SOC monitoring.',
      serviceType: 'Managed Security Service',
      areaServed: 'United States',
      offers: {
        '@type': 'Offer',
        price: '49.99',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '49.99',
          priceCurrency: 'USD',
          referenceQuantity: {
            '@type': 'QuantitativeValue',
            value: '1',
            unitText: 'seat',
          },
          billingDuration: {
            '@type': 'QuantitativeValue',
            value: '1',
            unitCode: 'MON',
          },
        },
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
