import Container from "@/components/ui/Container";
import type { SectionComponent } from "@/components/engine/SectionRegistry";

const UtilityBar: SectionComponent<"utilityBar"> = ({ data }) => {
  return (
    <div className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <Container className="flex min-h-12 items-center py-2">
        <nav aria-label="Breadcrumb" className="min-w-0">
          <ol className="flex items-center gap-2 overflow-hidden text-xs sm:text-sm">
            {data.breadcrumb.map((item, index) => (
              <li
                key={item.label}
                className="flex min-w-0 items-center gap-2"
              >
                {index > 0 ? (
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-slate-300"
                  >
                    /
                  </span>
                ) : null}

                {item.href ? (
                  <a
                    href={item.href}
                    className="truncate text-slate-500 transition-colors hover:text-slate-900"
                  >
                    {item.label}
                  </a>
                ) : (
                  <span
                    aria-current="page"
                    className="truncate font-medium text-slate-800"
                  >
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </Container>
    </div>
  );
};

export default UtilityBar;