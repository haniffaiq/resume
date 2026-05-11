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
};

export const projects: Project[] = [
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
  },
];

export const orderedProjects = [...projects].sort((a, b) => {
  if (a.featured !== b.featured) return a.featured ? -1 : 1;

  const yearDiff = Number(b.year) - Number(a.year);
  if (yearDiff !== 0) return yearDiff;

  return Number(b.id) - Number(a.id);
});
