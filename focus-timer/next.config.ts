import type { NextConfig } from "next";
import path from "path"; // Import path module

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'), // Resolve `@` to the `src` directory
    };
    return config;
  },
};

export default nextConfig;
