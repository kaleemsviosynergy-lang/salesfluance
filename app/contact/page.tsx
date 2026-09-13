import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/buildMetadata";

import ContactHero from "./ContactHero";
import ContactForm from "./ContactForm";

// Phase 0 technical SEO fix: this page previously had no metadata export,
// so it silently inherited the root layout's default canonical
// (the homepage) instead of pointing at itself. Only the canonical is
// fixed here — title/description are left exactly as they were
// (inheriting the sitewide default), since that's a separate,
// out-of-scope content decision.
export const metadata: Metadata = buildMetadata({ path: "/contact" });

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
    </>
  );
}