
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TripCard from "@/components/TripCard";
import { Button } from "@/components/ui/button";
import { Calendar, Users } from "lucide-react";

export default function TripPlanner() {
  const upcomingTrips = [
    {
      title: "Kerala Backwaters Explorer",
      details: "A serene journey through God's own country",
      date: "June 15-22, 2024",
      location: "Kerala",
      participants: 6
    },
    {
      title: "Rajasthan Heritage Tour",
      details: "Experience the royal culture of Rajasthan",
      date: "July 1-8, 2024",
      location: "Jaipur, Udaipur",
      participants: 4
    },
    {
      title: "Himalayan Adventure",
      details: "Trek through the majestic mountains",
      date: "August 10-17, 2024",
      location: "Manali",
      participants: 8
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-6">Trip Planner</h1>
        
        {/* Quick Actions */}
        <div className="flex gap-4 mb-8">
          <Button className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            New Trip
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Invite Friends
          </Button>
        </div>

        {/* Upcoming Trips */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Upcoming Trips</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {upcomingTrips.map((trip, index) => (
              <TripCard key={index} {...trip} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
