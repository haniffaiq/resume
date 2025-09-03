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
  Layout
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skills = [
    // Backend
    { name: "Python", icon: FileCode, category: "Backend", level: "Expert" },
    { name: "Node.js", icon: Server, category: "Backend", level: "Advanced" },
    { name: "Express.js", icon: Server, category: "Backend", level: "Advanced" },
    { name: "REST API", icon: Code, category: "Backend", level: "Expert" },
    { name: "Microservices", icon: Network, category: "Backend", level: "Advanced" },

    // Frontend
    { name: "React", icon: Layout, category: "Frontend", level: "Intermediate" },
    { name: "TailwindCSS", icon: Code, category: "Frontend", level: "Intermediate" },
    { name: "Bootstrap", icon: Code, category: "Frontend", level: "Intermediate" },
    { name: "HTML/CSS", icon: Code, category: "Frontend", level: "Intermediate" },

    // DevOps
    { name: "Docker", icon: Cpu, category: "DevOps", level: "Expert" },
    { name: "Podman", icon: Cpu, category: "DevOps", level: "Advanced" },
    { name: "CI/CD", icon: Terminal, category: "DevOps", level: "Advanced" },
    { name: "Nginx", icon: Server, category: "DevOps", level: "Advanced" },
    { name: "Monitoring", icon: BarChart, category: "DevOps", level: "Advanced" },
    { name: "Linux", icon: Terminal, category: "DevOps", level: "Advanced" },
    { name: "Bash", icon: Terminal, category: "DevOps", level: "Advanced" },

    // Cloud
    { name: "AWS", icon: Cloud, category: "Cloud", level: "Advanced" },
    { name: "GCP", icon: Cloud, category: "Cloud", level: "Advanced" },
    { name: "Azure", icon: Cloud, category: "Cloud", level: "Intermediate" },

    // Data
    { name: "PostgreSQL", icon: Database, category: "Data", level: "Expert" },
    { name: "MySQL", icon: Database, category: "Data", level: "Advanced" },
    { name: "MongoDB", icon: Database, category: "Data", level: "Intermediate" },
    { name: "SQL", icon: Database, category: "Data", level: "Advanced" },
    { name: "CDC / ETL", icon: Database, category: "Data", level: "Advanced" },
    { name: "BigQuery", icon: Database, category: "Data", level: "Advanced" },
    { name: "Looker", icon: BarChart, category: "Data", level: "Intermediate" },
    { name: "Excel", icon: BarChart, category: "Data", level: "Intermediate" },
    { name: "Redis", icon: Database, category: "Data", level: "Intermediate" },

    // Automation
    { name: "Telegram Bot", icon: Bot, category: "Automation", level: "Advanced" },
    { name: "WhatsApp Bot", icon: Bot, category: "Automation", level: "Advanced" },
    { name: "IoT", icon: Bot, category: "Automation", level: "Intermediate" },
  ];


  // Group skills by category
  const grouped = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section id="skills" className="pb-20 bg-background">
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
                  const Icon = skill.icon;
                  return (
                    <div
                      key={index}
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
