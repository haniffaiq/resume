// import { Card } from "@/components/ui/card";
// import { 
//   Code, 
//   Database, 
//   Cloud, 
//   Server, 
//   Cpu, 
//   FileCode, 
//   Terminal,
//   BarChart,
//   Bot,
//   Network
// } from "lucide-react";

// const Skills = () => {
//   const skills = [
//     // Programming & Backend
//     { name: "Python", icon: <FileCode size={24} />, category: "Backend" },
//     { name: "Node.js", icon: <Server size={24} />, category: "Backend" },
//     { name: "REST APIs", icon: <Code size={24} />, category: "Backend" },
//     { name: "Microservices", icon: <Network size={24} />, category: "Backend" },

//     // Cloud & DevOps
//     { name: "AWS (EC2, S3, RDS, ELB, Auto Scaling)", icon: <Cloud size={24} />, category: "Cloud" },
//     { name: "GCP (BigQuery, Pub/Sub, Scheduler, Storage)", icon: <Cloud size={24} />, category: "Cloud" },
//     { name: "Azure", icon: <Cloud size={24} />, category: "Cloud" },
//     { name: "Docker & Podman", icon: <Cpu size={24} />, category: "DevOps" },
//     { name: "CI/CD (Jenkins, GitLab CI, AWS CodePipeline)", icon: <Terminal size={24} />, category: "DevOps" },
//     { name: "Nginx", icon: <Server size={24} />, category: "DevOps" },

//     // Database & Data Engineering
//     { name: "PostgreSQL", icon: <Database size={24} />, category: "Database" },
//     { name: "MongoDB", icon: <Database size={24} />, category: "Database" },
//     { name: "SQL", icon: <Database size={24} />, category: "Database" },
//     { name: "CDC, ETL/ELT", icon: <Database size={24} />, category: "Data Engineering" },

//     // Tools & Others
//     { name: "Looker", icon: <BarChart size={24} />, category: "Analytics" },
//     { name: "Telegram Bot", icon: <Bot size={24} />, category: "Automation" },
//     { name: "IoT Systems", icon: <Bot size={24} />, category: "Hardware" },
//     { name: "Excel", icon: <BarChart size={24} />, category: "Data" }
//   ];

//   return (
//     <section id="skills" className="py-20 bg-background">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold mb-4">My Skills</h2>
//           <p className="text-lg text-surface-medium max-w-2xl mx-auto">
//             Technologies and tools I use to build scalable, reliable, and data-driven solutions
//           </p>
//         </div>
        
//         <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
//           {skills.map((skill, index) => (
//             <Card 
//               key={index}
//               className="p-6 text-center hover:shadow-medium transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
//             >
//               <div className="flex flex-col items-center space-y-3">
//                 <div className="p-3 rounded-lg bg-secondary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
//                   {skill.icon}
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-sm">{skill.name}</h3>
//                   <p className="text-xs text-surface-medium mt-1">{skill.category}</p>
//                 </div>
//               </div>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;


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
  Network
} from "lucide-react";

const Skills = () => {
  const skills = [
    { name: "Python", icon: FileCode, category: "Backend" },
    { name: "Node.js", icon: Server, category: "Backend" },
    { name: "REST APIs", icon: Code, category: "Backend" },
    { name: "Microservices", icon: Network, category: "Backend" },
    { name: "AWS (EC2, S3, RDS, ELB, Auto Scaling)", icon: Cloud, category: "Cloud" },
    { name: "GCP (BigQuery, Pub/Sub, Scheduler, Storage)", icon: Cloud, category: "Cloud" },
    { name: "Azure", icon: Cloud, category: "Cloud" },
    { name: "Docker & Podman", icon: Cpu, category: "DevOps" },
    { name: "CI/CD (Jenkins, GitLab CI, AWS CodePipeline)", icon: Terminal, category: "DevOps" },
    { name: "Nginx", icon: Server, category: "DevOps" },
    { name: "PostgreSQL", icon: Database, category: "Database" },
    { name: "MongoDB", icon: Database, category: "Database" },
    { name: "SQL", icon: Database, category: "Database" },
    { name: "CDC, ETL/ELT", icon: Database, category: "Data Engineering" },
    { name: "Looker", icon: BarChart, category: "Analytics" },
    { name: "Telegram Bot", icon: Bot, category: "Automation" },
    { name: "IoT Systems", icon: Bot, category: "Hardware" },
    { name: "Excel", icon: BarChart, category: "Data" }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-lg text-surface-medium max-w-2xl mx-auto">
            Technologies and tools I use to build scalable, reliable, and data-driven solutions
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-5">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card 
                key={index}
                className="p-3 md:p-4 text-center hover:shadow-medium transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
              >
                <div className="flex flex-col items-center space-y-2">
                  <div className="p-2 rounded-lg bg-secondary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xs md:text-sm">{skill.name}</h3>
                    <p className="text-[10px] md:text-xs text-surface-medium mt-1">{skill.category}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

