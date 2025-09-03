import { Card } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-6">About Me</h2>
              <p className="text-lg text-surface-medium leading-relaxed mb-6">
                IT professional with 5+ years of experience across DevOps, backend, and data engineering.
                Skilled in building and scaling systems using AWS, GCP, Docker, CI/CD, Python, and PostgreSQL.
              </p>
              <p className="text-lg text-surface-medium leading-relaxed mb-6">
                Proven track record of delivering enterprise-grade solutions: scaling a WhatsApp bot to 500K+ messages/month at Huawei,
                optimizing AWS infrastructure and zero-downtime deployments at Elev8, and refactoring 90+ APIs while integrating Zoho CRM
                with GCP at Wine Adore. Experienced in IoT-ready APIs, data pipelines, and real-time monitoring systems.
              </p>
              <p className="text-lg text-surface-medium leading-relaxed">
                Passionate about automation, scalability, and security—continuously learning and leveraging new technologies
                to solve complex business challenges and drive measurable impact.
              </p>
            </div>

          </div>

          <div className="space-y-6">
            <Card className="p-6 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Education</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium">Bachelor of Telecommunication Engineering</p>
                      <p className="text-surface-medium text-sm">Universitas Telkom - Bandung, Indonesia</p>
                    </div>
                    <div>
                      <p className="font-medium">High School Diploma</p>
                      <p className="text-surface-medium text-sm">Telkom School - Jakarta, Indonesia</p>
                      <p className="text-surface-medium text-sm">Telecommunication Transmission Engineering</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Location</h3>
                  <p className="text-surface-medium">Jakarta, Indonesia</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Calendar className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Experience</h3>
                  <p className="text-surface-medium">5+ years in software development</p>
                  <p className="text-surface-medium">Currently DevOps at Huawei Indonesia</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;