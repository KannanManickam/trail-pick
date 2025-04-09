
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Calendar, Users, MapPin } from "lucide-react";
import { useState } from "react";

interface TripCardProps {
  title: string;
  details: string;
  date?: string;
  location?: string;
  participants?: number;
}

export default function TripCard({ 
  title, 
  details, 
  date = "May 15-20, 2024", 
  location = "Coastal Paradise",
  participants = 4
}: TripCardProps) {
  const [votes, setVotes] = useState(0);

  const handleVote = (e: React.MouseEvent) => {
    e.stopPropagation();
    setVotes(prev => prev + 1);
  };

  return (
    <Card className="travel-card hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground mb-2">{details}</p>
            <div className="flex flex-col gap-1 mt-3">
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-3.5 w-3.5 mr-2" />
                <span>{date}</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 mr-2" />
                <span>{location}</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Users className="h-3.5 w-3.5 mr-2" />
                <span>{participants} participants</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="rounded-full"
              onClick={handleVote}
            >
              Vote ({votes})
            </Button>
            <Button variant="ghost" size="icon">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
