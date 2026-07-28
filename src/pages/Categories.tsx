import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { categories, products } from '@/data/products'

export default function Categories() {
  const count = (id: string) => products.filter((p) => p.category === id).length
  return (
    <div className="container py-12">
      <div className="mb-10 text-center">
        <h1 className="font-display text-4xl font-extrabold">Browse Categories</h1>
        <p className="mt-2 text-muted-foreground">Explore our full range across {categories.length} categories.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c, idx) => (
          <motion.div key={c.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.06 }}>
            <Link to={`/shop?category=${c.id}`} className="group relative block h-64 overflow-hidden rounded-3xl">
              <img src={c.image} alt={c.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-5 left-5 text-white">
                <h3 className="font-display text-2xl font-extrabold">{c.name}</h3>
                <p className="text-sm text-white/80">{c.description}</p>
                <span className="mt-1 inline-block text-xs font-semibold text-white/70">{count(c.id)} products</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
