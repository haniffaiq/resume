import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import heroImage from "@/assets/hero-illustration.jpg";
import TypingText from "./TypingText";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-subtle">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Image Section - Takes 3 columns */}
          <div className="lg:col-span-3 flex justify-center lg:justify-start order-1 lg:order-1">
            <div className="relative animate-scale-in">
              <img 
                src={heroImage} 
                alt="Hanif Faiq - Backend Developer"
                className="w-full max-w-lg h-auto rounded-2xl shadow-strong"
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-xl"></div>
            </div>
          </div>
          
          {/* Content Section - Takes 2 columns */}
          <div className="lg:col-span-2 space-y-8 order-2 lg:order-2 animate-fade-in">
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  <TypingText 
                    text="Hello I'm Hanif Faiq." 
                    delay={800}
                    speed={100}
                    className="text-foreground"
                  />
                </h1>
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: '4s', animationFillMode: 'both' }}>
                <h2 className="text-xl md:text-2xl lg:text-3xl text-surface-medium font-medium">
                  <TypingText 
                    text="Backend Developer" 
                    delay={4500}
                    speed={120}
                    className="text-primary font-semibold"
                  />
                </h2>
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: '7s', animationFillMode: 'both' }}>
                <p className="text-base md:text-lg text-surface-medium leading-relaxed">
                  Experienced and versatile IT professional with a background in frontend, backend, and data engineering. 
                  Based in Jakarta, Indonesia.
                </p>
              </div>
            </div>
            
            <div className="animate-fade-in space-y-4" style={{ animationDelay: '8s', animationFillMode: 'both' }}>
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="mailto:haniffaiq95@gmail.com"
                  className="flex items-center gap-2 text-surface-medium hover:text-foreground transition-colors text-sm"
                >
                  <Mail size={18} />
                  <span>haniffaiq95@gmail.com</span>
                </a>
                <a 
                  href="tel:087881012700"
                  className="flex items-center gap-2 text-surface-medium hover:text-foreground transition-colors text-sm"
                >
                  <Phone size={18} />
                  <span>087881012700</span>
                </a>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Button 
                  onClick={() => scrollToSection('contact')}
                  size="lg"
                  className="shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-105"
                >
                  Get In Touch
                </Button>
                <div className="flex items-center gap-3">
                  <a 
                    href="https://www.linkedin.com/in/haniffaiq13/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border border-border hover:bg-secondary hover:scale-110 transition-all duration-300"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="https://github.com/haniffaiq"
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