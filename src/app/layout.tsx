import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jay Rai | Web Developer',
  description: 'Full Stack web developer in ahemdabad',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="./favicon.ico" />
        <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
        <script
          src="https://kit.fontawesome.com/a4ceb3bfd3.js"
          crossOrigin="anonymous"
          defer
        ></script>
      </head>
      <body className={`${inter.className} dark scroll-smooth`}>
        <Navbar/>
        {children}
        <Analytics />
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
