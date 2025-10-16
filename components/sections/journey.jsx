'use client'
import { useState, useEffect } from 'react'

const journeyImages = [
  { id: 1, image: '/gallery/a.jpg', alt: 'Our journey moment 1' },
  { id: 2, image: '/gallery/b.jpg', alt: 'Our journey moment 2' },
  { id: 3, image: '/gallery/c.jpg', alt: 'Our journey moment 3' }
]

export default function Journey() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    const section = document.querySelector('#journey')
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="journey" className="py-20 bg-[#f4eade]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#005f73] mb-4">Our Journey of Taste</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {journeyImages.map((item, index) => (
            <div
              key={item.id}
              className={`relative overflow-hidden rounded-2xl shadow-xl transform transition-all duration-700 ${
                visible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white text-lg font-semibold">
                    {index === 0 && "The Beginning"}
                    {index === 1 && "Growing Together"}
                    {index === 2 && "Serving Our Community"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-block bg-white rounded-full px-8 py-4 shadow-lg">
            <p className="text-[#005f73] font-semibold text-lg">
              Every dish tells a story. Every customer becomes part of our family.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
