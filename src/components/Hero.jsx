import { motion } from 'framer-motion'
import { Coffee, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1507915135956-700d1bd6e36d?w=800&q=80)',
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(0,0,0,0.5)'
      }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <div className="flex justify-center items-center space-x-3 mb-4">
            <Coffee size={40} className="text-amber-400" />
            <h1 className="text-4xl md:text-6xl font-bold">Уютная Кофейня</h1>
          </div>
          <p className="text-lg md:text-xl mb-8 text-coffee-100">
            Место, где каждый глоток – это история, каждый десерт – искусство
          </p>
          <motion.a
            href="#menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-3 bg-amber-500 text-coffee-900 px-6 py-3 rounded-full hover:bg-amber-600 transition"
          >
            <span>Наше Меню</span>
            <ArrowRight />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}