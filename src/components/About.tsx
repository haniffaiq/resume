import { Card } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { profile } from "@/data/profile";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-6">About Me</h2>
              {profile.aboutParagraphs.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={`text-lg text-surface-medium leading-relaxed${index < profile.aboutParagraphs.length - 1 ? " mb-6" : ""}`}
                >
                  {paragraph}
                </p>
              ))}
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
                    {profile.education.map((item) => (
                      <div key={item.degree}>
                        <p className="font-medium">{item.degree}</p>
                        <p className="text-surface-medium text-sm">{item.school}</p>
                        {item.detail && (
                          <p className="text-surface-medium text-sm">{item.detail}</p>
                        )}
                      </div>
                    ))}
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
                  <p className="text-surface-medium">{profile.location}</p>
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
                  {profile.experienceSummary.map((item) => (
                    <p key={item} className="text-surface-medium">{item}</p>
                  ))}
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
