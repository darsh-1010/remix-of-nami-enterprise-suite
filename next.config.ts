import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The sharp-based optimizer's on-disk cache is unreliable on this external-SSD-hosted
  // project (it has repeatedly served corrupted/cached garbage for local /public images),
  // so images are served unoptimized/as-is to avoid that failure mode entirely.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
