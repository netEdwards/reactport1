/** @type {import('next').NextConfig} */
const nextConfig = {}

const withFonts = require('next-fonts');

module.exports = withFonts({
  images: {
    domains: ['images.unsplash.com'],
  },
  webpack(config, options) {
    return config;
  },
});