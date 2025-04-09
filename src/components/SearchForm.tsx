
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

export default function SearchForm() {
  return (
    <div className="w-full max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg border animate-fade-in">
      <h2 className="text-2xl font-bold text-center mb-6">
        Find a Travel Spot & Stay
      </h2>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="location" className="block text-sm font-medium mb-1">
            Start Location
          </label>
          <Input id="location" placeholder="Enter your location" />
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label htmlFor="drive-time" className="block text-sm font-medium mb-1">
              Drive Time
            </label>
            <Select defaultValue="2hr">
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
            <Input id="days" type="number" defaultValue="3" min="1" />
          </div>
          
          <div>
            <label htmlFor="guests" className="block text-sm font-medium mb-1">
              Guests
            </label>
            <Select defaultValue="2">
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
          <Select defaultValue="any">
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
            {['Nature', 'Adventure', 'Relaxation', 'Beach', 'Mountains', 'Culture'].map((tag) => (
              <div 
                key={tag}
                className="rounded-full px-3 py-1 text-sm bg-muted hover:bg-muted/80 cursor-pointer"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
        
        <Button className="w-full bg-trailpick-blue hover:bg-trailpick-blue/90">
          <Search className="mr-2 h-4 w-4" />
          Search
        </Button>
      </div>
    </div>
  );
}
