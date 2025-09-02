const Experience = () => {
  const experiences = [
    {
      company: "Huawei Indonesia",
      position: "DevOps",
      location: "Jakarta, Indonesia",
      period: "Mar 2025 - Present",
      description: "WhatsApp Bot Rebuild: Redesigned and scaled a WhatsApp bot to handle 500,000+ messages/month, managing 100+ groups for automated reporting, notifications, and OTP-based authentication.",
      achievements: [
        "Scaled WhatsApp bot to handle 500,000+ messages/month",
        "Developed real-time down detector for three major telecom providers",
        "Provided ongoing consultation and feature enhancements"
      ]
    },
    {
      company: "Elev8",
      position: "DevOps Engineer",
      location: "Swiss",
      period: "Dec 2024 - Mar 2025",
      description: "Set up and managed AWS environments (dev & prod) with EC2, S3, and RDS. Configured CI/CD pipelines for backend and frontend using Jenkins, GitLab CI, or AWS CodePipeline.",
      achievements: [
        "Implemented zero-downtime deployments with ELB and Auto Scaling",
        "Optimized Nginx configurations for load balancing",
        "Containerized services using Docker for consistency"
      ]
    },
    {
      company: "Wine Adore",
      position: "Senior Backend Engineer",
      location: "Singapore",
      period: "Jul 2024 - Dec 2024",
      description: "Refactored 40+ API Endpoints improving performance, scalability, and security. Developed 50+ API Endpoints enabling new features and robust integrations.",
      achievements: [
        "Refactored 40+ API Endpoints for better performance",
        "Identified and addressed 3+ critical security issues",
        "Integrated Zoho CRM with company DB using GCP"
      ]
    },
    {
      company: "PT Astra Graphia Information Technology (AGIT)",
      position: "Python Developer (Backend)",
      location: "Jakarta, Indonesia",
      period: "May 2023 - Dec 2024",
      description: "Developed RESTful APIs for seamless IoT device integration. Designed intuitive user interfaces and administered PostgreSQL databases.",
      achievements: [
        "Built Python-based REST APIs for IoT device integration",
        "Led deployment to production using Docker, Podman, and Azure",
        "Created detailed technical documentation"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-dark text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">My Experience</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Professional journey building scalable systems and leading technical initiatives
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                  <p className="text-lg text-blue-300 mb-2">{exp.company}</p>
                  <p className="text-gray-400 text-sm">{exp.location}</p>
                </div>
                <div className="mt-2 lg:mt-0">
                  <span className="px-4 py-2 bg-white/10 rounded-full text-sm text-gray-300">
                    {exp.period}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {exp.description}
              </p>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-white">Key Achievements:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;