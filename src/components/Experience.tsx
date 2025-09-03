const Experience = () => {
  const experiences = [
    {
      company: "Huawei Indonesia",
      position: "DevOps",
      location: "Jakarta, Indonesia",
      period: "Mar 2025 - Present",
      description:
        "Driving automation and reliability at scale by rebuilding high-volume systems and real-time monitoring solutions.",
      achievements: [
        "Redesigned WhatsApp bot infrastructure, scaling to 500,000+ messages/month and automating workflows across 100+ groups (reporting, notifications, OTP auth).",
        "Built and deployed a real-time Down Detector system covering 3 major telecom providers, integrated with WhatsApp alerts for instant incident response.",
        "Provided end-to-end application support, delivering feature upgrades, bug fixes, and system stability improvements aligned with business needs."
      ]
    },
    {
      company: "Elev8",
      position: "DevOps Engineer",
      location: "Switzerland (Remote)",
      period: "Dec 2024 - Mar 2025",
      description:
        "Delivered cloud-native infrastructure and CI/CD automation to accelerate software delivery and improve reliability.",
      achievements: [
        "Set up and managed AWS environments (EC2, S3, RDS) for dev and prod workloads, ensuring cost efficiency and security.",
        "Designed CI/CD pipelines with Jenkins, GitLab CI, and AWS CodePipeline, enabling faster, automated releases.",
        "Implemented zero-downtime deployments with ELB, Auto Scaling, and Blue-Green strategy.",
        "Containerized backend & frontend with Docker and orchestrated multi-container deployments using Docker Compose.",
        "Integrated monitoring stack (Prometheus, Grafana) for proactive performance tracking and alerting."
      ]
    },
    {
      company: "Wine Adore",
      position: "Senior Backend Engineer",
      location: "Singapore (Remote)",
      period: "Jul 2024 - Dec 2024",
      description:
        "Strengthened backend reliability and security while enabling new product capabilities through APIs and integrations.",
      achievements: [
        "Refactored 40+ API endpoints, cutting latency and boosting scalability for high-traffic services.",
        "Developed 50+ new API endpoints to unlock new features and integrations for mobile and web apps.",
        "Led a post-mortem on security incidents, fixing 3+ critical vulnerabilities and hardening system resilience.",
        "Integrated Zoho CRM with internal DB using GCP services (Cloud Functions, Pub/Sub, Scheduler), streamlining sales workflows.",
        "Collaborated in Agile sprints, ensuring timely delivery of high-impact features."
      ]
    },
    {
      company: "PT Astra Graphia Information Technology (AGIT)",
      position: "Python Developer (Backend)",
      location: "Jakarta, Indonesia",
      period: "May 2023 - Dec 2024",
      description:
        "Engineered APIs and deployment processes to support IoT and enterprise systems.",
      achievements: [
        "Developed Python-based REST APIs for seamless IoT device integration.",
        "Administered PostgreSQL databases, ensuring high availability and data integrity.",
        "Designed clean and intuitive UI components with HTML/CSS for production tracking apps.",
        "Led deployments to production with Docker, Podman, and Azure boosting reliability and reducing downtime.",
        "Produced comprehensive technical documentation to support dev and ops teams."
      ]
    },
    {
      company: "Prodigi Insurance",
      position: "Data Engineer",
      location: "Jakarta, Indonesia",
      period: "Nov 2022 - May 2023",
      description:
        "Architected scalable data pipelines and real-time analytics platforms on Google Cloud.",
      achievements: [
        "Designed and optimized ELT/ETL pipelines using GCP services, including Cloud SQL, BigQuery, and Cloud Storage.",
        "Implemented Change Data Capture (CDC) for near real-time data updates and latency monitoring.",
        "Built automated workflows with Pub/Sub, Cloud Scheduler, and GCP integrations.",
        "Created dashboards and data visualizations in Looker for business insights.",
        "Authored documentation covering data pipeline design, monitoring, and governance."
      ]
    },
    {
      company: "PT. Habibi Digital Nusantara (Habibi Garden)",
      position: "Junior Software Engineer",
      location: "Bandung, Indonesia",
      period: "Apr 2020 - Aug 2022",
      description:
        "Enhanced platform capabilities through API development and data visualization tools.",
      achievements: [
        "Tested and debugged APIs to improve performance and stability.",
        "Maintained databases, ensuring reliability and optimized queries.",
        "Created Telegram bots and mobile applications for end-user engagement.",
        "Developed dashboards for tracking agricultural and operational KPIs."
      ]
    },
    {
      company: "PT. Habibi Digital Nusantara (Habibi Garden)",
      position: "Microservice Engineer Intern",
      location: "Bandung, Indonesia",
      period: "Jan 2020 - Apr 2020",
      description:
        "Contributed to building smart farming solutions through microservices and automation tools.",
      achievements: [
        "Developed and tested RESTful APIs to connect IoT devices and applications.",
        "Created dashboards for real-time farm monitoring and analytics.",
        "Managed databases to improve storage and query performance.",
        "Built Telegram bots and mobile apps to enhance farmer productivity."
      ]
    },
    {
      company: "Telkom Indonesia",
      position: "Data Management Intern",
      location: "Jakarta, Indonesia",
      period: "Jan 2019 - Jun 2019",
      description:
        "Supported enterprise data management initiatives with structured analysis and reporting.",
      achievements: [
        "Collected, validated, and cleaned datasets from multiple business units.",
        "Standardized data storage with SQL and Python for analytics use cases.",
        "Automated reporting using Excel and SQL, improving operational efficiency.",
        "Contributed to data-driven decision-making through collaborative team projects."
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