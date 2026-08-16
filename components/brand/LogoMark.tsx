import * as React from "react";

/**
 * SalesFluance Brand Mark — "The Convergence Mark"
 *
 * Concept: three signal nodes of increasing weight, connected by a single
 * ascending path — a faint early signal, a forming relationship, and a
 * resolved revenue node. This is the same visual grammar as the site's
 * "Relationship Map" panel (Hero, Approach), compressed to its simplest
 * form. It is not a generic target/arrow/handshake icon — it is literally
 * a miniature diagram of the SalesFluance methodology: signals converge
 * into intelligence, intelligence converges into revenue.
 *
 * Color behavior:
 * - The small + mid node and the connecting path use `currentColor`,
 *   so this ONE file works correctly on white, Ink Black, or any
 *   future surface — no separate light/dark exports needed.
 * - The hub node (and its halo ring) is always cyan (#22D3EE). This is
 *   the fixed brand signature — the one accent that never changes,
 *   matching the "Active" signal and "Target Enterprise" node already
 *   used across the site. Spend the boldness in one place only.
 *
 * Usage:
 *   <LogoMark className="text-[#0A0E14]" size={32} />          // on light bg
 *   <LogoMark className="text-white" size={32} />              // on dark bg
 *   <LogoMark className="text-slate-400" size={20} />          // muted/footer
 */

interface LogoMarkProps {
  size?: number;
  className?: string;
  title?: string;
}

export default function LogoMark({
  size = 32,
  className = "",
  title = "SalesFluance",
}: LogoMarkProps): React.JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>

      {/* Ascending connective path — the "signal" resolving into revenue */}
      <path
        d="M10 35C10 35 17 31 22 25C27 19 32 15 38 12"
        stroke="currentColor"
        strokeOpacity="0.38"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Node 01 — early signal (Market Intelligence) */}
      <circle cx="10" cy="35" r="3" fill="currentColor" fillOpacity="0.35" />

      {/* Node 02 — forming relationship (Decision-Maker Mapping) */}
      <circle cx="22" cy="25" r="4.25" fill="currentColor" fillOpacity="0.65" />

      {/* Halo — signature "active / resolved" ring around the hub */}
      <circle
        cx="38"
        cy="12"
        r="9.5"
        stroke="#22D3EE"
        strokeOpacity="0.22"
        strokeWidth="1.5"
      />

      {/* Node 03 — the hub (Revenue) — fixed cyan, the one constant accent */}
      <circle cx="38" cy="12" r="6" fill="#22D3EE" />
    </svg>
  );
}