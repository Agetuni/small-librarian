"use client"
import React, { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"

const services = [
  { name: "Plumbing", min: 100, max: 800, step: 50, icon: "🚰" },
  { name: "Electrical", min: 80, max: 600, step: 40, icon: "💡" },
  { name: "Painting", min: 200, max: 2500, step: 100, icon: "🖌️" },
  { name: "Renovations", min: 500, max: 7000, step: 250, icon: "🔨" },
]

export function CostEstimator() {
  const [serviceIdx, setServiceIdx] = useState(0)
  const [amount, setAmount] = useState<number[]>([services[0].min])

  function handleServiceChange(idx: number) {
    setServiceIdx(idx)
    setAmount([services[idx].min])
  }

  return (
    <section className="py-12 max-w-2xl mx-auto w-full">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-blue-900 text-center">
        Cost Estimator
      </h2>
      <div className="bg-white rounded-xl shadow-md p-8 flex flex-col gap-6">
        <div className="flex gap-3 flex-wrap justify-center">
          {services.map((srv, idx) => (
            <Button
              key={srv.name}
              variant={idx === serviceIdx ? "default" : "outline"}
              className="font-medium"
              onClick={() => handleServiceChange(idx)}
            >
              <span className="mr-1">{srv.icon}</span>{srv.name}
            </Button>
          ))}
        </div>
        <div className="w-full flex flex-col items-center">
          <Slider
            min={services[serviceIdx].min}
            max={services[serviceIdx].max}
            step={services[serviceIdx].step}
            value={amount}
            onValueChange={setAmount}
            className="w-full max-w-md"
          />
          <div className="mt-4 text-xl text-blue-800">
            Estimated: <span className="font-bold">${amount[0]}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
