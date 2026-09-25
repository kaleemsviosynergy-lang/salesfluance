import type { PlaybookComparisonColumn } from "@/types/playbook";

interface ComparisonGridProps {
  columns: PlaybookComparisonColumn[];
}

/**
 * Side-by-side comparison — used in the Activate chapter to keep demand
 * creation and lead capture visibly distinct rather than blended into one
 * undifferentiated description.
 */
// Tailwind's build-time scanner needs each class name to appear literally in
// source, so the column-count class is picked from this fixed map rather
// than built with a template literal (`grid-cols-${n}` would never be
// detected and would silently produce no styling).
const GRID_COLUMNS_CLASS: Record<number, string> = {
  1: "sm:grid-cols-1",
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
};

export default function ComparisonGrid({ columns }: ComparisonGridProps) {
  const columnsClass = GRID_COLUMNS_CLASS[columns.length] ?? "sm:grid-cols-2";

  return (
    <div className={`grid gap-4 ${columnsClass}`}>
      {columns.map((column, index) => (
        <div key={index} className="rounded-2xl border border-slate-200 bg-white p-5">
          <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-950">
            {column.label}
          </h3>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
            {column.items.map((item, itemIndex) => (
              <li key={itemIndex} className="flex gap-2">
                <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
