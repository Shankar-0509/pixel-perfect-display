import {
  Action,
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
import aboutImage from "@/assets/advisory-partnership.jpg";

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="About InnoTech BioPharm Solutions"
        subtitle="Bridging Development and Commercial Manufacturing"
        copy={[
          "InnoTech BioPharm Solutions is an executive advisory firm helping pharmaceutical and biotechnology organizations transform scientific knowledge into manufacturing capability, commercialization readiness, and reliable product supply.",
          "A product is not truly commercialized when development is complete. It is commercialized when the organization can manufacture and supply it reliably.",
        ]}
        image={aboutImage}
        imageAlt="Advisors reviewing technical readiness documents beside a manufacturing facility"
        priority
      />

      <Section>
        <SectionHeading
          eyebrow="Commercialization Philosophy"
          title="Science, Manufacturing and Supply as One System"
          copy={
            <>
              <p>
                Commercialization is the point where science, manufacturing, quality, regulatory
                strategy, supply, and business execution must work as one system.
              </p>
              <p>
                Our focus is not simply completing activities. It is building the technical and
                organizational capability required to reproduce the process, manage risk, make sound
                decisions, and sustain reliable commercial supply.
              </p>
            </>
          }
        />
        <ProcessFlow
          className="mt-10"
          steps={[
            { label: "Science" },
            { label: "Capability" },
            { label: "Readiness" },
            { label: "Supply" },
            { label: "Lifecycle" },
          ]}
        />
      </Section>

      <Section tone="surface">
        <SectionHeading
          eyebrow="How We Work"
          title="Independent Perspective. Integrated Strategy. Practical Execution. Sustainable Capability."
        />
        <ProcessFlow
          className="mt-10"
          numbered
          steps={[
            {
              label: "Assess",
              copy: "Understand the product, process, organization, evidence, dependencies, and risk.",
            },
            {
              label: "Align",
              copy: "Create one cross-functional view of priorities, decisions, ownership, and milestones.",
            },
            {
              label: "Build",
              copy: "Strengthen process understanding, manufacturing capability, governance, and readiness.",
            },
            {
              label: "Execute",
              copy: "Support technology transfer, validation, launch, recovery, or transformation.",
            },
            {
              label: "Sustain",
              copy: "Embed knowledge, process stewardship, monitoring, and organizational capability.",
            },
          ]}
        />
      </Section>

      <Section>
        <SectionHeading eyebrow="Our Commitment" title="What Guides Every Engagement" />
        <CardGrid className="mt-10">
          <Card
            title="Scientific Rigor"
            copy="Decisions grounded in product and process understanding."
          />
          <Card
            title="Manufacturing Reality"
            copy="Strategies designed for actual equipment, sites, people, systems, and supply constraints."
          />
          <Card
            title="Commercial Perspective"
            copy="Technical decisions evaluated in the context of timing, risk, cost, launch, and lifecycle performance."
          />
        </CardGrid>
      </Section>

      <Section tone="teal">
        <SectionHeading
          eyebrow="Leadership"
          title="Leadership Grounded in the Commercialization Lifecycle"
          copy="Raj Thota, MBA, MS (Pharmaceutics), Founder & Principal Advisor, brings nearly three decades connecting pharmaceutical development, CMC, MS&T, Technical Operations, manufacturing, and commercialization."
        />
        <div className="mt-10">
          <MetricBand
            metrics={FOUNDER_METRICS}
            note="Selected career experience of the founder across prior organizations, not InnoTech company performance."
          />
        </div>
        <div className="mt-8">
          <Action to={routes.founder}>Meet the Founder</Action>
        </div>
      </Section>

      <CtaBand
        heading="Bring the Challenge. We Will Help Structure the Question."
        copy="Share a high-level description of the product, milestone, or organizational challenge you are working through."
        ctaLabel={CTA_PRIMARY}
        ctaTo={routes.contact}
      />
    </>
  );
}
