export type SkillLevel = "Expert" | "Advanced" | "Intermediate";

export type SkillIconKey =
  | "barChart"
  | "bot"
  | "cloud"
  | "code"
  | "cpu"
  | "database"
  | "fileCode"
  | "layout"
  | "network"
  | "server"
  | "terminal";

export type Skill = {
  name: string;
  icon: SkillIconKey;
  level: SkillLevel;
};

export type SkillGroup = {
  title: string;
  /** The stack keywords a recruiter scans for when matching this group to a role. */
  recruiterSignal: string;
  summary: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend & API Engineering",
    recruiterSignal: "Python, Node.js, REST APIs, microservices",
    summary:
      "Production service design, API modernization, integration work, and maintainable backend delivery.",
    skills: [
      { name: "Python", icon: "fileCode", level: "Expert" },
      { name: "REST API", icon: "code", level: "Expert" },
      { name: "Node.js", icon: "server", level: "Advanced" },
      { name: "Express.js", icon: "server", level: "Advanced" },
      { name: "Microservices", icon: "network", level: "Advanced" },
    ],
  },
  {
    title: "DevOps, Cloud & Reliability",
    recruiterSignal: "AWS, GCP, Docker, CI/CD, Linux, monitoring",
    summary:
      "Cloud deployments, containerized delivery, zero-downtime operations, and observability-minded support.",
    skills: [
      { name: "Docker", icon: "cpu", level: "Expert" },
      { name: "AWS", icon: "cloud", level: "Advanced" },
      { name: "GCP", icon: "cloud", level: "Advanced" },
      { name: "CI/CD", icon: "terminal", level: "Advanced" },
      { name: "Nginx", icon: "server", level: "Advanced" },
      { name: "Monitoring", icon: "barChart", level: "Advanced" },
      { name: "Linux", icon: "terminal", level: "Advanced" },
      { name: "Bash", icon: "terminal", level: "Advanced" },
      { name: "Podman", icon: "cpu", level: "Advanced" },
      { name: "Azure", icon: "cloud", level: "Intermediate" },
    ],
  },
  {
    title: "Data Platforms & Analytics",
    recruiterSignal: "PostgreSQL, SQL, BigQuery, ETL, dashboards",
    summary:
      "Operational databases, analytics pipelines, monitoring dashboards, and business reporting workflows.",
    skills: [
      { name: "PostgreSQL", icon: "database", level: "Expert" },
      { name: "SQL", icon: "database", level: "Advanced" },
      { name: "MySQL", icon: "database", level: "Advanced" },
      { name: "CDC / ETL", icon: "database", level: "Advanced" },
      { name: "BigQuery", icon: "database", level: "Advanced" },
      { name: "MongoDB", icon: "database", level: "Intermediate" },
      { name: "Redis", icon: "database", level: "Intermediate" },
      { name: "Looker", icon: "barChart", level: "Intermediate" },
      { name: "Grafana", icon: "barChart", level: "Advanced" },
    ],
  },
  {
    title: "Frontend, AI & Automation",
    recruiterSignal: "React, TypeScript, Next.js, LLM apps, bots, IoT",
    summary:
      "Product surfaces recruiters can click, LLM-backed features, chat automation, and connected-device dashboards.",
    skills: [
      { name: "React", icon: "layout", level: "Advanced" },
      { name: "TypeScript", icon: "fileCode", level: "Advanced" },
      { name: "Next.js", icon: "layout", level: "Advanced" },
      { name: "TailwindCSS", icon: "code", level: "Advanced" },
      { name: "LLM Integration", icon: "bot", level: "Advanced" },
      { name: "WhatsApp Bot", icon: "bot", level: "Advanced" },
      { name: "Telegram Bot", icon: "bot", level: "Advanced" },
      { name: "IoT", icon: "bot", level: "Intermediate" },
    ],
  },
];

/** Flat list of every skill, used for schema.org `knowsAbout`. */
export const skills: Skill[] = skillGroups.flatMap((group) => group.skills);
