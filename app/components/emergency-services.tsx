import React from "react"
import { AlarmClock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function EmergencyServices() {
  return (
    <section id="emergency" className="py-10 my-8 bg-red-50 border-t-4 border-red-500 rounded-xl shadow">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto gap-8 px-4">
        <div className="flex items-center gap-4">
          <AlarmClock className="text-red-600" size={38}/>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-red-700">24/7 Emergency Services</h3>
            <div className="text-slate-700 mt-1 mb-2">
              Plumbing, electrical, heating—call us for immediate help day or night.
            </div>
            <a href="tel:18005551234" className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded font-semibold transition">
              <AlarmClock size={18}/>
              Call (800) 555-1234
            </a>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1464983953574-0892a716854b?w=340&h=260&fit=crop&auto=format"
          alt="Technician responding to home emergency"
          className="rounded shadow-md object-cover"
          width="340" height="260"
          loading="lazy"
        />
      </div>
    </section>
  )
}
