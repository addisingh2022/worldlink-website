import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export', // ❌ Commented out because API routes need to work
  images: {
    unoptimized: true, // ✅ optional if you don't need image optimization
  },
};

export default nextConfig;

// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   output: 'export', // Static HTML export mode
//   // Optional: agar base path chahiye toh yahan add kar sakte ho
//   // basePath: '/your-base-path',
//   // Optional: images optimization ko disable kar static export ke liye
//   images: {
//     unoptimized: true,
//   },
// };

// export default nextConfig;
