'use client'
import { useState, useEffect } from 'react'

export function FeatureSteps({
  features,
  className,
  title = "How to get Started",
  autoPlayInterval = 3000,
  imageHeight = "h-[400px]",
}) {
  const [currentFeature, setCurrentFeature] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100))
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length)
        setProgress(0)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [progress, features.length, autoPlayInterval])

  return (
    <div className={className}>
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center text-[#005f73]">
          {title}
        </h2>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10">
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-6 md:gap-8 transition-opacity duration-500"
                style={{ opacity: index === currentFeature ? 1 : 0.3 }}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                    index === currentFeature
                      ? "bg-[#ff6b6b] border-[#ff6b6b] text-white scale-110"
                      : "bg-gray-100 border-gray-300"
                  }`}
                >
                  {index <= currentFeature ? (
                    <span className="text-lg font-bold">✓</span>
                  ) : (
                    <span className="text-lg font-semibold">{index + 1}</span>
                  )}
                </div>

                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold text-[#005f73]">
                    {feature.title || feature.step}
                  </h3>
                  <p className="text-gray-600">
                    {feature.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            className={`relative ${imageHeight} overflow-hidden rounded-lg`}
          >
            {features.map((feature, index) =>
              index === currentFeature && (
                <div
                  key={index}
                  className="absolute inset-0 rounded-lg overflow-hidden animate-fade-in"
                >
                  <img
                    src={feature.image}
                    alt={feature.title || feature.step}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-white via-white/50 to-transparent" />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
