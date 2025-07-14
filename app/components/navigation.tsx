import React from "react";
import { Button } from "@/components/ui/button";
import { PhoneCall, CalendarDays } from "lucide-react";

export function Navigation() {
  return (
    <header className="w-full bg-white/80 sticky top-0 z-30 border-b border-slate-100 shadow-sm backdrop-blur">
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 md:px-8">
        <a href="#" aria-label="Home Services" className="flex items-center font-bold text-xl text-blue-700">
          <span className="inline-block mr-2">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 12l9-8 9 8v8a2 2 0 01-2 2h-2a2 2 0 01-2-2V13H9v3a2 2 0 01-2 2H5a2 2 0 01-2-2v-8z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
          Home Experts
        </a>
        <div className="hidden md:flex gap-6">
          <a href="#services" className="hover:text-blue-700">Services</a>
          <a href="#gallery" className="hover:text-blue-700">Gallery</a>
          <a href="#booking" className="hover:text-blue-700">Book Now</a>
          <a href="#reviews" className="hover:text-blue-700">Reviews</a>
          <a href="#emergency" className="hover:text-red-600 font-medium">Emergency</a>
          <a href="#tips" className="hover:text-blue-700">Maintenance Tips</a>
          <a href="#map" className="hover:text-blue-700">Service Area</a>
          <a href="#warranty" className="hover:text-blue-700">Warranty</a>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2 text-blue-700 border-blue-700 hover:bg-blue-50" size="sm">
            <PhoneCall size={18} />
            Call Now
          </Button>
          <Button variant="default" className="gap-2 bg-blue-700 hover:bg-blue-800" size="sm">
            <CalendarDays size={18} />
            Book Online
          </Button>
        </div>
      </nav>
    </header>
  )
}
