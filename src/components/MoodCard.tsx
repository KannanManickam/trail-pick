
import { LucideIcon } from "lucide-react";

interface MoodCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function MoodCard({ icon: Icon, title, description }: MoodCardProps) {
  return (
    <div className="mood-card cursor-pointer">
      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
