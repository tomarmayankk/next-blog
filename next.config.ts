import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allows any domain
      },
      {
        hostname: "lh3.googleusercontent.com",
        protocol: "https",
        port: ""
      }
    ]
  }
};

export default nextConfig;
