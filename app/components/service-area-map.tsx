import React from "react"

// For display purposes, use static area example (city & suburbs)
const areas = [
  { name: "Downtown",   color: "bg-blue-600" },
  { name: "Westfield",  color: "bg-blue-500" },
  { name: "Greenwood",  color: "bg-blue-400" },
  { name: "Lakeview",   color: "bg-blue-300" },
  { name: "Brookside",  color: "bg-blue-200" },
]

export function ServiceAreaMap() {
  return (
    <section id="map" className="py-12">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-blue-900 text-center">
        Our Service Area
      </h2>
      <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto items-center">
        <div className="relative w-full md:w-2/3 aspect-[3/2] bg-gradient-to-br from-blue-200 to-blue-500 rounded-xl overflow-hidden shadow-md flex items-center justify-center">
          {/* Stylized "service map" with color-coded zones */}
          <svg width="100%" height="100%" viewBox="0 0 320 200" className="absolute w-full h-full">
            <ellipse cx="160" cy="100" rx="140" ry="85" className="fill-blue-200" />
            <ellipse cx="160" cy="100" rx="109" ry="66" className="fill-blue-300" />
            <ellipse cx="160" cy="100" rx="80" ry="48" className="fill-blue-400" />
            <ellipse cx="160" cy="100" rx="55" ry="33" className="fill-blue-500" />
            <ellipse cx="160" cy="100" rx="32" ry="19" className="fill-blue-600" />
          </svg>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-xl text-white drop-shadow">
            City + Suburbs
          </div>
        </div>
        <ul className="md:w-1/3 flex flex-col gap-3">
          {areas.map((a, i) => (
            <li key={a.name} className="flex items-center gap-3">
              <span className={`inline-block w-4 h-4 rounded-full ${a.color} border border-white shadow-md`} />
              <span className="text-blue-900 font-semibold text-lg">{a.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
