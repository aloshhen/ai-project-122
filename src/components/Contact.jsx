import { motion } from 'framer-motion'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-coffee-700 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center space-x-3 mb-4">
            <MapPin size={32} className="text-amber-400" />
            <h2 className="text-4xl font-bold">Контакты</h2>
          </div>
          <p className="max-w-xl mx-auto text-coffee-200">
            Мы всегда рады видеть вас. Свяжитесь с нами любым удобным способом.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-coffee-600 rounded-xl p-6 text-center"
          >
            <MapPin size={48} className="mx-auto mb-4 text-amber-400" />
            <h3 className="text-xl font-bold mb-2">Адрес</h3>
            <p className="text-coffee-200">
              ул. Кофейная, 12
              Москва, Россия
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-coffee-600 rounded-xl p-6 text-center"
          >
            <Phone size={48} className="mx-auto mb-4 text-amber-400" />
            <h3 className="text-xl font-bold mb-2">Телефон</h3>
            <p className="text-coffee-200">
              +7 (999) 123-45-67
              +7 (495) 678-90-12
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-coffee-600 rounded-xl p-6 text-center"
          >
            <Mail size={48} className="mx-auto mb-4 text-amber-400" />
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-coffee-200">
              info@coffeeshop.ru
              support@coffeeshop.ru
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 bg-coffee-600 rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold text-center mb-6">Обратная Связь</h3>
          <form className="max-w-xl mx-auto grid md:grid-cols-2 gap-4">
            <input 
              type="text" 
              placeholder="Имя" 
              className="w-full p-3 rounded-lg bg-coffee-500 text-white placeholder-coffee-300"
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full p-3 rounded-lg bg-coffee-500 text-white placeholder-coffee-300"
            />
            <textarea 
              placeholder="Ваше сообщение" 
              className="w-full p-3 rounded-lg bg-coffee-500 text-white placeholder-coffee-300 md:col-span-2"
              rows="4"
            ></textarea>
            <button 
              type="submit" 
              className="w-full md:col-span-2 bg-amber-500 text-coffee-900 p-3 rounded-lg hover:bg-amber-600 transition"
            >
              Отправить Сообщение
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}