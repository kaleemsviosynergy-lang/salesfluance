import { CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";

/**
 * AIVsHumanGrid — complementary-strengths comparison for Blog #11.
 *
 * Built from the same comparison-table grammar as
 * components/service-sections/WhySalesFluance.tsx (rounded-[28px]
 * bordered frame, slate/indigo column treatment, framework footer
 * strip), simplified from three columns to two and reframed around
 * "complementary" rather than "us vs. the old way".
 *
 * Deliberately titled and worded to avoid an adversarial "AI vs.
 * human" reading — the footer strip states the complementary framing
 * explicitly, per editorial direction.
 */

interface ColumnItem {
  label: string;
}

const AI_STRENGTHS: ColumnItem[] = [
  { label: "Research" },
  { label: "Summarization" },
  { label: "Pattern recognition" },
  { label: "Prioritization" },
  { label: "Repetitive execution" },
  { label: "Data organization" },
  { label: "First-draft content" },
];

const HUMAN_STRENGTHS: ColumnItem[] = [
  { label: "Judgment" },
  { label: "Context" },
  { label: "Relationships" },
  { label: "Negotiation" },
  { label: "Trust" },
  { label: "Strategic decisions" },
  { label: "Accountability" },
  { label: "Understanding the buyer" },
];

function StrengthList({
  items,
  accent,
}: {
  items: ColumnItem[];
  accent: "indigo" | "dark";
}) {
  const iconClass = accent === "indigo" ? "text-indigo-500" : "text-slate-700";

  return (
    <ul className="space-y-3.5">
      {items.map((item) => (
        <li key={item.label} className="flex items-start gap-3">
          <CheckCircle2
            aria-hidden="true"
            className={`mt-0.5 h-4 w-4 shrink-0 ${iconClass}`}
            strokeWidth={1.8}
          />
          <span className="text-sm font-medium leading-6 text-slate-800 sm:text-[15px]">
            {item.label}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function AIVsHumanGrid() {
  return (
    <section aria-labelledby="ai-vs-human-heading" className="not-prose">
      <Container size="lg" disableGutters>
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-indigo-200" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-indigo-600">
                Complementary Strengths
              </span>
              <span aria-hidden="true" className="h-px w-8 bg-indigo-200" />
            </div>
            <h2
              id="ai-vs-human-heading"
              className="text-3xl font-bold tracking-[-0.03em] text-slate-950 sm:text-4xl"
            >
              What each side is actually good at
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_16px_50px_rgba(15,23,42,0.06)]">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {/* AI column */}
              <div className="border-b border-slate-200 p-7 sm:border-b-0 sm:border-r sm:p-8">
                <div className="mb-6 flex items-center gap-2">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-600">
                    AI is strong at
                  </span>
                </div>
                <StrengthList items={AI_STRENGTHS} accent="indigo" />
              </div>

              {/* Human column */}
              <div className="bg-slate-50/60 p-7 sm:p-8">
                <div className="mb-6 flex items-center gap-2">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-slate-700" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                    Humans remain critical for
                  </span>
                </div>
                <StrengthList items={HUMAN_STRENGTHS} accent="dark" />
              </div>
            </div>

            {/* Framework footer */}
            <div className="border-t border-slate-200 bg-slate-50/70 px-7 py-5 sm:px-8">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Not a competition
                </span>
                <span className="text-sm font-medium text-slate-700">
                  The strongest systems route each task to whichever side is actually better at it.
                </span>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
