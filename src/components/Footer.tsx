import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-surface-dark text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Hanif Faiq</h3>
            <p className="text-gray-300">Backend Developer & DevOps Engineer</p>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="mailto:haniffaiq95@gmail.com"
              className="p-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/haniffaiq13/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com/haniffaiq"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Hanif Faiq. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;