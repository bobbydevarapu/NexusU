import { Github, Instagram, Linkedin } from "lucide-react";

export const About = () => {
  const developers = [
    {
      name: "Shaym",
      role: "Full Stack Developer",
      image: "/images/Shaym.jpg",
      linkedin: "https://linkedin.com/in/alexjohnson",
      github: "https://github.com/alexjohnson",
      instagram: "https://instagram.com/alexjohnson",
    },
    {
      name: "Mohith",
      role: "Backend Developer",
      image: "/images/Mohith.jpg", // Corrected to match the actual image file
      linkedin: "https://linkedin.com/in/sarahchen",
      github: "https://github.com/sarahchen",
      instagram: "https://instagram.com/sarahchen",
    },
    {
      name: "Bobby",
      role: "Backend Developer",
      image: "/images/Bobby.jpg", // Corrected to match the actual image file
      linkedin: "https://linkedin.com/in/davidrodriguez",
      github: "https://github.com/davidrodriguez",
      instagram: "https://instagram.com/davidrodriguez",
    },
    {
      name: "Santhosh",
      role: "Full Stack Developer",
      image: "/images/Santhosh.jpg",
      linkedin: "https://linkedin.com/in/emilyzhang",
      github: "https://github.com/emilyzhang",
      instagram: "https://instagram.com/emilyzhang",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-primary overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Meet Our Developers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            The talented team behind NexusU, dedicated to revolutionizing college management
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-infinite-scroll touch-pan-x" style={{ willChange: "transform" }}>
            {[...developers, ...developers].map((developer, index) => (
              <div
                key={`${developer.name}-${index}`}
                className="flex-shrink-0 w-80 mx-4"
              >
                <div className="bg-gradient-card rounded-2xl p-8 shadow-soft hover:shadow-primary/30 transition-all duration-300 group border border-border">
                  <div className="text-center">
                    <div className="relative mx-auto mb-6">
                      <img
                        src={developer.image}
                        alt={developer.name}
                        className="w-24 h-24 rounded-full mx-auto object-cover shadow-soft group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "/dist/images/placeholder.svg";
                        }}
                      />
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {developer.name}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6">
                      {developer.role}
                    </p>
                    
                    <div className="flex justify-center space-x-4">
                      <a
                        href={developer.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors group/icon"
                      >
                        <Linkedin className="w-5 h-5 text-primary group-hover/icon:scale-110 transition-transform" />
                      </a>
                      <a
                        href={developer.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-foreground/10 rounded-lg hover:bg-foreground/20 transition-colors group/icon"
                      >
                        <Github className="w-5 h-5 text-foreground group-hover/icon:scale-110 transition-transform" />
                      </a>
                      <a
                        href={developer.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg hover:from-purple-500/20 hover:to-pink-500/20 transition-colors group/icon"
                      >
                        <Instagram className="w-5 h-5 text-purple-600 group-hover/icon:scale-110 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};