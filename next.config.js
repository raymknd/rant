/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ["api.qrserver.com", "images.unsplash.com"],
  },
};

module.exports = nextConfig;
