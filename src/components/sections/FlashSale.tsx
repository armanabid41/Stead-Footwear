import { useEffect, useState } from 'react'
import { Zap } from 'lucide-react'
import { products } from '@/data/products'
import { ProductCard } from '@/components/ProductCard'

function useCountdown(hours: number) {
  const [ms, setMs] = useState(hours * 3600 * 1000)
  useEffect(() => {
    const t = setInterval(
      () => setMs((v) => (v > 1000 ? v - 1000 : hours * 3600 * 1000)),
      1000,
    )
    return () => clearInterval(t)
  }, [hours])
  const h = Math.floor(ms / 3600000)
  const m = Math.floor((ms % 3600000) / 60000)
  const s = Math.floor((ms % 60000) / 1000)
  return [h, m, s].map((n) => String(n).padStart(2, '0'))
}

export function FlashSale() {
  const items = products.filter((p) => p.flashSale).slice(0, 4)
  const parts = useCountdown(8)
  return (
    <section className="container py-16">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary text-primary-foreground">
            <Zap size={22} className="fill-current" />
          </span>
          <div>
            <h2 className="font-display text-3xl font-extrabold">Flash Sale</h2>
            <p className="text-muted-foreground">Limited-time deals, going fast.</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {parts.map((u, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-foreground font-mono text-lg font-bold text-background">{u}</span>
              {idx < 2 && <span className="font-bold">:</span>}
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  )
}
