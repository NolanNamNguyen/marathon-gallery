/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  assetPrefix: './',
  eslint: {
    dirs: ['.'],
  },
  images: {
    domains: ['www.pngfind.com'],
  },
};

module.exports = nextConfig;
