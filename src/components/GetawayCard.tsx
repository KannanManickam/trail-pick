
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

interface GetawayCardProps {
  title: string;
  description: string;
  imageUrl: string;
  location: string;
}

export default function GetawayCard({ title, description, imageUrl, location }: GetawayCardProps) {
  return (
    <Card className="travel-card overflow-hidden h-full">
      <div className="relative h-48 w-full overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <div className="flex items-center text-muted-foreground text-sm mb-2">
          <MapPin className="h-3.5 w-3.5 mr-1" />
          <span>{location}</span>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
      </CardContent>
    </Card>
  );
}
