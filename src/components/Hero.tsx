import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import heroImage from "@/assets/hero-illustration.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-subtle">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Hello I'm <span className="text-primary">Hanif Faiq</span>.
              </h1>
              <h2 className="text-2xl lg:text-3xl text-surface-medium font-medium">
                Backend <span className="text-foreground">Developer</span>
              </h2>
              <p className="text-lg text-surface-medium leading-relaxed max-w-lg">
                Experienced and versatile IT professional with a background in frontend, backend, and data engineering. 
                Based in Jakarta, Indonesia.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="mailto:haniffaiq95@gmail.com"
                className="flex items-center gap-2 text-surface-medium hover:text-foreground transition-colors"
              >
                <Mail size={20} />
                <span>haniffaiq95@gmail.com</span>
              </a>
              <a 
                href="tel:087881012700"
                className="flex items-center gap-2 text-surface-medium hover:text-foreground transition-colors"
              >
                <Phone size={20} />
                <span>087881012700</span>
              </a>
            </div>

            <div className="flex items-center gap-4">
              <Button 
                onClick={() => scrollToSection('contact')}
                size="lg"
                className="shadow-medium"
              >
                Get In Touch
              </Button>
              <div className="flex items-center gap-3">
                <a 
                  href="https://www.linkedin.com/in/haniffaiq13/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border hover:bg-secondary transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://github.com/haniffaiq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border hover:bg-secondary transition-colors"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Hanif Faiq - Backend Developer"
                className="w-full max-w-md h-auto rounded-2xl shadow-strong"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;