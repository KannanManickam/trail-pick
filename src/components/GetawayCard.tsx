
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Heart } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface GetawayCardProps {
  title: string;
  description: string;
  imageUrl: string;
  location: string;
}

export default function GetawayCard({ title, description, imageUrl, location }: GetawayCardProps) {
  const [favorite, setFavorite] = useState(false);
  const { toast } = useToast();

  const handleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorite(!favorite);
    toast({
      title: favorite ? "Removed from favorites" : "Added to favorites",
      description: `${title} has been ${favorite ? "removed from" : "added to"} your favorites.`,
    });
  };

  const handleCardClick = () => {
    toast({
      title: "Destination selected",
      description: `You selected ${title}. Full details would open here.`,
    });
  };

  return (
    <Card className="travel-card overflow-hidden h-full cursor-pointer" onClick={handleCardClick}>
      <div className="relative h-48 w-full overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <button 
          className={`absolute top-2 right-2 p-2 rounded-full ${favorite ? 'bg-primary text-white' : 'bg-white/80'}`}
          onClick={handleFavorite}
        >
          <Heart className={`h-4 w-4 ${favorite ? 'fill-white' : ''}`} />
        </button>
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
