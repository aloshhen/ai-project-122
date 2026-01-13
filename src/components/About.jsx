import { motion } from 'framer-motion'
import { Home, Heart } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-16 bg-coffee-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center space-x-3 mb-4">
            <Home size={32} className="text-coffee-700" />
            <h2 className="text-4xl font-bold text-coffee-900">О Нашей Кофейне</h2>
          </div>
          <p className="text-coffee-600 max-w-xl mx-auto">
            Мы создаем пространство, где каждый чувствует себя как дома
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center space-x-4 mb-4">
              <Heart size={32} className="text-coffee-700" />
              <h3 className="text-2xl font-bold text-coffee-900">Наша История</h3>
            </div>
            <p className="text-coffee-600">
              Основанная в 2015 году, наша кофейня выросла из маленькой мечты создать 
              уютное место, где люди могут насладиться качественным кофе и домашней атмосферой.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center space-x-4 mb-4">
              <Heart size={32} className="text-coffee-700" />
              <h3 className="text-2xl font-bold text-coffee-900">Наша Философия</h3>
            </div>
            <p className="text-coffee-600">
              Мы верим, что кофе - это больше, чем просто напиток. Это искусство, 
              культура и возможность создать незабываемые моменты.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}