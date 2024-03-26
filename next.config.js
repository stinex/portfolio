/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/webp'],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
