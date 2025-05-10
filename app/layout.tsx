import './globals.css';
import type { Metadata } from 'next';
import { Red_Hat_Display } from 'next/font/google';
import { Providers } from '@/components/Providers';

const redHatDisplay = Red_Hat_Display({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-red-hat-display',
});

export const metadata: Metadata = {
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
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${redHatDisplay.variable} font-sans antialiased bg-[#e3e1dd] text-[#1b1b1b]`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}