import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const slides = [
  {
    title: 'Step into Comfort',
    subtitle: 'Premium sneakers designed for your everyday hustle.',
    cta: 'Shop Sneakers',
    to: '/shop?category=sneakers',
    image: 'https://picsum.photos/seed/hero-sneakers/1600/900', // Pore ashol chobir link dibe
    accent: 'from-neutral-900/90', // Deep black/gray premium vibe
  },
  {
    title: 'Crafted for Elegance',
    subtitle: 'Handmade leather formal shoes for the perfect impression.',
    cta: 'Shop Formal',
    to: '/shop?category=formal',
    image: 'https://picsum.photos/seed/hero-formal/1600/900', // Pore ashol chobir link dibe
    accent: 'from-stone-800/90', // Earthy/brownish leather vibe
  },
  {
    title: 'Built to Last',
    subtitle: 'Durable and stylish boots ready for any adventure.',
    cta: 'Explore Boots',
    to: '/shop?category=boots',
    image: 'https://picsum.photos/seed/hero-boots/1600/900', // Pore ashol chobir link dibe
    accent: 'from-slate-800/90', // Cool dark slate vibe
  },
]

export function HeroSlider() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 5500)
    return () => clearInterval(t)
  }, [])
  const s = slides[i]
  return (
    <section className="container pt-6">
      <div className="relative h-[440px] overflow-hidden rounded-3xl md:h-[540px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0"
          >
            <img src={s.image} alt="" className="h-full w-full object-cover" />
            <div className={`absolute inset-0 bg-gradient-to-r ${s.accent} to-transparent`} />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 flex items-center">
          <div className="w-full px-6 md:px-14">
            <motion.div
              key={`t-${i}`}
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-lg text-white"
            >
              <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur">
                New Arrivals
              </span>
              <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight md:text-6xl">{s.title}</h1>
              <p className="mt-4 text-base text-white/90 md:text-lg">{s.subtitle}</p>
              <Button asChild size="lg" className="mt-6 bg-white text-neutral-900 hover:bg-white/90">
                <Link to={s.to}>
                  {s.cta}
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Go to slide ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-2 rounded-full transition-all ${idx === i ? 'w-8 bg-white' : 'w-2 bg-white/50'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}