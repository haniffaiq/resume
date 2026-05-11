import { Card } from "@/components/ui/card";
import {
  Code,
  Database,
  Cloud,
  Server,
  Cpu,
  FileCode,
  Terminal,
  BarChart,
  Bot,
  Network,
  Layout,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { skills, type SkillIconKey } from "@/data/skills";

const skillIcons: Record<SkillIconKey, LucideIcon> = {
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

const Skills = () => {
  // Group skills by category
  const grouped = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3">My Skills</h2>
          <p className="text-lg text-surface-medium max-w-2xl mx-auto">
            Technologies and tools I use to build scalable, reliable, and data-driven solutions
          </p>
        </div>

        <div className="space-y-8">
          {Object.entries(grouped).map(([category, items]) => (
            <Card key={category} className="p-6">
              <h3 className="text-xl font-semibold mb-4">{category}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {items.map((skill, index) => {
                  const Icon = skillIcons[skill.icon];
                  return (
                    <div
                      key={`${skill.name}-${index}`}
                      className="flex items-center space-x-2 bg-muted/40 rounded-md p-2 hover:bg-muted transition-colors"
                    >
                      <Icon size={18} className="text-primary" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">{skill.name}</p>
                        <Badge variant="outline" className="text-[10px] px-1 py-0.5">
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
