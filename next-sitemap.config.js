module.exports = {
  siteUrl: 'https://sarvath-portfolio.vercel.app/',
  generateRobotsTxt: true,
  // Small site: emit one flat sitemap.xml with all URLs, not an index +
  // sitemap-0.xml (the index was rendering empty and confusing Search Console).
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
  sitemapSize: 50000,
  changefreq: 'monthly',
  transform: async (config, path) => ({
    loc: path,
    changefreq: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1.0 : path.startsWith('/projects') ? 0.8 : 0.6,
    lastmod: new Date().toISOString(),
  }),
};
