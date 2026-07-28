import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  { q: 'Is this a real store?', a: 'No — LUXE is a front-end portfolio demo. No orders, payments or accounts are real.' },
  { q: 'How long does shipping take?', a: 'In this demo we show 2–5 business days with free shipping on orders over $99.' },
  { q: 'What is your return policy?', a: 'We showcase a 30-day hassle-free return policy on all items.' },
  { q: 'Do you ship internationally?', a: 'Yes, the demo highlights shipping to 30+ countries worldwide.' },
  { q: 'How can I track my order?', a: 'A real store would email a tracking link; here it is illustrative only.' },
  { q: 'What payment methods are accepted?', a: 'The demo checkout accepts placeholder card details — never enter real ones.' },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div className="container max-w-3xl py-12">
      <div className="mb-10 text-center">
        <h1 className="font-display text-4xl font-extrabold">Frequently asked questions</h1>
        <p className="mt-2 text-muted-foreground">Everything you need to know about this demo store.</p>
      </div>
      <div className="space-y-3">
        {faqs.map((f, idx) => {
          const isOpen = open === idx
          return (
            <div key={idx} className="overflow-hidden rounded-2xl border border-border">
              <button onClick={() => setOpen(isOpen ? null : idx)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold">
                {f.q}
                <span className="shrink-0 text-primary">{isOpen ? <Minus size={18} /> : <Plus size={18} />}</span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>
                    <p className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </div>
  )
}
