import { Html, Main, NextScript, Head } from 'next/document';

/** Base document component. */
const Document = () => {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
