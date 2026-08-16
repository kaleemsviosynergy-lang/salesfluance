import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import type { SectionComponent } from "@/components/engine/SectionRegistry";

/**
 * Renders the "Who This Is For" section as an executive-fit section.
 *
 * The section keeps all business content data-driven while presenting
 * target personas as premium cards rather than generic badges.
 */
const WhoThisIsFor: SectionComponent<"whoThisIsFor"> = ({ data }) => {
  return (
    <Container>
      <div className="mx-auto max-w-4xl text-center">
        <FadeIn delay={0}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">
            WHO WE WORK WITH
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-[44px]">
            {data.heading}
          </h2>
        </FadeIn>

        <FadeIn delay={0.06}>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            {data.intro}
          </p>
        </FadeIn>
      </div>

      <div className="mx-auto mt-10 max-w-6xl">
        <div
          className={`grid gap-4 ${
            data.personas.length === 1
              ? "grid-cols-1"
              : data.personas.length === 2
                ? "grid-cols-1 sm:grid-cols-2"
                : data.personas.length === 3
                  ? "grid-cols-1 sm:grid-cols-3"
                  : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          }`}
        >
          {data.personas.map((persona, index) => (
            <FadeIn key={persona.id} delay={0.1 + index * 0.05}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
                <div className="flex items-start justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-100 bg-indigo-50 text-sm font-bold text-indigo-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                    FIT
                  </span>
                </div>

                <div className="mt-7">
                  <h3 className="text-base font-bold leading-6 text-slate-950">
                    {persona.title}
                  </h3>

                  <div className="mt-4 h-px w-10 bg-indigo-200 transition-all duration-300 group-hover:w-16 group-hover:bg-indigo-500" />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <FadeIn delay={0.25}>
        <div className="mx-auto mt-6 max-w-6xl">
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 sm:px-7">
            <div className="absolute left-0 top-0 h-full w-1 bg-indigo-500" />

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-indigo-600">
                  BEST FIT
                </p>

                <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-700 sm:text-base">
                  Best suited for B2B companies selling complex, high-value
                  solutions with multiple decision-makers.
                </p>
              </div>

              <div className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-indigo-600 sm:flex">
                →
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  );
};

export default WhoThisIsFor;