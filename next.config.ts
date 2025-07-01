import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "", // ← LocalWPなどでポート指定ない場合は空でOK
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
