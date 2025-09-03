import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: "01",
      title: "Industrial IoT Platform - AGIT and TELKOMSEL",
      description: "Designed to connect and manage various IoT devices in industrial environments. With this platform, companies can efficiently monitor, control, and analyze data from these devices.",
      tech: ["Python", "React.js", "PostgreSQL", "Docker", "Azure"],
      year: "2023",
      type: "Dashboard and IoT Platform"
    },
    {
      id: "02",
      title: "Single Dashboard Monitoring Grafana - AGIT and FINNET",
      description: "Developed 5 Grafana Cloud dashboards for FINNET services to monitor system performance using data from Dynatrace, Prometheus, and BigQuery. Built ETL pipeline with Airflow and Python.",
      tech: ["Grafana", "Python", "BigQuery", "Airflow", "ETL"],
      year: "2024",
      type: "Dashboard & Analytics"
    },
    {
      id: "03",
      title: "Machine Learning Classification System",
      description: "Utilizing EEG signal data to classify brain activity into alcoholic and non-alcoholic categories using Support Vector Machine (SVM) and Artificial Neural Network (ANN) algorithms.",
      tech: ["Python", "SVM", "ANN", "EEG", "Machine Learning"],
      year: "2023",
      type: "Machine Learning"
    },
    {
      id: "04",
      title: "Dashboard Website for Agriculture Monitoring",
      description: "Created a dashboard website for monitoring agricultural sensor data using React.js and MQTT protocol. Features real-time data streaming with graphs, charts, and responsive design.",
      tech: ["React.js", "MQTT", "IoT", "Real-time"],
      year: "2023",
      type: "IoT Dashboard"
    },
    {
      id: "05",
      title: "Milk pH Monitor for Margamukti Village",
      description: "Developed a monitoring system for testing the pH level of milk produced locally. Essential for ensuring the quality and safety of milk products consumed by the community.",
      tech: ["Arduino", "IoT", "pH Sensors", "Monitoring"],
      year: "2018",
      type: "IoT Monitoring"
    }
  ];

  return (
    // <section id="projects" className="py-20 bg-gradient-dark text-primary-foreground">
    //   <div className="container mx-auto px-6">
    //     <div className="text-center mb-16">
    //       <h2 className="text-4xl font-bold mb-4">My Projects</h2>
    //       <p className="text-lg text-gray-300 max-w-2xl mx-auto">
    //         Showcase of technical projects demonstrating expertise in IoT, data engineering, and full-stack development
    //       </p>
    //     </div>

    //     <div className="space-y-8">
    //       {projects.map((project, index) => (
    //         <div 
    //           key={index}
    //           className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:bg-white/10 transition-colors"
    //         >
    //           <div className="grid lg:grid-cols-2 gap-8 p-8">
    //             <div className="space-y-6">
    //               <div className="flex items-center gap-4">
    //                 <span className="text-3xl font-bold text-blue-300">{project.id}</span>
    //                 <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">
    //                   {project.type}
    //                 </span>
    //               </div>

    //               <div>
    //                 <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
    //                 <p className="text-gray-300 leading-relaxed mb-4">
    //                   {project.description}
    //                 </p>
    //               </div>

    //               <div className="flex flex-wrap gap-2">
    //                 {project.tech.map((tech, i) => (
    //                   <span 
    //                     key={i}
    //                     className="px-3 py-1 bg-primary/20 text-primary-foreground text-sm rounded-full border border-primary/30"
    //                   >
    //                     {tech}
    //                   </span>
    //                 ))}
    //               </div>

    //               <div className="flex items-center gap-4 pt-4">
    //                 <Button 
    //                   variant="outline" 
    //                   size="sm"
    //                   className="border-white/20 text-black hover:bg-white/10"
    //                 >
    //                   <ExternalLink size={16} className="mr-2" />
    //                   View Details
    //                 </Button>
    //                 <span className="text-gray-400 text-sm">{project.year}</span>
    //               </div>
    //             </div>

    //             <div className="flex items-center justify-center">
    //               <div className="w-full h-48 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center">
    //                 <div className="text-center text-gray-400">
    //                   <div className="w-16 h-16 bg-white/10 rounded-lg mx-auto mb-3 flex items-center justify-center">
    //                     <ExternalLink size={24} />
    //                   </div>
    //                   <p className="text-sm">Project Preview</p>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
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
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:bg-white/10 transition-colors flex flex-col"
            >
              {/* Header */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300">
                    {project.type}
                  </span>
                  <span className="text-gray-400 text-xs">{project.year}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm flex-1">
                  {project.description.length > 120
                    ? project.description.slice(0, 120) + "..."
                    : project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-primary/20 text-primary-foreground text-xs rounded-full border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-1 bg-white/10 text-gray-400 text-xs rounded-full">
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-white/10 flex justify-between items-center">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/20 text-sm text-black hover:bg-white/10"
                >
                  <ExternalLink size={14} className="mr-2" />
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
};

export default Projects;