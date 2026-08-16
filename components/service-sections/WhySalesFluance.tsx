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

      <div className="mt-10 hidden grid-cols-[1fr_2fr_2fr] gap-3 px-4 sm:grid">
        <span className="px-3 py-2 text-[11px] font-bold uppercase tracking-[.14em] text-slate-500">Dimension</span>
        <span className="px-3 py-2 text-[11px] font-bold uppercase tracking-[.14em] text-slate-500">Traditional Approach</span>
        <span className="rounded-xl bg-sky-50 px-3 py-2 text-[11px] font-bold uppercase tracking-[.14em] text-sky-700">SalesFluance</span>
      </div>

      <div className="mt-4 flex flex-col gap-3">
        {data.rows.map((row, index) => (
          <FadeIn key={row.dimension} delay={0.06 + index * 0.06}>
            <Card className="grid grid-cols-1 gap-3 rounded-2xl border border-slate-200 bg-white p-4 sm:grid-cols-[1fr_2fr_2fr] sm:items-center sm:gap-4">
              <span className="text-sm font-semibold text-slate-900">{row.dimension}</span>
              <span className="text-sm leading-6 text-slate-500">{row.traditionalAgency}</span>
              <span className="rounded-xl bg-sky-50 px-3 py-2 text-sm font-medium leading-6 text-sky-700">{row.salesFluance}</span>
            </Card>
          </FadeIn>
        ))}
      </div>
    </Container>
  );
};

export default WhySalesFluance;