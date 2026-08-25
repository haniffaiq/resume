export const projectCategories = [
  "All",
  "AI",
  "DevOps",
  "Backend",
  "Data",
  "IoT",
  "Frontend",
  "Automation",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];
export type ProjectFilter = Exclude<ProjectCategory, "All">;

export type ProjectCaseStudy = {
  problem: string;
  role: string;
  techStack: string[];
  implementation: string;
  impact: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  year: string;
  type: string;
  categories: ProjectFilter[];
  link?: string;
  /** Project shipped but the public site is no longer reachable (contract/partnership ended). */
  archived?: boolean;
  featured?: boolean;
  highlight?: string;
  caseStudy?: ProjectCaseStudy;
};

export const projects: Project[] = [
  {
    id: "17",
    title: "entuen.com - Integrated Smart Ecosystem Company Platform",
    description:
      "Built and shipped the corporate platform for PT Entuen Cogfinity Indonesia, an ICT company delivering an integrated smart ecosystem across QR, NFC, IoT, AI, and telco. The site presents the full upstream-to-downstream value chain, the client portfolio (PeTag.id, Komodo.site, Ontelmo, ICA), and the B2B/B2G/B2C engagement model in a bilingual EN/ID experience.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "i18n", "Nginx", "Docker"],
    year: "2026",
    type: "Corporate Platform",
    categories: ["Frontend", "DevOps", "AI", "IoT"],
    link: "https://entuen.com",
    featured: true,
    highlight:
      "Bilingual Next.js corporate platform for an ICT company, statically exported and served behind a hardened Nginx edge.",
    caseStudy: {
      problem:
        "Entuen needed a single credible surface that explains a wide ICT ecosystem (hardware manufacturing, telco, IoT, AI, and consumer QR/NFC platforms) to three very different audiences: enterprise, public sector, and consumer partners.",
      role:
        "Defined the technical direction and delivered the platform end to end: information architecture, bilingual content model, frontend build, static export pipeline, and production deployment.",
      techStack: ["Next.js App Router", "React", "TypeScript", "Tailwind CSS", "EN/ID i18n routing", "Nginx", "Docker"],
      implementation:
        "Structured the site as eight layered sections (pillars, value chain, clients, values, leadership, differentiators, engagement flow, FAQ) on the Next.js App Router with a [lang] dynamic segment driving EN/ID routing. Statically exported and served from Nginx with a strict Content-Security-Policy, HSTS, X-Frame-Options, and a locked-down Permissions-Policy.",
      impact:
        "Gave Entuen one authoritative platform that converts a broad multi-layer ICT offering into a navigable story for B2B, B2G, and B2C prospects, and doubles as the entry point to its product brands.",
    },
  },
  {
    id: "16",
    title: "bh-labs.com - B2B Wellness Recovery Pod Platform",
    description:
      "Built and deployed the marketing and lead-generation site for BH Labs, a B2B company selling turnkey 'Recovery Pod' systems that bundle six clinical-grade recovery modalities (HBOT, red light, infrared sauna, PEMF, compression, lymphatic) into a plug-and-play install for hotels, gyms, universities, and residences.",
    tech: ["WordPress", "PHP", "Elementor", "SEO", "Nginx"],
    year: "2026",
    type: "Marketing & Lead-Gen Site",
    categories: ["Frontend", "DevOps", "Automation"],
    link: "https://bh-labs.com",
    featured: true,
    highlight: "Conversion-focused WordPress site selling turnkey wellness infrastructure across four B2B verticals.",
    caseStudy: {
      problem:
        "A wellness-infrastructure company needed a credible, conversion-focused web presence to pitch turnkey Recovery Pod systems to hotels, athletic programs, fitness clubs, and residential properties.",
      role:
        "Built and delivered the full WordPress site: information architecture, vertical-specific landing pages, lead capture, and deployment.",
      techStack: ["WordPress", "PHP", "Elementor", "SEO", "Nginx"],
      implementation:
        "Structured vertical landing pages (hotels, universities, gyms, residential), modality explainers, ROI/value messaging, lead-capture forms, and SEO-oriented content on a WordPress build served behind Nginx.",
      impact:
        "Gave BH Labs a B2B sales surface that frames six recovery modalities as one plug-and-play revenue product and routes qualified leads across four verticals.",
    },
  },
  {
    id: "15",
    title: "thebiohacklab.com - Biohacking & Recovery Studio Site",
    description:
      "Built the web presence for The Biohack Lab, a consumer-facing biohacking and recovery wellness brand, presenting recovery services and modalities with a booking/enquiry path on a WordPress stack.",
    tech: ["WordPress", "PHP", "Elementor", "SEO", "Nginx"],
    year: "2026",
    type: "Marketing & Booking Site",
    categories: ["Frontend", "DevOps"],
    link: "https://thebiohacklab.com",
    featured: true,
    highlight: "Consumer biohacking & recovery brand site with service presentation and enquiry flow on WordPress.",
    caseStudy: {
      problem:
        "A consumer biohacking and recovery studio needed an on-brand site to present its modalities and convert visitors into bookings/enquiries.",
      role:
        "Designed and built the WordPress site, service/modality pages, and conversion path.",
      techStack: ["WordPress", "PHP", "Elementor", "SEO", "Nginx"],
      implementation:
        "Delivered branded service pages, recovery-modality content, responsive layout, SEO structure, and an enquiry/booking conversion path on a WordPress build behind Nginx.",
      impact:
        "Gave the studio a polished consumer-facing surface that communicates its recovery offering and drives booking enquiries.",
    },
  },
  {
    id: "14",
    title: "vox.manibo.ai - AI Sales Chat Agent Widget",
    description:
      "Built an embeddable AI chat agent for sales, delivered as a drop-in JavaScript widget any website can install with a single script tag. Visitors get an always-on sales assistant that qualifies leads, answers product questions, and drives conversion.",
    tech: ["TypeScript", "Preact", "LLM", "REST API", "Nginx", "Embeddable Widget"],
    year: "2026",
    type: "AI Agent Platform",
    categories: ["AI", "Frontend", "Backend", "Automation", "Data"],
    link: "https://vox.manibo.ai",
    featured: true,
    highlight: "Single-tag embeddable AI sales agent that any site can install to qualify leads 24/7.",
    caseStudy: {
      problem:
        "Businesses lose sales leads outside working hours and can't staff live chat around the clock, while generic chatbots fail to answer real product questions.",
      role:
        "Owned product and full-stack delivery: the embeddable widget loader, configurable UI, chat API, and LLM-backed sales agent behavior.",
      techStack: ["TypeScript", "Preact", "LLM", "REST API", "Nginx", "Embeddable Widget"],
      implementation:
        "Shipped a self-contained widget.js loader configurable via data attributes (color, position, greeting, API base), a /api/chat backend, and an LLM agent tuned for sales conversations. Any host installs it with one script tag.",
      impact:
        "A single script-tag install drops a 24/7 LLM sales agent onto any site, configured entirely through data attributes (color, position, greeting, API base) and qualifying leads round the clock without added headcount.",
    },
  },
  {
    id: "13",
    title: "pos.thankyoubro.id - Multi-tenant POS & Inventory SaaS",
    description:
      "Built a multi-tenant point-of-sale and inventory platform for Indonesian wholesale (grosir) businesses, with multi-outlet transactions, role-based access, real-time sales dashboards, audit trails, and tiered pricing.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Multi-tenant", "REST API", "Nginx"],
    year: "2026",
    type: "SaaS Platform",
    categories: ["Frontend", "Backend", "DevOps", "Data", "Automation"],
    link: "https://pos.thankyoubro.id",
    featured: true,
    highlight: "Multi-tenant SaaS spanning POS, inventory, reporting, and access control across outlets.",
    caseStudy: {
      problem:
        "Wholesale SMEs needed a single system to run multi-outlet sales, track inventory in real time, and control who can do what, without enterprise pricing.",
      role:
        "Owned product, architecture, and delivery: multi-tenant data model, POS flow, dashboards, role-based access, and billing tiers.",
      techStack: ["Next.js", "TypeScript", "PostgreSQL", "Multi-tenant", "REST API", "Nginx"],
      implementation:
        "Delivered tenant-isolated POS transactions, multi-outlet inventory, sales/margin dashboards, role-based access (owner/manager/cashier), audit trails, CSV/Excel export, and a REST API on the Business tier.",
      impact:
        "A freemium, multi-tenant SaaS giving wholesale SMEs enterprise-grade controls: role-based access across owner/manager/cashier, multi-outlet operations, audit trails, CSV/Excel export, and a REST API on the Business tier.",
    },
  },
  {
    id: "12",
    title: "photobox.thankyoubro.id - Photo Booth Operations Platform",
    description:
      "Built a React SPA for photo booth services with a split admin / marketing / platform architecture, supporting customer-facing flows and internal operations from a single deployment.",
    tech: ["React.js", "Vite", "TypeScript", "Tailwind CSS", "Nginx"],
    year: "2026",
    type: "Web Platform",
    categories: ["Frontend", "DevOps"],
    link: "https://photobox.thankyoubro.id",
    featured: true,
    highlight: "One Vite build and one deployment serving admin, marketing, and platform surfaces from a single codebase.",
    caseStudy: {
      problem:
        "Photo booth operations needed both a public marketing surface and an internal admin/platform tooling, without running three separate apps.",
      role:
        "Designed and built the frontend architecture, code-split entry points, and deployment setup.",
      techStack: ["React.js", "Vite", "TypeScript", "Tailwind CSS", "Nginx"],
      implementation:
        "Split the SPA into admin, marketing, and platform module chunks served from one Vite build behind Nginx, with shared design system and routing.",
      impact:
        "One Vite build and one deployment serve all three surfaces (admin, marketing, and platform) from a single codebase and shared design system, cutting operational overhead versus running separate apps.",
    },
  },
  {
    id: "11",
    title: "petag.id - QR-based Lost Pet Recovery Platform",
    description:
      "Built a QR pet-ID platform that lets owners register pets, generate printable QR collar tags, control contact privacy, and track pet genealogy, helping reunite lost pets with owners in Indonesia.",
    tech: ["Next.js", "TypeScript", "QR Code", "PostgreSQL", "Nginx"],
    year: "2026",
    type: "Web Platform",
    categories: ["Frontend", "Backend", "Automation"],
    link: "https://petag.id",
    featured: true,
    highlight: "Consumer product with QR-driven recovery flow, privacy controls, and prerendered Next.js pages.",
    caseStudy: {
      problem:
        "Indonesian pet owners had no simple, free way to make a lost pet contactable through a scan, without exposing personal info publicly.",
      role:
        "Owned product and full-stack delivery: pet registration, QR generation, privacy modes, genealogy data model, and prerendered marketing pages.",
      techStack: ["Next.js", "TypeScript", "QR Code", "PostgreSQL", "Nginx"],
      implementation:
        "Implemented QR tag generation per pet, three privacy modes (public / contact-only / private), email verification, lineage tracking, and Next.js ISR for fast public pages.",
      impact:
        "Turns a printable QR collar tag into a free recovery channel with owner-controlled privacy: three privacy modes (public, contact-only, private), email verification, and lineage tracking. A scan reaches the owner without exposing personal info publicly.",
    },
  },
  {
    id: "10",
    title: "balibersih.com - On-demand Cleaning Service Platform",
    description:
      "Developed a mobile-first web platform for on-demand cleaning services across Bali with instant WhatsApp booking, dynamic pricing display, and SEO-focused service pages.",
    tech: ["TypeScript", "Tailwind CSS", "JavaScript", "WhatsApp Booking"],
    year: "2025",
    type: "Web Platform",
    categories: ["Frontend", "Automation"],
    link: "https://balibersih.com",
    featured: true,
    highlight: "Recent production service platform with clear customer conversion flow.",
    caseStudy: {
      problem:
        "Local cleaning customers needed a fast mobile path from service discovery to booking without a heavy account or checkout flow.",
      role:
        "Designed and implemented the customer-facing web experience, service presentation, pricing surfaces, and WhatsApp handoff flow.",
      techStack: ["TypeScript", "Tailwind CSS", "JavaScript", "WhatsApp Booking"],
      implementation:
        "Structured SEO-focused service pages, responsive landing sections, pricing content, and a direct WhatsApp conversion path for mobile-first users.",
      impact:
        "Created a production-ready service platform that reduces friction between intent, package selection, and booking confirmation.",
    },
  },
  {
    id: "09",
    title: "mitranesia.id - Franchise Marketplace Platform",
    description:
      "Built an end-to-end marketplace for local franchise businesses, covering dynamic listings, franchise package comparison, inquiry automation, a Python API, PostgreSQL storage, Docker packaging, and AWS deployment.",
    tech: ["React.js", "Tailwind CSS", "Python", "PostgreSQL", "Docker", "AWS"],
    year: "2024",
    type: "Fullstack Web Application",
    categories: ["Frontend", "Backend", "DevOps", "Data", "Automation"],
    archived: true,
    featured: true,
    highlight: "Full-stack marketplace spanning product UX, backend APIs, data, and cloud deployment.",
    caseStudy: {
      problem:
        "Franchise buyers needed a clearer way to discover, compare, and inquire about local business opportunities online.",
      role:
        "Owned full-stack delivery across marketplace UX, backend API design, database modeling, deployment packaging, and cloud release support.",
      techStack: ["React.js", "Tailwind CSS", "Python", "PostgreSQL", "Docker", "AWS"],
      implementation:
        "Delivered dynamic listings, package comparison flows, inquiry automation, API-backed data storage, Dockerized services, and AWS deployment.",
      impact:
        "Turned franchise information into a searchable conversion funnel that connects business owners with qualified prospects.",
    },
  },
  {
    id: "08",
    title: "Grafana Monitoring Dashboard - AGIT and FINNET",
    description:
      "Developed five Grafana Cloud dashboards for FINNET services using Dynatrace, Prometheus, and BigQuery, plus an Airflow/Python ETL pipeline integrating Oracle, MySQL, and PostgreSQL sources into BigQuery for near real-time analytics.",
    tech: ["Grafana", "Python", "Airflow", "BigQuery", "ETL", "Prometheus"],
    year: "2024",
    type: "Dashboard & Analytics",
    categories: ["Data", "DevOps", "Automation"],
    featured: true,
    highlight: "Production monitoring and analytics across observability and data engineering tools.",
    caseStudy: {
      problem:
        "Operations teams needed consolidated service visibility across observability signals and business data sources.",
      role:
        "Built dashboards and data pipelines, connecting monitoring sources with analytics-ready BigQuery datasets.",
      techStack: ["Grafana", "Python", "Airflow", "BigQuery", "Prometheus", "Dynatrace"],
      implementation:
        "Created five Grafana Cloud dashboards and automated ETL from Oracle, MySQL, and PostgreSQL into BigQuery for near real-time views.",
      impact:
        "Improved service monitoring with shared dashboards that combined infrastructure, application, and data-engineering signals.",
    },
  },
  {
    id: "07",
    title: "Industrial IoT Platform - AGIT and TELKOMSEL",
    description:
      "Built platform features for connecting and managing industrial IoT devices, enabling teams to monitor, control, and analyze device data across distributed environments.",
    tech: ["Python", "React.js", "PostgreSQL", "Docker", "Azure"],
    year: "2023",
    type: "Dashboard & IoT Platform",
    categories: ["IoT", "Backend", "Frontend", "Data", "DevOps"],
    featured: true,
    highlight: "Enterprise IoT work combining dashboards, APIs, data persistence, and deployment operations.",
    caseStudy: {
      problem:
        "Industrial teams needed a reliable interface to connect, monitor, and manage distributed IoT device data.",
      role:
        "Contributed across API, dashboard, persistence, containerization, and Azure-oriented deployment workflows.",
      techStack: ["Python", "React.js", "PostgreSQL", "Docker", "Azure"],
      implementation:
        "Built platform features for device management, real-time dashboard views, backend services, and database-backed operational data.",
      impact:
        "Supported enterprise IoT operations with a more maintainable platform for monitoring and controlling distributed assets.",
    },
  },
  {
    id: "06",
    title: "Agriculture Sensor Monitoring Dashboard",
    description:
      "Built a responsive React dashboard for agricultural sensor data using MQTT, with real-time visualizations for temperature, humidity, soil moisture, light intensity, maps, graphs, and gauges.",
    tech: ["React.js", "MQTT", "IoT", "Real-time", "Dashboard"],
    year: "2023",
    type: "IoT Dashboard",
    categories: ["IoT", "Frontend", "Data"],
    caseStudy: {
      problem:
        "Agriculture operators needed readable real-time sensor information instead of raw device feeds.",
      role:
        "Built the frontend dashboard experience for monitoring environmental and location-based sensor signals.",
      techStack: ["React.js", "MQTT", "IoT", "Real-time", "Dashboard"],
      implementation:
        "Connected MQTT-driven sensor data to responsive graphs, gauges, maps, and status views for field monitoring.",
      impact:
        "Made temperature, humidity, soil moisture, and light-intensity data easier to interpret for operational decisions.",
    },
  },
  {
    id: "05",
    title: "Machine Learning Classification System (EEG Data)",
    description:
      "Classified EEG signals to distinguish alcoholic and non-alcoholic brain activity using SVM and ANN models with preprocessing, feature extraction, model training, and hyperparameter tuning.",
    tech: ["Python", "SVM", "ANN", "EEG", "Machine Learning"],
    year: "2023",
    type: "Machine Learning",
    categories: ["AI", "Data", "Automation"],
    caseStudy: {
      problem:
        "EEG datasets required preprocessing and model experimentation to classify brain-signal patterns accurately.",
      role:
        "Implemented preprocessing, feature extraction, model training, and hyperparameter tuning workflows.",
      techStack: ["Python", "SVM", "ANN", "EEG", "Machine Learning"],
      implementation:
        "Compared SVM and ANN classification approaches with structured data preparation and evaluation loops.",
      impact:
        "Produced a reproducible ML workflow for distinguishing alcoholic and non-alcoholic EEG signal patterns.",
    },
  },
  {
    id: "03",
    title: "Hardware Error Checking Microservice",
    description:
      "Built a Python microservice integrated with a Telegram bot to monitor battery and storage device health for Habibi Garden, sending scheduled real-time notifications when errors were detected.",
    tech: ["Python", "Telegram Bot", "Microservices", "Monitoring"],
    year: "2020",
    type: "IoT Microservice",
    categories: ["IoT", "Backend", "Automation"],
    caseStudy: {
      problem:
        "Hardware issues needed to be detected and surfaced before they caused unnoticed operational failures.",
      role:
        "Developed the microservice and Telegram notification integration for scheduled monitoring.",
      techStack: ["Python", "Telegram Bot", "Microservices", "Monitoring"],
      implementation:
        "Implemented health checks for battery and storage devices, then routed scheduled alerts through chat notifications.",
      impact:
        "Reduced manual inspection needs by sending real-time status and error notifications to maintainers.",
    },
  },
  {
    id: "04",
    title: "Telegram Bot for Hardware Device Monitoring",
    description:
      "Created a Telegram bot for real-time hardware status updates, allowing users to request the latest battery and storage-device conditions through a lightweight chat interface.",
    tech: ["Telegram Bot", "IoT", "Automation"],
    year: "2020",
    type: "Automation",
    categories: ["Automation", "IoT"],
    caseStudy: {
      problem:
        "Users needed a lightweight way to request hardware condition updates without opening a separate dashboard.",
      role:
        "Built the chat-based interface and connected bot commands to status data.",
      techStack: ["Telegram Bot", "IoT", "Automation"],
      implementation:
        "Created Telegram commands for real-time battery and storage-device checks in a familiar messaging interface.",
      impact:
        "Improved accessibility of device-status information through on-demand chat interactions.",
    },
  },
  {
    id: "02",
    title: "Milk pH Monitor for Margamukti Village",
    description:
      "Developed an Arduino-based monitoring system to test the pH level of locally produced milk in Bandung, supporting quality and safety checks for community milk products.",
    tech: ["Arduino", "IoT", "pH Sensors", "Monitoring"],
    year: "2018",
    type: "IoT Monitoring",
    categories: ["IoT", "Data"],
    caseStudy: {
      problem:
        "Community milk producers needed a practical way to validate pH levels for quality and safety checks.",
      role:
        "Built the Arduino-based monitoring prototype and sensor integration.",
      techStack: ["Arduino", "IoT", "pH Sensors", "Monitoring"],
      implementation:
        "Connected pH sensors to an Arduino workflow for simple monitoring of locally produced milk samples.",
      impact:
        "Supported safer community production by making quality checks more accessible and repeatable.",
    },
  },
  {
    id: "01",
    title: "SmardenBot V1 (IoT Project)",
    description:
      "Built an Arduino Uno robotic system that automated plant watering to reduce manual workload and keep plants watered promptly with suitable water amounts.",
    tech: ["Arduino", "IoT", "Automation"],
    year: "2017",
    type: "IoT Project",
    categories: ["IoT", "Automation"],
    caseStudy: {
      problem:
        "Plant watering was manual and easy to miss, creating inconsistent maintenance for simple garden operations.",
      role:
        "Built the Arduino Uno automation prototype and watering-control logic.",
      techStack: ["Arduino", "IoT", "Automation"],
      implementation:
        "Combined a robotic watering system with timing/control behavior to deliver suitable water amounts automatically.",
      impact:
        "Reduced repetitive manual work and demonstrated early applied IoT automation experience.",
    },
  },
];

export const orderedProjects = [...projects].sort((a, b) => {
  if (a.featured !== b.featured) return a.featured ? -1 : 1;

  const yearDiff = Number(b.year) - Number(a.year);
  if (yearDiff !== 0) return yearDiff;

  return Number(b.id) - Number(a.id);
});
