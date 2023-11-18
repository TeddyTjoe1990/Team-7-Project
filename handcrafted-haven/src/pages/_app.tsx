import React from 'react';
import Layout from '../components/layout';
import type { AppProps } from 'next/app';
import '../styles/globals.css'; // Import global styles here

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;