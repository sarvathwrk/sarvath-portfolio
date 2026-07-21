import GothamBook from '@/assets/fonts/gotham-book.woff2';
import GothamMedium from '@/assets/fonts/gotham-medium.woff2';
import { fontStyles, tokenStyles } from '@/components/ThemeProvider';
import { Head, Html, Main, NextScript } from 'next/document';
// import { Analytics } from '@vercel/analytics/react';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />

        {/* <!-- For standard browsers --> */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        {/* <!-- For high-resolution displays --> */}
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/favicon-48x48.png" sizes="48x48" type="image/png" />
        <link rel="icon" href="/favicon64.png" sizes="64x64" type="image/png" />
        <link rel="icon" href="/favicon-128.png" sizes="128x128" type="image/png" />
        <link rel="icon" href="/icon-192.png" sizes="192x192" type="image/png" />

        {/* <!-- For Apple devices --> */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
          type="image/png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-touch-icon-152x152.png"
          type="image/png"
        />
        <link rel="manifest" href="/manifest.json" />

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

        {/* Structured data — server-rendered so Google indexes the person
            entity for "Mohamed Sarvath Khan" / "Sarvath Khan" / "Sarvath". */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Person',
                  '@id': 'https://sarvath-portfolio.vercel.app/#person',
                  name: 'Mohamed Sarvath Khan',
                  alternateName: ['Sarvath Khan', 'Sarvath', 'Mohamed Sarvath'],
                  url: 'https://sarvath-portfolio.vercel.app/',
                  image: 'https://sarvath-portfolio.vercel.app/images/profile/32qoE9j.jpg',
                  jobTitle: 'Full Stack Developer',
                  description:
                    'Full Stack Developer based in Dubai with 5+ years building scalable SaaS platforms, Web3 applications, and real-time systems with Next.js, NestJS, PostgreSQL, MongoDB and Redis.',
                  worksFor: {
                    '@type': 'Organization',
                    name: 'SoftBuilders Software Design LLC',
                  },
                  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Anna University' },
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Dubai',
                    addressCountry: 'AE',
                  },
                  knowsAbout: [
                    'React',
                    'Next.js',
                    'Node.js',
                    'NestJS',
                    'Express.js',
                    'TypeScript',
                    'JavaScript',
                    'HTML5',
                    'CSS3',
                    'Tailwind CSS',
                    'Material UI',
                    'PostgreSQL',
                    'MongoDB',
                    'MySQL',
                    'Redis',
                    'WebSockets',
                    'REST APIs',
                    'Stripe',
                    'AWS S3',
                    'Firebase',
                    'Redux Toolkit',
                    'RTK Query',
                    'JWT',
                    'Auth0',
                    'React Hook Form',
                    'Zod',
                    'TanStack Table',
                    'Web3',
                    'Blockchain',
                    'Cron Jobs',
                    'Figma',
                    'Git',
                  ],
                  sameAs: [
                    'https://www.linkedin.com/in/mohamed-sarvath-khan-a19b2698/',
                    'https://github.com/sarvathwrk',
                  ],
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://sarvath-portfolio.vercel.app/#website',
                  url: 'https://sarvath-portfolio.vercel.app/',
                  name: 'Mohamed Sarvath Khan — Portfolio',
                  description:
                    'Portfolio of Mohamed Sarvath Khan, a Full Stack Developer based in Dubai.',
                  inLanguage: 'en',
                  publisher: { '@id': 'https://sarvath-portfolio.vercel.app/#person' },
                },
              ],
            }),
          }}
        />
      </Head>
      <body data-theme="dark" tabIndex={-1}>
        <Main />
        <NextScript />
        <div id="portal-root" />
      </body>
    </Html>
  );
}
