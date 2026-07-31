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
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
        <FadeIn delay={0}>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{data.heading}</h2>
        </FadeIn>
        {data.subheading ? (
          <FadeIn delay={0.06}>
            <p className="text-lg text-slate-600">{data.subheading}</p>
          </FadeIn>
        ) : null}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.steps.map((step, index) => (
          <FadeIn key={step.id} delay={0.1 + index * 0.06}>
            <Card className="flex h-full flex-col gap-3">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sky-600 text-sm font-semibold text-white"
                >
                  {step.order}
                </span>
                <h3 className="text-base font-semibold text-slate-900">{step.label}</h3>
              </div>
              <p className="text-sm text-slate-600">{step.description}</p>
              {step.duration ? <p className="text-xs font-medium text-slate-400">{step.duration}</p> : null}
            </Card>
          </FadeIn>
        ))}
      </div>
    </Container>
  );
};

export default ServiceProcess;