/** @type {import('next').NextConfig} */
const nextConfig = {
    // images: {
    //     remotePatterns: [
    //       {
    //         protocol: 'https',
    //         hostname: 'live-production.wcms.abc-cdn.net.au',
    //         port: '',
    //         pathname: '/8f1bc9bd6bfc376553ae596b95e33f8b',
    //       },
    //     ],
    //   },
    images: {
        domains: ['live-production.wcms.abc-cdn.net.au'],
      },
      exportPathMap: function () {
        return {
          "/": { page: "/app" },
          "/categories": { page: "/app/categories" },
          "/[title]": { page: "/app/[title]" },
        };
      },
      exportTrailingSlash: true,  
}

module.exports = nextConfig
