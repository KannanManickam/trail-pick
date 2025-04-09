
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GetawayCard from "@/components/GetawayCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Filter, SlidersHorizontal } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useLocation, useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

interface SearchParams {
  location?: string;
  driveTime?: string;
  days?: string;
  guests?: string;
  travelType?: string;
  tags?: string[];
}

interface Getaway {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  location: string;
  driveTime: string;
  tags: string[];
  rating: number;
  pricePerNight: number;
  travelType: string;
}

// Dummy data for Indian destinations
const allGetaways: Getaway[] = [
  {
    id: 1,
    title: "Serene Himalayan Hideaway",
    description: "A peaceful mountain retreat with stunning views of the snow-capped Himalayas, perfect for nature lovers and spiritual seekers.",
    imageUrl: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    location: "Rishikesh, Uttarakhand",
    driveTime: "5hr+",
    tags: ["Nature", "Mountains", "Spiritual", "Relaxation"],
    rating: 4.8,
    pricePerNight: 4500,
    travelType: "relax"
  },
  {
    id: 2,
    title: "Goan Beach Villa",
    description: "Beachfront luxury villa with private access to the pristine shores of Goa, featuring a pool and stunning sunset views.",
    imageUrl: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    location: "Vagator, Goa",
    driveTime: "1hr",
    tags: ["Beach", "Relaxation", "Adventure", "Nightlife"],
    rating: 4.7,
    pricePerNight: 7500,
    travelType: "relax"
  },
  {
    id: 3,
    title: "Kerala Backwater Houseboat",
    description: "Traditional Kerala houseboat experience through the serene backwaters, with local cuisine and cultural immersion.",
    imageUrl: "https://images.unsplash.com/photo-1590050752117-42bb3af0f712?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    location: "Alleppey, Kerala",
    driveTime: "3hr",
    tags: ["Culture", "Nature", "Relaxation", "Water"],
    rating: 4.9,
    pricePerNight: 6000,
    travelType: "relax"
  },
  {
    id: 4,
    title: "Royal Rajasthan Palace Stay",
    description: "Experience royal living in a heritage palace turned luxury hotel, with desert safaris and cultural performances.",
    imageUrl: "https://images.unsplash.com/photo-1600673645627-a5bacd3557c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    location: "Udaipur, Rajasthan",
    driveTime: "4hr",
    tags: ["Culture", "Luxury", "History", "Desert"],
    rating: 4.6,
    pricePerNight: 9000,
    travelType: "romantic"
  },
  {
    id: 5,
    title: "Coorg Coffee Estate Retreat",
    description: "Nestled among coffee plantations, this estate stay offers misty mountain views, nature walks, and freshly brewed coffee.",
    imageUrl: "https://images.unsplash.com/photo-1542401886-65d6c61db217?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    location: "Madikeri, Karnataka",
    driveTime: "2hr",
    tags: ["Nature", "Coffee", "Relaxation", "Mountains"],
    rating: 4.5,
    pricePerNight: 5500,
    travelType: "relax"
  },
  {
    id: 6,
    title: "Andaman Island Resort",
    description: "Secluded beach resort with crystal clear waters, coral reefs for snorkeling, and pristine white sand beaches.",
    imageUrl: "https://images.unsplash.com/photo-1540202404-a2f29016b523?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    location: "Havelock Island, Andamans",
    driveTime: "5hr+",
    tags: ["Beach", "Adventure", "Water", "Island"],
    rating: 4.9,
    pricePerNight: 12000,
    travelType: "adventure"
  },
  {
    id: 7,
    title: "Darjeeling Tea Estate",
    description: "Colonial-style bungalow on a working tea estate with panoramic views of the Kanchenjunga mountain range.",
    imageUrl: "https://images.unsplash.com/photo-1544233726-9f1d0a5f2ff4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    location: "Darjeeling, West Bengal",
    driveTime: "4hr",
    tags: ["Mountains", "Tea", "Culture", "Nature"],
    rating: 4.7,
    pricePerNight: 6500,
    travelType: "relax"
  },
  {
    id: 8,
    title: "Rann of Kutch Desert Camp",
    description: "Luxury desert camping experience in the White Rann with cultural performances and stargazing opportunities.",
    imageUrl: "https://images.unsplash.com/photo-1595815771614-ade501d22bf4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    location: "Kutch, Gujarat",
    driveTime: "5hr+",
    tags: ["Desert", "Culture", "Adventure", "Luxury"],
    rating: 4.6,
    pricePerNight: 8000,
    travelType: "adventure"
  },
  {
    id: 9,
    title: "Valley of Flowers Trek Base",
    description: "Comfortable base camp for trekking expeditions to the UNESCO World Heritage Valley of Flowers National Park.",
    imageUrl: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    location: "Joshimath, Uttarakhand",
    driveTime: "5hr+",
    tags: ["Mountains", "Adventure", "Trekking", "Nature"],
    rating: 4.4,
    pricePerNight: 3500,
    travelType: "adventure"
  },
  {
    id: 10,
    title: "Hampi Heritage Stay",
    description: "Boutique guesthouse amidst the ancient ruins of Hampi, perfect for history enthusiasts and photographers.",
    imageUrl: "https://images.unsplash.com/photo-1590136008324-dba26bf45da5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    location: "Hampi, Karnataka",
    driveTime: "3hr",
    tags: ["History", "Culture", "Ruins", "Photography"],
    rating: 4.3,
    pricePerNight: 4000,
    travelType: "family"
  },
  {
    id: 11,
    title: "Sundarbans Mangrove Lodge",
    description: "Eco-friendly lodge at the edge of the Sundarbans Tiger Reserve, with boat safaris to spot Royal Bengal Tigers.",
    imageUrl: "https://images.unsplash.com/photo-1535535113041-55c0c5712424?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    location: "Sundarbans, West Bengal",
    driveTime: "4hr",
    tags: ["Wildlife", "Nature", "Adventure", "Water"],
    rating: 4.5,
    pricePerNight: 5500,
    travelType: "adventure"
  },
  {
    id: 12,
    title: "Ladakh Mountain Homestay",
    description: "Authentic homestay experience with a local Ladakhi family, offering stunning mountain views and cultural immersion.",
    imageUrl: "https://images.unsplash.com/photo-1624009599534-0e7c396d8af4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    location: "Leh, Ladakh",
    driveTime: "5hr+",
    tags: ["Mountains", "Culture", "Adventure", "Photography"],
    rating: 4.8,
    pricePerNight: 3000,
    travelType: "adventure"
  }
];

export default function SearchResults() {
  const [getaways, setGetaways] = useState<Getaway[]>([]);
  const [filteredCount, setFilteredCount] = useState(0);
  const [sortBy, setSortBy] = useState<"popularity" | "price" | "rating">("popularity");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = location.state as SearchParams;
  
  useEffect(() => {
    document.title = "Search Results | TrailPick";
    
    // Apply initial filtering based on search parameters
    let filtered = [...allGetaways];
    
    if (searchParams) {
      if (searchParams.travelType && searchParams.travelType !== "any") {
        filtered = filtered.filter(item => item.travelType === searchParams.travelType);
      }
      
      if (searchParams.driveTime) {
        filtered = filtered.filter(item => {
          if (searchParams.driveTime === "1hr" && item.driveTime === "1hr") return true;
          if (searchParams.driveTime === "2hr" && (item.driveTime === "1hr" || item.driveTime === "2hr")) return true;
          if (searchParams.driveTime === "3hr" && (item.driveTime === "1hr" || item.driveTime === "2hr" || item.driveTime === "3hr")) return true;
          if (searchParams.driveTime === "4hr" && (item.driveTime === "1hr" || item.driveTime === "2hr" || item.driveTime === "3hr" || item.driveTime === "4hr")) return true;
          if (searchParams.driveTime === "5hr+") return true;
          return false;
        });
      }
      
      if (searchParams.tags && searchParams.tags.length > 0) {
        filtered = filtered.filter(item => {
          return searchParams.tags!.some(tag => item.tags.includes(tag));
        });
      }
    }
    
    // Apply sorting
    sortResults(filtered, sortBy);
    
    setFilteredCount(filtered.length);
  }, [location.state, sortBy]);
  
  const sortResults = (results: Getaway[], sortType: string) => {
    let sorted = [...results];
    
    switch(sortType) {
      case "price":
        sorted.sort((a, b) => a.pricePerNight - b.pricePerNight);
        break;
      case "rating":
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case "popularity":
      default:
        // Default sorting logic, could be based on views/bookings in a real app
        sorted.sort((a, b) => b.id - a.id);
        break;
    }
    
    setGetaways(sorted);
  };
  
  const handleFilterChange = (tag: string) => {
    setIsFilterOpen(false);
    
    if (activeFilters.includes(tag)) {
      setActiveFilters(activeFilters.filter(t => t !== tag));
    } else {
      setActiveFilters([...activeFilters, tag]);
    }
    
    const newFiltered = allGetaways.filter(item => {
      const newFilters = activeFilters.includes(tag) 
        ? activeFilters.filter(t => t !== tag) 
        : [...activeFilters, tag];
        
      return newFilters.length === 0 || newFilters.some(filter => item.tags.includes(filter));
    });
    
    setGetaways(newFiltered);
    setFilteredCount(newFiltered.length);
  };
  
  const handleSortChange = (type: "popularity" | "price" | "rating") => {
    setSortBy(type);
    sortResults(getaways, type);
  };
  
  const handleClearFilters = () => {
    setActiveFilters([]);
    const initialFiltered = searchParams ? allGetaways.filter(item => {
      if (searchParams.travelType && searchParams.travelType !== "any" && item.travelType !== searchParams.travelType) return false;
      
      return true;
    }) : allGetaways;
    
    setGetaways(initialFiltered);
    setFilteredCount(initialFiltered.length);
    setIsFilterOpen(false);
  };
  
  const handleGoBack = () => {
    navigate('/');
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 bg-trailpick-light">
        <div className="container py-6">
          {/* Search info bar */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div className="flex items-center">
              <Button variant="ghost" size="icon" onClick={handleGoBack} className="mr-2">
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-2xl font-bold">Search Results</h1>
                <p className="text-muted-foreground">
                  {filteredCount} {filteredCount === 1 ? 'destination' : 'destinations'} found
                  {searchParams?.location ? ` near ${searchParams.location}` : ''}
                </p>
              </div>
            </div>
            
            <div className="flex space-x-2 w-full md:w-auto">
              {/* Mobile filter button */}
              <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" className="md:hidden w-full">
                    <Filter className="mr-2 h-4 w-4" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                    <SheetDescription>
                      Refine your search results
                    </SheetDescription>
                  </SheetHeader>
                  <div className="py-6">
                    <h3 className="font-medium mb-4">Trip Type</h3>
                    <div className="space-y-3">
                      {['Adventure', 'Relaxation', 'Beach', 'Mountains', 'Culture', 'Wildlife', 'Luxury'].map((tag) => (
                        <div className="flex items-center" key={tag}>
                          <Checkbox 
                            id={`mobile-${tag}`}
                            checked={activeFilters.includes(tag)}
                            onCheckedChange={() => handleFilterChange(tag)}
                          />
                          <label
                            htmlFor={`mobile-${tag}`}
                            className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {tag}
                          </label>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6">
                      <Button onClick={handleClearFilters} variant="outline" className="w-full">
                        Clear Filters
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
              
              {/* Sort dialog */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full md:w-auto">
                    <SlidersHorizontal className="mr-2 h-4 w-4" />
                    Sort
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Sort Results</DialogTitle>
                    <DialogDescription>
                      Choose how to order your search results
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="sort-popularity"
                          name="sort"
                          checked={sortBy === "popularity"}
                          onChange={() => handleSortChange("popularity")}
                          className="mr-2"
                        />
                        <Label htmlFor="sort-popularity">Popularity</Label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="sort-price"
                          name="sort"
                          checked={sortBy === "price"}
                          onChange={() => handleSortChange("price")}
                          className="mr-2"
                        />
                        <Label htmlFor="sort-price">Price: Low to High</Label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="sort-rating"
                          name="sort"
                          checked={sortBy === "rating"}
                          onChange={() => handleSortChange("rating")}
                          className="mr-2"
                        />
                        <Label htmlFor="sort-rating">Rating</Label>
                      </div>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit" onClick={() => {}}>Apply</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          
          {/* Main content */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            {/* Filters - Desktop */}
            <div className="hidden md:block bg-white p-6 rounded-lg shadow-sm border h-fit">
              <div className="mb-6">
                <h3 className="font-medium mb-4">Travel Type</h3>
                <div className="space-y-3">
                  {['Adventure', 'Relaxation', 'Beach', 'Mountains', 'Culture', 'Wildlife', 'Luxury'].map((tag) => (
                    <div className="flex items-center" key={tag}>
                      <Checkbox 
                        id={tag}
                        checked={activeFilters.includes(tag)}
                        onCheckedChange={() => handleFilterChange(tag)}
                      />
                      <label
                        htmlFor={tag}
                        className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {tag}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <Button onClick={handleClearFilters} variant="outline" className="w-full">
                Clear Filters
              </Button>
            </div>
            
            {/* Search Results */}
            <div className="md:col-span-3">
              <div className="grid md:grid-cols-3 gap-6">
                {getaways.length > 0 ? (
                  getaways.map((getaway) => (
                    <GetawayCard 
                      key={getaway.id}
                      title={getaway.title}
                      description={getaway.description}
                      imageUrl={getaway.imageUrl}
                      location={getaway.location}
                    />
                  ))
                ) : (
                  <div className="col-span-3 text-center py-12">
                    <h3 className="text-xl font-semibold">No results found</h3>
                    <p className="text-muted-foreground mt-2">
                      Try adjusting your search filters to find more destinations.
                    </p>
                    <Button className="mt-6" onClick={handleClearFilters}>
                      Clear Filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
