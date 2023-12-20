/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "static.vecteezy.com",
      "www.lapa.ninja",
      "lapa.ninja",
      "cdn.dribbble.com",
      "https://phishop.vercel.app",
      "localhost",
    ],
    // remotePatterns: [
    //   {
    //     hostname: "localhost",
    //     pathname: "**",
    //     port: "3000",
    //     protocol: "http",
    //   },
    // ],
  },
};

module.exports = nextConfig;
