/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'cdn.dribbble.com' },
      { hostname: 'ik.imagekit.io' },
    ],
  },
};

module.exports = nextConfig;
