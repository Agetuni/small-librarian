import React from "react"
import { Lightbulb } from "lucide-react"

const tips = [
  {
    title: "Prevent Clogged Drains",
    body: "Use drain screens and avoid pouring grease or food down the sink. Run hot water after each use."
  },
  {
    title: "Lower Your Energy Bill",
    body: "Switch to LED bulbs and unplug electronics overnight. Seal windows before winter."
  },
  {
    title: "Regular Furnace Maintenance",
    body: "Change your furnace filter every 3 months for better air and lower costs."
  },
  {
    title: "Stop Minor Leaks Early",
    body: "Watch for damp spots under sinks. Prompt repairs prevent major water damage."
  },
]

export function MaintenanceTips() {
  return (
    <section id="tips" className="py-12">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-blue-900 text-center">
        Maintenance Tips
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {tips.map((tip, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-3 border-l-4 border-blue-600">
            <Lightbulb size={28} className="text-blue-600 mb-2" />
            <div className="font-semibold text-blue-800">{tip.title}</div>
            <div className="text-slate-700 text-sm">{tip.body}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
