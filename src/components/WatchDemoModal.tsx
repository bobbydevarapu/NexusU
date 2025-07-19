import { X } from "lucide-react";

interface WatchDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WatchDemoModal = ({ isOpen, onClose }: WatchDemoModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl mx-4 bg-gradient-card rounded-2xl shadow-hover border border-border p-6 animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-background/80 text-foreground hover:bg-background rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="aspect-video bg-black rounded-xl overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="NexusU Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
        
        <div className="mt-4 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-2">NexusU Platform Demo</h3>
          <p className="text-muted-foreground">
            Discover how NexusU transforms college management with innovative solutions
          </p>
        </div>
      </div>
    </div>
  );
};