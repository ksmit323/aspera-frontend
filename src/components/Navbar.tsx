'use client'

import { WalletConnectButton } from './WalletConnectButton'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-4 bg-bg-primary/80 backdrop-blur-xl border-b border-white/[0.08]">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent">
          Aspera
        </div>
        <ul className="hidden md:flex gap-8 list-none">
          <li><a href="#features" className="text-text-secondary hover:text-text-primary transition-colors font-medium">Features</a></li>
          <li><a href="#demo" className="text-text-secondary hover:text-text-primary transition-colors font-medium">Demo</a></li>
          <li><a href="#pricing" className="text-text-secondary hover:text-text-primary transition-colors font-medium">Get Aspera</a></li>
        </ul>
        <div className="flex items-center gap-4">
          <WalletConnectButton />
        </div>
      </div>
    </nav>
  )
}
