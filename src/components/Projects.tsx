

// "use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { ExternalLink } from "lucide-react";
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

// const Projects = () => {
//   const [selectedProject, setSelectedProject] = useState<any | null>(null);

//   const projects = [
//     {
//       id: "01",
//       title: "SmardenBot V1 (IoT Project)",
//       description:
//         "Automated robotic system for plant watering using Arduino Uno. The goal was to automate watering to reduce human workload and ensure plants receive water promptly and in appropriate amounts.",
//       tech: ["Arduino", "IoT", "Automation"],
//       year: "2017",
//       type: "IoT Project",
//       link: "",
//     },
//     {
//       id: "02",
//       title: "Milk pH Monitor for Margamukti Village",
//       description:
//         "Developed a monitoring system to test the pH level of locally produced milk in Bandung. Essential for ensuring the quality and safety of milk products consumed by the community.",
//       tech: ["Arduino", "IoT", "pH Sensors", "Monitoring"],
//       year: "2018",
//       type: "IoT Monitoring",
//       link: "",
//     },
//     {
//       id: "03",
//       title: "Microservice for Error Hardware Checking",
//       description:
//         "Python-based microservice integrated with Telegram bot to monitor battery and storage device status in Habibi Garden. Real-time notifications were sent to users when errors were detected, with scheduled checks and logging for proactive maintenance.",
//       tech: ["Python", "Telegram Bot", "Microservices"],
//       year: "2020",
//       type: "IoT Microservice",
//       link: "",
//     },
//     {
//       id: "04",
//       title: "Telegram Bot for Hardware Device Monitoring",
//       description:
//         "Telegram bot providing real-time updates on hardware status, including batteries and storage devices. Allowed users to interact with the bot to receive the last known condition of hardware components.",
//       tech: ["Telegram Bot", "IoT", "Automation"],
//       year: "2020",
//       type: "Automation",
//       link: "",
//     },
//     {
//       id: "05",
//       title: "Machine Learning Classification System (EEG Data)",
//       description:
//         "EEG signal classification project to distinguish alcoholic vs non-alcoholic brain activity using SVM and ANN. Data preprocessing, feature extraction, and model training with hyperparameter tuning for optimal performance. Deployed models for real-world classification.",
//       tech: ["Python", "SVM", "ANN", "EEG", "Machine Learning"],
//       year: "2023",
//       type: "Machine Learning",
//       link: "",
//     },
//     {
//       id: "06",
//       title: "Dashboard Website for Monitoring Agriculture Sensors",
//       description:
//         "Built a React.js dashboard to monitor agricultural sensor data in real time using MQTT. Dashboard visualized temperature, humidity, soil moisture, and light intensity with graphs, charts, gauges, and maps. Fully responsive across devices.",
//       tech: ["React.js", "MQTT", "IoT", "Real-time", "Dashboard"],
//       year: "2023",
//       type: "IoT Dashboard",
//       link: "",
//     },
//     {
//       id: "07",
//       title: "Industrial IoT Platform - AGIT and TELKOMSEL",
//       description:
//         "Platform to connect and manage industrial IoT devices, enabling companies to monitor, control, and analyze data efficiently across various environments.",
//       tech: ["Python", "React.js", "PostgreSQL", "Docker", "Azure"],
//       year: "2023",
//       type: "Dashboard & IoT Platform",
//       link: "",
//     },
//     {
//       id: "08",
//       title: "Single Dashboard Monitoring Grafana - AGIT and FINNET",
//       description:
//         "Developed 5 Grafana Cloud dashboards for FINNET services (Money, Voucher, Billing, Payment) using Dynatrace, Prometheus, and BigQuery. Built ETL pipeline with Airflow and Python to integrate data from Oracle, MySQL, and PostgreSQL into BigQuery for real-time analytics.",
//       tech: ["Grafana", "Python", "Airflow", "BigQuery", "ETL"],
//       year: "2024",
//       type: "Dashboard & Analytics",
//       link: "",
//     },
//     {
//       id: "09",
//       title: "Mitranesia.id - Franchise Marketplace Platform",
//       description:
//         "Built an end-to-end marketplace for buying and selling local franchise businesses. Focused on seamless user experience with dynamic product listings, franchise package comparison, and inquiry automation. Integrated Python backend for API and PostgreSQL database, containerized with Docker and deployed on AWS for scalability.",
//       tech: ["React.js", "Tailwind CSS", "Python", "PostgreSQL", "Docker", "AWS"],
//       year: "2024",
//       type: "Fullstack Web Application",
//       link: "https://mitranesia.id",
//     },
//     {
//       id: "10",
//       title: "BaliBersih.com - On-demand Cleaning Service Platform",
//       description:
//         "Developed a web platform for on-demand cleaning services across Bali. Designed with a mobile-first UI for instant WhatsApp booking, dynamic pricing display, and SEO-optimized service pages. Built using TypeScript and Tailwind with server-side components to handle location-based content efficiently.",
//       tech: ["TypeScript", "Tailwind CSS", "JavaScript"],
//       year: "2025",
//       type: "Web Platform",
//       link: "https://balibersih.com",
//     },
//   ];




//   return (
//     <section id="projects" className="py-20 bg-gradient-dark text-primary-foreground">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold mb-4">My Projects</h2>
//           <p className="text-lg text-gray-300 max-w-2xl mx-auto">
//             Showcase of technical projects demonstrating expertise in IoT, data engineering, and full-stack development
//           </p>
//         </div>

//         {/* Grid Layout */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <Card
//               key={index}
//               className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:bg-white/10 transition-colors flex flex-col"
//             >
//               <div className="p-6 flex-1 flex flex-col">
//                 <div className="flex items-center justify-between mb-4">
//                   <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300">
//                     {project.type}
//                   </span>
//                   <span className="text-gray-400 text-xs">{project.year}</span>
//                 </div>

//                 <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
//                 <p className="text-gray-300 text-sm flex-1">
//                   {project.description.length > 120
//                     ? project.description.slice(0, 120) + "..."
//                     : project.description}
//                 </p>

//                 {/* Tech stack */}
//                 <div className="flex flex-wrap gap-2 mt-4">
//                   {project.tech.map((tech, i) => (
//                     <span
//                       key={i}
//                       className="px-2 py-1 bg-primary/20 text-primary-foreground text-xs rounded-full border border-primary/30"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               {/* Footer */}
//               <div className="p-6 border-t border-white/10 flex justify-between items-center gap-3">
//                 <Button
//                   variant="outline"
//                   size="sm"
//                   onClick={() => setSelectedProject(project)}
//                   className="border-white/20 text-sm text-black hover:bg-white/10"
//                 >
//                   View Details
//                 </Button>

//                 <Button
//                   variant="outline"
//                   size="sm"
//                   disabled={!project.link}
//                   onClick={() => {
//                     if (project.link) window.open(project.link, "_blank");
//                   }}
//                   className="border-white/20 text-sm text-black hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
//                 >
//                   <ExternalLink size={14} className="mr-2" />
//                   Direct Link
//                 </Button>
//               </div>

//             </Card>
//           ))}
//         </div>
//       </div>

//       {/* Modal Detail */}
//       <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
//         <DialogContent className="max-w-2xl bg-background text-foreground">
//           {selectedProject && (
//             <>
//               <DialogHeader>
//                 <DialogTitle className="text-2xl font-bold">
//                   {selectedProject.title}
//                 </DialogTitle>
//               </DialogHeader>
//               <p className="text-sm text-surface-medium mb-4">{selectedProject.type} • {selectedProject.year}</p>
//               <p className="mb-4">{selectedProject.description}</p>

//               <div className="flex flex-wrap gap-2">
//                 {selectedProject.tech.map((tech: string, i: number) => (
//                   <span
//                     key={i}
//                     className="px-3 py-1 bg-primary/20 text-primary-foreground text-xs rounded-full border border-primary/30"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </>
//           )}
//         </DialogContent>
//       </Dialog>
//     </section>
//   );
// };

// export default Projects;

"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  year: string; // keep as string in data, parse when sorting
  type: string;
  link?: string;
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "01",
      title: "SmardenBot V1 (IoT Project)",
      description:
        "Automated robotic system for plant watering using Arduino Uno. The goal was to automate watering to reduce human workload and ensure plants receive water promptly and in appropriate amounts.",
      tech: ["Arduino", "IoT", "Automation"],
      year: "2017",
      type: "IoT Project",
      link: "",
    },
    {
      id: "02",
      title: "Milk pH Monitor for Margamukti Village",
      description:
        "Developed a monitoring system to test the pH level of locally produced milk in Bandung. Essential for ensuring the quality and safety of milk products consumed by the community.",
      tech: ["Arduino", "IoT", "pH Sensors", "Monitoring"],
      year: "2018",
      type: "IoT Monitoring",
      link: "",
    },
    {
      id: "03",
      title: "Microservice for Error Hardware Checking",
      description:
        "Python-based microservice integrated with Telegram bot to monitor battery and storage device status in Habibi Garden. Real-time notifications were sent to users when errors were detected, with scheduled checks and logging for proactive maintenance.",
      tech: ["Python", "Telegram Bot", "Microservices"],
      year: "2020",
      type: "IoT Microservice",
      link: "",
    },
    {
      id: "04",
      title: "Telegram Bot for Hardware Device Monitoring",
      description:
        "Telegram bot providing real-time updates on hardware status, including batteries and storage devices. Allowed users to interact with the bot to receive the last known condition of hardware components.",
      tech: ["Telegram Bot", "IoT", "Automation"],
      year: "2020",
      type: "Automation",
      link: "",
    },
    {
      id: "05",
      title: "Machine Learning Classification System (EEG Data)",
      description:
        "EEG signal classification project to distinguish alcoholic vs non-alcoholic brain activity using SVM and ANN. Data preprocessing, feature extraction, and model training with hyperparameter tuning for optimal performance. Deployed models for real-world classification.",
      tech: ["Python", "SVM", "ANN", "EEG", "Machine Learning"],
      year: "2023",
      type: "Machine Learning",
      link: "",
    },
    {
      id: "06",
      title: "Dashboard Website for Monitoring Agriculture Sensors",
      description:
        "Built a React.js dashboard to monitor agricultural sensor data in real time using MQTT. Dashboard visualized temperature, humidity, soil moisture, and light intensity with graphs, charts, gauges, and maps. Fully responsive across devices.",
      tech: ["React.js", "MQTT", "IoT", "Real-time", "Dashboard"],
      year: "2023",
      type: "IoT Dashboard",
      link: "",
    },
    {
      id: "07",
      title: "Industrial IoT Platform - AGIT and TELKOMSEL",
      description:
        "Platform to connect and manage industrial IoT devices, enabling companies to monitor, control, and analyze data efficiently across various environments.",
      tech: ["Python", "React.js", "PostgreSQL", "Docker", "Azure"],
      year: "2023",
      type: "Dashboard & IoT Platform",
      link: "",
    },
    {
      id: "08",
      title: "Single Dashboard Monitoring Grafana - AGIT and FINNET",
      description:
        "Developed 5 Grafana Cloud dashboards for FINNET services (Money, Voucher, Billing, Payment) using Dynatrace, Prometheus, and BigQuery. Built ETL pipeline with Airflow and Python to integrate data from Oracle, MySQL, and PostgreSQL into BigQuery for real-time analytics.",
      tech: ["Grafana", "Python", "Airflow", "BigQuery", "ETL"],
      year: "2024",
      type: "Dashboard & Analytics",
      link: "",
    },
    {
      id: "09",
      title: "Mitranesia.id - Franchise Marketplace Platform",
      description:
        "Built an end-to-end marketplace for buying and selling local franchise businesses. Focused on seamless user experience with dynamic product listings, franchise package comparison, and inquiry automation. Integrated Python backend for API and PostgreSQL database, containerized with Docker and deployed on AWS for scalability.",
      tech: ["React.js", "Tailwind CSS", "Python", "PostgreSQL", "Docker", "AWS"],
      year: "2024",
      type: "Fullstack Web Application",
      link: "https://mitranesia.id",
    },
    {
      id: "10",
      title: "BaliBersih.com - On-demand Cleaning Service Platform",
      description:
        "Developed a web platform for on-demand cleaning services across Bali. Designed with a mobile-first UI for instant WhatsApp booking, dynamic pricing display, and SEO-optimized service pages. Built using TypeScript and Tailwind with server-side components to handle location-based content efficiently.",
      tech: ["TypeScript", "Tailwind CSS", "JavaScript"],
      year: "2025",
      type: "Web Platform",
      link: "https://balibersih.com",
    },
  ];

const sorted = useMemo(
  () =>
    [...projects].sort((a, b) => {
      const yearDiff = Number(b.year) - Number(a.year);
      if (yearDiff !== 0) return yearDiff;

      return Number(b.id) - Number(a.id);
    }),
  [projects]
);


  return (
    <section id="projects" className="py-20 bg-gradient-dark text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Showcase of technical projects demonstrating expertise in IoT, data engineering, and full-stack development
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sorted.map((project) => (
            <Card
              key={project.id}
              className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:bg-white/10 transition-colors flex flex-col"
            >
              {/* Preview (only if has link) */}
              {project.link ? (
                <div className="relative h-40 border-b border-white/10">
                  <iframe
                    src={project.link}
                    title={`${project.title} preview`}
                    loading="lazy"
                    className="w-full h-full pointer-events-none"
                  />
                  {/* Overlay clickable to open new tab */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0"
                    aria-label={`Open ${project.title}`}
                  />
                  <div className="absolute top-2 right-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs px-2 py-1 rounded-md bg-black/50 text-white hover:bg-black/70"
                    >
                      <ExternalLink size={12} />
                      Open
                    </a>
                  </div>
                </div>
              ) : null}

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300">
                    {project.type}
                  </span>
                  <span className="text-gray-400 text-xs">{project.year}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm flex-1">
                  {project.description.length > 160
                    ? project.description.slice(0, 160) + "..."
                    : project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/20 text-primary-foreground text-xs rounded-full border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-white/10 flex justify-between items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedProject(project)}
                  className="border-white/20 text-black hover:bg-white/10"
                >
                  View Details
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  disabled={!project.link}
                  onClick={() => {
                    if (project.link) window.open(project.link, "_blank");
                  }}
                  className="border-white/20 text-black hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ExternalLink size={14} className="mr-2" />
                  Direct Link
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Modal Detail */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl bg-background text-foreground">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>
              <p className="text-sm text-surface-medium mb-4">
                {selectedProject.type} • {selectedProject.year}
              </p>
              <p className="mb-4">{selectedProject.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/20 text-primary-foreground text-xs rounded-full border border-primary/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {selectedProject.link ? (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md bg-primary text-primary-foreground"
                >
                  <ExternalLink size={14} />
                  Visit Project
                </a>
              ) : null}
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
