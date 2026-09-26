import { Link } from "@tanstack/react-router";
import { routes } from "@/lib/site-nav";

const explore = [
  { label: "About", to: routes.about },
  { label: "Expertise", to: routes.expertise },
  { label: "Services", to: routes.services },
  { label: "Frameworks", to: routes.frameworks },
  { label: "Insights", to: routes.insights },
  { label: "Contact", to: routes.contact },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="container-page grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <p className="font-display text-base font-bold">InnoTech BioPharm Solutions</p>
          <p className="mt-2 max-w-xs text-[0.8125rem] leading-relaxed text-primary-foreground/70">
            Enterprise Pharmaceutical &amp; Biotechnology Commercialization Advisory
          </p>
          <p className="mt-5 font-display text-[0.8125rem] font-semibold uppercase leading-relaxed tracking-[0.12em] text-accent">
            Build products.
            <br />
            Build manufacturing.
            <br />
            Build capability.
          </p>
        </div>

        <FooterColumn title="Explore">
          {explore.map((item) => (
            <li key={item.label}>
              <Link to={item.to} className="hover:text-accent">
                {item.label}
              </Link>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title="Connect">
          <li>
            <a href="mailto:info@innotechbiopharm.com" className="hover:text-accent">
              info@innotechbiopharm.com
            </a>
          </li>
          <li className="text-primary-foreground/50">Phone — to be confirmed</li>
          <li>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-accent"
            >
              LinkedIn
            </a>
          </li>
        </FooterColumn>

        <FooterColumn title="Legal">
          <li>
            <Link to={routes.privacy} className="hover:text-accent">
              Privacy
            </Link>
          </li>
          <li>
            <Link to={routes.terms} className="hover:text-accent">
              Terms
            </Link>
          </li>
        </FooterColumn>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container-page py-5 text-[0.75rem] text-primary-foreground/50">
          © {new Date().getFullYear()} InnoTech BioPharm Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="eyebrow">{title}</p>
      <ul className="mt-4 space-y-2.5 text-[0.875rem] text-primary-foreground/75">{children}</ul>
    </div>
  );
}
