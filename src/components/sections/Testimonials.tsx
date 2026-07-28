import { motion } from 'framer-motion'
import { reviews } from '@/data/products'
import { RatingStars } from '@/components/RatingStars'

export function Testimonials() {
  return (
    <section className="container py-16">
      <div className="mb-10 text-center">
        <h2 className="font-display text-3xl font-extrabold">Loved by thousands</h2>
        <p className="mt-1 text-muted-foreground">Real words from our happy customers.</p>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {reviews.map((r, idx) => (
          <motion.div
            key={r.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <RatingStars rating={r.rating} />
            <p className="mt-4 text-sm leading-relaxed text-foreground/80">“{r.text}”</p>
            <div className="mt-5 flex items-center gap-3">
              <img src={r.avatar} alt={r.name} className="h-10 w-10 rounded-full object-cover" />
              <div>
                <p className="text-sm font-semibold">{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.date}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
