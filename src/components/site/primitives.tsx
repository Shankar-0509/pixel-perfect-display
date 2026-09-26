import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  tone = "base",
  className,
  children,
}: {
  id?: string;
  tone?: "base" | "surface" | "teal" | "navy";
  className?: string;
  children: ReactNode;
}) {
  const tones = {
    base: "bg-background text-foreground",
    surface: "bg-surface text-foreground",
    teal: "bg-secondary text-secondary-foreground",
    navy: "bg-navy-gradient text-primary-foreground",
  } as const;

  return (
    <section id={id} className={cn("section-y", tones[tone], className)}>
      <div className="container-page">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
  onNavy = false,
}: {
  eyebrow?: string;
  title: string;
  copy?: ReactNode;
  align?: "left" | "center";
  onNavy?: boolean;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <p className={cn("eyebrow", onNavy && "text-accent")}>{eyebrow}</p>
      ) : null}
      <h2
        className={cn(
          "mt-3 text-3xl font-semibold leading-tight md:text-[2.5rem]",
          onNavy ? "text-primary-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {copy ? (
        <div
          className={cn(
            "mt-4 space-y-4 text-[1.0625rem] leading-relaxed",
            onNavy ? "text-primary-foreground/80" : "text-muted-foreground",
          )}
        >
          {typeof copy === "string" ? <p>{copy}</p> : copy}
        </div>
      ) : null}
    </div>
  );
}

const actionStyles = {
  primary:
    "bg-accent text-accent-foreground hover:bg-accent/90 border border-transparent",
  secondary:
    "bg-transparent text-foreground border border-input hover:border-accent hover:text-accent",
  onNavy:
    "bg-transparent text-primary-foreground border border-primary-foreground/30 hover:border-accent hover:text-accent",
  navySolid: "bg-primary text-primary-foreground hover:bg-navy-deep border border-transparent",
} as const;

export function Action({
  to,
  children,
  variant = "primary",
  className,
}: {
  to: string;
  children: ReactNode;
  variant?: keyof typeof actionStyles;
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={cn(
        "inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold tracking-wide transition-colors",
        actionStyles[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}

export function TextLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
    >
      {children}
      <span aria-hidden="true">→</span>
    </Link>
  );
}

export function Card({
  title,
  copy,
  items,
  to,
  linkLabel = "Learn more",
  eyebrow,
  children,
  className,
}: {
  title: string;
  copy?: string;
  items?: string[];
  to?: string;
  linkLabel?: string;
  eyebrow?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("surface-card flex h-full flex-col p-6", className)}>
      {eyebrow ? <p className="eyebrow mb-2">{eyebrow}</p> : null}
      <h3 className="text-lg font-semibold leading-snug text-foreground">{title}</h3>
      {copy ? (
        <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">{copy}</p>
      ) : null}
      {items?.length ? (
        <ul className="mt-4 space-y-2 text-[0.9375rem] text-muted-foreground">
          {items.map((item) => (
            <li key={item} className="flex gap-2">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
      {children}
      {to ? (
        <div className="mt-5 pt-1">
          <TextLink to={to}>{linkLabel}</TextLink>
        </div>
      ) : null}
    </div>
  );
}

export function CardGrid({
  columns = 3,
  className,
  children,
}: {
  columns?: 2 | 3 | 4;
  className?: string;
  children: ReactNode;
}) {
  const cols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  } as const;
  return <div className={cn("grid gap-6", cols[columns], className)}>{children}</div>;
}

/** Reusable lifecycle/process component. Steps are real DOM text in sequence. */
export function ProcessFlow({
  steps,
  onNavy = false,
  numbered = false,
  className,
}: {
  steps: { label: string; copy?: string }[];
  onNavy?: boolean;
  numbered?: boolean;
  className?: string;
}) {
  return (
    <ol className={cn("flex flex-col gap-3 md:flex-row md:flex-wrap md:items-stretch", className)}>
      {steps.map((step, index) => (
        <li key={step.label} className="flex flex-1 items-stretch gap-3 md:min-w-[150px]">
          <div
            className={cn(
              "flex w-full flex-col rounded-md border p-4",
              onNavy
                ? "border-primary-foreground/15 bg-primary-foreground/5"
                : "border-border bg-surface",
            )}
          >
            <span className="eyebrow">
              {numbered ? String(index + 1).padStart(2, "0") : `Step ${index + 1}`}
            </span>
            <span
              className={cn(
                "mt-2 font-display text-sm font-semibold uppercase tracking-wide",
                onNavy ? "text-primary-foreground" : "text-foreground",
              )}
            >
              {step.label}
            </span>
            {step.copy ? (
              <span
                className={cn(
                  "mt-2 text-[0.8125rem] leading-relaxed",
                  onNavy ? "text-primary-foreground/70" : "text-muted-foreground",
                )}
              >
                {step.copy}
              </span>
            ) : null}
          </div>
          {index < steps.length - 1 ? (
            <span
              aria-hidden="true"
              className={cn(
                "self-center text-sm md:hidden",
                onNavy ? "text-accent" : "text-accent",
              )}
            >
              ↓
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

export function MetricBand({
  label = "Selected Career Experience",
  metrics,
  note,
}: {
  label?: string;
  metrics: { value: string; label: string }[];
  note?: string;
}) {
  return (
    <div className="bg-navy-gradient rounded-lg px-6 py-8 text-primary-foreground md:px-10">
      <p className="eyebrow">{label}</p>
      <dl className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {metrics.map((metric) => (
          <div key={metric.label}>
            <dt className="font-display text-2xl font-bold text-accent">{metric.value}</dt>
            <dd className="mt-1 text-[0.8125rem] leading-snug text-primary-foreground/75">
              {metric.label}
            </dd>
          </div>
        ))}
      </dl>
      {note ? (
        <p className="mt-6 max-w-3xl text-[0.8125rem] leading-relaxed text-primary-foreground/60">
          {note}
        </p>
      ) : null}
    </div>
  );
}

export function CtaBand({
  heading,
  copy,
  ctaLabel,
  ctaTo,
}: {
  heading: string;
  copy: string;
  ctaLabel: string;
  ctaTo: string;
}) {
  return (
    <section className="bg-navy-gradient">
      <div className="container-page flex flex-col gap-6 py-14 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold text-primary-foreground md:text-3xl">{heading}</h2>
          <p className="mt-3 text-[1.0625rem] leading-relaxed text-primary-foreground/75">{copy}</p>
        </div>
        <Action to={ctaTo} variant="primary" className="self-start md:self-auto">
          {ctaLabel}
        </Action>
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  copy,
  image,
  imageAlt,
  imageWidth = 1408,
  imageHeight = 1008,
  priority = false,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  copy?: string[];
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  priority?: boolean;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-border bg-surface">
      <div
        className={cn(
          "container-page grid items-center gap-10 py-14 md:py-20",
          image && "lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]",
        )}
      >
        <div>
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1 className="mt-3 text-[2.25rem] font-bold leading-[1.1] text-foreground md:text-[3.25rem]">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-4 font-display text-lg font-semibold text-accent md:text-xl">
              {subtitle}
            </p>
          ) : null}
          {copy?.length ? (
            <div className="mt-5 space-y-4 text-[1.0625rem] leading-relaxed text-muted-foreground">
              {copy.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          ) : null}
          {children}
        </div>
        {image ? (
          <img
            src={image}
            alt={imageAlt ?? ""}
            width={imageWidth}
            height={imageHeight}
            loading={priority ? "eager" : "lazy"}
            className="w-full rounded-lg border border-border object-cover shadow-[var(--shadow-raised)]"
          />
        ) : null}
      </div>
    </section>
  );
}
