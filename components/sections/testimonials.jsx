'use client'
import { useState, useEffect } from 'react'

const testimonials = [
  {
    text: "Budget friendly place and bestest food service.",
    author: "Adyasha Mohanty",
    rating: 5,
  },
  {
    text: "Cute Cozy Place to hangout ✨Very affordable price with awesome quality and taste 🍕🍩🍔🍟🍜.",
    author: "Monalisa Patel",
    rating: 5,
  },
  {
    text: "Environment is good and taste is to the point.",
    author: "Nitish Kumar",
    rating: 4,
  },
]

export default function Testimonials() {
  const [visibleCards, setVisibleCards] = useState([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => [...prev, entry.target.dataset.index])
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.testimonial-card').forEach((card) => {
      observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#005f73] mb-4">Tales from the Crew</h2>
          <p className="text-xl text-gray-600">Don't just take our word for it...</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              index={index}
              isVisible={visibleCards.includes(index.toString())}
            />
          ))}
        </div>

        {/* Tales from the Crew */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-[#005f73] mb-4">Tales from the Crew</h3>
          <a
            href="https://maps.app.goo.gl/3ahiRLZVevd7vBj96"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-6 py-3 bg-[#005f73] text-white rounded-lg hover:bg-[#004a5c] transition-colors duration-300"
          >
            Give Your Review
          </a>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial, index, isVisible }) {
  return (
    <div
      className={`testimonial-card bg-[#f4eade] p-8 rounded-2xl shadow-lg transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      data-index={index}
    >
      <div className="relative">
        <div className="text-4xl text-[#ff6b6b] opacity-30 absolute -top-4 -left-2">"</div>
        <p className="text-gray-600 italic mb-4 relative z-10">{testimonial.text}</p>
        <div className="flex mb-4">
          {Array.from({ length: testimonial.rating }, (_, i) => (
            <span key={i} className="text-yellow-400 text-lg">★</span>
          ))}
        </div>
      </div>
      <p className="font-semibold text-[#005f73]">- {testimonial.author}</p>
    </div>
  )
}

function InstagramFeed() {
  const posts = Array(4).fill(null).map((_, i) => i + 1)

  return (
    <div className="text-center">
      <h3 className="text-2xl font-bold text-[#005f73] mb-8">Follow The Current</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {posts.map((post) => (
          <div
            key={post}
            className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center hover:scale-105 transition-transform cursor-pointer"
          >
            <span className="text-gray-500">Instagram Post {post}</span>
          </div>
        ))}
      </div>
    </div>
  )
}