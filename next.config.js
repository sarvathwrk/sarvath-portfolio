module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  pageExtensions: ['page.tsx', 'page.ts', 'page.js', 'api.ts', 'api.js'],
  images: {
    // Images are self-hosted under /public/images/<project>/ — no remote hosts needed.
    remotePatterns: [],
    // Serve modern formats (AVIF first, WebP fallback) from the optimizer.
    formats: ['image/avif', 'image/webp'],
    // Optimized variants are content-hashed and immutable — cache them ~31 days.
    minimumCacheTTL: 2678400,
  },
  reactCompiler: true,

  webpack(config, { isServer }) {
    // Run custom scripts
    if (isServer) {
      require('./scripts/generate-sitemap');
      require('./scripts/draco');
    }

    // Import `svg` files as React components
    config.module.rules.push({
      test: /\.svg$/,
      resourceQuery: { not: [/url/] },
      use: [{ loader: '@svgr/webpack', options: { svgo: false } }],
    });

    // Import videos, models, hdrs, and fonts
    config.module.rules.push({
      test: /\.(mp4|hdr|glb|woff|woff2)$/i,
      type: 'asset/resource',
    });

    // Force url import with `?url`
    config.module.rules.push({
      resourceQuery: /url/,
      type: 'asset/resource',
    });

    // Import `.glsl` shaders
    config.module.rules.push({
      test: /\.glsl$/,
      type: 'asset/source',
    });

    return config;
  },
};
