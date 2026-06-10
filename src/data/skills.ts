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
  category: string;
  level: "Expert" | "Advanced" | "Intermediate";
};

export const skills: Skill[] = [
  // Backend
  { name: "Python", icon: "fileCode", category: "Backend", level: "Expert" },
  { name: "Node.js", icon: "server", category: "Backend", level: "Advanced" },
  { name: "Express.js", icon: "server", category: "Backend", level: "Advanced" },
  { name: "REST API", icon: "code", category: "Backend", level: "Expert" },
  { name: "Microservices", icon: "network", category: "Backend", level: "Advanced" },

  // Frontend
  { name: "React", icon: "layout", category: "Frontend", level: "Intermediate" },
  { name: "TailwindCSS", icon: "code", category: "Frontend", level: "Intermediate" },
  { name: "Bootstrap", icon: "code", category: "Frontend", level: "Intermediate" },
  { name: "HTML/CSS", icon: "code", category: "Frontend", level: "Intermediate" },
  { name: "WordPress", icon: "layout", category: "Frontend", level: "Advanced" },
  { name: "PHP", icon: "fileCode", category: "Frontend", level: "Intermediate" },

  // DevOps
  { name: "Docker", icon: "cpu", category: "DevOps", level: "Expert" },
  { name: "Podman", icon: "cpu", category: "DevOps", level: "Advanced" },
  { name: "CI/CD", icon: "terminal", category: "DevOps", level: "Advanced" },
  { name: "Nginx", icon: "server", category: "DevOps", level: "Advanced" },
  { name: "Monitoring", icon: "barChart", category: "DevOps", level: "Advanced" },
  { name: "Linux", icon: "terminal", category: "DevOps", level: "Advanced" },
  { name: "Bash", icon: "terminal", category: "DevOps", level: "Advanced" },

  // Cloud
  { name: "AWS", icon: "cloud", category: "Cloud", level: "Advanced" },
  { name: "GCP", icon: "cloud", category: "Cloud", level: "Advanced" },
  { name: "Azure", icon: "cloud", category: "Cloud", level: "Intermediate" },

  // Data
  { name: "PostgreSQL", icon: "database", category: "Data", level: "Expert" },
  { name: "MySQL", icon: "database", category: "Data", level: "Advanced" },
  { name: "MongoDB", icon: "database", category: "Data", level: "Intermediate" },
  { name: "SQL", icon: "database", category: "Data", level: "Advanced" },
  { name: "CDC / ETL", icon: "database", category: "Data", level: "Advanced" },
  { name: "BigQuery", icon: "database", category: "Data", level: "Advanced" },
  { name: "Looker", icon: "barChart", category: "Data", level: "Intermediate" },
  { name: "Excel", icon: "barChart", category: "Data", level: "Intermediate" },
  { name: "Redis", icon: "database", category: "Data", level: "Intermediate" },

  // Automation
  { name: "Telegram Bot", icon: "bot", category: "Automation", level: "Advanced" },
  { name: "WhatsApp Bot", icon: "bot", category: "Automation", level: "Advanced" },
  { name: "IoT", icon: "bot", category: "Automation", level: "Intermediate" },
];
