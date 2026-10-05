import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    SANITY_STUDIO_PROJECT_ID:
      process.env.SANITY_STUDIO_PROJECT_ID ??
      process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ??
      "",
    SANITY_STUDIO_DATASET:
      process.env.SANITY_STUDIO_DATASET ??
      process.env.NEXT_PUBLIC_SANITY_DATASET ??
      "production",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
