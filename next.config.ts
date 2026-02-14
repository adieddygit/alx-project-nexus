import nextPWA from "@ducanh2912/next-pwa";
import type { NextConfig } from "next";

const withPWA = nextPWA({
  dest: "public",
  register: true,
  disable: process.env.NODE_ENV === "development",
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
      },
    ],
  },
};

export default withPWA(nextConfig);
