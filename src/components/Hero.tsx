import { useState, useEffect } from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WatchDemoModal } from "./WatchDemoModal";

export const Hero = () => {
  const [isWatchDemoOpen, setIsWatchDemoOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const bubbles = Array.from({ length: 40 }, (_, i) => {
    const size = Math.random() * 12 + 2; // Random size between 2-14px
    const opacity = Math.random() * 0.6 + 0.1; // Random opacity between 0.1-0.7
    const floatDelay = Math.random() * 10;
    const pulseDelay = Math.random() * 5;
    const rotateSpeed = Math.random() * 20 + 10;
    const driftX = Math.random() * 200 - 100;
    const driftY = Math.random() * 200 - 100;
    
    return (
      <div
        key={i}
        className="absolute rounded-full"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          background: `
            radial-gradient(circle at 30% 30%, 
              hsl(var(--primary) / ${opacity * 1.2}), 
              hsl(var(--primary) / ${opacity * 0.6}) 40%,
              hsl(var(--primary) / ${opacity * 0.2}) 70%,
              transparent 100%
            )
          `,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${floatDelay}s`,
          transform: `
            translate(
              ${mousePosition.x * 0.0003 + driftX * 0.01}px, 
              ${mousePosition.y * 0.0003 + driftY * 0.01}px
            ) 
            scale(${1 + Math.sin(Date.now() * 0.0005 + i) * 0.15}) 
            rotate(${Date.now() * 0.0001 * rotateSpeed + i * 10}deg)
          `,
          transition: "all 3.5s cubic-bezier(0.23, 1, 0.32, 1)",
          boxShadow: `
            0 0 ${size * 4}px hsl(var(--primary) / ${opacity * 0.4}),
            0 0 ${size * 8}px hsl(var(--primary) / ${opacity * 0.2}),
            inset 0 0 ${size * 2}px hsl(var(--primary) / ${opacity * 0.3}),
            0 ${size}px ${size * 3}px hsl(var(--primary) / ${opacity * 0.1})
          `,
          filter: `
            blur(${Math.random() * 0.8}px) 
            brightness(${1 + Math.sin(Date.now() * 0.001 + i) * 0.3})
            saturate(1.2)
          `,
          animation: `
            bubble ${12 + Math.random() * 8}s ease-in-out infinite alternate,
            pulse ${3 + pulseDelay}s ease-in-out infinite alternate,
            float ${15 + Math.random() * 10}s linear infinite
          `,
          backdropFilter: "blur(1px)",
          border: `1px solid hsl(var(--primary) / ${opacity * 0.3})`,
        }}
      />
    );
  });

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-primary overflow-hidden">
        {/* Animated bubbles */}
        <div className="absolute inset-0 pointer-events-none">
          {bubbles}
        </div>

        <div className="container mx-auto px-4 py-20 text-center relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-float">
              Innovation Discover
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Transform college management with seamless connectivity, unified student data, 
              and efficient placement solutions for students, teams, and administrators.
            </p>
            
            <Button
              onClick={() => setIsWatchDemoOpen(true)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl text-lg shadow-hover hover:shadow-soft transition-all duration-300 group"
            >
              <Play className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      <WatchDemoModal isOpen={isWatchDemoOpen} onClose={() => setIsWatchDemoOpen(false)} />
    </>
  );
};