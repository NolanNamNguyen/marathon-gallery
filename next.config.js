/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  eslint: {
    dirs: ['.'],
  },
  env: {
    API_URL: (() => process.env.API_URL)(),
  },
  images: {
    domains: ['www.pngfind.com'],
  },
};

module.exports = nextConfig;
