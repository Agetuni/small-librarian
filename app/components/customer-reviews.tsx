import React from "react"
import { Star } from "lucide-react"

const reviews = [
  {
    name: "Michelle R.",
    rating: 5,
    text: "The team renovated my kitchen and exceeded my expectations! Prompt, clean, and courteous. Highly recommended."
  },
  {
    name: "Alex P.",
    rating: 4,
    text: "Quickly fixed my water leak and provided great tips to prevent future issues. Will use their services again."
  },
  {
    name: "Samantha L.",
    rating: 5,
    text: "Top-notch bathroom remodel! They worked within my budget and timeline."
  },
  {
    name: "David K.",
    rating: 5,
    text: "Called for emergency electrical and had a tech out in less than an hour. Amazing response time."
  }
]

export function CustomerReviews() {
  return (
    <section id="reviews" className="py-12 bg-blue-50 rounded-xl my-8">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-blue-900 text-center">
        What Homeowners Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6">
        {reviews.map((review) => (
          <div key={review.name} className="bg-white rounded-lg p-6 shadow flex flex-col gap-2 border border-blue-100">
            <div className="flex gap-1 mb-2">
              {Array.from({ length: review.rating }).map((_, i) => (
                <Star key={i} size={18} className="text-yellow-400 fill-yellow-300" />
              ))}
            </div>
            <div className="text-slate-700 italic">"{review.text}"</div>
            <div className="text-right text-blue-800 font-semibold">– {review.name}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
