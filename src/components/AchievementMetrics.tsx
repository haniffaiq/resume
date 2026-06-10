import { Card } from "@/components/ui/card";
import { Activity, BarChart3, Bot, Network, Rocket, ShieldCheck, Sparkles } from "lucide-react";

const metrics = [
  {
    value: "500K+",
    label: "messages / month",
    context: "Scaled production WhatsApp bot traffic at Huawei Indonesia.",
    icon: Bot,
  },
  {
    value: "100+",
    label: "groups supported",
    context: "Operated automation across large team and customer channels.",
    icon: Network,
  },
  {
    value: "90+",
    label: "APIs refactored",
    context: "Modernized API surfaces while integrating CRM and cloud systems.",
    icon: Activity,
  },
  {
    value: "5",
    label: "Grafana dashboards",
    context: "Built observability views for enterprise FINNET services.",
    icon: BarChart3,
  },
  {
    value: "5+",
    label: "years experience",
    context: "DevOps, backend, data engineering, IoT, and automation delivery.",
    icon: ShieldCheck,
  },
  {
    value: "4+",
    label: "SaaS products shipped",
    context: "Designed, built, and deployed full-stack SaaS & AI products end to end in 2026.",
    icon: Rocket,
  },
  {
    value: "24/7",
    label: "AI sales agent",
    context: "Embeddable LLM sales agent qualifying leads round the clock.",
    icon: Sparkles,
  },
];

const AchievementMetrics = () => {
  return (
    <section id="metrics" className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Measurable impact
          </p>
          <h2 className="text-4xl font-bold mt-3 mb-4">Achievement Metrics</h2>
          <p className="text-lg text-surface-medium max-w-3xl mx-auto">
            Recruiter-friendly proof points from production systems, automation programs,
            API modernization, observability, and cross-functional delivery.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map((metric) => {
            const Icon = metric.icon;

            return (
              <Card
                key={metric.label}
                className="group h-full p-5 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <p className="text-3xl font-bold text-foreground">{metric.value}</p>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-surface-medium">
                  {metric.label}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-surface-medium">
                  {metric.context}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementMetrics;
