import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { products as allProducts, type Product } from '@/data/products'

export interface CartItem {
  productId: number
  quantity: number
  color?: string
  size?: string
}

interface ShopContextValue {
  cart: CartItem[]
  wishlist: number[]
  compare: number[]
  addToCart: (
    productId: number,
    options?: { color?: string; size?: string; quantity?: number },
  ) => void
  removeFromCart: (productId: number) => void
  updateQuantity: (productId: number, quantity: number) => void
  clearCart: () => void
  toggleWishlist: (productId: number) => void
  isInWishlist: (productId: number) => boolean
  toggleCompare: (productId: number) => void
  isInCompare: (productId: number) => boolean
  cartCount: number
  cartSubtotal: number
  cartProducts: { product: Product; item: CartItem }[]
}

const ShopContext = createContext<ShopContextValue | undefined>(undefined)

function load<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback
  try {
    const raw = localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T) : fallback
  } catch {
    return fallback
  }
}

export function ShopProvider({ children }: { children: ReactNode }) {
  // Brand name update kora hoyeche 'luxe' theke 'stead' e
  const [cart, setCart] = useState<CartItem[]>(() => load('stead-cart', []))
  const [wishlist, setWishlist] = useState<number[]>(() =>
    load('stead-wishlist', []),
  )
  const [compare, setCompare] = useState<number[]>(() =>
    load('stead-compare', []),
  )

  useEffect(() => {
    localStorage.setItem('stead-cart', JSON.stringify(cart))
  }, [cart])
  useEffect(() => {
    localStorage.setItem('stead-wishlist', JSON.stringify(wishlist))
  }, [wishlist])
  useEffect(() => {
    localStorage.setItem('stead-compare', JSON.stringify(compare))
  }, [compare])

  const addToCart: ShopContextValue['addToCart'] = (productId, options) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.productId === productId && i.size === options?.size && i.color === options?.color)
      const quantity = options?.quantity ?? 1
      if (existing) {
        return prev.map((i) =>
          (i.productId === productId && i.size === options?.size && i.color === options?.color)
            ? { ...i, quantity: i.quantity + quantity }
            : i,
        )
      }
      return [
        ...prev,
        { productId, quantity, color: options?.color, size: options?.size },
      ]
    })
  }

  const removeFromCart = (productId: number) =>
    setCart((prev) => prev.filter((i) => i.productId !== productId))

  const updateQuantity = (productId: number, quantity: number) =>
    setCart((prev) =>
      quantity <= 0
        ? prev.filter((i) => i.productId !== productId)
        : prev.map((i) => (i.productId === productId ? { ...i, quantity } : i)),
    )

  const clearCart = () => setCart([])

  const toggleWishlist = (productId: number) =>
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId],
    )

  const isInWishlist = (productId: number) => wishlist.includes(productId)

  const toggleCompare = (productId: number) =>
    setCompare((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : prev.length >= 4
          ? prev
          : [...prev, productId],
    )

  const isInCompare = (productId: number) => compare.includes(productId)

  const cartProducts = useMemo(
    () =>
      cart
        .map((item) => {
          const product = allProducts.find((p) => p.id === item.productId)
          return product ? { product, item } : null
        })
        .filter((v): v is { product: Product; item: CartItem } => v !== null),
    [cart],
  )

  const cartCount = useMemo(
    () => cart.reduce((sum, i) => sum + i.quantity, 0),
    [cart],
  )

  const cartSubtotal = useMemo(
    () =>
      cartProducts.reduce(
        (sum, { product, item }) => sum + product.price * item.quantity,
        0,
      ),
    [cartProducts],
  )

  const value: ShopContextValue = {
    cart,
    wishlist,
    compare,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    toggleWishlist,
    isInWishlist,
    toggleCompare,
    isInCompare,
    cartCount,
    cartSubtotal,
    cartProducts,
  }

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useShop() {
  const ctx = useContext(ShopContext)
  if (!ctx) throw new Error('useShop must be used within a ShopProvider')
  return ctx
}