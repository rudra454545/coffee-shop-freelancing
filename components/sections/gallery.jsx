'use client'
import { Component as CircularGallery } from '@/components/ui/circular-gallery'
import { useState } from 'react'

const galleryItems = [
  {
    image: `/gallery/1.jpg`,
    text: "Delicious Shake",
  },
  {
    image: `/gallery/2.jpeg`,
    text: "Fresh Ice Cream",
  },
  {
    image: `/gallery/3.jpg`,
    text: "Sweet Treats",
  },
  {
    image: `/gallery/4.jpg`,
    text: "Cold Beverages",
  },
  {
    image: `/gallery/5.jpg`,
    text: "Hot Coffee",
  },
  {
    image: `/gallery/6.jpg`,
    text: "Signature Dishes",
  },
  {
    image: `/gallery/7.jpg`,
    text: "Variety Menu",
  },
  {
    image: `/gallery/8.jpg`,
    text: "Store Atmosphere",
  },
  {
    image: `/gallery/9.jpg`,
    text: "Customer Favorites",
  },
  {
    image: `/gallery/10.jpg`,
    text: "Special Offers",
  },
]

export default function Gallery() {
  const [showSecret, setShowSecret] = useState(false)

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#005f73] mb-4">Catch The Vibe</h2>
          <p className="text-xl text-gray-600">Good times and great tastes. This is our port in the storm.</p>
        </div>

        <div className="h-[80vh]">
          <CircularGallery 
            items={galleryItems} 
            bend={3} 
            textColor="#ffffff" 
            borderRadius={0.05} 
          />
        </div>

        {/* Secret Menu Easter Egg */}
        <div 
          className="fixed bottom-8 right-8 cursor-pointer animate-pulse"
          onClick={() => setShowSecret(true)}
        >
          <div className="text-4xl">🐚</div>
        </div>

        {/* Secret Modal */}
        {showSecret && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-md w-full p-8 text-center">
              <h3 className="text-2xl font-bold text-[#005f73] mb-4">Secret Menu Unlocked! 🎉</h3>
              <p className="text-gray-600 mb-6">
                Congratulations! You found our secret Deep Sea Mocha Swirl. 
               But There Is Nothing For Now!
              </p>
              <button 
                onClick={() => setShowSecret(false)}
                className="bg-[#ff6b6b] text-white px-6 py-3 rounded-lg hover:bg-[#e55a5a]"
              >
                Claim Your Surprise
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}