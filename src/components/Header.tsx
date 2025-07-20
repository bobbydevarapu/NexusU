import { useState } from "react";
import { GraduationCap, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PortalModal } from "./PortalModal";

export const Header = () => {
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (elementId: string) => {
    if (elementId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-primary/80 backdrop-blur-lg border-b border-border/50 transition-all duration-300">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2 animate-fade-in">
              <div className="p-2 bg-primary rounded-full shadow-lg hover:shadow-primary/30 transition-shadow duration-300">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-bold text-foreground">NexusU</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {["home", "about", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="relative text-foreground font-medium px-4 py-2 rounded-full overflow-hidden group"
                >
                  <span className="relative z-10 group-hover:text-primary transition-colors duration-300">
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-0 group-hover:scale-100 rounded-full origin-center"></span>
                </button>
              ))}
              <Button
                onClick={() => setIsPortalOpen(true)}
                className="relative bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-full shadow-lg hover:shadow-primary/30 transition-all duration-300 overflow-hidden group"
              >
                <span className="relative z-10">Sign In</span>
                <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-0 group-hover:scale-100 rounded-full origin-center"></span>
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 animate-slide-in-down">
              <div className="flex flex-col space-y-4 items-end">
                {["home", "about", "contact"].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="relative text-foreground font-medium px-4 py-2 rounded-full text-right overflow-hidden group"
                  >
                    <span className="relative z-10 group-hover:text-primary transition-colors duration-300">
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-0 group-hover:scale-100 rounded-full origin-center"></span>
                  </button>
                ))}
                <Button
                  onClick={() => setIsPortalOpen(true)}
                  className="relative bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-full shadow-lg hover:shadow-primary/30 transition-all duration-300 w-fit overflow-hidden group"
                >
                  <span className="relative z-10">Sign In</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-0 group-hover:scale-100 rounded-full origin-center"></span>
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>

      <PortalModal isOpen={isPortalOpen} onClose={() => setIsPortalOpen(false)} />
    </>
  );
};