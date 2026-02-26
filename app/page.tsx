import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Ticker } from '@/components/Ticker'
import { Disciplines } from '@/components/Disciplines'
import { Schedule } from '@/components/Schedule'
import { Coaches } from '@/components/Coaches'
import { Location } from '@/components/Location'
import { FinalCTA } from '@/components/FinalCTA'
import { Footer } from '@/components/Footer'

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Ticker />
      <Disciplines />
      <Schedule />
      <Coaches />
      <Location />
      <FinalCTA />
      <Footer />
    </main>
  )
}
