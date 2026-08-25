import { Card } from "@/components/ui/card";
import {
  BarChart,
  Bot,
  Cloud,
  Code,
  Cpu,
  Database,
  FileCode,
  Layout,
  Network,
  Server,
  Terminal,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  skillGroups,
  type SkillIconKey,
  type SkillLevel,
} from "@/data/skill-groups";

const icons: Record<SkillIconKey, LucideIcon> = {
  barChart: BarChart,
  bot: Bot,
  cloud: Cloud,
  code: Code,
  cpu: Cpu,
  database: Database,
  fileCode: FileCode,
  layout: Layout,
  network: Network,
  server: Server,
  terminal: Terminal,
};

const levelStyles: Record<SkillLevel, string> = {
  Expert: "border-primary/30 bg-primary/10 text-primary",
  Advanced: "border-emerald-500/30 bg-emerald-500/10 text-emerald-700",
  Intermediate: "border-sky-500/30 bg-sky-500/10 text-sky-700",
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3">My Skills</h2>
          <p className="text-lg text-surface-medium max-w-3xl mx-auto">
            Grouped by hiring signal so recruiters can quickly match my experience to backend,
            DevOps, data, frontend, automation, and IoT roles.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {skillGroups.map((group) => (
            <Card key={group.title} className="p-6 shadow-soft">
              <div className="mb-5">
                <h3 className="text-xl font-semibold">{group.title}</h3>
                <p className="mt-2 text-sm font-medium text-primary">
                  {group.recruiterSignal}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-surface-medium">
                  {group.summary}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {group.skills.map((skill) => {
                  const Icon = icons[skill.icon];

                  return (
                    <div
                      key={`${group.title}-${skill.name}`}
                      className="flex items-center gap-3 rounded-lg border bg-muted/30 p-3 transition-colors hover:bg-muted"
                    >
                      <span className="rounded-md bg-background p-2 text-primary shadow-sm">
                        <Icon size={18} aria-hidden="true" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium">{skill.name}</p>
                        <Badge
                          variant="outline"
                          className={`mt-1 text-[10px] ${levelStyles[skill.level]}`}
                        >
                          {skill.level}
                        </Badge>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
