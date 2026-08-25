export type NavItem = {
  label: string;
  sectionId: string;
};

export type ContactLink = {
  label: string;
  value: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type EducationItem = {
  degree: string;
  school: string;
  detail?: string;
};

export type Profile = {
  name: string;
  /** Canonical origin, used for canonical URLs, sitemap, and structured data. */
  siteUrl: string;
  /** Stable public avatar path, referenced by schema.org markup. */
  imagePath: string;
  /** Short role label used by search engines and social cards. */
  jobTitle: string;
  tagline: string;
  logoAlt: string;
  heroAlt: string;
  headlineRoles: string[];
  summary: string;
  aboutParagraphs: string[];
  education: EducationItem[];
  location: string;
  experienceSummary: string[];
  availability: string;
  contact: {
    email: ContactLink;
    phone: ContactLink;
    location: string;
  };
  socials: {
    linkedin: SocialLink;
    github: SocialLink;
  };
  navItems: NavItem[];
};

export const profile: Profile = {
  name: "Hanif Faiq",
  siteUrl: "https://haniffaiq.com",
  imagePath: "/hanif-faiq.jpg",
  jobTitle: "Backend Developer & DevOps Engineer",
  tagline: "Backend Developer, DevOps & AI Product Engineer",
  logoAlt: "Hanif Faiq Logo",
  heroAlt: "Hanif Faiq - Backend Developer",
  headlineRoles: [
    "AI / Product Builder",
    "Backend Developer",
    "DevOps Engineer",
    "Data Engineer",
    "Frontend Developer",
  ],
  summary:
    "IT professional with 5+ years of experience in DevOps, backend, and data engineering. Currently a DevOps Engineer at Huawei Indonesia, scaling a WhatsApp bot to 500K+ messages/month and building real-time systems for major telecoms. In 2026 shipped full-stack and AI-powered SaaS products end to end, including a multi-tenant POS, an embeddable AI sales agent, and consumer web platforms, covering product, backend, frontend, and deployment. Previous roles include optimizing AWS infrastructure at Elev8, refactoring 90+ APIs and integrating Zoho CRM at Wine Adore, and delivering IoT-ready Python APIs at Astra Graphia. Skilled in AWS, GCP, Docker, CI/CD, PostgreSQL, and scalable system design driving automation, security, and business impact.",
  aboutParagraphs: [
    "IT professional with 5+ years of experience across DevOps, backend, and data engineering. Skilled in building and scaling systems using AWS, GCP, Docker, CI/CD, Python, and PostgreSQL.",
    "Proven track record of delivering enterprise-grade solutions: scaling a WhatsApp bot to 500K+ messages/month at Huawei, optimizing AWS infrastructure and zero-downtime deployments at Elev8, and refactoring 90+ APIs while integrating Zoho CRM with GCP at Wine Adore. Experienced in IoT-ready APIs, data pipelines, and real-time monitoring systems.",
    "Passionate about automation, scalability, and security, continuously learning and leveraging new technologies to solve complex business challenges and drive measurable impact.",
  ],
  education: [
    {
      degree: "Bachelor of Telecommunication Engineering",
      school: "Universitas Telkom - Bandung, Indonesia",
    },
    {
      degree: "High School Diploma",
      school: "Telkom School - Jakarta, Indonesia",
      detail: "Telecommunication Transmission Engineering",
    },
  ],
  location: "Jakarta, Indonesia",
  experienceSummary: [
    "5+ years in software development",
    "Currently DevOps at Huawei Indonesia",
  ],
  availability: "Open to DevOps / Backend / Full-stack roles & freelance projects",
  contact: {
    email: {
      label: "Email",
      value: "hanif@jakitlabs.com",
      href: "mailto:hanif@jakitlabs.com",
    },
    phone: {
      label: "Phone",
      value: "087881012700",
      href: "tel:087881012700",
    },
    location: "Jakarta, Indonesia",
  },
  socials: {
    linkedin: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/haniffaiq13/",
    },
    github: {
      label: "GitHub",
      href: "https://github.com/haniffaiq",
    },
  },
  navItems: [
    { label: "About Me", sectionId: "about" },
    { label: "Metrics", sectionId: "metrics" },
    { label: "Skills", sectionId: "skills" },
    { label: "Experience", sectionId: "experience" },
    { label: "Projects", sectionId: "projects" },
    { label: "Recommendations", sectionId: "testimonials" },
    { label: "Organizations", sectionId: "organisations" },
  ],
};
