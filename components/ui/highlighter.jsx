'use client'
import { useRef, useEffect, useState } from 'react'

export function HighlightGroup({ children, className = "" }) {
  const containerRef = useRef(null)
  const [boxes, setBoxes] = useState([])

  useEffect(() => {
    if (containerRef.current) {
      setBoxes(Array.from(containerRef.current.children))
    }
  }, [])

  return (
    <div className={className} ref={containerRef}>
      {children}
    </div>
  )
}

export function HighlighterItem({ children, className = "" }) {
  return (
    <div className={`relative overflow-hidden rounded-3xl ${className}`}>
      {children}
    </div>
  )
}

export function Particles({ quantity = 30, className = "" }) {
  return (
    <div className={`absolute inset-0 -z-10 opacity-10 transition-opacity duration-1000 ${className}`}>
      {[...Array(quantity)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-gray-500 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 15}s`,
          }}
        />
      ))}
    </div>
  )
}