import { useMemo, useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { products, categories, brands } from '@/data/products'
import { ProductCard } from '@/components/ProductCard'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
]

export default function Shop() {
  const [params, setParams] = useSearchParams()
  const q = params.get('q') ?? ''
  const category = params.get('category') ?? 'all'
  const [brand, setBrand] = useState('all')
  const [maxPrice, setMaxPrice] = useState(1500)
  const [sort, setSort] = useState('featured')
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    setShowFilters(false)
  }, [category])

  const setCategory = (c: string) => {
    const next = new URLSearchParams(params)
    if (c === 'all') next.delete('category')
    else next.set('category', c)
    setParams(next, { replace: true })
  }

  const filtered = useMemo(() => {
    let list = products.slice()
    if (q) {
      const t = q.toLowerCase()
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(t) ||
          p.brand.toLowerCase().includes(t) ||
          p.category.toLowerCase().includes(t),
      )
    }
    if (category !== 'all') list = list.filter((p) => p.category === category)
    if (brand !== 'all') list = list.filter((p) => p.brand.toLowerCase() === brand)
    list = list.filter((p) => p.price <= maxPrice)
    switch (sort) {
      case 'price-asc':
        list.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        list.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        list.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }
    return list
  }, [q, category, brand, maxPrice, sort])

  const Filters = (
    <div className="space-y-8">
      <div>
        <h3 className="mb-3 text-sm font-bold uppercase tracking-wide">Category</h3>
        <div className="flex flex-col gap-1">
          <button onClick={() => setCategory('all')} className={cn('rounded-lg px-3 py-2 text-left text-sm', category === 'all' ? 'bg-primary/10 font-semibold text-primary' : 'hover:bg-accent')}>
            All Products
          </button>
          {categories.map((c) => (
            <button key={c.id} onClick={() => setCategory(c.id)} className={cn('rounded-lg px-3 py-2 text-left text-sm', category === c.id ? 'bg-primary/10 font-semibold text-primary' : 'hover:bg-accent')}>
              {c.name}
            </button>
          ))}
        </div>
      </div>
      <div>
        <h3 className="mb-3 text-sm font-bold uppercase tracking-wide">Brand</h3>
        <select value={brand} onChange={(e) => setBrand(e.target.value)} className="h-10 w-full rounded-lg border border-border bg-background px-3 text-sm">
          <option value="all">All Brands</option>
          {brands.map((b) => (
            <option key={b.id} value={b.id}>{b.name}</option>
          ))}
        </select>
      </div>
      <div>
        <h3 className="mb-3 text-sm font-bold uppercase tracking-wide">Max Price: ${maxPrice}</h3>
        <input type="range" min={0} max={1500} step={50} value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className="w-full accent-[hsl(var(--primary))]" />
      </div>
    </div>
  )

  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="font-display text-4xl font-extrabold">{q ? `Search: “${q}”` : 'Shop All'}</h1>
        <p className="mt-1 text-muted-foreground">{filtered.length} product{filtered.length !== 1 ? 's' : ''} found</p>
      </div>
      <div className="flex items-center justify-between gap-3 lg:hidden">
        <Button variant="outline" onClick={() => setShowFilters(true)}>
          <SlidersHorizontal size={16} /> Filters
        </Button>
        <select value={sort} onChange={(e) => setSort(e.target.value)} className="h-11 rounded-full border border-border bg-background px-4 text-sm">
          {sortOptions.map((o) => (
            <option key={o.id} value={o.id}>{o.label}</option>
          ))}
        </select>
      </div>
      <div className="mt-6 grid gap-8 lg:grid-cols-[240px_1fr]">
        <aside className="hidden lg:block">
          <div className="sticky top-24">{Filters}</div>
        </aside>
        <div>
          <div className="mb-6 hidden items-center justify-end lg:flex">
            <select value={sort} onChange={(e) => setSort(e.target.value)} className="h-11 rounded-full border border-border bg-background px-4 text-sm">
              {sortOptions.map((o) => (
                <option key={o.id} value={o.id}>{o.label}</option>
              ))}
            </select>
          </div>
          {filtered.length ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          ) : (
            <div className="grid place-items-center rounded-2xl border border-dashed border-border py-24 text-center">
              <p className="text-lg font-semibold">No products found</p>
              <p className="mt-1 text-sm text-muted-foreground">Try adjusting your filters or search.</p>
            </div>
          )}
        </div>
      </div>

      {showFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowFilters(false)} />
          <div className="absolute bottom-0 left-0 right-0 max-h-[85vh] overflow-y-auto rounded-t-3xl bg-background p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-bold">Filters</h2>
              <button onClick={() => setShowFilters(false)} aria-label="Close"><X /></button>
            </div>
            {Filters}
            <Button className="mt-8 w-full" onClick={() => setShowFilters(false)}>Show {filtered.length} results</Button>
          </div>
        </div>
      )}
    </div>
  )
}
