import React from "react"

const gallery = [
  {
    before: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=440&h=320&fit=crop&auto=format",
    after: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=440&h=320&fit=crop&auto=format",
    title: "Kitchen Remodel"
  },
  {
    before: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=440&h=320&fit=crop&auto=format",
    after: "https://images.unsplash.com/photo-1512918728675-c0e1d30e33c9?w=440&h=320&fit=crop&auto=format",
    title: "Bathroom Upgrade"
  },
  {
    before: "https://images.unsplash.com/photo-1556911220-e15b29be8c5d?w=440&h=320&fit=crop&auto=format",
    after: "https://images.unsplash.com/photo-1586105251261-72a756497a12?w=440&h=320&fit=crop&auto=format",
    title: "Deck Restoration"
  },
]

export function BeforeAfterGallery() {
  return (
    <section id="gallery" className="py-12">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-blue-900 text-center">
        Before & After Gallery
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {gallery.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
          >
            <div className="relative">
              <img
                src={item.before}
                alt={`${item.title} before`}
                className="object-cover w-full h-40 rounded-t-xl"
                loading="lazy"
              />
              <div className="absolute bottom-2 left-2 bg-blue-700 text-white text-xs px-2 py-1 rounded opacity-90">Before</div>
            </div>
            <div className="relative">
              <img
                src={item.after}
                alt={`${item.title} after`}
                className="object-cover w-full h-40 rounded-b-xl"
                loading="lazy"
              />
              <div className="absolute bottom-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded opacity-90">After</div>
            </div>
            <div className="text-center py-2 font-semibold text-slate-800 border-t">{item.title}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
