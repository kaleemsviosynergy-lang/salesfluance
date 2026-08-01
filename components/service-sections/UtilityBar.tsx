import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import type { SectionComponent } from "@/components/engine/SectionRegistry";

/**
 * Renders the "Utility Bar": a breadcrumb trail and a persistent CTA,
 * pinned to the top of the viewport via CSS `position: sticky` (no scroll
 * listener or client-side state required). All labels, hrefs, and CTA
 * content come from `data` — this component carries no business content
 * of its own and does not know which service it belongs to.
 */
const UtilityBar: SectionComponent<"utilityBar"> = ({ data }) => {
  return (
    <div className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <Container className="flex items-center justify-between gap-4 py-3">
        <nav aria-label="Breadcrumb" className="min-w-0">
          <ol className="flex items-center gap-1.5 overflow-hidden text-sm text-slate-500">
            {data.breadcrumb.map((item, index) => (
              <li key={item.label} className="flex items-center gap-1.5 truncate">
                {index > 0 ? (
                  <span aria-hidden="true" className="text-slate-300">
                    /
                  </span>
                ) : null}
                {item.href ? (
                  <a href={item.href} className="truncate hover:text-slate-900">
                    {item.label}
                  </a>
                ) : (
                  <span aria-current="page" className="truncate font-medium text-slate-900">
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <Button
          href={data.stickyCta.href}
          variant={data.stickyCta.variant}
          target={data.stickyCta.external ? "_blank" : undefined}
          rel={data.stickyCta.external ? "noreferrer" : undefined}
          className="flex-shrink-0"
        >
          {data.stickyCta.label}
        </Button>
      </Container>
    </div>
  );
};

export default UtilityBar;