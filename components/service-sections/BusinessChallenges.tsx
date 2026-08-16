import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/ui/FadeIn";
import Badge from "@/components/ui/Badge";
import type { SectionComponent } from "@/components/engine/SectionRegistry";

/**
 * Renders the "Business Challenges" section: a heading, optional
 * subheading, and a grid of challenge cards. Every string, icon, and item
 * comes from `data` — this component carries no business content of its
 * own and does not know which service it belongs to.
 */
const BusinessChallenges: SectionComponent<"businessChallenges"> = ({ data }) => {
  return (
    <Container>
      <div className="mx-auto max-w-4xl">
        <div className="max-w-2xl">
          <FadeIn delay={0}>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{data.heading}</h2>
          </FadeIn>
          {data.subheading ? (
            <FadeIn delay={0.06}>
              <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{data.subheading}</p>
            </FadeIn>
          ) : null}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {data.items.map((item, index) => (
            <FadeIn key={item.id} delay={0.1 + index * 0.06}>
              <Card className="flex h-full flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50/60 p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                    <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-sky-600" />
                  </span>
                  <span className="text-sm font-semibold text-slate-900">{item.label}</span>
                </div>
                <p className="text-sm leading-6 text-slate-600">{item.description}</p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default BusinessChallenges;