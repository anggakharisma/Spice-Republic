/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost"
      },
      {
        protocol: "http",
        hostname: "192.168.0.111"
      },
    ]
  }
}

module.exports = nextConfig
