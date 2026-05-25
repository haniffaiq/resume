export const projectCategories = [
  "All",
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
  featured?: boolean;
  highlight?: string;
  caseStudy?: ProjectCaseStudy;
};

export const projects: Project[] = [
  {
    id: "13",
    title: "POS.ThankYouBro.id - Multi-tenant POS & Inventory SaaS",
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
        "Wholesale SMEs needed a single system to run multi-outlet sales, track inventory in real time, and control who can do what — without enterprise pricing.",
      role:
        "Owned product, architecture, and delivery: multi-tenant data model, POS flow, dashboards, role-based access, and billing tiers.",
      techStack: ["Next.js", "TypeScript", "PostgreSQL", "Multi-tenant", "REST API", "Nginx"],
      implementation:
        "Delivered tenant-isolated POS transactions, multi-outlet inventory, sales/margin dashboards, role-based access (owner/manager/cashier), audit trails, CSV/Excel export, and a REST API on the Business tier.",
      impact:
        "Gave wholesale businesses an affordable freemium SaaS with the operational controls usually reserved for enterprise systems.",
    },
  },
  {
    id: "12",
    title: "Photobox.ThankYouBro.id - Photo Booth Operations Platform",
    description:
      "Built a React SPA for photo booth services with a split admin / marketing / platform architecture, supporting customer-facing flows and internal operations from a single deployment.",
    tech: ["React.js", "Vite", "TypeScript", "Tailwind CSS", "Nginx"],
    year: "2026",
    type: "Web Platform",
    categories: ["Frontend", "DevOps"],
    link: "https://photobox.thankyoubro.id",
    featured: true,
    highlight: "Single-bundle SPA split into admin, marketing, and platform surfaces for one product domain.",
    caseStudy: {
      problem:
        "Photo booth operations needed both a public marketing surface and an internal admin/platform tooling, without running three separate apps.",
      role:
        "Designed and built the frontend architecture, code-split entry points, and deployment setup.",
      techStack: ["React.js", "Vite", "TypeScript", "Tailwind CSS", "Nginx"],
      implementation:
        "Split the SPA into admin, marketing, and platform module chunks served from one Vite build behind Nginx, with shared design system and routing.",
      impact:
        "Reduced operational overhead by serving customer marketing and internal tooling from one codebase and one deployment.",
    },
  },
  {
    id: "11",
    title: "PeTag.id - QR-based Lost Pet Recovery Platform",
    description:
      "Built a QR pet-ID platform that lets owners register pets, generate printable QR collar tags, control contact privacy, and track pet genealogy — helping reunite lost pets with owners in Indonesia.",
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
        "Turned a printable QR collar tag into a free recovery channel for Indonesian pet owners, with owner-controlled privacy.",
    },
  },
  {
    id: "10",
    title: "BaliBersih.com - On-demand Cleaning Service Platform",
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
    title: "Mitranesia.id - Franchise Marketplace Platform",
    description:
      "Built an end-to-end marketplace for local franchise businesses, covering dynamic listings, franchise package comparison, inquiry automation, a Python API, PostgreSQL storage, Docker packaging, and AWS deployment.",
    tech: ["React.js", "Tailwind CSS", "Python", "PostgreSQL", "Docker", "AWS"],
    year: "2024",
    type: "Fullstack Web Application",
    categories: ["Frontend", "Backend", "DevOps", "Data", "Automation"],
    link: "https://mitranesia.id",
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
    categories: ["Data", "Automation"],
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
