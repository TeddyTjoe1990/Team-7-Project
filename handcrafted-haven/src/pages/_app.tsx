<<<<<<< HEAD
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
=======
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
>>>>>>> 3e5c7c5cecf4af4e49ff752a948c717716822f39
