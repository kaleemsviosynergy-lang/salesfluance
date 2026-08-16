import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import Badge from "@/components/ui/Badge";
import type { SectionComponent } from "@/components/engine/SectionRegistry";

/**
 * Renders the "Deliverables" section: a heading and a checklist-style grid
 * of what the client receives. Deliberately lighter-weight than the
 * Card-based sections above it — a checklist reads faster as a flat grid
 * of labeled markers than as a grid of boxed cards. All content comes from
 * `data`.
 */
const Deliverables: SectionComponent<"deliverables"> = ({ data }) => {
  return (
    <Container>
      <FadeIn delay={0}>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{data.heading}</h2>
      </FadeIn>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {data.items.map((item, index) => (
          <FadeIn key={item.id} delay={0.06 + index * 0.05}>
            <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-sky-600" />
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900">{item.label}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Container>
  );
};

export default Deliverables;