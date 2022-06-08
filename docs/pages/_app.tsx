import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/core.scss';
// import '@cover-ui/css';

// This default export is required in a new `pages/_app.js` file.
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Cover UI | Documentation</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
