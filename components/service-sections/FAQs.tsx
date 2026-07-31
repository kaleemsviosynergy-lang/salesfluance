import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/ui/FadeIn";
import type { SectionComponent } from "@/components/engine/SectionRegistry";

/**
 * Renders the "FAQs" section: a heading and an accessible accordion of
 * questions/answers, all from `data`. Uses native <details>/<summary>
 * rather than a bespoke accordion component — this keeps the section
 * dependency-free, keyboard-operable, and screen-reader friendly without
 * introducing a new shared UI primitive.
 */
const FAQs: SectionComponent<"faqs"> = ({ data }) => {
  return (
    <Container>
      <FadeIn delay={0}>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{data.heading}</h2>
      </FadeIn>

      <div className="mt-8 flex flex-col gap-4">
        {data.items.map((item, index) => (
          <FadeIn key={item.id} delay={0.06 + index * 0.05}>
            <Card>
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900 [&::-webkit-details-marker]:hidden">
                  <span>{item.question}</span>
                  <span
                    aria-hidden="true"
                    className="flex-shrink-0 text-slate-400 transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm text-slate-600">{item.answer}</p>
              </details>
            </Card>
          </FadeIn>
        ))}
      </div>
    </Container>
  );
};

export default FAQs;