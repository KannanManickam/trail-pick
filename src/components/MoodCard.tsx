
import { LucideIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface MoodCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function MoodCard({ icon: Icon, title, description }: MoodCardProps) {
  const { toast } = useToast();
  
  const handleMoodSelection = () => {
    toast({
      title: "Mood selected",
      description: `You selected: ${title}`,
    });
  };
  
  return (
    <div 
      className="mood-card cursor-pointer bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow"
      onClick={handleMoodSelection}
    >
      <div className="flex gap-4 items-start">
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
}
