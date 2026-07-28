import { Link } from 'react-router-dom'
import { type Product } from '@/data/products'
import { ProductCard } from '@/components/ProductCard'

interface ProductRailProps {
  title: string
  subtitle?: string
  products: Product[]
  viewAllHref?: string
}

export function ProductRail({ title, subtitle, products, viewAllHref }: ProductRailProps) {
  if (!products.length) return null
  return (
    <section className="container py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="font-display text-3xl font-extrabold">{title}</h2>
          {subtitle && <p className="mt-1 text-muted-foreground">{subtitle}</p>}
        </div>
        {viewAllHref && (
          <Link to={viewAllHref} className="hidden text-sm font-semibold text-primary hover:underline sm:block">
            View all
          </Link>
        )}
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  )
}
