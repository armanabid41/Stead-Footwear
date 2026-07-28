import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { categories } from '@/data/products'

export function FeaturedCategories() {
  return (
    <section className="container py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="font-display text-3xl font-extrabold">Shop by Category</h2>
          <p className="mt-1 text-muted-foreground">Find exactly what you are looking for.</p>
        </div>
        <Link to="/categories" className="hidden text-sm font-semibold text-primary hover:underline sm:block">
          View all
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {categories.map((c, idx) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
          >
            <Link to={`/shop?category=${c.id}`} className="group relative block aspect-square overflow-hidden rounded-2xl">
              <img src={c.image} alt={c.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <span className="absolute bottom-3 left-3 font-semibold text-white">{c.name}</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
