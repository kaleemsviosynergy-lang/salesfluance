"use client";

const OPERATING_STANDARD = [
  {
    number: "01",
    title: "Data Handling",
    description:
      "Commercial research and engagement data is handled with clear purpose, controlled access, and respect for the requirements of each client environment.",
  },
  {
    number: "02",
    title: "Human Verification",
    description:
      "AI-assisted research supports speed and scale, while human review remains part of the qualification process where accuracy and context matter.",
  },
  {
    number: "03",
    title: "Reporting",
    description:
      "Engagement and opportunity activity is structured into clear reporting so teams can understand what was researched, qualified, delivered, and progressed.",
  },
  {
    number: "04",
    title: "Integrations",
    description:
      "SalesFluance is designed to work alongside existing sales and marketing workflows rather than requiring teams to replace the systems they already use.",
  },
  {
    number: "05",
    title: "Engagement Model",
    description:
      "Programs are built around the client's commercial objectives, target accounts, buying environment, and preferred operating cadence.",
  },
];

export default function EnterpriseReadiness() {
  return (
    <section
      id="enterprise-readiness"
      aria-labelledby="enterprise-readiness-heading"
      className="border-t border-slate-200 bg-[#FAFAF9]"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 py-24 sm:px-10 lg:px-16 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          {/* Framing */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Operating Standard
            </p>

            <h2
              id="enterprise-readiness-heading"
              className="mt-5 max-w-md text-4xl font-semibold tracking-[-0.025em] text-[#0A0E14] sm:text-5xl"
            >
              Built to operate
              <br />
              <span className="text-cyan-600">responsibly at scale.</span>
            </h2>

            <p className="mt-6 max-w-md text-base leading-7 text-slate-600">
              Enterprise growth requires more than strong capabilities. It
              requires a disciplined operating model for data, verification,
              reporting, and collaboration.
            </p>

            <div className="mt-8 border-l border-cyan-500/40 pl-5">
              <p className="text-sm leading-6 text-slate-500">
                This is how the FLUANZ process is run responsibly.
              </p>
            </div>
          </div>

          {/* Operating ledger */}
          <div className="border-t border-slate-200">
            {OPERATING_STANDARD.map((item) => (
              <div
                key={item.number}
                className="grid gap-5 border-b border-slate-200 py-7 sm:grid-cols-[64px_190px_1fr] sm:items-start sm:gap-7"
              >
                <span className="font-mono text-[10px] font-semibold tracking-[0.16em] text-cyan-600">
                  {item.number}
                </span>

                <h3 className="text-base font-semibold tracking-[-0.01em] text-[#0A0E14]">
                  {item.title}
                </h3>

                <p className="max-w-xl text-sm leading-6 text-slate-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom standard */}
        <div className="mt-10 flex flex-col gap-4 border-t border-slate-200 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
            Intelligence + accountability
          </p>

          <p className="max-w-2xl text-sm leading-6 text-slate-500">
            The objective is simple: make commercial intelligence useful
            without compromising the discipline required to use it responsibly.
          </p>
        </div>
      </div>
    </section>
  );
}