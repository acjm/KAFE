import './globals.css';
import type { Metadata } from 'next';
import { Red_Hat_Display } from 'next/font/google';
import { Providers } from '@/components/Providers';
import HydrationSuppressor from '@/components/HydrationSuppressor';

const redHatDisplay = Red_Hat_Display({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-red-hat-display',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kafe.ma'),
  title: 'KAFE - A Quiet Ritual',
  description: 'A sanctuary where coffee becomes ritual. Time slows, jazz drifts through the walls, and each sip awakens something real.',
  keywords: 'coffee, kafe, ritual, jazz, slow coffee, morocco',
  openGraph: {
    title: 'KAFE - A Quiet Ritual',
    description: 'A sanctuary where coffee becomes ritual. Time slows, jazz drifts through the walls, and each sip awakens something real.',
    url: 'https://kafe.ma',
    siteName: 'KAFE',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'KAFE - A Quiet Ritual',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KAFE - A Quiet Ritual',
    description: 'A sanctuary where coffee becomes ritual. Time slows, jazz drifts through the walls, and each sip awakens something real.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${redHatDisplay.variable} font-sans antialiased bg-[#e3e1dd] text-[#1b1b1b]`} suppressHydrationWarning>
        <Providers>
          <HydrationSuppressor>
            {children}
          </HydrationSuppressor>
        </Providers>
      </body>
    </html>
  );
}