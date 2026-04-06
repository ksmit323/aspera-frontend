'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-8 pt-32 pb-16 text-center">
      <div className="max-w-3xl">
        <div className={`inline-flex items-center gap-2 px-4 py-2 bg-bg-card border border-white/[0.08] rounded-full text-sm text-text-secondary mb-8 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          Now available for Linux
        </div>

        <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          Code Smarter.<br />
          <span className="bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent">Ace Your Interviews.</span>
        </h1>

        <p className={`text-xl text-text-secondary mb-10 max-w-xl mx-auto transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          Your AI-powered coding interview assistant. Get real-time guidance, intelligent suggestions, and stay one step ahead.
        </p>

        <div className={`flex flex-wrap gap-4 justify-center transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <a href="#pricing" className="px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30 text-lg">
            Get Aspera →
          </a>
          <a href="#demo" className="px-8 py-4 bg-transparent text-text-primary border border-white/[0.08] font-semibold rounded-lg hover:bg-bg-card hover:border-accent transition-all text-lg">
            Watch Demo
          </a>
        </div>

        <CodePreview />
      </div>
    </section>
  )
}

function CodePreview() {
  return (
    <div className="mt-16 max-w-2xl mx-auto bg-bg-secondary rounded-2xl border border-white/[0.08] overflow-hidden shadow-2xl">
      <div className="flex items-center gap-2 px-4 py-3 bg-bg-card border-b border-white/[0.08]">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-4 text-text-muted text-sm font-mono">interview.py</span>
      </div>
      <div className="p-6 text-left font-mono text-sm text-text-secondary">
        <span className="text-purple-400"># Aspera is listening...</span><br />
        <span className="text-purple-400">def</span> <span className="text-blue-400">two_sum</span>(nums, target):<br />
        &nbsp;&nbsp;&nbsp;&nbsp;seen = {'{'}<span>{'}'}</span><br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">for</span> i, num <span className="text-purple-400">in</span> <span className="text-blue-400">enumerate</span>(nums):<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;complement = target - num<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">if</span> complement <span className="text-purple-400">in</span> seen:<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">return</span> [seen[complement], i]<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;seen[num] = i<br />
        <br />
        <span className="text-text-muted"># 💡 Hint: Consider hash map for O(n) time</span>
      </div>
    </div>
  )
}
