import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'
import { products } from '@/data/products'
import { useShop } from '@/context/ShopContext'
import { ProductCard } from '@/components/ProductCard'
import { Button } from '@/components/ui/button'

export default function Wishlist() {
  const { wishlist } = useShop()
  const items = products.filter((p) => wishlist.includes(p.id))
  if (!items.length) {
    return (
      <div className="container grid place-items-center py-24 text-center">
        <Heart size={56} className="text-muted-foreground/40" />
        <h1 className="mt-6 font-display text-3xl font-extrabold">Your wishlist is empty</h1>
        <p className="mt-2 text-muted-foreground">Tap the heart on any product to save it here.</p>
        <Link to="/shop" className="mt-6"><Button size="lg">Explore Products</Button></Link>
      </div>
    )
  }
  return (
    <div className="container py-10">
      <h1 className="mb-8 font-display text-4xl font-extrabold">My Wishlist <span className="text-muted-foreground">({items.length})</span></h1>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}
