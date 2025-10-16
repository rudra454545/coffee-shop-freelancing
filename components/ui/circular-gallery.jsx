'use client'
import { useRef, useEffect } from 'react'

export function Component({ items, bend = 3, textColor = "#ffffff", borderRadius = 0.05 }) {
  const containerRef = useRef(null)

  useEffect(() => {
    // Simplified implementation - in a real project you would use the OGL library
    const handleWheel = (e) => {
      e.preventDefault()
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false })
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="w-full h-full overflow-hidden cursor-grab active:cursor-grabbing bg-transparent"
    >
      <div className="flex space-x-4 h-full items-center animate-scroll">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 h-64 bg-gray-200 rounded-lg flex items-center justify-center transform hover:scale-110 transition-transform overflow-hidden"
            style={{
              transform: `rotateY(${index * 10}deg)`,
            }}
          >
            <img
              src={item.image}
              alt={item.text}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'flex'
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-center p-4 hidden">
              <div>
                <div className="text-lg font-bold mb-2">{item.text}</div>
                <div className="text-gray-300">Image {index + 1}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}