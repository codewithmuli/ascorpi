import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',

  // Optional: Optimize images
  images: {
    unoptimized: true, // If you're not using Next.js image optimization
    // Or keep it if you want Next.js to optimize
    // domains: ['your-domain.com'], // If loading external images
  },

  // Optional: Disable x-powered-by header for security
  poweredByHeader: false,

  // Optional: Enable React strict mode
  reactStrictMode: true,

  // Optional: Production source maps (disable for smaller builds)
  productionBrowserSourceMaps: false,

  // Optional: Compression
  compress: true,

  // Optional: If you have environment variables that should be available at build time
  // env: {
  //   NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
  //   NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  // },
};

export default nextConfig;
