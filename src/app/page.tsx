import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Benefits from '../components/Benefits'
import Contact from '../components/Contact'
import ScrollArrow from '../components/ScrollArrow'

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth relative">
      <Hero />
      <About />
      <Services />
      <Benefits />
      <Contact />
      <ScrollArrow />
    </main>
  )
}

