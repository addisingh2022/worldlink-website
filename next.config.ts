import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Static HTML export mode
  // Optional: agar base path chahiye toh yahan add kar sakte ho
  // basePath: '/your-base-path',
  // Optional: images optimization ko disable kar static export ke liye
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
