import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // Phase 0 technical SEO fix: consolidate the www host onto the apex
  // domain, which is already the app's own declared canonical host
  // (see lib/seo/seoConfig.ts's siteUrl). Verified against GSC data
  // showing both hosts independently indexed with no existing redirect
  // between them anywhere in this repo. `has: [{ type: "host", ... }]`
  // is a documented Next.js redirects() capability, confirmed here
  // against the installed next package's own type definitions
  // (node_modules/next/dist/lib/load-custom-routes.d.ts).
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.salesfluance.com" }],
        destination: "https://salesfluance.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
