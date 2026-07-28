import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Heart, ShoppingCart } from 'lucide-react'
import { type Product } from '@/data/products'
import { useShop } from '@/context/ShopContext'
import { cn, formatPrice } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { RatingStars } from '@/components/RatingStars'

type BadgeVariant = 'sale' | 'new' | 'hot' | 'best'

const badgeVariant = (badge?: Product['badge']): BadgeVariant =>
  badge === 'Sale' ? 'sale' : badge === 'New' ? 'new' : badge === 'Hot' ? 'hot' : 'best'

export function ProductCard({ product }: { product: Product }) {
  const { addToCart, toggleWishlist, isInWishlist } = useShop()
  const wished = isInWishlist(product.id)
  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card"
    >
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Link to={`/product/${product.slug}`}>
          <img
            src={product.images[0]}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
        <div className="absolute left-3 top-3 flex flex-col gap-1">
          {product.badge && <Badge variant={badgeVariant(product.badge)}>{product.badge}</Badge>}
          {discount > 0 && <Badge variant="sale">-{discount}%</Badge>}
        </div>
        <button
          onClick={() => toggleWishlist(product.id)}
          aria-label="Toggle wishlist"
          className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-background/80 backdrop-blur transition hover:scale-110"
        >
          <Heart size={17} className={cn(wished ? 'fill-rose-500 text-rose-500' : 'text-foreground')} />
        </button>
        {!product.inStock && (
          <div className="absolute inset-0 grid place-items-center bg-background/60">
            <span className="rounded-full bg-foreground px-4 py-1 text-xs font-semibold text-background">
              Out of stock
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {product.brand}
        </span>
        <Link
          to={`/product/${product.slug}`}
          className="line-clamp-2 font-semibold leading-snug transition-colors hover:text-primary"
        >
          {product.name}
        </Link>
        <div className="flex items-center gap-2">
          <RatingStars rating={product.rating} />
          <span className="text-xs text-muted-foreground">({product.reviewsCount})</span>
        </div>
        <div className="mt-auto flex items-center justify-between pt-2">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold">{formatPrice(product.price)}</span>
            {product.oldPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(product.oldPrice)}
              </span>
            )}
          </div>
          <button
            disabled={!product.inStock}
            onClick={() => addToCart(product.id)}
            aria-label="Add to cart"
            className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground transition hover:opacity-90 disabled:opacity-40"
          >
            <ShoppingCart size={17} />
          </button>
        </div>
      </div>
    </motion.div>
  )
}
