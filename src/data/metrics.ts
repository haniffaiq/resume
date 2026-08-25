export type MetricIconKey =
  | "activity"
  | "barChart3"
  | "bot"
  | "network"
  | "rocket"
  | "shieldCheck"
  | "sparkles";

export type Metric = {
  value: string;
  label: string;
  context: string;
  icon: MetricIconKey;
};

export const metrics: Metric[] = [
  {
    value: "500K+",
    label: "messages / month",
    context: "Scaled production WhatsApp bot traffic at Huawei Indonesia.",
    icon: "bot",
  },
  {
    value: "100+",
    label: "groups supported",
    context: "Operated automation across large team and customer channels.",
    icon: "network",
  },
  {
    value: "90+",
    label: "APIs refactored",
    context: "Modernized API surfaces while integrating CRM and cloud systems.",
    icon: "activity",
  },
  {
    value: "5",
    label: "Grafana dashboards",
    context: "Built observability views for enterprise FINNET services.",
    icon: "barChart3",
  },
  {
    value: "5+",
    label: "years experience",
    context: "DevOps, backend, data engineering, IoT, and automation delivery.",
    icon: "shieldCheck",
  },
  {
    value: "4+",
    label: "SaaS products shipped",
    context: "Designed, built, and deployed full-stack SaaS & AI products end to end in 2026.",
    icon: "rocket",
  },
  {
    value: "24/7",
    label: "AI sales agent",
    context: "Embeddable LLM sales agent qualifying leads round the clock.",
    icon: "sparkles",
  },
];
