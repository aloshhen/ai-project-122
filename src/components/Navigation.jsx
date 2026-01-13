import { useState } from 'react'
import { motion } from 'framer-motion'
import { Coffee, Cake, Menu, MapPin, Phone } from 'lucide-react'

const NAV_ITEMS = [
  { label: 'Главная', href: '#hero', icon: Coffee },
  { label: 'Меню', href: '#menu', icon: Cake },
  { label: 'Галерея', href: '#gallery', icon: Menu },
  { label: 'О нас', href: '#about', icon: MapPin },
  { label: 'Контакты', href: '#contact', icon: Phone }
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (e, href) => {
    e.preventDefault()
    const section = document.querySelector(href)
    section.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-coffee-100/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Coffee className="text-coffee-700" />
          <span className="font-bold text-coffee-900">Кофейня</span>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {NAV_ITEMS.map(({ label, href, icon: Icon }) => (
            <a 
              key={href} 
              href={href} 
              onClick={(e) => scrollToSection(e, href)}
              className="flex items-center space-x-2 text-coffee-700 hover:text-coffee-900 transition"
            >
              <Icon size={16} />
              <span>{label}</span>
            </a>
          ))}
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-coffee-100 md:hidden"
          >
            {NAV_ITEMS.map(({ label, href, icon: Icon }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => scrollToSection(e, href)}
                className="block px-4 py-3 border-b border-coffee-200 flex items-center space-x-2"
              >
                <Icon size={16} />
                <span>{label}</span>
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  )
}