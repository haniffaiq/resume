import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface-dark text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">{profile.name}</h3>
            <p className="text-gray-300">{profile.tagline}</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={profile.contact.email.href}
              aria-label={`Email ${profile.name}`}
              className="p-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
            >
              <Mail size={20} />
            </a>
            <a
              href={profile.socials.linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={profile.socials.linkedin.label}
              className="p-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={profile.socials.github.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={profile.socials.github.label}
              className="p-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
            >
              <Github size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {year} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
