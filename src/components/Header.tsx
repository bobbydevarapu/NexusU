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
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-primary/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2 animate-fade-in">
              <div className="p-2 bg-primary rounded-lg shadow-soft">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-bold text-foreground">NexusU</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-foreground hover:text-primary transition-all duration-300 font-medium relative hover:shadow-lg hover:shadow-primary/20 px-3 py-2 rounded-lg hover:bg-white/10"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-primary transition-all duration-300 font-medium relative hover:shadow-lg hover:shadow-primary/20 px-3 py-2 rounded-lg hover:bg-white/10"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-primary transition-all duration-300 font-medium relative hover:shadow-lg hover:shadow-primary/20 px-3 py-2 rounded-lg hover:bg-white/10"
              >
                Contact
              </button>
              <Button
                onClick={() => setIsPortalOpen(true)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg shadow-soft hover:shadow-hover transition-all duration-300"
              >
                Sign In
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
            <nav className="md:hidden mt-4 pb-4 animate-fade-in">
              <div className="flex flex-col space-y-4 items-end">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-foreground hover:text-primary transition-all duration-300 font-medium text-right px-4 py-2 rounded-lg hover:bg-white/10 hover:shadow-lg hover:shadow-primary/20 hover:scale-105"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-foreground hover:text-primary transition-all duration-300 font-medium text-right px-4 py-2 rounded-lg hover:bg-white/10 hover:shadow-lg hover:shadow-primary/20 hover:scale-105"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-foreground hover:text-primary transition-all duration-300 font-medium text-right px-4 py-2 rounded-lg hover:bg-white/10 hover:shadow-lg hover:shadow-primary/20 hover:scale-105"
                >
                  Contact
                </button>
                <Button
                  onClick={() => setIsPortalOpen(true)}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg shadow-soft hover:shadow-hover transition-all duration-300 w-fit hover:scale-105 hover:shadow-xl hover:shadow-primary/30"
                >
                  Sign In
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