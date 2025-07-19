import { Users, Database, Briefcase } from "lucide-react";

export const FeatureCards = () => {
  const features = [
    {
      icon: Users,
      title: "Student Connectivity",
      description: "Seamless integration of student profiles, enabling easy access to personal data, academic records, and placement readiness. Connect with peers and mentors effortlessly.",
      color: "student"
    },
    {
      icon: Briefcase,
      title: "Placement Hub",
      description: "Centralized platform for placement teams to view comprehensive student details, streamline recruitment, and manage job offers efficiently without manual requests.",
      color: "teacher"
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Secure and automated collection of student information upon login, providing real-time analytics and insights for effective college management and decision-making.",
      color: "admin"
    }
  ];

  return (
    <section className="py-20 bg-gradient-primary relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`bg-gradient-card rounded-2xl p-8 shadow-soft hover:shadow-hover transition-all duration-300 group animate-fade-in border border-border`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`inline-flex p-4 rounded-xl mb-6 bg-${feature.color}/10`}>
                <feature.icon className={`w-8 h-8 text-${feature.color}`} />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};