import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Heart, ShoppingCart, Zap, Check, Truck, Shield, RotateCcw, GitCompare } from 'lucide-react'
import { getProductBySlug, getRelatedProducts, reviews } from '@/data/products'
import { useShop } from '@/context/ShopContext'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { RatingStars } from '@/components/RatingStars'
import { ProductCard } from '@/components/ProductCard'
import { cn, formatPrice } from '@/lib/utils'

const perks = [
  { icon: Truck, label: 'Free shipping over $99' },
  { icon: RotateCcw, label: '30-day returns' },
  { icon: Shield, label: '2-year warranty' },
]

export default function ProductDetails() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const product = slug ? getProductBySlug(slug) : undefined
  const { addToCart, toggleWishlist, isInWishlist, toggleCompare, isInCompare } = useShop()

  const [activeImg, setActiveImg] = useState(0)
  const [color, setColor] = useState<string | undefined>(product?.colors[0])
  const [size, setSize] = useState<string | undefined>(product?.sizes?.[0])
  const [qty, setQty] = useState(1)
  const [zoom, setZoom] = useState(false)
  const [tab, setTab] = useState<'desc' | 'features' | 'reviews'>('desc')

  if (!product) {
    return (
      <div className="container grid place-items-center py-32 text-center">
        <h1 className="font-display text-3xl font-extrabold">Product not found</h1>
        <Link to="/shop" className="mt-4"><Button>Back to Shop</Button></Link>
      </div>
    )
  }

  const related = getRelatedProducts(product)
  const wished = isInWishlist(product.id)
  const compared = isInCompare(product.id)
  const discount = product.oldPrice ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) : 0

  const buyNow = () => {
    addToCart(product.id, { color, size, quantity: qty })
    navigate('/checkout')
  }

  return (
    <div className="container py-8">
      <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-primary">Home</Link><span>/</span>
        <Link to="/shop" className="hover:text-primary">Shop</Link><span>/</span>
        <span className="text-foreground">{product.name}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <div className="relative aspect-square overflow-hidden rounded-3xl bg-muted" onMouseEnter={() => setZoom(true)} onMouseLeave={() => setZoom(false)}>
            <img src={product.images[activeImg]} alt={product.name} className={cn('h-full w-full object-cover transition-transform duration-300', zoom && 'scale-150')} />
            {product.badge && (
              <Badge className="absolute left-4 top-4" variant={product.badge === 'Sale' ? 'sale' : product.badge === 'New' ? 'new' : product.badge === 'Hot' ? 'hot' : 'best'}>{product.badge}</Badge>
            )}
          </div>
          <div className="mt-4 flex gap-3">
            {product.images.map((im, idx) => (
              <button key={idx} onClick={() => setActiveImg(idx)} className={cn('h-20 w-20 overflow-hidden rounded-xl border-2', activeImg === idx ? 'border-primary' : 'border-transparent')}>
                <img src={im} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <span className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">{product.brand}</span>
          <h1 className="mt-2 font-display text-3xl font-extrabold md:text-4xl">{product.name}</h1>
          <div className="mt-3 flex items-center gap-3">
            <RatingStars rating={product.rating} size={16} />
            <span className="text-sm text-muted-foreground">{product.rating} ({product.reviewsCount} reviews)</span>
          </div>
          <div className="mt-5 flex items-center gap-3">
            <span className="text-3xl font-extrabold">{formatPrice(product.price)}</span>
            {product.oldPrice && <span className="text-lg text-muted-foreground line-through">{formatPrice(product.oldPrice)}</span>}
            {discount > 0 && <Badge variant="sale">-{discount}%</Badge>}
          </div>
          <p className="mt-5 leading-relaxed text-foreground/80">{product.description}</p>

          {product.colors.length > 0 && (
            <div className="mt-6">
              <p className="mb-2 text-sm font-semibold">Color</p>
              <div className="flex gap-2">
                {product.colors.map((c) => (
                  <button key={c} onClick={() => setColor(c)} aria-label={`Select color ${c}`} className={cn('h-9 w-9 rounded-full border-2 transition', color === c ? 'border-primary ring-2 ring-primary/30' : 'border-border')} style={{ backgroundColor: c }} />
                ))}
              </div>
            </div>
          )}
          {product.sizes && product.sizes.length > 0 && (
            <div className="mt-6">
              <p className="mb-2 text-sm font-semibold">Option</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((sz) => (
                  <button key={sz} onClick={() => setSize(sz)} className={cn('rounded-xl border px-4 py-2 text-sm font-medium transition', size === sz ? 'border-primary bg-primary/10 text-primary' : 'border-border hover:bg-accent')}>{sz}</button>
                ))}
              </div>
            </div>
          )}

          <div className="mt-6 flex items-center gap-4">
            <div className="flex items-center rounded-full border border-border">
              <button onClick={() => setQty((v) => Math.max(1, v - 1))} className="grid h-11 w-11 place-items-center text-lg">-</button>
              <span className="w-10 text-center font-semibold">{qty}</span>
              <button onClick={() => setQty((v) => v + 1)} className="grid h-11 w-11 place-items-center text-lg">+</button>
            </div>
            <span className={cn('text-sm font-medium', product.inStock ? 'text-emerald-600' : 'text-destructive')}>
              {product.inStock ? 'In stock' : 'Out of stock'}
            </span>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button size="lg" disabled={!product.inStock} onClick={() => addToCart(product.id, { color, size, quantity: qty })}><ShoppingCart size={18} /> Add to Cart</Button>
            <Button size="lg" variant="secondary" disabled={!product.inStock} onClick={buyNow}><Zap size={18} /> Buy Now</Button>
            <Button size="icon" variant="outline" aria-label="Add to wishlist" onClick={() => toggleWishlist(product.id)} className="h-12 w-12">
              <Heart size={18} className={cn(wished && 'fill-rose-500 text-rose-500')} />
            </Button>
            <Button size="icon" variant="outline" aria-label="Compare" onClick={() => toggleCompare(product.id)} className="h-12 w-12">
              <GitCompare size={18} className={cn(compared && 'text-primary')} />
            </Button>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3 text-center text-xs">
            {perks.map(({ icon: Icon, label }) => (
              <div key={label} className="rounded-2xl border border-border p-4">
                <Icon className="mx-auto mb-2 text-primary" size={20} />
                <span className="text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-14">
        <div className="flex gap-2 border-b border-border">
          {([['desc', 'Description'], ['features', 'Features'], ['reviews', `Reviews (${product.reviewsCount})`]] as const).map(([id, label]) => (
            <button key={id} onClick={() => setTab(id)} className={cn('border-b-2 px-4 py-3 text-sm font-semibold transition', tab === id ? 'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-foreground')}>{label}</button>
          ))}
        </div>
        <div className="py-6">
          {tab === 'desc' && <p className="max-w-3xl leading-relaxed text-foreground/80">{product.description}</p>}
          {tab === 'features' && (
            <ul className="grid max-w-2xl gap-3 sm:grid-cols-2">
              {product.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm"><Check size={16} className="text-primary" /> {f}</li>
              ))}
            </ul>
          )}
          {tab === 'reviews' && (
            <div className="grid max-w-3xl gap-5">
              {reviews.map((r) => (
                <div key={r.id} className="rounded-2xl border border-border p-5">
                  <div className="flex items-center gap-3">
                    <img src={r.avatar} alt={r.name} className="h-10 w-10 rounded-full object-cover" />
                    <div>
                      <p className="text-sm font-semibold">{r.name}</p>
                      <RatingStars rating={r.rating} />
                    </div>
                    <span className="ml-auto text-xs text-muted-foreground">{r.date}</span>
                  </div>
                  <p className="mt-3 text-sm text-foreground/80">{r.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-10">
          <h2 className="mb-6 font-display text-2xl font-extrabold">You may also like</h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
