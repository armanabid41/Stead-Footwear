import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, Lock } from 'lucide-react'
import { useShop } from '@/context/ShopContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { formatPrice } from '@/lib/utils'

export default function Checkout() {
  const { cartProducts, cartSubtotal, clearCart } = useShop()
  const [placed, setPlaced] = useState(false)
  const shipping = cartSubtotal > 99 || cartSubtotal === 0 ? 0 : 9
  const total = cartSubtotal + shipping

  const placeOrder = (e: FormEvent) => {
    e.preventDefault()
    setPlaced(true)
    clearCart()
  }

  if (placed) {
    return (
      <div className="container grid place-items-center py-24 text-center">
        <CheckCircle2 size={64} className="text-emerald-500" />
        <h1 className="mt-6 font-display text-3xl font-extrabold">Order placed! (demo)</h1>
        <p className="mt-2 max-w-md text-muted-foreground">Thank you for shopping with LUXE. This is a demo store, so no real order was created and no payment was taken.</p>
        <Link to="/shop" className="mt-6"><Button size="lg">Continue Shopping</Button></Link>
      </div>
    )
  }

  if (!cartProducts.length) {
    return (
      <div className="container grid place-items-center py-24 text-center">
        <h1 className="font-display text-3xl font-extrabold">Your cart is empty</h1>
        <Link to="/shop" className="mt-4"><Button>Go to Shop</Button></Link>
      </div>
    )
  }

  return (
    <div className="container py-10">
      <h1 className="mb-8 font-display text-4xl font-extrabold">Checkout</h1>
      <form onSubmit={placeOrder} className="grid gap-8 lg:grid-cols-[1fr_360px]">
        <div className="space-y-8">
          <section>
            <h2 className="mb-4 text-lg font-bold">Contact</h2>
            <Input required type="email" placeholder="Email address" />
          </section>
          <section>
            <h2 className="mb-4 text-lg font-bold">Shipping address</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Input required placeholder="First name" />
              <Input required placeholder="Last name" />
              <Input required placeholder="Address" className="sm:col-span-2" />
              <Input required placeholder="City" />
              <Input required placeholder="Postal code" />
              <Input required placeholder="Country" className="sm:col-span-2" />
              <Input required placeholder="Phone" className="sm:col-span-2" />
            </div>
          </section>
          <section>
            <h2 className="mb-4 text-lg font-bold">Payment</h2>
            <div className="rounded-xl border border-border p-4">
              <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground"><Lock size={14} /> Demo only — do not enter real card details.</div>
              <div className="grid gap-4">
                <Input placeholder="Card number" defaultValue="4242 4242 4242 4242" />
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="MM / YY" defaultValue="12 / 30" />
                  <Input placeholder="CVC" defaultValue="123" />
                </div>
              </div>
            </div>
          </section>
        </div>

        <aside className="h-fit rounded-2xl border border-border p-6 lg:sticky lg:top-24">
          <h2 className="mb-4 text-lg font-bold">Your order</h2>
          <div className="space-y-3">
            {cartProducts.map(({ product, item }) => (
              <div key={product.id} className="flex items-center gap-3 text-sm">
                <div className="h-12 w-12 overflow-hidden rounded-lg bg-muted"><img src={product.images[0]} alt="" className="h-full w-full object-cover" /></div>
                <span className="flex-1 line-clamp-1">{product.name} × {item.quantity}</span>
                <span className="font-medium">{formatPrice(product.price * item.quantity)}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 space-y-2 border-t border-border pt-4 text-sm">
            <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>{formatPrice(cartSubtotal)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Shipping</span><span>{shipping === 0 ? 'Free' : formatPrice(shipping)}</span></div>
            <div className="flex justify-between border-t border-border pt-2 text-base font-bold"><span>Total</span><span>{formatPrice(total)}</span></div>
          </div>
          <Button type="submit" size="lg" className="mt-6 w-full">Place Order</Button>
        </aside>
      </form>
    </div>
  )
}
