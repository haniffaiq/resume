import { Card } from "@/components/ui/card";
import { 
  Code, 
  Database, 
  Cloud, 
  Server, 
  Smartphone, 
  Globe, 
  Cpu, 
  FileCode, 
  Terminal,
  Bot
} from "lucide-react";

const Skills = () => {
  const skills = [
    { name: "React.js", icon: <Code size={24} />, category: "Frontend" },
    { name: "Node.js", icon: <Server size={24} />, category: "Backend" },
    { name: "Python", icon: <FileCode size={24} />, category: "Backend" },
    { name: "PostgreSQL", icon: <Database size={24} />, category: "Database" },
    { name: "MongoDB", icon: <Database size={24} />, category: "Database" },
    { name: "AWS", icon: <Cloud size={24} />, category: "Cloud" },
    { name: "Docker", icon: <Cpu size={24} />, category: "DevOps" },
    { name: "REST APIs", icon: <Globe size={24} />, category: "Backend" },
    { name: "DevOps", icon: <Terminal size={24} />, category: "Operations" },
    { name: "IoT Systems", icon: <Smartphone size={24} />, category: "Hardware" }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-lg text-surface-medium max-w-2xl mx-auto">
            Technologies and tools I work with to build robust and scalable solutions
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={index}
              className="p-6 text-center hover:shadow-medium transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
            >
              <div className="flex flex-col items-center space-y-3">
                <div className="p-3 rounded-lg bg-secondary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-sm">{skill.name}</h3>
                  <p className="text-xs text-surface-medium mt-1">{skill.category}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;