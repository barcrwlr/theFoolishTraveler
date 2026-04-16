/** @type {import('next').NextConfig} */
const nextConfig = {
  // CORS headers for all /api/* routes so AI agents can call them
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET, POST, DELETE, OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type, Authorization' },
        ],
      },
      // Allow AI agents to read the OpenAPI spec and plugin manifest
      {
        source: '/(openapi.json|.well-known/:path*)',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
        ],
      },
    ];
  },

  // Rewrite /api/* on thefoolishtraveler.com → this Railway service
  // (Only needed if you add this as a rewrite rule in readdy.ai / your DNS proxy)
  // Remove this block if Railway is serving the API on its own subdomain
  async rewrites() {
    return [];
  },
};

module.exports = nextConfig;
