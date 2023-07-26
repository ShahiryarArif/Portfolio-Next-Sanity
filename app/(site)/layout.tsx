import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio Next Sanity',
  description: 'Generated by Next + Sanity',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`max-w-3xl mx-auto py-10 ${inter.className}`}>
        <header>
          <Link
            href='/'
            className='bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-lg font-bold'
          >
            Shahiryar
          </Link>
        </header>
        <main className='py-20'>{children}</main>
      </body>
    </html>
  );
}
