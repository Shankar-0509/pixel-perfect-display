import { FrameworkDiagram } from "@/components/site/FrameworkDiagram";
import {
  Action,
  Card,
  CardGrid,
  CtaBand,
  MetricBand,
  ProcessFlow,
  Section,
  SectionHeading,
} from "@/components/site/primitives";
import { CTA_PRIMARY, CTA_SECONDARY, FOUNDER_METRICS, routes } from "@/lib/site-nav";
import heroImage from "@/assets/hero-filling-line.jpg";

const valueCards = [
  {
    title: "CMC & Late-Stage Development",
    copy: "Translate development knowledge into a scalable, controlled, commercially viable process.",
    to: `${routes.expertise}#cmc`,
  },
  {
    title: "MS&T & Technical Operations",
    copy: "Build process stewardship, technical governance, manufacturing science, and lifecycle capability.",
    to: `${routes.expertise}#mst`,
  },
  {
    title: "Technology Transfer & Manufacturing Readiness",
    copy: "Transfer product and process knowledge into reproducible receiving-site capability.",
    to: `${routes.expertise}#transfer`,
  },
  {
    title: "Validation, Launch & Commercialization",
    copy: "Integrate PPQ, technical launch readiness, initial commercial supply, and lifecycle performance.",
    to: `${routes.expertise}#validation`,
  },
  {
    title: "Specialized Products & Delivery Systems",
    copy: "Support complex oral products, sterile ophthalmics, injectables/LAIs, and drug-device combination products.",
    to: `${routes.expertise}#specialized`,
  },
  {
    title: "AI & Digital Technical Operations",
    copy: "Apply AI, digital twins, MES, advanced analytics, and knowledge systems to strengthen technical decisions and manufacturing performance.",
    to: `${routes.expertise}#ai-digital`,
  },
];

const differences = [
  {
    title: "Commercialization Begins Before PPQ",
    copy: "Readiness should be designed into late-stage development, not discovered at validation.",
  },
  {
    title: "Technology Transfer Is Knowledge Transfer",
    copy: "Documents explain what to do. Process understanding explains why.",
  },
  {
    title: "Readiness Is Evidence-Based",
    copy: "Calendar progress does not equal manufacturing readiness.",
  },
  {
    title: "Risk Should Be Visible Early",
    copy: "Earlier visibility creates more technical and business options.",
  },
  {
    title: "Digital Technology Must Serve the Process",
    copy: "AI and digital tools should strengthen pharmaceutical decisions—not replace accountable experts.",
  },
  {
    title: "Commercialization Is an Enterprise Capability",
    copy: "Reliable supply requires cross-functional alignment, not isolated functional success.",
  },
];

const insights = [
  {
    title: "Enterprise Commercialization",
    copy: "The progressive conversion of product and process knowledge into manufacturing capability, organizational readiness, and reliable supply.",
    featured: true,
  },
  { title: "The Evolution of QbD" },
  { title: "Good AI Practice in Pharma & Biotech" },
  { title: "Commercializing Sterile Ophthalmic Eye Drops" },
];

export function HomePage() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="container-page grid items-center gap-10 py-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:py-20">
          <div>
            <p className="eyebrow">Enterprise Pharmaceutical &amp; Biotechnology Commercialization Advisory</p>
            <h1 className="mt-3 text-[2.25rem] font-bold leading-[1.08] text-foreground md:text-[3.375rem]">
              Transforming Scientific Innovation into Commercial Manufacturing Success
            </h1>
            <p className="mt-5 text-[0.8125rem] font-medium uppercase leading-relaxed tracking-[0.08em] text-muted-foreground">
              CMC • MS&amp;T • Technical Operations • Technology Transfer • Manufacturing Readiness •
              Commercialization • AI &amp; Digital Transformation
            </p>
            <p className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-muted-foreground">
              InnoTech helps organizations transform development knowledge into scalable manufacturing
              capability, commercialization readiness, and reliable commercial supply.
            </p>
            <p className="mt-6 font-display text-sm font-bold uppercase leading-relaxed tracking-[0.14em] text-accent">
              Build products. Build manufacturing. Build capability.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Action to={routes.expertise}>{CTA_SECONDARY}</Action>
              <Action to={routes.contact} variant="secondary">
                {CTA_PRIMARY}
              </Action>
            </div>
          </div>
          <img
            src={heroImage}
            alt="Commercial pharmaceutical vial filling line in a GMP manufacturing suite"
            width={1600}
            height={1104}
            className="w-full rounded-lg border border-border object-cover shadow-[var(--shadow-raised)]"
          />
        </div>
      </section>

      <Section>
        <SectionHeading
          eyebrow="The Commercialization Challenge"
          title="Scientific Success Does Not Automatically Become Commercial Success"
          copy={
            <>
              <p>
                The greatest commercialization risks often emerge as products move across Development,
                CMC, MS&amp;T, Engineering, Manufacturing, Quality, Regulatory, Supply Chain, and
                Commercial.
              </p>
              <p>
                InnoTech helps identify and address these gaps before they become validation problems,
                regulatory delays, launch risks, or supply disruptions.
              </p>
            </>
          }
        />
        <ProcessFlow
          className="mt-10"
          steps={[
            { label: "Scientific Understanding" },
            { label: "Process Capability" },
            { label: "Technology Transfer" },
            { label: "Manufacturing Readiness" },
            { label: "Validation" },
            { label: "Launch" },
            { label: "Reliable Supply" },
          ]}
        />
      </Section>

      <Section tone="surface">
        <SectionHeading
          eyebrow="Signature Framework"
          title="Enterprise Commercialization"
          copy="Commercialization is not a single event at approval or launch. It is the progressive conversion of product and process knowledge into manufacturing capability, organizational readiness, and reliable supply."
        />
        <div className="mt-10">
          <FrameworkDiagram showEnablers={false} />
        </div>
        <div className="mt-8">
          <Action to={routes.frameworks}>Explore the Framework</Action>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Where We Create Value" title="Capability Across the Commercialization Lifecycle" />
        <CardGrid className="mt-10">
          {valueCards.map((card) => (
            <Card key={card.title} {...card} linkLabel="Explore expertise" />
          ))}
        </CardGrid>
      </Section>

      <Section tone="teal">
        <SectionHeading eyebrow="The InnoTech Difference" title="How We Think About Commercialization" />
        <CardGrid className="mt-10">
          {differences.map((item) => (
            <Card key={item.title} title={item.title} copy={item.copy} />
          ))}
        </CardGrid>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Experience Across the Lifecycle"
          title="Selected Career Experience of InnoTech Founder Raj Thota"
          copy="Experience spans Pharmaceutical Development, CMC, MS&T, Technical Operations, technology transfer, validation, manufacturing/site leadership, external manufacturing, commercialization, and executive advisory."
        />
        <div className="mt-10">
          <MetricBand
            metrics={FOUNDER_METRICS}
            note="These metrics describe the founder's career experience across prior organizations. They do not represent InnoTech BioPharm Solutions company performance."
          />
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading
          eyebrow="Executive Insights"
          title="Executive Insights"
          copy="Explore practical frameworks and executive perspectives at the intersection of science, manufacturing, technology, and commercialization."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <Card
            title={insights[0].title}
            copy={insights[0].copy}
            eyebrow="Featured"
            to={routes.insights}
            linkLabel="Read the perspective"
            className="bg-secondary"
          />
          <div className="grid gap-6">
            {insights.slice(1).map((item) => (
              <Card key={item.title} title={item.title} to={routes.insights} linkLabel="Read more" />
            ))}
          </div>
        </div>
        <div className="mt-8">
          <Action to={routes.insights} variant="secondary">
            Explore Executive Insights &amp; Publications
          </Action>
        </div>
      </Section>

      <CtaBand
        heading="Where Is Your Commercialization Risk?"
        copy="Whether the challenge is development readiness, technology transfer, manufacturing capability, PPQ, launch, supply, or technical transformation, the right time to understand the risk is before it becomes critical path."
        ctaLabel={CTA_PRIMARY}
        ctaTo={routes.contact}
      />
    </>
  );
}
