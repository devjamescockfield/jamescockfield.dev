/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
  trailingSlash: false,
  compiler: { removeConsole: { exclude: ["error", "warn"] } },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: false },
  experimental: { typedRoutes: false },
};
module.exports = nextConfig;
