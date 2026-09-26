export const routes = {
  home: "/index.php",
  about: "/about.php",
  founder: "/our_team.php",
  clients: "/clients.php",
  expertise: "/our_expertise.php",
  services: "/services.php",
  frameworks: "/frameworks.php",
  insights: "/blogs.php",
  contact: "/contact.php",
  privacy: "/privacy.php",
  terms: "/terms.php",
} as const;

export const primaryNav = [
  { label: "Home", to: routes.home },
  {
    label: "About",
    to: routes.about,
    children: [
      { label: "Who We Are", to: routes.about },
      { label: "Founder", to: routes.founder },
      { label: "Who We Work With", to: routes.clients },
    ],
  },
  { label: "Expertise", to: routes.expertise },
  { label: "Services", to: routes.services },
  { label: "Frameworks", to: routes.frameworks },
  { label: "Insights", to: routes.insights },
  { label: "Contact", to: routes.contact },
] as const;

export const CTA_PRIMARY = "Discuss Your Commercialization Challenge";
export const CTA_SECONDARY = "Explore Our Expertise";

export const CONFIDENTIALITY_NOTICE =
  "Please do not submit confidential, proprietary, unpublished technical, clinical, regulatory, formulation, process, or manufacturing information through this website form. A high-level description is sufficient for the initial discussion. Appropriate confidentiality arrangements can be established before substantive proprietary information is exchanged.";

export const FOUNDER_METRICS = [
  { value: "150+", label: "Commercialized Products Supported" },
  { value: "41", label: "FDA Product Approvals" },
  { value: "$5B+", label: "Technical M&A Due Diligence" },
  { value: "Global", label: "Manufacturing & CDMO Leadership" },
  { value: "~3 Decades", label: "Development-to-Commercial Lifecycle Experience" },
];
