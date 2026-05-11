import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail, Phone } from "lucide-react";
import heroImage from "@/assets/hero.jpeg";
import { profile } from "@/data/profile";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-subtle">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-5 gap-12 items-center">

          {/* Image Section - Takes 2 cols */}
          <div className="lg:col-span-2 flex justify-center order-1 lg:order-1">
            <div className="relative animate-scale-in">
              <img
                src={heroImage}
                alt={profile.heroAlt}
                className="w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover rounded-full shadow-strong"
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-secondary/20 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Content Section - Takes 3 cols */}
          <div className="lg:col-span-3 space-y-6 order-2 lg:order-2 animate-fade-in text-center lg:text-left">
            <div className="space-y-4">
              {/* Main Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
                Hello I'm <span className="text-primary">{profile.name}</span>
              </h1>

              {/* Subtitle */}
              <h2 className="text-lg md:text-xl lg:text-2xl text-surface-medium font-medium leading-relaxed">
                {profile.headlineRoles.map((role, index) => (
                  <span
                    key={role}
                    className={index === 0 ? "text-primary font-semibold" : "text-foreground"}
                  >
                    {index > 0 ? " | " : ""}{role}
                  </span>
                ))}
              </h2>

              {/* Extended Greeting Text */}
              <p className="text-sm md:text-base lg:text-lg text-surface-medium leading-relaxed">
                {profile.summary}
              </p>
            </div>

            {/* Contact + CTA */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a
                  href={profile.contact.email.href}
                  className="flex items-center gap-2 text-surface-medium hover:text-foreground transition-colors text-sm"
                >
                  <Mail size={18} />
                  <span>{profile.contact.email.value}</span>
                </a>
                <a
                  href={profile.contact.phone.href}
                  className="flex items-center gap-2 text-surface-medium hover:text-foreground transition-colors text-sm"
                >
                  <Phone size={18} />
                  <span>{profile.contact.phone.value}</span>
                </a>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <Button
                  onClick={() => scrollToSection("contact")}
                  size="lg"
                  className="shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-105"
                >
                  Get In Touch
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-105"
                >
                  <a href={profile.cvPath} download>
                    <Download size={18} />
                    Download CV
                  </a>
                </Button>
                <div className="flex items-center gap-3">
                  <a
                    href={profile.socials.linkedin.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border border-border hover:bg-secondary hover:scale-110 transition-all duration-300"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href={profile.socials.github.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border border-border hover:bg-secondary hover:scale-110 transition-all duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Hero;
