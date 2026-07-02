import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  output: process.env.OUTPUT_MODE === "export" ? "export" : undefined,
  images: { unoptimized: true },
  devIndicators: false,
  poweredByHeader: false,
  reactStrictMode: true,
};
export default nextConfig;
