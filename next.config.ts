import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build a self-contained server bundle for a small Docker image.
  output: "standalone",
};

export default nextConfig;
