import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/ui/FadeIn";
import type { SectionComponent } from "@/components/engine/SectionRegistry";

/**
 * Renders the "Service Process" section: a heading, optional subheading,
 * and a numbered step sequence. Step numbers come from `data` (`order`),
 * never hardcoded — reordering or trimming steps in content requires no
 * change here.
 */
const ServiceProcess: SectionComponent<"serviceProcess"> = ({ data }) => {
  return (
    <Container>
      <div className="mx-auto max-w-3xl text-center">
        <FadeIn delay={0}>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{data.heading}</h2>
        </FadeIn>
        {data.subheading ? (
          <FadeIn delay={0.06}>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{data.subheading}</p>
          </FadeIn>
        ) : null}
      </div>

      <div className="relative mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-6">
        {data.steps.map((step, index) => (
          <FadeIn key={step.id} delay={0.1 + index * 0.05}>
            <div className="relative flex h-full flex-col gap-3 rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-600 text-sm font-bold text-white">
                  {step.order}
                </span>
                <p className="text-xs font-bold uppercase tracking-[.18em] text-sky-700">{step.label}</p>
              </div>
              <p className="text-sm leading-6 text-slate-600">{step.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Container>
  );
};

export default ServiceProcess;