/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Improve performance
  swcMinify: true,
  // Optimize fonts
  optimizeFonts: true,
  // Improve images
  images: {
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
}

module.exports = nextConfig
