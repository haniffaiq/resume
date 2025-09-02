import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false); // otomatis tutup menu setelah klik
  };

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/logo.svg"
              alt="Hanif Faiq Logo"
              className="h-10 w-10"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-surface-medium transition-colors"
            >
              About Me
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-foreground hover:text-surface-medium transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-foreground hover:text-surface-medium transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-foreground hover:text-surface-medium transition-colors"
            >
              Projects
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="default"
              className="ml-4"
            >
              Contact Me
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-4 bg-background border border-border rounded-lg p-4">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary"
            >
              About Me
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-foreground hover:text-primary"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-foreground hover:text-primary"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-foreground hover:text-primary"
            >
              Projects
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="default"
              className="w-full"
            >
              Contact Me
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
