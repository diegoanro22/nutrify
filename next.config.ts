import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "prod.spline.design",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
