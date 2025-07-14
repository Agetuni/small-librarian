import React from "react"
import { BadgeCheck } from "lucide-react"

export function WarrantyInfo() {
  return (
    <section id="warranty" className="py-12">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-blue-900 text-center">
        Our Warranty
      </h2>
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8 border-l-4 border-green-500 flex items-center gap-8">
        <BadgeCheck size={46} className="text-green-600 flex-shrink-0"/>
        <div className="flex-1">
          <div className="text-lg text-green-700 font-semibold mb-2">Satisfaction Guaranteed</div>
          <ul className="text-slate-700 text-md list-disc pl-5 mb-2">
            <li>1-year labor & materials warranty</li>
            <li>Manufacturer product warranties honored</li>
            <li>Priority response on warranty claims</li>
            <li>Transparent policy, no hidden terms</li>
          </ul>
          <div className="italic text-slate-500 text-sm">All work performed by licensed & insured professionals.</div>
        </div>
      </div>
    </section>
  )
}
