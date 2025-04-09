
import { useState } from "react";
import Navbar from "@/components/Navbar";
import SearchForm from "@/components/SearchForm";
import GetawayCard from "@/components/GetawayCard";
import MoodCard from "@/components/MoodCard";
import TripCard from "@/components/TripCard";
import Footer from "@/components/Footer";
import { Waves, Compass, Heart, Mountain, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function Index() {
  const { toast } = useToast();
  const [showAllGetaways, setShowAllGetaways] = useState(false);

  const weekendGetaways = [
    {
      id: 1,
      title: "Mountain Retreat",
      description: "A peaceful cabin getaway surrounded by stunning mountain views, perfect for hiking and relaxation.",
      imageUrl: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      location: "Sierra Mountains"
    },
    {
      id: 2,
      title: "Coastal Paradise",
      description: "Beautiful beachfront cottage with direct access to white sand beaches and crystal clear waters.",
      imageUrl: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      location: "Pacific Coast"
    },
    {
      id: 3,
      title: "Forest Hideaway",
      description: "Secluded treehouse nestled in a lush forest, offering a unique and tranquil experience in nature.",
      imageUrl: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      location: "Redwood Forest"
    },
    {
      id: 4,
      title: "Desert Oasis",
      description: "Modern villa with a private pool in the middle of a beautiful desert landscape with breathtaking sunsets.",
      imageUrl: "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      location: "Mojave Desert"
    },
    {
      id: 5,
      title: "Lakeside Cabin",
      description: "Cozy cabin with a private dock on a pristine mountain lake, perfect for fishing and water activities.",
      imageUrl: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      location: "Lake Tahoe"
    },
    {
      id: 6,
      title: "Wine Country Villa",
      description: "Elegant villa surrounded by vineyards with wine tasting tours and gourmet dining experiences.",
      imageUrl: "https://images.unsplash.com/photo-1566750687978-2db8d0c79334?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      location: "Napa Valley"
    }
  ];

  const trips = [
    {
      id: 1,
      title: "Summer Beach Trip",
      details: "Group beach vacation with activities and relaxation",
      date: "Jul 10-17, 2024",
      location: "Malibu Beach",
      participants: 6
    },
    {
      id: 2,
      title: "Mountain Hiking Adventure",
      details: "Week-long hiking and camping trip in the mountains",
      date: "Aug 5-12, 2024",
      location: "Rocky Mountains",
      participants: 4
    }
  ];

  const handleViewMoreSuggestions = () => {
    setShowAllGetaways(!showAllGetaways);
  };

  const handleVoteOnOptions = () => {
    toast({
      title: "Group voting initiated",
      description: "An email has been sent to all participants to vote on the trip options.",
    });
  };

  const handleExploreNow = () => {
    toast({
      title: "Explore started",
      description: "Starting your adventure discovery journey!",
    });
  };

  const handleGetStarted = () => {
    toast({
      title: "Welcome to TrailPick!",
      description: "Sign up to unlock all features and save your preferences.",
    });
  };

  const displayedGetaways = showAllGetaways ? weekendGetaways : weekendGetaways.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-trailpick-blue py-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
          <div className="container relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Discover Your Perfect Getaway
                </h1>
                <p className="text-xl mb-8 opacity-90">
                  Find unique travel destinations tailored to your preferences, mood, and travel style.
                </p>
                <Button 
                  className="bg-white text-trailpick-blue hover:bg-white/90 rounded-full px-6"
                  onClick={handleExploreNow}
                >
                  Explore Now
                </Button>
              </div>
              
              <div>
                <SearchForm />
              </div>
            </div>
          </div>
        </section>
        
        {/* Weekend Suggestions Section */}
        <section className="py-16 bg-trailpick-light">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">Weekend Suggestions</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {displayedGetaways.map((getaway) => (
                <GetawayCard 
                  key={getaway.id}
                  title={getaway.title}
                  description={getaway.description}
                  imageUrl={getaway.imageUrl}
                  location={getaway.location}
                />
              ))}
            </div>
            <div className="text-center">
              <Button 
                variant="outline" 
                className="rounded-full px-6"
                onClick={handleViewMoreSuggestions}
              >
                {showAllGetaways ? "Show Less" : "View More Suggestions"}
              </Button>
            </div>
          </div>
        </section>
        
        {/* Mood-based Suggestions */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">Mood-based Suggestions</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <MoodCard 
                icon={Waves}
                title="I want to relax"
                description="Beach getaways and spa retreats for total relaxation"
              />
              <MoodCard 
                icon={Compass}
                title="I need adventure"
                description="Exciting trips for thrill-seekers and explorers"
              />
              <MoodCard 
                icon={Users}
                title="We're a big group"
                description="Spacious accommodations perfect for group travel"
              />
              <MoodCard 
                icon={Heart}
                title="Romantic trip"
                description="Intimate settings for couples and honeymooners"
              />
            </div>
          </div>
        </section>
        
        {/* Group Trip Planner */}
        <section className="py-16 bg-trailpick-light">
          <div className="container">
            <h2 className="text-3xl font-bold mb-4">Group Trip Planner</h2>
            <p className="text-muted-foreground mb-8">Plan and coordinate trips with friends and family</p>
            
            <div className="grid gap-4 mb-8">
              {trips.map((trip) => (
                <TripCard
                  key={trip.id}
                  title={trip.title}
                  details={trip.details}
                  date={trip.date}
                  location={trip.location}
                  participants={trip.participants}
                />
              ))}
            </div>
            
            <Button 
              className="w-full bg-trailpick-dark"
              onClick={handleVoteOnOptions}
            >
              Vote on Options
            </Button>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">What Travelers Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  id: 1,
                  text: "TrailPick helped us discover the perfect weekend getaway that we never would have found otherwise. The personalized recommendations were spot on!",
                  author: "Sarah T."
                },
                {
                  id: 2,
                  text: "I love how easy it is to find places within a specific drive time. Found an amazing cabin just 2 hours away that's become our regular retreat.",
                  author: "Michael K."
                },
                {
                  id: 3,
                  text: "The group planning feature made organizing our friend reunion so much easier. No more endless group chats trying to decide where to go!",
                  author: "Jessica M."
                }
              ].map((testimonial) => (
                <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-sm border">
                  <div className="flex items-center text-trailpick-orange mb-4">
                    {Array(5).fill(0).map((_, idx) => (
                      <svg key={idx} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "{testimonial.text}"
                  </p>
                  <div className="font-medium">{testimonial.author}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-trailpick-blue text-white text-center">
          <div className="container">
            <h2 className="text-3xl font-bold mb-4">Ready for Your Next Adventure?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Sign up today and start discovering unique travel destinations tailored just for you.
            </p>
            <Button 
              className="bg-white text-trailpick-blue hover:bg-white/90 rounded-full px-8 py-6 text-lg"
              onClick={handleGetStarted}
            >
              Get Started for Free
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
