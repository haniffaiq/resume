// import { Button } from "@/components/ui/button";

// const Header = () => {
//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     element?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
//       <div className="container mx-auto px-6 py-4">
//         <nav className="flex items-center justify-between">
//           <div className="text-xl font-bold">Hanif Faiq</div>
//           <div className="hidden md:flex items-center space-x-8">
//             <button 
//               onClick={() => scrollToSection('about')}
//               className="text-foreground hover:text-surface-medium transition-colors"
//             >
//               About Me
//             </button>
//             <button 
//               onClick={() => scrollToSection('skills')}
//               className="text-foreground hover:text-surface-medium transition-colors"
//             >
//               Skills
//             </button>
//             <button 
//               onClick={() => scrollToSection('experience')}
//               className="text-foreground hover:text-surface-medium transition-colors"
//             >
//               Experience
//             </button>
//             <button 
//               onClick={() => scrollToSection('projects')}
//               className="text-foreground hover:text-surface-medium transition-colors"
//             >
//               Projects
//             </button>
//             <Button 
//               onClick={() => scrollToSection('contact')}
//               variant="default"
//               className="ml-4"
//             >
//               Contact Me
//             </Button>
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;


import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
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
              className="h-10 w-10" // atur ukuran sesuai kebutuhan
            />
          </div>

          {/* Navigation */}
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
        </nav>
      </div>
    </header>
  );
};

export default Header;
