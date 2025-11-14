'use client'

import { useState, useEffect } from 'react'
import CoverSlide from './slides/CoverSlide'
import ProblemSlide from './slides/ProblemSlide'
import ConceptSlide from './slides/ConceptSlide'
import ExperienceSlide from './slides/ExperienceSlide'
import HardwareSlide from './slides/HardwareSlide'
import IntentionSlide from './slides/IntentionSlide'

const slides = [
  CoverSlide,
  IntentionSlide,
  ProblemSlide,
  ConceptSlide,
  ExperienceSlide,
  HardwareSlide,
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      } else if (e.key === 'ArrowLeft') {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const CurrentSlideComponent = slides[currentSlide]

  return (
    <div className="relative w-screen h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      <CurrentSlideComponent />

      {/* Navigation dots */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-50">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-blue-500 w-8'
                : 'bg-gray-600 hover:bg-gray-500'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="fixed bottom-8 right-8 text-gray-400 text-sm font-mono z-50">
        {currentSlide + 1} / {slides.length}
      </div>

      {/* Instructions */}
      <div className="fixed top-8 right-8 text-gray-500 text-xs font-mono z-50">
        ← → 또는 Space: 슬라이드 이동
      </div>
    </div>
  )
}
