import Head from 'next/head';
import { useRouter } from 'next/router';

const siteUrl = process.env.NEXT_PUBLIC_WEBSITE_URL;
const baseUrl = siteUrl?.replace(/\/$/, '');
const name = 'Mohamed Sarvath Khan';
const twitterHandle = '@sarvath';
const defaultOgImage = `${baseUrl}/social-image.png`;

export interface MetaProps {
  title?: string;
  description?: string;
  prefix?: string;
  ogImage?: string;
}

export const Meta = ({
  title,
  description,
  prefix = name,
  ogImage = defaultOgImage,
}: MetaProps) => {
  const titleText = [prefix, title].filter(Boolean).join(' | ');
  const { asPath } = useRouter();
  const path = asPath.split('?')[0].split('#')[0];
  const pageUrl = `${baseUrl}${path === '/' ? '' : path}`;

  return (
    <Head>
      <title key="title">{titleText}</title>
      <meta key="description" name="description" content={description} />
      <meta name="author" content={name} />

      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content="Banner for the site" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="675" />

      <meta property="og:title" content={titleText} />
      <meta property="og:site_name" content={name} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:description" content={description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:title" content={titleText} />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  );
};
