import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: 'Alchelogic | Enterprise Cybersecurity for Small Business',
  description:
    'Complete managed cybersecurity for small businesses — $49.99/seat/month. SentinelOne, XDR, 24/7 SOC monitoring. 7-day free trial. No contracts.',
  metadataBase: new URL('https://alchelogic.com'),
  openGraph: {
    title: 'Alchelogic | Enterprise Security. Small Business Pricing.',
    description:
      'SentinelOne, StellarCyber XDR, 24/7 monitoring — complete protection at $49.99/seat/month. 7-day free trial, no contracts.',
    url: 'https://alchelogic.com',
    siteName: 'Alchelogic',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alchelogic | Enterprise Security. Small Business Pricing.',
    description: 'Complete managed cybersecurity for small businesses. $49.99/seat/month. 7-day free trial. No contracts.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://alchelogic.com' },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
