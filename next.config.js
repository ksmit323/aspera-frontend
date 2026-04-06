/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: { unoptimized: true },
  // Exclude API routes from static export (they're placeholders for now)
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'].filter(ext => !ext.includes('route'))
}

module.exports = nextConfig
