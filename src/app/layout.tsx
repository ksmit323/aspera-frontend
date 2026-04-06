import type { Metadata } from 'next'
import './globals.css'
import '@rainbow-me/rainbowkit/styles.css'
import { Web3Provider } from '@/lib/Web3Provider'

export const metadata: Metadata = {
  title: 'Aspera — Code Smarter in Interviews',
  description: 'Your AI-powered coding interview assistant. Get real-time guidance and intelligent suggestions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Web3Provider>{children}</Web3Provider>
      </body>
    </html>
  )
}
