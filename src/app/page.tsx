'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Demo from '@/components/Demo'
import Pricing from '@/components/Pricing'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <div className="gradient-bg" />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Demo />
        <Pricing />
      </main>
      <Footer />
    </>
  )
}
