import { Link } from 'react-router-dom'
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react'
import { useShop } from '@/context/ShopContext'
import { Button } from '@/components/ui/button'
import { formatPrice } from '@/lib/utils'

export default function Cart() {
  const { cartProducts, updateQuantity, removeFromCart, cartSubtotal, clearCart } = useShop()
  const shipping = cartSubtotal > 99 || cartSubtotal === 0 ? 0 : 9
  const total = cartSubtotal + shipping

  if (!cartProducts.length) {
    return (
      <div className="container grid place-items-center py-24 text-center">
        <ShoppingBag size={56} className="text-muted-foreground/40" />
        <h1 className="mt-6 font-display text-3xl font-extrabold">Your cart is empty</h1>
        <p className="mt-2 text-muted-foreground">Looks like you have not added anything yet.</p>
        <Link to="/shop" className="mt-6"><Button size="lg">Start Shopping</Button></Link>
      </div>
    )
  }

  return (
    <div className="container py-10">
      <h1 className="mb-8 font-display text-4xl font-extrabold">Shopping Cart</h1>
      <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
        <div className="space-y-4">
          {cartProducts.map(({ product, item }) => (
            <div key={product.id} className="flex gap-4 rounded-2xl border border-border p-4">
              <Link to={`/product/${product.slug}`} className="h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-muted">
                <img src={product.images[0]} alt={product.name} className="h-full w-full object-cover" />
              </Link>
              <div className="flex flex-1 flex-col">
                <div className="flex justify-between gap-2">
                  <div>
                    <Link to={`/product/${product.slug}`} className="font-semibold hover:text-primary">{product.name}</Link>
                    <p className="text-xs text-muted-foreground">{product.brand}{item.color ? ` • ${item.color}` : ''}{item.size ? ` • ${item.size}` : ''}</p>
                  </div>
                  <button onClick={() => removeFromCart(product.id)} aria-label="Remove item" className="text-muted-foreground hover:text-destructive"><Trash2 size={18} /></button>
                </div>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center rounded-full border border-border">
                    <button onClick={() => updateQuantity(product.id, item.quantity - 1)} className="grid h-9 w-9 place-items-center">-</button>
                    <span className="w-8 text-center text-sm font-semibold">{item.quantity}</span>
                    <button onClick={() => updateQuantity(product.id, item.quantity + 1)} className="grid h-9 w-9 place-items-center">+</button>
                  </div>
                  <span className="font-bold">{formatPrice(product.price * item.quantity)}</span>
                </div>
              </div>
            </div>
          ))}
          <button onClick={clearCart} className="text-sm text-muted-foreground hover:text-destructive">Clear cart</button>
        </div>

        <aside className="h-fit rounded-2xl border border-border p-6 lg:sticky lg:top-24">
          <h2 className="mb-4 text-lg font-bold">Order Summary</h2>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span className="font-medium">{formatPrice(cartSubtotal)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Shipping</span><span className="font-medium">{shipping === 0 ? 'Free' : formatPrice(shipping)}</span></div>
            <div className="flex justify-between border-t border-border pt-3 text-base font-bold"><span>Total</span><span>{formatPrice(total)}</span></div>
          </div>
          <Link to="/checkout" className="mt-6 block"><Button className="w-full" size="lg">Checkout <ArrowRight size={18} /></Button></Link>
          <Link to="/shop" className="mt-3 block text-center text-sm text-muted-foreground hover:text-primary">Continue shopping</Link>
        </aside>
      </div>
    </div>
  )
}
