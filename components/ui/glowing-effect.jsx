'use client'
import { useEffect, useRef } from 'react'

export function GlowingEffect({
  spread = 40,
  glow = true,
  proximity = 64,
  borderWidth = 3,
}) {
  const effectRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!effectRef.current) return
      
      const rect = effectRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      effectRef.current.style.setProperty('--mouse-x', `${x}px`)
      effectRef.current.style.setProperty('--mouse-y', `${y}px`)
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      ref={effectRef}
      className="absolute inset-0 rounded-[inherit] opacity-0 transition-opacity group-hover:opacity-100"
      style={{
        background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,107,107,0.1) 0%, transparent 80%)`,
      }}
    />
  )
}