import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import type { SectionComponent } from "@/components/engine/SectionRegistry";

function ChallengeIcon({ icon }: { icon?: string }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (icon) {
    case "users":
      return (
        <svg {...common}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );

    case "workflow":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="6" height="6" rx="1" />
          <rect x="15" y="3" width="6" height="6" rx="1" />
          <rect x="9" y="15" width="6" height="6" rx="1" />
          <path d="M9 6h6M18 9v3a3 3 0 0 1-3 3H9" />
        </svg>
      );

    case "message-square":
      return (
        <svg {...common}>
          <path d="M21 11.5a8.4 8.4 0 0 1-9 8.5 9.8 9.8 0 0 1-4-.9L3 21l1.9-4A8.3 8.3 0 0 1 3 11.5 8.5 8.5 0 0 1 12 3a8.5 8.5 0 0 1 9 8.5Z" />
        </svg>
      );

    case "target":
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" />
          <circle cx="12" cy="12" r="4.5" />
          <circle cx="12" cy="12" r="1" />
        </svg>
      );
  }
}

const BusinessChallenges: SectionComponent<"businessChallenges"> = ({
  data,
}) => {
  return (
    <section className="relative border-t border-slate-100 bg-white pb-24 pt-24 sm:pb-28 sm:pt-28 lg:pb-32 lg:pt-36">
      <Container size="xl">
        <div className="mx-auto max-w-6xl">

          {/* Section introduction */}
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end lg:gap-16">

            <FadeIn direction="up">
              <div>
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-indigo-600">
                  The ABM Problem
                </p>

                <h2 className="max-w-xl text-4xl font-bold leading-[1.05] tracking-[-0.035em] text-slate-950 sm:text-5xl lg:text-[52px]">
                  {data.heading}
                </h2>
              </div>
            </FadeIn>

            {data.subheading ? (
              <FadeIn direction="up" delay={0.08}>
                <p className="max-w-2xl border-l border-slate-200 pl-6 text-base leading-7 text-slate-600 sm:text-[17px] sm:leading-8">
                  {data.subheading}
                </p>
              </FadeIn>
            ) : null}

          </div>

          {/* Challenge framework */}
          <FadeIn direction="up" delay={0.14}>
            <div className="mt-14 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.06)] sm:mt-16">

              <div className="grid grid-cols-1 md:grid-cols-2">

                {data.items.map((item, index) => (
                  <Card
                    key={item.id}
                    className={[
                      "group relative min-h-[250px] rounded-none border-0 bg-white p-7 shadow-none transition-colors duration-300 hover:bg-slate-50/70 sm:p-8 lg:p-10",
                      index % 2 === 0
                        ? "md:border-r md:border-slate-200"
                        : "",
                      index < 2
                        ? "md:border-b md:border-slate-200"
                        : "",
                    ].join(" ")}
                  >

                    <div className="flex items-start justify-between gap-6">

                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-700 transition-colors group-hover:border-indigo-200 group-hover:bg-indigo-50 group-hover:text-indigo-600">
                        <ChallengeIcon icon={item.icon} />
                      </span>

                      <span className="pt-1 text-[10px] font-semibold tracking-[0.18em] text-slate-300">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                    </div>

                    <div className="mt-8 max-w-xl">

                      <h3 className="text-xl font-semibold tracking-[-0.015em] text-slate-950 sm:text-[22px]">
                        {item.label}
                      </h3>

                      <p className="mt-3 max-w-lg text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7">
                        {item.description}
                      </p>

                    </div>

                  </Card>
                ))}

              </div>

              <div className="flex flex-col gap-2 border-t border-slate-200 bg-slate-50/70 px-7 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">

                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Enterprise revenue friction
                </span>

                <span className="text-sm font-medium text-slate-700">
                  Four gaps. One connected ABM problem.
                </span>

              </div>

            </div>
          </FadeIn>

        </div>
      </Container>
    </section>
  );
};

export default BusinessChallenges;