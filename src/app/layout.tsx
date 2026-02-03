'use client';
import LayoutComp from '../components/LayoutComp';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    if (pathname !== '/login') {
      const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
      if (!token) {
        router.push('/login');
      }
    }
  }, [pathname]);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {pathname !== '/login' && localStorage.getItem('token') && (
          <LayoutComp>{children}</LayoutComp>
        )}
        {pathname === '/login' && <>{children}</>}
      </body>
    </html>
  );
}
