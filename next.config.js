/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Enable static export
  output: 'export',

  // Ensure images work without optimization (required for static export)
  images: {
    unoptimized: true
  },

  // Optional: emit /about.html instead of /about/index.html
  trailingSlash: true,

  // Optional: basePath if your site is served from a subdirectory
  // basePath: '/subfolder', // Uncomment and adjust if needed
};

module.exports = nextConfig;