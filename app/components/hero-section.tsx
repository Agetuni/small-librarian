import React from "react"

export function HeroSection() {
  return (
    <section className="relative flex flex-col md:flex-row items-center gap-8 py-10 md:py-20" aria-label="Welcome">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start gap-6">
        <h1 className="font-extrabold text-3xl sm:text-5xl text-blue-800 leading-tight drop-shadow">
          Transform Your Home,<br /> One Service at a Time.
        </h1>
        <p className="text-lg sm:text-xl text-slate-700">
          Trusted professionals for repairs, renovations, and maintenance. Book online, view real results, and get cost estimates—instantly!
        </p>
        <div className="flex gap-4">
          <a href="#booking" className="inline-block px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-md font-semibold transition">Schedule Now</a>
          <a href="#services" className="inline-block px-6 py-3 border border-blue-700 text-blue-700 rounded-md font-semibold transition hover:bg-blue-50">Our Services</a>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center relative">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=520&h=340&fit=crop&auto=format"
          alt="Home renovation in progress"
          className="rounded-xl shadow-lg object-cover w-full max-w-[520px] h-[340px]"
          loading="lazy"
        />
        <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-blue-950/10 to-transparent pointer-events-none" />
      </div>
    </section>
  )
}
