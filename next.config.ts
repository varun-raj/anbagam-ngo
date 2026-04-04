import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "anbagam.org",
      },
    ],
  },
};

export default nextConfig;
