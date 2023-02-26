/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost", "stresk.herokuapp.com"],
  },
  experimental: { images: { allowFutureImage: true } },
}

module.exports = nextConfig
