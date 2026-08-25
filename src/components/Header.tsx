import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/profile";
import { prefersReducedMotion } from "@/lib/utils";
import { testimonials } from "@/data/testimonials";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // The testimonials section only renders once there are real recommendations,
  // so its nav entry has to disappear with it or the link scrolls nowhere.
  const navItems = profile.navItems.filter(
    (item) => item.sectionId !== "testimonials" || testimonials.length > 0
  );

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth" });
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/logo.svg"
              alt={profile.logoAlt}
              width={40}
              height={40}
              className="h-10 w-10"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.sectionId}
                onClick={() => scrollToSection(item.sectionId)}
                className="text-foreground hover:text-surface-medium transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("contact")}
              variant="default"
              className="ml-4"
            >
              Contact Me
            </Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {mobileOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-4 bg-background border border-border rounded-lg p-4">
            {navItems.map((item) => (
              <button
                key={item.sectionId}
                onClick={() => scrollToSection(item.sectionId)}
                className="text-foreground hover:text-primary"
              >
                {item.label}
              </button>
            ))}
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
