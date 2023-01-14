/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  eslint: {
    dirs: ['.'],
  },
  images: {
    domains: ['www.pngfind.com'],
  },
};

module.exports = nextConfig;
