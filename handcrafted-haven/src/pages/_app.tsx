// pages/_app.tsx

import React from 'react';
import type { AppProps } from 'next/app';
import DefaultLayout from '../components/layouts/DefaultLayout'; // Import your default layout here
import AboutLayout from '../components/layouts/AboutLayout'; // Import your about layout here

// This _app.tsx file will wrap all your pages with the specified layout
function MyApp({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page: any) => page);

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
