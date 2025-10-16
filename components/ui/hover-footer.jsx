'use client'
import { motion } from 'framer-motion'

export function TextHoverEffect({ text, className }) {
  return (
    <div className={className}>
      <motion.div
        className="text-8xl font-bold text-white/10"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {text}
      </motion.div>
    </div>
  )
}

export function FooterBackgroundGradient() {
  return (
    <div
      className="absolute inset-0 z-0"
      style={{
        background: "radial-gradient(125% 125% at 50% 10%, #0F0F1166 50%, #3ca2fa33 100%)",
      }}
    />
  )
}