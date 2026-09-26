import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { CTA_PRIMARY, primaryNav, routes } from "@/lib/site-nav";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Link to={routes.home} className="flex items-center gap-2.5" aria-label="InnoTech BioPharm Solutions — home">
          <span
            aria-hidden="true"
            className="bg-navy-gradient flex h-8 w-8 items-center justify-center rounded text-[0.8125rem] font-bold text-primary-foreground"
          >
            iT
          </span>
          <span className="font-display text-[0.9375rem] font-bold leading-tight text-foreground">
            InnoTech
            <span className="block text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              BioPharm Solutions
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {primaryNav.map((item) =>
              "children" in item && item.children ? (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setAboutOpen(true)}
                  onMouseLeave={() => setAboutOpen(false)}
                >
                  <button
                    type="button"
                    aria-expanded={aboutOpen}
                    onClick={() => setAboutOpen((open) => !open)}
                    className="flex items-center gap-1 rounded px-3 py-2 text-sm font-medium text-foreground hover:text-accent"
                  >
                    {item.label}
                    <span aria-hidden="true" className="text-[0.625rem]">
                      ▼
                    </span>
                  </button>
                  <ul
                    className={cn(
                      "absolute left-0 top-full w-56 rounded-md border border-border bg-surface p-2 shadow-[var(--shadow-raised)]",
                      aboutOpen ? "block" : "hidden",
                    )}
                  >
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          to={child.to}
                          onClick={() => setAboutOpen(false)}
                          className="block rounded px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    activeProps={{ className: "text-accent" }}
                    className="block rounded px-3 py-2 text-sm font-medium text-foreground hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="hidden xl:block">
          <Link
            to={routes.contact}
            className="inline-flex items-center rounded-md bg-accent px-4 py-2.5 text-[0.8125rem] font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
          >
            {CTA_PRIMARY}
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded border border-input text-foreground lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span aria-hidden="true">{mobileOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {mobileOpen ? (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-border bg-surface lg:hidden">
          <ul className="container-page flex flex-col py-3">
            {primaryNav.map((item) => (
              <li key={item.label} className="border-b border-border/60 last:border-0">
                <Link
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-sm font-semibold text-foreground"
                >
                  {item.label}
                </Link>
                {"children" in item && item.children ? (
                  <ul className="pb-3 pl-4">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          to={child.to}
                          onClick={() => setMobileOpen(false)}
                          className="block py-2 text-sm text-muted-foreground"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
            <li className="pt-4">
              <Link
                to={routes.contact}
                onClick={() => setMobileOpen(false)}
                className="block rounded-md bg-accent px-4 py-3 text-center text-sm font-semibold text-accent-foreground"
              >
                {CTA_PRIMARY}
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
