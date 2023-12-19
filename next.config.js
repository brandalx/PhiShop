/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["static.vecteezy.com", "www.lapa.ninja", "lapa.ninja"],
    remotePatterns: [
      {
        hostname: "localhost",
        pathname: "**",
        port: "3000",
        protocol: "http",
      },
    ],
  },
};

module.exports = nextConfig;
