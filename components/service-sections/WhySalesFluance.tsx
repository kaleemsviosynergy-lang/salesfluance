import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/ui/FadeIn";
import type { SectionComponent } from "@/components/engine/SectionRegistry";

/**
 * Renders the "Why SalesFluance" section: a heading, optional subheading,
 * and a "Traditional Agencies vs. SalesFluance" comparison, one Card per
 * dimension. Uses a responsive grid rather than a literal <table> so the
 * same markup reads as a stacked comparison on mobile and an aligned grid
 * on larger screens, with no separate mobile-only DOM. All copy comes from
 * `data`.
 */
const WhySalesFluance: SectionComponent<"whySalesFluance"> = ({ data }) => {
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

      <div className="mt-10 hidden grid-cols-[1fr_2fr_2fr] gap-4 px-6 sm:grid">
        <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">Dimension</span>
        <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">Traditional Agencies</span>
        <span className="text-xs font-semibold uppercase tracking-wide text-sky-600">SalesFluance</span>
      </div>

      <div className="mt-4 flex flex-col gap-4">
        {data.rows.map((row, index) => (
          <FadeIn key={row.dimension} delay={0.06 + index * 0.06}>
            <Card className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_2fr_2fr] sm:items-center sm:gap-4">
              <span className="text-sm font-semibold text-slate-900">{row.dimension}</span>
              <span className="text-sm text-slate-500">{row.traditionalAgency}</span>
              <span className="text-sm font-medium text-sky-700">{row.salesFluance}</span>
            </Card>
          </FadeIn>
        ))}
      </div>
    </Container>
  );
};

export default WhySalesFluance;