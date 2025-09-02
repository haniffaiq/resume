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
    },
    {
      company: "Prodigi Insurance",
      position: "Data Engineer",
      location: "Jakarta, Indonesia",
      period: "May 2023 - Dec 2024",
      description: "Designed and optimized data pipelines, ETL/ELT processes, and real-time integrations using GCP and PostgreSQL.",
      achievements: [
        "Implemented Change Data Capture (CDC) and automated workflows with Pub/Sub, Cloud Scheduler, and Cloud Storage",
        "Leveraged BigQuery for scalable analytics and monitored data latency",
        "Developed RESTful APIs for IoT integration and deployed using Docker, Podman, and Azure",
        "Created technical documentation and data visualizations with Looker"
      ]
    },
    {
      company: "PT. Habibi Digital Nusantara (Habibi Garden)",
      position: "Microservice Engineer Intern",
      location: "Bandung, Indonesia",
      period: "Jan 2020 - Apr 2020",
      description: "Built and tested microservices and APIs to support smart farming solutions.",
      achievements: [
        "Developed and maintained RESTful APIs with testing for reliability and functionality",
        "Created interactive dashboards for data visualization",
        "Managed databases and improved data storage efficiency",
        "Developed Telegram bots and mobile apps to enhance user experience"
      ]
    },
    {
      company: "PT. Habibi Digital Nusantara (Habibi Garden)",
      position: "Junior Software Engineer",
      location: "Bandung, Indonesia",
      period: "Apr 2020 - Dec 2020",
      description: "Enhanced existing systems with APIs, dashboards, and mobile applications.",
      achievements: [
        "Conducted API testing and debugging for performance improvements",
        "Maintained and optimized databases for efficient storage",
        "Developed Telegram bots and mobile applications for end-user functionality",
        "Created dashboards to visualize operational and agricultural data"
      ]
    },
    {
      company: "Telkom Indonesia",
      position: "Data Management Intern",
      location: "Jakarta, Indonesia",
      period: "Jan 2019 - Jun 2019",
      description: "Worked with structured data to improve operational efficiency and support data-driven decision-making.",
      achievements: [
        "Collected, validated, and cleaned datasets from multiple sources",
        "Structured data storage using SQL and Python for analysis",
        "Utilized Excel and SQL to streamline reporting and analytics",
        "Collaborated with team members on data-driven projects"
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

        {/* <div className="space-y-8">
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
        </div> */}

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Section */}
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                  <p className="text-lg text-blue-300">{exp.company}</p>
                  <p className="text-gray-400 text-sm">{exp.location}</p>
                  <span className="inline-block mt-2 px-4 py-1 bg-white/10 rounded-full text-sm text-gray-300">
                    {exp.period}
                  </span>
                </div>

                {/* Right Section */}
                <div className="lg:col-span-2">
                  <p className="text-gray-300 mb-3 leading-relaxed">{exp.description}</p>

                  <h4 className="font-semibold text-white mb-2">Key Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;