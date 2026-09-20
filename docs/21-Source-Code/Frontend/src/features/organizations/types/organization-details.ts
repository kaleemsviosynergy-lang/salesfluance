import type { Organization } from "./types";

/**
 * The Organization Details workspace renders the same organization identity
 * shown in the Organizations list. It is an alias — not a copy — so the two
 * views cannot drift apart. Add view-specific fields here via intersection
 * (e.g. `Organization & { ... }`) only if the details view genuinely needs them.
 */
export type OrganizationDetails = Organization;
