import nextPWA from "@ducanh2912/next-pwa";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    turbo: true,
  },
  images: {
    domains: ["fakestoreapi.com"],
  },
};

export default nextPWA({
  ...nextConfig,
  dest: "public",
  register: true,
  // skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});
