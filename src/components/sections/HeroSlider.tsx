import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const slides = [
  {
    title: 'Sound without limits',
    subtitle: 'Studio-grade audio, engineered for everyday life.',
    cta: 'Shop Audio',
    to: '/shop?category=audio',
    image: 'https://picsum.photos/seed/hero-audio/1600/900',
    accent: 'from-violet-700/80',
  },
  {
    title: 'Wear the future',
    subtitle: 'Smartwatches that keep up with every ambition.',
    cta: 'Shop Wearables',
    to: '/shop?category=wearables',
    image: 'https://picsum.photos/seed/hero-wear/1600/900',
    accent: 'from-sky-700/80',
  },
  {
    title: 'Power your world',
    subtitle: 'Flagship phones & laptops at demo-store prices.',
    cta: 'Shop New Arrivals',
    to: '/shop',
    image: 'https://picsum.photos/seed/hero-tech/1600/900',
    accent: 'from-emerald-700/80',
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
              <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur">New Season</span>
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
