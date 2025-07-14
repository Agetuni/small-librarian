import React from "react";
import { Paintbrush, Wrench, Drill, Plug, Flame, ShowerHead, AirVent } from "lucide-react";

const categories = [
  {
    icon: <Wrench size={28} className="text-blue-600" />,
    title: "Plumbing",
    description: "Repairs, leaks, fixture installs, and pipe replacements."
  },
  {
    icon: <Plug size={28} className="text-blue-600" />,
    title: "Electrical",
    description: "Wiring, outlet upgrades, lighting, and troubleshooting."
  },
  {
    icon: <Paintbrush size={28} className="text-blue-600" />,
    title: "Painting",
    description: "Interior and exterior, prep and finishing by pros."
  },
  {
    icon: <Drill size={28} className="text-blue-600" />,
    title: "Renovations",
    description: "Kitchens, bathrooms, and general home remodeling."
  },
  {
    icon: <Flame size={28} className="text-blue-600" />,
    title: "Heating",
    description: "Furnace installs, repairs, and maintenance."
  },
  {
    icon: <ShowerHead size={28} className="text-blue-600" />,
    title: "Bathrooms",
    description: "Remodels, tiling, and fixture upgrades."
  },
  {
    icon: <AirVent size={28} className="text-blue-600" />,
    title: "HVAC",
    description: "Climate control, AC installs, duct cleaning."
  }
];

export function ServiceCategories() {
  return (
    <section id="services" className="py-10">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-blue-900 text-center">
        Our Service Categories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {categories.map((cat, idx) => (
          <div
            key={cat.title}
            className="group bg-white rounded-xl shadow-md p-6 flex flex-col items-start gap-3 hover:ring-2 hover:ring-blue-600 transition"
            aria-label={cat.title}
          >
            <div>{cat.icon}</div>
            <div className="text-xl font-semibold text-blue-800">{cat.title}</div>
            <div className="text-slate-600 text-sm">{cat.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
