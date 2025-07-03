import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "webyayasu.sakura.ne.jp",
        pathname: "/uthuyomizyuku/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
