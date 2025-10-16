import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Shake Sea - Dive Into a Sea of Flavor',
  description: 'Handcrafted shakes, exotic mocktails, and chilled coffee brews that make waves in Rourkela',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}