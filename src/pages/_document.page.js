import GothamBook from 'assets/fonts/gotham-book.woff2';
import GothamMedium from 'assets/fonts/gotham-medium.woff2';
import { fontStyles, tokenStyles } from 'components/ThemeProvider';
import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />

        {/* <!-- For standard browsers --> */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        {/* <!-- For high-resolution displays --> */}
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/icon-192.png" sizes="192x192" type="image/png" />

        {/* <!-- For Apple devices --> */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-touch-icon-152x152.png"
        />

        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" id="favicon1" href="/file.png" type="image/png" />

        <link type="text/plain" rel="author" href="/humans.txt" />

        <link
          rel="preload"
          href={GothamMedium}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href={GothamBook}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <style dangerouslySetInnerHTML={{ __html: fontStyles }} />
        <style dangerouslySetInnerHTML={{ __html: tokenStyles }} />
      </Head>
      <body data-theme="dark" tabIndex={-1}>
        <Main />
        <NextScript />
        <div id="portal-root" />

        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Mohamed Sarvath Khan',
              url: 'https://sarvath-portfolio.vercel.app/',
              sameAs: ['https://www.linkedin.com/in/mohamed-sarvath-khan-a19b2698/'],
              jobTitle: 'Full Stack Developer',
              worksFor: {
                '@type': 'Organization',
                name: 'Freelancing',
              },
              alumniOf: 'Anna University',
              description:
                'Experienced Full Stack Developer specializing in React.js, Next.js, Node.js, Mongo DB and TypeScript.',
              image: 'https://i.imgur.com/32qoE9j.jpg',
            }),
          }}
        />
      </body>
    </Html>
  );
}
