import type { IconName } from "@/types/shared";

/**
 * A simple navigation link.
 */
export interface NavigationLink {
  label: string;
  href: string;
  description?: string;
  external?: boolean;
  icon?: IconName;
}

/**
 * One column inside a mega menu.
 */
export interface NavigationGroup {
  title: string;
  links: NavigationLink[];
}

/**
 * Optional featured panel displayed on the right side
 * of a mega menu.
 */
export interface NavigationFeatured {
  title: string;
  description: string;
  cta: NavigationLink;
}

/**
 * Mega menu configuration.
 */
export interface MegaMenuData {
  groups: NavigationGroup[];
  featured?: NavigationFeatured;
}

/**
 * Standard navigation item.
 */
export interface NavigationItem {
  label: string;
  href: string;
  megaMenu?: MegaMenuData;
}

export interface PrimaryCTA {
  label: string;
  href: string;
}

/**
 * Primary website navigation.
 *
 * This is the single source of truth for:
 *
 * - Desktop Navigation
 * - Mobile Navigation
 * - Mega Menu
 * - Navbar
 * - Future Footer Navigation
 *
 * Components render this structure—they never hardcode links.
 */
export const navigationItems: NavigationItem[] = [
  {
    label: "Services",
    href: "/services",

    megaMenu: {
      groups: [
        {
          title: "Demand Generation",

          links: [
            {
              label: "Lead Generation",
              href: "/services/lead-generation",
              description: "Build predictable B2B sales pipelines.",
            },

            {
              label: "Demand Generation",
              href: "/services/demand-generation",
              description: "Create and capture market demand.",
            },

            {
              label: "Appointment Setting",
              href: "/services/appointment-setting",
              description: "Book qualified sales meetings.",
            },

            {
              label: "Telemarketing",
              href: "/services/telemarketing",
              description: "Human-led outbound conversations.",
            },
          ],
        },

        {
          title: "Data Solutions",

          links: [
            {
              label: "Intent Data",
              href: "/services/intent-data",
              description: "Identify buyers actively researching.",
            },

            {
              label: "List Building",
              href: "/services/list-building",
              description: "Targeted prospect database creation.",
            },

            {
              label: "Data Enrichment",
              href: "/services/data-enrichment",
              description: "Improve CRM completeness.",
            },

            {
              label: "Data Cleansing",
              href: "/services/data-cleansing",
              description: "Maintain accurate customer data.",
            },

            {
              label: "Data Appending",
              href: "/services/data-appending",
              description: "Expand existing customer records.",
            },
          ],
        },

        {
          title: "Marketing Services",

          links: [
            {
              label: "Email Marketing",
              href: "/services/email-marketing",
              description: "Outbound email campaigns.",
            },

            {
              label: "Content Syndication",
              href: "/services/content-syndication",
              description: "Distribute gated content to target buyers.",
            },
          ],
        },
      ],

      featured: {
        title: "Need Qualified Leads?",

        description:
          "Discover how SalesFluance builds predictable B2B pipelines with AI-assisted research and human expertise.",

        cta: {
          label: "Book Discovery Call",
          href: "/contact",
        },
      },
    },
  },

  {
    label: "Industries",

    href: "/industries",

    megaMenu: {
      groups: [
        {
          title: "Industries",

          links: [
            {
              label: "Healthcare",
              href: "/industries/healthcare",
            },

            {
              label: "SaaS",
              href: "/industries/saas",
            },

            {
              label: "IT Services",
              href: "/industries/it-services",
            },

            {
              label: "Finance",
              href: "/industries/finance",
            },

            {
              label: "Manufacturing",
              href: "/industries/manufacturing",
            },
          ],
        },
      ],
    },
  },

  {
    label: "Process",
    href: "/process",
  },

  {
    label: "Resources",
    href: "/resources",
  },

  {
    label: "About",
    href: "/about",
  },

  {
    label: "Contact",
    href: "/contact",
  },
];

/**
 * Primary website CTA.
 *
 * This CTA is intentionally defined once and reused throughout the
 * application (Navbar, Mobile Navigation, Footer, Hero sections, etc.)
 * so changes to its label or destination happen in one place.
 */
export const primaryCta: PrimaryCTA = {
  label: "Book Discovery Call",
  href: "/contact",
};

/**
 * Convenience navigation subsets.
 *
 * These helpers allow components (such as the Footer or future mobile
 * navigation variants) to consume only the navigation they need without
 * duplicating filtering logic.
 */

/** Top-level navigation without mega menu expansion. */
export const mainNavigation = navigationItems;

/** Services navigation item (contains the full mega menu). */
export const servicesNavigation =
  navigationItems.find((item) => item.label === "Services");

/** Industries navigation item. */
export const industriesNavigation =
  navigationItems.find((item) => item.label === "Industries");