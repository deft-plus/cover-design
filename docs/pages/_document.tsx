import { Html, Main, NextScript, Head } from 'next/document';

/** Base document component. */
const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
