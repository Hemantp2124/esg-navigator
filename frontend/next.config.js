/** @type {import('next').NextConfig} */
const nextConfig = {
}

module.exports = {
  experimental: {
    turbopack: {
      root: __dirname,
    },
  },
  ...nextConfig
}
