import { useState } from 'react'
import { motion } from 'framer-motion'
import { Camera, X } from 'lucide-react'

const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1521017432531-e1f1c9dc1d4a?w=800&q=80',
  'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=800&q=80',
  'https://images.unsplash.com/photo-1498804103079-a4c4b34f0d1f?w=800&q=80',
  'https://images.unsplash.com/photo-1525193691357-ccf4b9d43b75?w=800&q=80',
  'https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=800&q=80',
  'https://images.unsplash.com/photo-1519916829838-4d7327821524?w=800&q=80'
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section id="gallery" className="py-16 bg-coffee-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center space-x-3 mb-4">
            <Camera size={32} className="text-coffee-700" />
            <h2 className="text-4xl font-bold text-coffee-900">Наша Галерея</h2>
          </div>
          <p className="text-coffee-600 max-w-xl mx-auto">
            Погрузитесь в атмосферу нашей кофейни через фотографии
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY_IMAGES.map((image, index) => (
            <motion.div
              key={image}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedImage(image)}
              className="cursor-pointer hover:opacity-80 transition"
            >
              <img 
                src={image} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-48 object-cover rounded-lg"
              />
            </motion.div>
          ))}
        </div>

        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              src={selectedImage}
              alt="Enlarged gallery image"
              className="max-w-full max-h-full object-contain"
            />
            <button 
              className="absolute top-4 right-4 text-white"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}