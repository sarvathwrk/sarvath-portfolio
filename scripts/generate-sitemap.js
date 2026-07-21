const fs = require('fs');

const SITE_URL = (process.env.NEXT_PUBLIC_WEBSITE_URL || '').replace(/\/$/, '');

function toRoute(page) {
  let route = page
    .replace('src/pages', '')
    .replace(/\.page\.(tsx|ts|js|mdx)$/, '')
    .replace(/\/index$/, '/');
  if (route === '/index') route = '';
  // Site uses trailingSlash: true — keep sitemap URLs consistent with canonicals.
  if (route && !route.endsWith('/')) route += '/';
  return route;
}

function addPage(page) {
  const route = toRoute(page);
  // Skip Next internals, dynamic routes, and the 404 page.
  if (route.includes('[') || route.includes('404')) return;
  return `  <url>
    <loc>${SITE_URL}${route}</loc>
    <changefreq>${route === '' || route === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${route === '' || route === '/' ? '1.0' : route.startsWith('/projects') ? '0.8' : '0.6'}</priority>
  </url>`;
}

async function generateSitemap() {
  const { globby } = await import('globby');
  // Page routes are TypeScript now (.page.tsx / .page.ts); exclude _app/_document and API routes.
  const pages = await globby([
    'src/pages/**/*.page.{tsx,ts,js,mdx}',
    '!src/pages/_*.{tsx,ts,js}',
    '!src/pages/**/_*.{tsx,ts,js}',
    '!src/pages/api/**',
  ]);

  const urls = pages.map(addPage).filter(Boolean);
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>\n`;

  fs.writeFileSync('public/sitemap.xml', sitemap);
  console.log(`[generate-sitemap] wrote ${urls.length} urls to public/sitemap.xml`);
}

generateSitemap();
