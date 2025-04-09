
import { LogIn, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <a className="flex items-center" href="/">
            <span className="text-2xl font-bold bg-gradient-to-r from-trailpick-blue to-trailpick-green bg-clip-text text-transparent">
              TrailPick
            </span>
            <span className="ml-2 text-lg text-muted-foreground">🧭</span>
          </a>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Destinations
            </a>
            <a
              href="#"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Trip Planner
            </a>
            <a
              href="#"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Travel Journal
            </a>
          </nav>
          <Button variant="outline" size="sm" className="hidden md:flex">
            <LogIn className="mr-2 h-4 w-4" />
            Log In
          </Button>
          <Button className="hidden md:flex">Sign Up</Button>
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
                  <a
                    href="#"
                    className="text-base font-medium transition-colors hover:text-primary"
                  >
                    Destinations
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a
                    href="#"
                    className="text-base font-medium transition-colors hover:text-primary"
                  >
                    Trip Planner
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a
                    href="#"
                    className="text-base font-medium transition-colors hover:text-primary"
                  >
                    Travel Journal
                  </a>
                </SheetClose>
                <div className="flex flex-col gap-2 mt-4">
                  <Button variant="outline" className="w-full justify-start">
                    <LogIn className="mr-2 h-4 w-4" />
                    Log In
                  </Button>
                  <Button className="w-full">Sign Up</Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
