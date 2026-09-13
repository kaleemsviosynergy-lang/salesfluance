import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/buildMetadata";

// Phase 0 technical SEO fix: app/about/page.tsx is a "use client"
// component, which cannot export `metadata`/`generateMetadata` directly.
// Without any metadata anywhere in this route segment, it silently
// inherited the root layout's default canonical (the homepage) instead
// of pointing at itself. This sibling layout is the standard, minimal
// way to attach route-segment metadata to a client-component page —
// it renders nothing beyond passing children through unchanged.
// Only the canonical is fixed — title/description are left exactly as
// they were (inheriting the sitewide default), since that's a separate,
// out-of-scope content decision.
export const metadata: Metadata = buildMetadata({ path: "/about" });

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
