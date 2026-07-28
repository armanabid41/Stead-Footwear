import { brands } from '@/data/products'

export function BrandShowcase() {
  const row = [...brands, ...brands]
  return (
    <section className="border-y border-border bg-secondary/30 py-10">
      <div className="container">
        <p className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Trusted by leading brands
        </p>
        <div className="relative overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-14">
            {row.map((b, idx) => (
              <span key={idx} className="font-display text-2xl font-extrabold text-foreground/40 transition hover:text-foreground">
                {b.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
