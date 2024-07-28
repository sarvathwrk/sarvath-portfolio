import GothamBook from 'assets/fonts/gotham-book.woff2';
import GothamMedium from 'assets/fonts/gotham-medium.woff2';
import { fontStyles, tokenStyles } from 'components/ThemeProvider';
import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />

        <link rel="manifest" href="/manifest.json" />
        {/* <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" /> */}

        {/* Sarvath Logo 1 */}

        {/* <link rel="shortcut icon" href="/SarvathLogo1.png" type="image/png" />
        <link rel="shortcut icon" href="/SarvathLogo1.svg" type="image/svg+xml" /> */}

        {/* Sarvath Logo 2 */}

        {/* <link rel="shortcut icon" href="/SarvathLogo2.png" type="image/png" />
        <link rel="shortcut icon" href="/SarvathLogo2.svg" type="image/svg+xml" /> */}

        {/* Sarvath Logo 3 */}

        {/* <link rel="shortcut icon" href="/SarvathLogo3.png" type="image/png" />
        <link rel="shortcut icon" href="/SarvathLogo3.svg" type="image/svg+xml" /> */}

        {/* Sarvath Logo 4 */}

        {/* <link rel="shortcut icon" href="/SarvathLogo4.png" type="image/png" />
        <link rel="shortcut icon" href="/SarvathLogo4.svg" type="image/svg+xml" /> */}

        {/* Sarvath Logo 5 */}

        {/* <link rel="shortcut icon" href="/SarvathLogo5.png" type="image/png" />
        <link rel="shortcut icon" href="/SarvathLogo5.svg" type="image/svg+xml" /> */}

        {/* Sarvath Logo 6 */}

        {/* <link rel="shortcut icon" href="/SarvathLogo6.png" type="image/png" />
        <link rel="shortcut icon" href="/SarvathLogo6.svg" type="image/svg+xml" /> */}

        {/* Sarvath Logo 7 */}
        {/* 
        <link rel="shortcut icon" href="/SarvathLogo7.png" type="image/png" />
        <link rel="shortcut icon" href="/SarvathLogo7.svg" type="image/svg+xml" /> */}

        {/* Sarvath Logo 8 */}

        <link
          rel="shortcut icon"
          id="favicon1"
          href="/SarvathLogo1.png"
          type="image/png"
        />
        <link
          rel="shortcut icon"
          id="favicon2"
          href="/SarvathLogo1.svg"
          type="image/svg+xml"
        />
        {/* <link rel="icon" href="/SarvathLogo8.png" type="image/png" /> */}

        <link rel="apple-touch-icon" href="/icon-256.png" />
        <link type="text/plain" rel="author" href="/humans.txt" />

        <link rel="preload" href={GothamMedium} as="font" crossOrigin="true" />
        <link rel="preload" href={GothamBook} as="font" crossOrigin="true" />
        <style dangerouslySetInnerHTML={{ __html: fontStyles }} />
        <style dangerouslySetInnerHTML={{ __html: tokenStyles }} />
      </Head>
      <body data-theme="dark" tabIndex={-1}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const initialTheme = JSON.parse(localStorage.getItem('theme'));
              document.body.dataset.theme = initialTheme || 'dark';
            `,
          }}
        />
        {/* <script src="http://localhost:3001/SarvathResume.pdf"></script> */}

        <Main />
        <NextScript />
        <div id="portal-root" />
      </body>
    </Html>
  );
}
