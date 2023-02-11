/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  assetPrefix: isProd ? '/famu1hundred.github.io/' : '',
  images: {
    loader: 'akamai',
    path: '',
  }
}

module.exports = nextConfig
