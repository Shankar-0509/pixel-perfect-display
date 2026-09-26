import {
  Card,
  CardGrid,
  CtaBand,
  MetricBand,
  PageHero,
  ProcessFlow,
  Section,
  SectionHeading,
} from "@/components/site/primitives";
import { CTA_PRIMARY, FOUNDER_METRICS, routes } from "@/lib/site-nav";

const expertiseCards = [
  { title: "CMC & Late-Stage Development", to: `${routes.expertise}#cmc` },
  { title: "MS&T & Technical Operations", to: `${routes.expertise}#mst` },
  { title: "Technology Transfer & Commercialization", to: `${routes.expertise}#transfer` },
  { title: "Manufacturing, Validation & Launch Readiness", to: `${routes.expertise}#validation` },
  { title: "Specialized Products, AI & Digital Transformation", to: `${routes.expertise}#specialized` },
];

const thoughtLeadership = [
  "Enterprise Commercialization",
  "Quality by Design",
  "AI-assisted pharmaceutical development",
  "AI-assisted technology transfer",
  "Technical Operations",
  "Sterile ophthalmics",
  "Drug-device combination products",
];

export function FounderPage() {
  return (
    <>
      <PageHero
        eyebrow="Founder & Principal Advisor"
        title="Raj Thota, MBA, MS (Pharmaceutics)"
        subtitle="Enterprise Pharmaceutical & Biotechnology Commercialization Executive"
        copy={[
          "From Pharmaceutical Development to Enterprise Commercialization Leadership.",
          "Raj Thota brings nearly three decades of experience connecting pharmaceutical development, CMC, MS&T, Technical Operations, manufacturing, and commercialization. His perspective combines scientific and technical depth with operating leadership, global external manufacturing, regulatory readiness, and business accountability.",
        ]}
      />

      <Section>
        <SectionHeading
          eyebrow="Career Journey"
          title="A Progression Across the Full Commercialization Lifecycle"
          copy="This progression created an enterprise perspective on a recurring industry challenge: how to convert development knowledge into a process, organization, and manufacturing system capable of delivering reliable commercial supply."
        />
        <ProcessFlow
          className="mt-10"
          steps={[
            { label: "Development" },
            { label: "CMC" },
            { label: "MS&T" },
            { label: "Technical Operations" },
            { label: "Manufacturing Leadership" },
            { label: "Enterprise Commercialization" },
          ]}
        />
      </Section>

      <Section tone="surface">
        <SectionHeading eyebrow="Selected Career Experience" title="Experience Across Development-to-Commercial Operations" />
        <div className="mt-10">
          <MetricBand
            metrics={FOUNDER_METRICS}
            note="Selected career experience accumulated across prior organizations. This is not InnoTech BioPharm Solutions corporate financial or performance data."
          />
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Executive Expertise" title="Where That Experience Applies" />
        <CardGrid className="mt-10">
          {expertiseCards.map((card) => (
            <Card key={card.title} title={card.title} to={card.to} linkLabel="Explore expertise" />
          ))}
        </CardGrid>
      </Section>

      <Section tone="teal">
        <SectionHeading eyebrow="Leadership Perspective" title="Building Capability, Not Only Solving Problems" />
        <blockquote className="mt-8 max-w-3xl border-l-2 border-accent pl-6 font-display text-xl font-medium leading-relaxed text-foreground md:text-2xl">
          "Technical leadership is not simply about solving today's problem. It is about building the
          knowledge, systems, governance, and organizational capability required to prevent, recognize,
          and manage tomorrow's challenges."
        </blockquote>
        <ProcessFlow
          className="mt-10"
          steps={[
            { label: "Understand" },
            { label: "Anticipate" },
            { label: "Integrate" },
            { label: "Build" },
            { label: "Deliver" },
          ]}
        />
      </Section>

      <Section>
        <SectionHeading eyebrow="Thought Leadership" title="Published Topics and Executive Perspectives" />
        <ul className="mt-8 flex flex-wrap gap-2.5">
          {thoughtLeadership.map((topic) => (
            <li
              key={topic}
              className="surface-card px-4 py-2 text-[0.875rem] font-medium text-foreground"
            >
              {topic}
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand
        heading="Discuss an Executive Readiness Assessment"
        copy="Independent perspective on development readiness, technology transfer, manufacturing capability, PPQ, launch, or supply reliability."
        ctaLabel={CTA_PRIMARY}
        ctaTo={routes.contact}
      />
    </>
  );
}
