/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: './',
  images: {
    loader: 'akamai',
    path: '',
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
