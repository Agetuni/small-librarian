import React from "react"

export function Footer() {
  return (
    <footer className="w-full mt-8 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <span className="font-bold">Home Experts™</span>
          <span className="text-xs text-blue-200">Reliable Repairs, Renovations, & Maintenance</span>
        </div>
        <div className="flex gap-6">
          <a href="#services" className="hover:underline">Services</a>
          <a href="#gallery" className="hover:underline">Gallery</a>
          <a href="#booking" className="hover:underline">Book</a>
          <a href="#reviews" className="hover:underline">Reviews</a>
          <a href="#map" className="hover:underline">Service Area</a>
          <a href="#warranty" className="hover:underline">Warranty</a>
        </div>
        <div className="text-sm text-blue-200">© {new Date().getFullYear()} Home Experts. All rights reserved.</div>
      </div>
    </footer>
  )
}
