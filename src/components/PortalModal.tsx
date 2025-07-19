import { useState } from "react";
import { X, Shield, User, Users, UserCheck, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

interface PortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PortalModal = ({ isOpen, onClose }: PortalModalProps) => {
  const [selectedPortal, setSelectedPortal] = useState<string | null>(null);
  const [selectedTeacherPortal, setSelectedTeacherPortal] = useState<string | null>(null);
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  if (!isOpen) return null;

  const handlePortalSelect = (portal: string) => {
    if (portal === "teacher") {
      setSelectedPortal(portal);
      setSelectedTeacherPortal(null);
    } else {
      setSelectedPortal(portal);
    }
  };

  const handleTeacherPortalSelect = (teacherPortal: string) => {
    setSelectedTeacherPortal(teacherPortal);
  };

  const handleLogin = () => {
    if (!credentials.email || !credentials.password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Demo credentials validation
    const demoCredentials = {
      admin: { email: "admin@nexusu.com", password: "admin123" },
      student: { email: "student@nexusu.com", password: "student123" },
      proctor: { email: "proctor@nexusu.com", password: "proctor123" },
      placement: { email: "placement@nexusu.com", password: "placement123" },
    };

    const currentPortal = selectedTeacherPortal || selectedPortal;
    const validCreds = demoCredentials[currentPortal as keyof typeof demoCredentials];

    if (validCreds && credentials.email === validCreds.email && credentials.password === validCreds.password) {
      toast({
        title: "Login Successful",
        description: `Welcome to ${currentPortal} dashboard!`,
      });
      onClose();
      setSelectedPortal(null);
      setSelectedTeacherPortal(null);
      setCredentials({ email: "", password: "" });
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid credentials. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleBack = () => {
    if (selectedTeacherPortal) {
      setSelectedTeacherPortal(null);
    } else if (selectedPortal) {
      setSelectedPortal(null);
    }
    setCredentials({ email: "", password: "" });
  };

  const renderPortalSelection = () => (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">Choose Portal</h2>
        <p className="text-muted-foreground">Select your portal to continue</p>
      </div>

      <div className="space-y-3">
        <button
          onClick={() => handlePortalSelect("admin")}
          className="w-full p-4 bg-gradient-card rounded-xl border border-border hover:shadow-hover transition-all duration-300 group"
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-admin/10 rounded-lg">
              <Shield className="w-6 h-6 text-admin" />
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-foreground group-hover:text-admin transition-colors">
                Admin Portal
              </h3>
              <p className="text-sm text-muted-foreground">System administration and management</p>
            </div>
          </div>
        </button>

        <button
          onClick={() => handlePortalSelect("student")}
          className="w-full p-4 bg-gradient-card rounded-xl border border-border hover:shadow-hover transition-all duration-300 group"
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-student/10 rounded-lg">
              <User className="w-6 h-6 text-student" />
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-foreground group-hover:text-student transition-colors">
                Student Portal
              </h3>
              <p className="text-sm text-muted-foreground">Take tests and view progress</p>
            </div>
          </div>
        </button>

        <button
          onClick={() => handlePortalSelect("teacher")}
          className="w-full p-4 bg-gradient-card rounded-xl border border-border hover:shadow-hover transition-all duration-300 group"
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-teacher/10 rounded-lg">
              <Users className="w-6 h-6 text-teacher" />
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-foreground group-hover:text-teacher transition-colors">
                Teacher Portal
              </h3>
              <p className="text-sm text-muted-foreground">Create tests and manage students</p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );

  const renderTeacherPortalSelection = () => (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">Teacher Portal</h2>
        <p className="text-muted-foreground">Select your role to continue</p>
      </div>

      <div className="space-y-3">
        <button
          onClick={() => handleTeacherPortalSelect("proctor")}
          className="w-full p-4 bg-gradient-card rounded-xl border border-border hover:shadow-hover transition-all duration-300 group"
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-teacher/10 rounded-lg">
              <UserCheck className="w-6 h-6 text-teacher" />
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-foreground group-hover:text-teacher transition-colors">
                Proctor
              </h3>
              <p className="text-sm text-muted-foreground">Monitor and manage examinations</p>
            </div>
          </div>
        </button>

        <button
          onClick={() => handleTeacherPortalSelect("placement")}
          className="w-full p-4 bg-gradient-card rounded-xl border border-border hover:shadow-hover transition-all duration-300 group"
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-teacher/10 rounded-lg">
              <Briefcase className="w-6 h-6 text-teacher" />
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-foreground group-hover:text-teacher transition-colors">
                Placement Coordinator
              </h3>
              <p className="text-sm text-muted-foreground">Manage placement activities</p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );

  const renderLoginForm = () => {
    const portalName = selectedTeacherPortal 
      ? selectedTeacherPortal.charAt(0).toUpperCase() + selectedTeacherPortal.slice(1)
      : selectedPortal?.charAt(0).toUpperCase() + selectedPortal?.slice(1);
    
    const demoCredentials = {
      admin: { email: "admin@nexusu.com", password: "admin123" },
      student: { email: "student@nexusu.com", password: "student123" },
      proctor: { email: "proctor@nexusu.com", password: "proctor123" },
      placement: { email: "placement@nexusu.com", password: "placement123" },
    };

    const currentPortal = selectedTeacherPortal || selectedPortal;
    const demoCreds = demoCredentials[currentPortal as keyof typeof demoCredentials];

    return (
      <div className="space-y-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-2">{portalName} Portal</h2>
          <p className="text-muted-foreground">Enter your credentials to continue</p>
        </div>

        <div className="space-y-4">
          <div>
            <Label htmlFor="email" className="text-foreground">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={credentials.email}
              onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="password" className="text-foreground">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              className="mt-1"
            />
          </div>

          <Button
            onClick={handleLogin}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-lg shadow-soft hover:shadow-hover transition-all duration-300"
          >
            Sign In
          </Button>

          {demoCreds && (
            <div className="mt-4 p-3 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground text-center">Demo credentials:</p>
              <p className="text-sm text-foreground text-center">Email: {demoCreds.email}</p>
              <p className="text-sm text-foreground text-center">Password: {demoCreds.password}</p>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-md mx-4 bg-gradient-card rounded-2xl shadow-hover border border-border p-6 animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {(selectedPortal || selectedTeacherPortal) && (
          <button
            onClick={handleBack}
            className="absolute top-4 left-4 p-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            ←
          </button>
        )}

        {!selectedPortal ? (
          renderPortalSelection()
        ) : selectedPortal === "teacher" && !selectedTeacherPortal ? (
          renderTeacherPortalSelection()
        ) : (
          renderLoginForm()
        )}
      </div>
    </div>
  );
};