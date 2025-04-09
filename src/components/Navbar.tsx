
import { Compass, Globe, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleDestinationsClick = () => {
    navigate('/search-results', {
      state: { travelType: "any" }
    });
    toast({
      title: "Destinations",
      description: "Exploring all available destinations",
    });
  };

  const handleTripPlannerClick = () => {
    toast({
      title: "Trip Planner",
      description: "Trip planner functionality coming soon!",
    });
  };

  const handleTravelJournalClick = () => {
    toast({
      title: "Travel Journal",
      description: "Travel journal functionality coming soon!",
    });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link className="flex items-center" to="/">
            <span className="text-2xl font-bold bg-gradient-to-r from-trailpick-blue to-trailpick-green bg-clip-text text-transparent">
              TrailPick
            </span>
            <span className="ml-2 text-lg text-muted-foreground">🧭</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={handleDestinationsClick}
              className="text-sm font-medium transition-colors hover:text-primary flex items-center"
            >
              <Compass className="mr-1 h-4 w-4" />
              Destinations
            </button>
            <button
              onClick={handleTripPlannerClick}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Trip Planner
            </button>
            <button
              onClick={handleTravelJournalClick}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Travel Journal
            </button>
          </nav>
          <Button variant="outline" size="sm" className="hidden md:flex">
            <Globe className="mr-2 h-4 w-4" />
            English
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden"
                aria-label="Menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                <SheetClose asChild>
                  <button
                    onClick={handleDestinationsClick}
                    className="text-base font-medium transition-colors hover:text-primary flex items-center"
                  >
                    <Compass className="mr-2 h-4 w-4" />
                    Destinations
                  </button>
                </SheetClose>
                <SheetClose asChild>
                  <button
                    onClick={handleTripPlannerClick}
                    className="text-base font-medium transition-colors hover:text-primary"
                  >
                    Trip Planner
                  </button>
                </SheetClose>
                <SheetClose asChild>
                  <button
                    onClick={handleTravelJournalClick}
                    className="text-base font-medium transition-colors hover:text-primary"
                  >
                    Travel Journal
                  </button>
                </SheetClose>
                <div className="flex flex-col gap-2 mt-4">
                  <Button variant="outline" className="w-full justify-start">
                    <Globe className="mr-2 h-4 w-4" />
                    English
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
