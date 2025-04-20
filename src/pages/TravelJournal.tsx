
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Edit } from "lucide-react";

interface JournalEntry {
  title: string;
  date: string;
  location: string;
  excerpt: string;
  imageUrl: string;
}

export default function TravelJournal() {
  const journalEntries: JournalEntry[] = [
    {
      title: "Sunrise at Taj Mahal",
      date: "March 15, 2024",
      location: "Agra, Uttar Pradesh",
      excerpt: "Witnessing the first rays of sun hitting the marble dome of Taj Mahal was truly a magical moment...",
      imageUrl: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Tea Plantations of Munnar",
      date: "February 28, 2024",
      location: "Munnar, Kerala",
      excerpt: "The rolling hills covered in endless carpets of green tea plantations stretched as far as the eye could see...",
      imageUrl: "https://images.unsplash.com/photo-1544233726-9f1d0a5f2ff4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 container py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Travel Journal</h1>
          <Button className="flex items-center gap-2">
            <Edit className="h-4 w-4" />
            New Entry
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {journalEntries.map((entry, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src={entry.imageUrl}
                  alt={entry.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{entry.title}</h3>
                  <span className="text-sm text-muted-foreground">{entry.date}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{entry.location}</p>
                <p className="text-sm line-clamp-3">{entry.excerpt}</p>
                <Button variant="ghost" className="mt-4 flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
