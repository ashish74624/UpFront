/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['live-production.wcms.abc-cdn.net.au'],
      },
      async generateStaticPaths() {
        return {
          '/': { app: '/' },
          '/categories': { app: '/categories' },
          '/:title': { app: '/[title]' },
        };
      },
      exportTrailingSlash: true, 
}

module.exports = nextConfig
