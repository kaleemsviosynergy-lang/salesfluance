import { CheckCircle2 } from "lucide-react";

import type { PlaybookChecklistItem } from "@/types/playbook";

interface ChecklistProps {
  items: PlaybookChecklistItem[];
}

/**
 * A read-only checklist — V1 does not persist checked state anywhere (no
 * viewer-specific storage, no shared state). It communicates "here is what
 * to confirm," not an interactive tracker.
 */
export default function Checklist({ items }: ChecklistProps) {
  return (
    <ul className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
          <CheckCircle2 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-cyan-500" />
          <span>{item.text}</span>
        </li>
      ))}
    </ul>
  );
}
