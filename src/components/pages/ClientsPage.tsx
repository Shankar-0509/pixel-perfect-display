import {
  Card,
  CardGrid,
  CtaBand,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/site/primitives";
import { routes } from "@/lib/site-nav";
import partnershipImage from "@/assets/advisory-partnership.jpg";

const audiences = [
  {
    title: "Emerging & Growth-Stage Pharma / Biotech",
    copy: "Build the technical and manufacturing capability required to move from development toward commercial supply.",
  },
  {
    title: "Established Pharmaceutical Organizations",
    copy: "Strengthen technology transfer, MS&T, validation, and lifecycle performance across sites and networks.",
  },
  {
    title: "Virtual & Externally Manufactured Companies",
    copy: "Provide the technical oversight and governance that external manufacturing models require.",
  },
  {
    title: "CDMOs & Manufacturing Organizations",
    copy: "Improve transfer readiness, process stewardship, technical governance, validation readiness, and customer delivery.",
  },
  {
    title: "Investors, Boards & Transaction Teams",
    copy: "Understand technical risk, manufacturing readiness, commercialization exposure, and value-creation priorities.",
  },
  {
    title: "Technology & AI Companies Serving Pharma",
    copy: "Translate pharmaceutical workflows, GxP expectations, technical knowledge, and commercialization needs into useful digital solutions.",
  },
];

const triggers = [
  "A product is moving from development toward commercial scale",
  "Technology transfer or receiving-site readiness decisions are approaching",
  "PPQ, validation, launch, or initial commercial supply is at risk",
  "A CDMO or manufacturing network needs stronger technical oversight",
  "Recurring manufacturing problems require independent technical assessment",
  "Leadership needs clearer technical-risk visibility before investment or transaction",
  "MS&T / Technical Operations capability needs to be built or transformed",
  "AI and digital opportunities need to be prioritized inside real pharmaceutical workflows",
];

const partnerships = [
  "Executive Advisory",
  "Readiness Assessment",
  "Program / Project Support",
  "Independent Technical Review",
  "Recovery & Capability Building",
];

export function ClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Work With"
        title="Organizations Building Manufacturing and Commercialization Capability"
        subtitle="Relevance Across the Commercialization Ecosystem"
        copy={[
          "InnoTech works with organizations at the point where scientific progress must become manufacturing capability, commercialization readiness, and reliable supply.",
        ]}
        image={partnershipImage}
        imageAlt="Technical and commercial leaders working through a transfer readiness review"
        priority
      />

      <Section>
        <SectionHeading eyebrow="Audiences" title="Who Engages InnoTech" />
        <CardGrid className="mt-10">
          {audiences.map((item) => (
            <Card key={item.title} title={item.title} copy={item.copy} />
          ))}
        </CardGrid>
      </Section>

      <Section tone="surface">
        <SectionHeading
          eyebrow="When Organizations Engage"
          title="Typical Trigger Points"
          copy="Engagement usually begins at a decision point, a milestone, or a moment when technical risk needs to be made visible."
        />
        <ol className="mt-10 grid gap-4 md:grid-cols-2">
          {triggers.map((trigger, index) => (
            <li key={trigger} className="surface-card flex gap-4 p-5">
              <span className="font-display text-sm font-bold text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-[0.9375rem] leading-relaxed text-muted-foreground">{trigger}</span>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="teal">
        <SectionHeading
          eyebrow="How We Partner"
          title="Engagement Shaped Around the Decision"
          copy="The objective is not only to address the immediate issue. It is to leave the organization with stronger knowledge, clearer governance, better technical decisions, and more sustainable capability."
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {partnerships.map((item) => (
            <li
              key={item}
              className="surface-card p-5 font-display text-sm font-semibold uppercase tracking-wide text-foreground"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand
        heading="Discuss Your Challenge"
        copy="A brief high-level description of the product, milestone, and challenge is sufficient to begin the conversation."
        ctaLabel="Discuss Your Commercialization Challenge"
        ctaTo={routes.contact}
      />
    </>
  );
}
