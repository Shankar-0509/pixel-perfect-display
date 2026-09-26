const stages = [
  { label: "Understand", copy: "Product and process knowledge" },
  { label: "Build", copy: "Process and manufacturing capability" },
  { label: "Transfer", copy: "Knowledge into the receiving site" },
  { label: "Ready", copy: "Evidence-based readiness" },
  { label: "Validate", copy: "PPQ and process validation" },
  { label: "Launch", copy: "Technical launch readiness" },
  { label: "Supply", copy: "Reliable commercial supply" },
  { label: "Sustain", copy: "Lifecycle performance" },
];

const functions = [
  "Development",
  "CMC",
  "MS&T",
  "Engineering",
  "Manufacturing",
  "Quality",
  "Regulatory",
  "Supply Chain",
  "Commercial",
];

const enablers = ["Governance", "Risk Management", "Knowledge Management", "AI & Digital"];

/** The signature Enterprise Commercialization Framework. Every label is DOM text. */
export function FrameworkDiagram({ showEnablers = true }: { showEnablers?: boolean }) {
  return (
    <div className="bg-navy-gradient rounded-lg p-6 text-primary-foreground md:p-10">
      <p className="eyebrow">Enterprise Commercialization Framework</p>

      <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {stages.map((stage, index) => (
          <li
            key={stage.label}
            className="rounded-md border border-primary-foreground/15 bg-primary-foreground/5 p-4"
          >
            <span className="font-display text-[0.6875rem] font-bold tracking-[0.14em] text-accent">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="mt-1.5 block font-display text-sm font-bold uppercase tracking-wide">
              {stage.label}
            </span>
            <span className="mt-1.5 block text-[0.8125rem] leading-relaxed text-primary-foreground/70">
              {stage.copy}
            </span>
          </li>
        ))}
      </ol>

      <div className="mt-8 rounded-md border border-primary-foreground/15 p-5">
        <p className="eyebrow">Cross-Functional Foundation</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {functions.map((item) => (
            <li
              key={item}
              className="rounded border border-primary-foreground/15 bg-primary-foreground/5 px-3 py-1.5 text-[0.8125rem] font-medium"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {showEnablers ? (
        <div className="mt-4 rounded-md border border-accent/30 bg-accent/10 p-5">
          <p className="eyebrow">Enterprise Enablers</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {enablers.map((item) => (
              <li
                key={item}
                className="rounded border border-accent/40 px-3 py-1.5 text-[0.8125rem] font-semibold text-accent"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
