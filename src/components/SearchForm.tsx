
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

export default function SearchForm() {
  const [location, setLocation] = useState("");
  const [driveTime, setDriveTime] = useState("2hr");
  const [days, setDays] = useState("3");
  const [guests, setGuests] = useState("2");
  const [travelType, setTravelType] = useState("any");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const { toast } = useToast();
  const navigate = useNavigate();

  const tags = ['Nature', 'Adventure', 'Relaxation', 'Beach', 'Mountains', 'Culture'];

  const handleTagToggle = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    
    toast({
      title: "Search initiated",
      description: `Finding destinations ${location ? `near ${location}` : ""} within ${driveTime} drive time for ${guests} guests for ${days} days.`,
    });
    
    // Navigate to search results with search parameters
    navigate('/search-results', {
      state: {
        location,
        driveTime,
        days,
        guests,
        travelType,
        tags: selectedTags
      }
    });
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg border animate-fade-in">
      <h2 className="text-2xl font-bold text-center mb-6">
        Find a Travel Spot & Stay
      </h2>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="location" className="block text-sm font-medium mb-1">
            Start Location
          </label>
          <Input 
            id="location" 
            placeholder="Enter your location" 
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label htmlFor="drive-time" className="block text-sm font-medium mb-1">
              Drive Time
            </label>
            <Select value={driveTime} onValueChange={setDriveTime}>
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1hr">1 hr</SelectItem>
                <SelectItem value="2hr">2 hr</SelectItem>
                <SelectItem value="3hr">3 hr</SelectItem>
                <SelectItem value="4hr">4 hr</SelectItem>
                <SelectItem value="5hr+">5 hr+</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label htmlFor="days" className="block text-sm font-medium mb-1">
              Days
            </label>
            <Input 
              id="days" 
              type="number" 
              value={days}
              onChange={(e) => setDays(e.target.value)}
              min="1" 
            />
          </div>
          
          <div>
            <label htmlFor="guests" className="block text-sm font-medium mb-1">
              Guests
            </label>
            <Select value={guests} onValueChange={setGuests}>
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
                <SelectItem value="5+">5+</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div>
          <label htmlFor="travel-type" className="block text-sm font-medium mb-1">
            Travel Type
          </label>
          <Select value={travelType} onValueChange={setTravelType}>
            <SelectTrigger>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any</SelectItem>
              <SelectItem value="relax">Relaxation</SelectItem>
              <SelectItem value="adventure">Adventure</SelectItem>
              <SelectItem value="romantic">Romantic</SelectItem>
              <SelectItem value="family">Family</SelectItem>
              <SelectItem value="solo">Solo</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">
            Climate
          </label>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <div 
                key={tag}
                className={`rounded-full px-3 py-1 text-sm cursor-pointer transition-colors ${
                  selectedTags.includes(tag) 
                    ? "bg-trailpick-blue text-white" 
                    : "bg-muted hover:bg-muted/80"
                }`}
                onClick={() => handleTagToggle(tag)}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
        
        <Button type="submit" className="w-full bg-trailpick-blue hover:bg-trailpick-blue/90">
          <Search className="mr-2 h-4 w-4" />
          Search
        </Button>
      </div>
    </form>
  );
}
