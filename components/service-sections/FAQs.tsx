import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import type { SectionComponent } from "@/components/engine/SectionRegistry";

/**
 * Renders the "FAQs" section as an executive objection-handling layer.
 *
 * Uses native <details>/<summary> for accessibility and progressive
 * enhancement. All questions and answers remain data-driven.
 */
const FAQs: SectionComponent<"faqs"> = ({ data }) => {
  return (
    <Container>
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <FadeIn delay={0}>
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
                Common Questions
              </p>

              <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                {data.heading}
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.06}>
            <p className="max-w-2xl text-base leading-7 text-slate-600 lg:ml-auto">
              Clear answers to the questions revenue teams typically ask
              before introducing an account-based growth program.
            </p>
          </FadeIn>
        </div>

        {/* FAQ list */}
        <div className="mt-12 overflow-hidden rounded-[28px] border border-slate-200 bg-white">
          {data.items.map((item, index) => (
            <FadeIn
              key={item.id}
              delay={0.08 + index * 0.05}
            >
              <details className="group border-b border-slate-200 last:border-b-0">
                <summary className="flex cursor-pointer list-none items-center gap-5 px-6 py-6 outline-none transition-colors duration-200 hover:bg-slate-50 focus-visible:bg-slate-50 sm:px-8 sm:py-7 [&::-webkit-details-marker]:hidden">
                  
                  {/* Number */}
                  <span className="hidden shrink-0 text-xs font-bold tracking-[0.14em] text-slate-400 sm:block">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Question */}
                  <span className="flex-1 text-base font-semibold leading-6 text-slate-900 sm:text-lg">
                    {item.question}
                  </span>

                  {/* Expand control */}
                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 text-lg font-light text-slate-500 transition-all duration-200 group-hover:border-indigo-200 group-hover:text-indigo-600 group-open:rotate-45 group-open:border-indigo-200 group-open:bg-indigo-50 group-open:text-indigo-600"
                  >
                    +
                  </span>
                </summary>

                <div className="grid grid-cols-[auto_1fr] gap-5 px-6 pb-7 sm:px-8">
                  <span aria-hidden="true" className="hidden sm:block w-7" />

                  <p className="max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
                    {item.answer}
                  </p>
                </div>
              </details>
            </FadeIn>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default FAQs;