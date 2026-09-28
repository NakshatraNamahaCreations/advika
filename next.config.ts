import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root so Turbopack ignores the stray package-lock.json in C:\Users\HP
  turbopack: { root: __dirname },
  // `next build` writes a plain HTML/CSS/JS site to ./out that any web host can serve.
  output: "export",
  // Emits /about/index.html instead of /about.html, so folder-based hosts serve it
  trailingSlash: true,
  images: {
    // A static export has no image server, so files are served as they are.
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
