/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'gateway.ipfscdn.io',
      'a6d53c51513a836ac95d50402dad284d.ipfscdn.io',
    ],
  },
}

module.exports = nextConfig
