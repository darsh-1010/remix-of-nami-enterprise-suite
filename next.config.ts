import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Images from public/assets are already local — no remote domains needed
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
