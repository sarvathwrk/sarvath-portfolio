module.exports = {
  siteUrl: 'https://sarvath-portfolio.vercel.app/',
  generateRobotsTxt: true,
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
