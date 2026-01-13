import { useState } from 'react'
import { motion } from 'framer-motion'
import { Coffee, Cake, Menu, MapPin, Phone } from 'lucide-react'

import Navigation from './components/Navigation'
import Hero from './components/Hero'
import MenuSection from './components/MenuSection'
import Gallery from './components/Gallery'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-coffee-50">
      <Navigation />
      <main>
        <Hero />
        <MenuSection />
        <Gallery />
        <About />
        <Contact />
      </main>
    </div>
  )
}

export default App