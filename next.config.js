/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  eslint: {
    dirs: ['.'],
  },
  env: {
    API_URL: (() => process.env.API_URL)(),
  },
};

module.exports = nextConfig;
