import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "helpfulpickle-us.backendless.app",
      },
    ],
    loader: 'custom',
    loaderFile: './my/image/loader.js',
  },
};

export default nextConfig;
