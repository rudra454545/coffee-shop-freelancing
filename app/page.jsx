'use client'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import Hero from '@/components/sections/hero'
import Vibe from '@/components/sections/vibe'
import Menu from '@/components/sections/menu'
import Gallery from '@/components/sections/gallery'
import InstaPosts from '@/components/sections/insta-posts'
import Testimonials from '@/components/sections/testimonials'
import PeakHours from '@/components/sections/peak-hours'
import Location from '@/components/sections/location'
import Newsletter from '@/components/sections/newsletter'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Vibe />
      <Menu />
      <Gallery />
      <InstaPosts />
      <Testimonials />
      <PeakHours />
      <Location />
      <Newsletter />
      <Footer />
    </main>
  )
}
