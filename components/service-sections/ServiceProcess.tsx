import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import type { SectionComponent } from "@/components/engine/SectionRegistry";

/**
 * Renders the "Our Process" section as a connected six-stage
 * enterprise methodology rather than a conventional card grid.
 *
 * All business content remains data-driven through `data`.
 */
const OurProcess: SectionComponent<"ourProcess"> = ({ data }) => {
  return (
    <Container>
      {/* Section introduction */}
      <div className="mx-auto max-w-4xl text-center">
        <FadeIn delay={0}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">
            OUR METHODOLOGY
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-[44px]">
            {data.heading}
          </h2>
        </FadeIn>

        {data.subheading ? (
          <FadeIn delay={0.06}>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
              {data.subheading}
            </p>
          </FadeIn>
        ) : null}
      </div>

      {/* Process framework */}
      <div className="relative mx-auto mt-14 max-w-6xl">
        {/* Desktop connecting line */}
        <div
          aria-hidden="true"
          className="absolute left-[8%] right-[8%] top-7 hidden h-px bg-slate-200 lg:block"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4">
          {data.steps.map((step, index) => (
            <FadeIn key={step.id} delay={0.1 + index * 0.06}>
              <article className="group relative h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[0_16px_40px_rgba(15,23,42,0.07)]">
                {/* Stage number */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-white shadow-sm transition-colors duration-300 group-hover:bg-indigo-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-300">
                    STAGE
                  </span>
                </div>

                {/* Step title */}
                <div className="mt-7">
                  <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-slate-950">
                    {step.title}
                  </h3>

                  <div className="mt-3 h-px w-8 bg-indigo-200 transition-all duration-300 group-hover:w-12 group-hover:bg-indigo-500" />
                </div>

                {/* Step description */}
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>

                {/* Progress marker */}
                <div className="mt-6 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                    {index === data.steps.length - 1
                      ? "Continuous"
                      : "Next stage"}
                  </span>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Methodology statement */}
      <FadeIn delay={0.45}>
        <div className="mx-auto mt-8 max-w-6xl rounded-2xl border border-indigo-100 bg-indigo-50/50 px-6 py-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-indigo-600">
                THE PRINCIPLE
              </p>

              <p className="mt-1 text-sm font-medium leading-6 text-slate-700 sm:text-base">
                Every stage builds on the previous one — from account
                intelligence to measurable revenue.
              </p>
            </div>

            <div className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-indigo-100 bg-white text-indigo-600 sm:flex">
              →
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  );
};

export default OurProcess;