import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeatureCards } from "@/components/FeatureCards";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

const Index = () => {
  useEffect(() => {
    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = "smooth";
    
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-primary">
      <Header />
      <main>
        <Hero />
        <FeatureCards />
        <About />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
