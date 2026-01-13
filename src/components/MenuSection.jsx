import { useState } from 'react'
import { motion } from 'framer-motion'
import { Coffee, Cake } from 'lucide-react'

const MENU_ITEMS = [
  { 
    name: 'Эспрессо', 
    description: 'Классический итальянский кофе', 
    price: '120₽', 
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80'
  },
  { 
    name: 'Латте', 
    description: 'Нежный молочный напиток', 
    price: '180₽', 
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1517487881294-2787deaddaac?w=800&q=80'
  },
  { 
    name: 'Чизкейк', 
    description: 'Классический нью-йорк стиль', 
    price: '250₽', 
    category: 'dessert',
    image: 'https://images.unsplash.com/photo-1592409487440-f63a0ac9b4f7?w=800&q=80'
  },
  { 
    name: 'Морковный Торт', 
    description: 'Домашний рецепт с орехами', 
    price: '220₽', 
    category: 'dessert',
    image: 'https://images.unsplash.com/photo-1606188074911-cd6dae79d2f0?w=800&q=80'
  }
]

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredItems = activeCategory === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory)

  return (
    <section id="menu" className="py-16 bg-coffee-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center space-x-3 mb-4">
            <Coffee size={32} className="text-coffee-700" />
            <h2 className="text-4xl font-bold text-coffee-900">Наше Меню</h2>
          </div>
          <p className="text-coffee-600 max-w-xl mx-auto">
            Откройте для себя наши изысканные напитки и десерты, созданные с любовью
          </p>
        </div>

        <div className="flex justify-center space-x-4 mb-8">
          {[
            { label: 'Все', value: 'all' },
            { label: 'Кофе', value: 'coffee' },
            { label: 'Десерты', value: 'dessert' }
          ].map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setActiveCategory(value)}
              className={`px-4 py-2 rounded-full transition ${
                activeCategory === value 
                  ? 'bg-coffee-700 text-white' 
                  : 'bg-coffee-200 text-coffee-800 hover:bg-coffee-300'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-coffee-900 mb-2">{item.name}</h3>
                <p className="text-coffee-600 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-coffee-700 font-bold">{item.price}</span>
                  <button className="bg-coffee-500 text-white px-3 py-1 rounded-full hover:bg-coffee-600 transition">
                    Заказать
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}