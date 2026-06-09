import { LazyMotion, domAnimation } from 'framer-motion'
import { AboutStats } from './components/AboutStats'
import { ExpertiseBar } from './components/ExpertiseBar'
import { FeaturedWork } from './components/FeaturedWork'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { SkipLink } from './components/SkipLink'

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <SkipLink />
      <Navbar />
      <main id="main-content">
        <Hero />
        <FeaturedWork />
        <ExpertiseBar />
        <AboutStats />
      </main>
      <Footer />
    </LazyMotion>
  )
}

export default App
