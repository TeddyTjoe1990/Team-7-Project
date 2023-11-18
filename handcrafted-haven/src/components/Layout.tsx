import React from 'react';
import Header from './header';
import Footer from './footer';
import { Inter } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] })

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto">{children}</main>
        <Footer />
      </div>
  );
};