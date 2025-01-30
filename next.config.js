/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Comment this out or change to 'standalone' if needed
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
