'use client'

import { useEffect, useRef, useState } from 'react'

const features = [
  { icon: '⚡', title: 'Real-time Assistance', description: 'Get intelligent suggestions and hints as you code. No more getting stuck on tricky problems.' },
  { icon: '🎯', title: 'Interview Optimized', description: 'Trained on thousands of interview questions. Knows what interviewers are looking for.' },
  { icon: '🔒', title: 'Privacy First', description: 'Runs locally on your machine. Your code never leaves your computer unless you want it to.' },
  { icon: '🎨', title: 'Clean Interface', description: 'Minimal, distraction-free UI that stays out of your way when you need to focus.' },
  { icon: '🚀', title: 'Lightning Fast', description: 'Native desktop app with instant responses. No browser tabs, no lag.' },
  { icon: '🐧', title: 'Linux Native', description: 'Built for Linux first. macOS and Windows support coming soon.' },
]

export default function Features() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cardsRef.current.indexOf(entry.target as HTMLDivElement)
          if (entry.isIntersecting && index !== -1) {
            setVisibleCards((prev) => prev.includes(index) ? prev : [...prev, index])
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="features" className="py-24 px-8 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Aspera?</h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          Built by developers, for developers. Every feature designed to give you the edge in technical interviews.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            ref={(el) => { cardsRef.current[index] = el }}
            className={`bg-bg-card border border-white/[0.08] rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1 hover:border-accent hover:shadow-xl hover:shadow-accent/10 ${
              visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-accent to-purple-500 rounded-xl flex items-center justify-center text-2xl mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-text-secondary text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
