'use client'
import { useState, useEffect } from 'react'
import { FeatureSteps } from '@/components/blocks/feature-section'

export default function Vibe() {
  const features = [
    {
      step: 'Premium Ingredients',
      title: 'Premium Ingredients',
      content: 'We source only the finest ingredients to ensure every sip is a premium experience.',
      image: '/gallery/a.jpg'
    },
    {
      step: 'Fresh Preparation',
      title: 'Fresh Preparation',
      content: 'Every drink is prepared fresh with attention to detail and quality.',
      image: '/gallery/b.jpg'
    },
    {
      step: 'Creative Blending',
      title: 'Creative Blending',
      content: 'Our unique blending techniques create unforgettable flavor experiences.',
      image: '/gallery/c.jpg'
    },
  ]

  return (
    <section id="vibe" className="py-20 bg-[#f4eade]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#005f73] mb-8">
          Your Oasis of Taste
        </h2>
        <p className="text-xl text-center max-w-2xl mx-auto mb-12">
          We're a vibrant escape from the everyday, where every drink is an adventure.
          At Shake Sea, we blend premium ingredients with creative craftsmanship to deliver
          unforgettable flavor experiences.
        </p>

        <FeatureSteps
          features={features}
          title="Our Journey of Taste"
          autoPlayInterval={4000}
          imageHeight="h-[500px]"
        />
      </div>
    </section>
  )
}
