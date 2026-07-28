export interface Review {
  id: number
  name: string
  rating: number
  date: string
  text: string
  avatar: string
}

export interface Product {
  id: number
  slug: string
  name: string
  brand: string
  category: string
  price: number
  oldPrice?: number
  rating: number
  reviewsCount: number
  images: string[]
  colors: string[]
  sizes?: string[]
  badge?: 'New' | 'Sale' | 'Hot' | 'Best Seller'
  description: string
  features: string[]
  inStock: boolean
  flashSale?: boolean
  bestSeller?: boolean
  newArrival?: boolean
  featured?: boolean
}

export interface Category {
  id: string
  name: string
  description: string
  image: string
}

export interface Brand {
  id: string
  name: string
}

const img = (seed: string) => `https://picsum.photos/seed/${seed}/800/800`

export const categories: Category[] = [
  { id: 'audio', name: 'Audio', description: 'Headphones, earbuds & speakers', image: img('audio-cat') },
  { id: 'wearables', name: 'Wearables', description: 'Smartwatches & fitness bands', image: img('wear-cat') },
  { id: 'phones', name: 'Smartphones', description: 'Flagship & mid-range phones', image: img('phone-cat') },
  { id: 'laptops', name: 'Laptops', description: 'Ultrabooks & pro machines', image: img('laptop-cat') },
  { id: 'cameras', name: 'Cameras', description: 'Mirrorless & action cams', image: img('camera-cat') },
  { id: 'accessories', name: 'Accessories', description: 'Cases, chargers & more', image: img('acc-cat') },
]

export const brands: Brand[] = [
  { id: 'aurora', name: 'Aurora' },
  { id: 'nimbus', name: 'Nimbus' },
  { id: 'vertex', name: 'Vertex' },
  { id: 'lumen', name: 'Lumen' },
  { id: 'pulse', name: 'Pulse' },
  { id: 'orbit', name: 'Orbit' },
]

export const products: Product[] = [
  {
    id: 1,
    slug: 'aurora-studio-headphones',
    name: 'Aurora Studio Wireless Headphones',
    brand: 'Aurora',
    category: 'audio',
    price: 299,
    oldPrice: 399,
    rating: 4.8,
    reviewsCount: 214,
    images: [img('head-1'), img('head-2'), img('head-3'), img('head-4')],
    colors: ['#111827', '#6d28d9', '#f1f5f9'],
    badge: 'Sale',
    description:
      'Reference-grade wireless headphones with adaptive noise cancellation, 40-hour battery life and studio-tuned 40mm drivers for an immersive, detailed soundstage.',
    features: ['Adaptive ANC', '40h battery', 'Hi-Res Audio', 'Multipoint Bluetooth 5.3'],
    inStock: true,
    flashSale: true,
    bestSeller: true,
    featured: true,
  },
  {
    id: 2,
    slug: 'nimbus-pro-earbuds',
    name: 'Nimbus Pro Noise-Cancelling Earbuds',
    brand: 'Nimbus',
    category: 'audio',
    price: 149,
    oldPrice: 199,
    rating: 4.6,
    reviewsCount: 178,
    images: [img('buds-1'), img('buds-2'), img('buds-3')],
    colors: ['#0f172a', '#ffffff', '#22d3ee'],
    badge: 'Hot',
    description:
      'Featherlight earbuds with active noise cancellation, spatial audio and a compact wireless charging case that fits in any pocket.',
    features: ['Active ANC', 'Spatial Audio', 'Wireless charging', 'IPX5 water resistant'],
    inStock: true,
    flashSale: true,
    bestSeller: true,
  },
  {
    id: 3,
    slug: 'vertex-watch-series-7',
    name: 'Vertex Watch Series 7',
    brand: 'Vertex',
    category: 'wearables',
    price: 399,
    rating: 4.7,
    reviewsCount: 302,
    images: [img('watch-1'), img('watch-2'), img('watch-3')],
    colors: ['#111827', '#b91c1c', '#d4af37'],
    sizes: ['41mm', '45mm'],
    badge: 'New',
    description:
      'A premium smartwatch with an always-on AMOLED display, advanced health sensors, GPS and multi-day battery life in a sleek titanium body.',
    features: ['Always-on AMOLED', 'ECG + SpO2', 'Built-in GPS', 'Titanium build'],
    inStock: true,
    newArrival: true,
    featured: true,
  },
  {
    id: 4,
    slug: 'lumen-x-smartphone',
    name: 'Lumen X 5G Smartphone',
    brand: 'Lumen',
    category: 'phones',
    price: 899,
    oldPrice: 999,
    rating: 4.9,
    reviewsCount: 521,
    images: [img('phone-1'), img('phone-2'), img('phone-3'), img('phone-4')],
    colors: ['#1e293b', '#7c3aed', '#059669'],
    sizes: ['128GB', '256GB', '512GB'],
    badge: 'Best Seller',
    description:
      'Flagship 5G smartphone with a 6.7" 120Hz LTPO display, a pro-grade triple camera system and all-day battery with 65W fast charging.',
    features: ['6.7" 120Hz LTPO', 'Triple 50MP camera', '65W fast charge', 'IP68 rated'],
    inStock: true,
    bestSeller: true,
    featured: true,
  },
  {
    id: 5,
    slug: 'orbit-ultrabook-14',
    name: 'Orbit Ultrabook 14 Pro',
    brand: 'Orbit',
    category: 'laptops',
    price: 1299,
    oldPrice: 1499,
    rating: 4.7,
    reviewsCount: 143,
    images: [img('laptop-1'), img('laptop-2'), img('laptop-3')],
    colors: ['#334155', '#e2e8f0'],
    sizes: ['16GB / 512GB', '32GB / 1TB'],
    badge: 'Sale',
    description:
      'An ultra-thin 14" laptop with a 3K OLED display, the latest 12-core CPU and a 70Wh battery that lasts all day. Crafted from recycled aluminium.',
    features: ['3K OLED display', '12-core CPU', '18h battery', '1.2kg aluminium'],
    inStock: true,
    flashSale: true,
    featured: true,
  },
  {
    id: 6,
    slug: 'pulse-mirrorless-camera',
    name: 'Pulse M50 Mirrorless Camera',
    brand: 'Pulse',
    category: 'cameras',
    price: 1099,
    rating: 4.8,
    reviewsCount: 96,
    images: [img('cam-1'), img('cam-2'), img('cam-3')],
    colors: ['#111827'],
    badge: 'New',
    description:
      '24MP mirrorless camera with in-body stabilisation, 4K60 video and a fast hybrid autofocus system for creators and photographers.',
    features: ['24MP sensor', 'In-body stabilisation', '4K60 video', 'Fast hybrid AF'],
    inStock: true,
    newArrival: true,
  },
  {
    id: 7,
    slug: 'aurora-soundbar-500',
    name: 'Aurora Soundbar 500',
    brand: 'Aurora',
    category: 'audio',
    price: 249,
    oldPrice: 329,
    rating: 4.5,
    reviewsCount: 88,
    images: [img('bar-1'), img('bar-2')],
    colors: ['#0f172a', '#475569'],
    badge: 'Sale',
    description:
      'A Dolby Atmos soundbar with a wireless subwoofer that fills your room with cinematic, room-filling sound.',
    features: ['Dolby Atmos', 'Wireless subwoofer', 'HDMI eARC', 'Voice assistant'],
    inStock: true,
    flashSale: true,
  },
  {
    id: 8,
    slug: 'nimbus-fit-band-3',
    name: 'Nimbus Fit Band 3',
    brand: 'Nimbus',
    category: 'wearables',
    price: 79,
    rating: 4.4,
    reviewsCount: 261,
    images: [img('band-1'), img('band-2')],
    colors: ['#111827', '#ec4899', '#22c55e'],
    badge: 'Hot',
    description:
      'A lightweight fitness band with continuous heart-rate tracking, 14-day battery and 120+ workout modes.',
    features: ['Heart-rate tracking', '14-day battery', '120+ workouts', '5ATM waterproof'],
    inStock: true,
    bestSeller: true,
  },
  {
    id: 9,
    slug: 'vertex-power-bank-20k',
    name: 'Vertex 20K Power Bank',
    brand: 'Vertex',
    category: 'accessories',
    price: 59,
    oldPrice: 79,
    rating: 4.6,
    reviewsCount: 154,
    images: [img('pb-1'), img('pb-2')],
    colors: ['#111827', '#f1f5f9'],
    badge: 'Sale',
    description:
      'A 20,000mAh power bank with 65W USB-C PD output that can fast-charge a laptop, phone and earbuds at once.',
    features: ['20,000mAh', '65W USB-C PD', 'Charges 3 devices', 'Digital display'],
    inStock: true,
    flashSale: true,
  },
  {
    id: 10,
    slug: 'lumen-buds-air',
    name: 'Lumen Buds Air',
    brand: 'Lumen',
    category: 'audio',
    price: 99,
    rating: 4.3,
    reviewsCount: 132,
    images: [img('air-1'), img('air-2')],
    colors: ['#ffffff', '#111827'],
    badge: 'New',
    description:
      'Everyday wireless earbuds with balanced sound, low-latency game mode and a 24-hour battery with the case.',
    features: ['Low-latency mode', '24h battery', 'Touch controls', 'USB-C charging'],
    inStock: true,
    newArrival: true,
  },
  {
    id: 11,
    slug: 'orbit-gaming-mouse',
    name: 'Orbit Gaming Mouse Pro',
    brand: 'Orbit',
    category: 'accessories',
    price: 69,
    rating: 4.7,
    reviewsCount: 203,
    images: [img('mouse-1'), img('mouse-2')],
    colors: ['#111827', '#7c3aed'],
    badge: 'Best Seller',
    description:
      'A featherweight 58g gaming mouse with a 26K DPI sensor, optical switches and a 90-hour wireless battery.',
    features: ['26K DPI sensor', '58g lightweight', 'Optical switches', '90h battery'],
    inStock: true,
    bestSeller: true,
  },
  {
    id: 12,
    slug: 'pulse-action-cam-4k',
    name: 'Pulse Action Cam 4K',
    brand: 'Pulse',
    category: 'cameras',
    price: 329,
    oldPrice: 399,
    rating: 4.5,
    reviewsCount: 74,
    images: [img('action-1'), img('action-2')],
    colors: ['#111827'],
    badge: 'Sale',
    description:
      'A rugged, waterproof 4K action camera with HyperSmooth stabilisation and a front-facing display for vlogging.',
    features: ['4K120 video', 'HyperSmooth', 'Waterproof 10m', 'Dual display'],
    inStock: false,
    flashSale: true,
  },
  {
    id: 13,
    slug: 'aurora-desk-speaker',
    name: 'Aurora Desk Speaker',
    brand: 'Aurora',
    category: 'audio',
    price: 129,
    rating: 4.4,
    reviewsCount: 65,
    images: [img('spk-1'), img('spk-2')],
    colors: ['#0f172a', '#d4af37'],
    badge: 'New',
    description:
      'A compact hi-fi desk speaker with rich 360-degree sound, warm ambient lighting and Bluetooth 5.3.',
    features: ['360-degree sound', 'Ambient light', 'Bluetooth 5.3', 'Aux + USB-C'],
    inStock: true,
    newArrival: true,
  },
  {
    id: 14,
    slug: 'lumen-tablet-11',
    name: 'Lumen Tab 11',
    brand: 'Lumen',
    category: 'phones',
    price: 549,
    oldPrice: 649,
    rating: 4.6,
    reviewsCount: 118,
    images: [img('tab-1'), img('tab-2')],
    colors: ['#1e293b', '#f1f5f9'],
    sizes: ['128GB', '256GB'],
    badge: 'Sale',
    description:
      'An 11" 120Hz tablet with quad speakers, stylus support and a laptop-class chip for work and play.',
    features: ['11" 120Hz display', 'Stylus support', 'Quad speakers', '8,000mAh battery'],
    inStock: true,
    featured: true,
  },
  {
    id: 15,
    slug: 'vertex-mechanical-keyboard',
    name: 'Vertex Mechanical Keyboard',
    brand: 'Vertex',
    category: 'accessories',
    price: 119,
    rating: 4.8,
    reviewsCount: 187,
    images: [img('kb-1'), img('kb-2')],
    colors: ['#111827', '#f1f5f9', '#7c3aed'],
    badge: 'Best Seller',
    description:
      'A hot-swappable 75% mechanical keyboard with gasket mounting, per-key RGB and a premium aluminium frame.',
    features: ['Hot-swappable', 'Gasket mount', 'Per-key RGB', 'Aluminium frame'],
    inStock: true,
    bestSeller: true,
  },
  {
    id: 16,
    slug: 'orbit-laptop-stand',
    name: 'Orbit Aluminium Laptop Stand',
    brand: 'Orbit',
    category: 'accessories',
    price: 49,
    rating: 4.5,
    reviewsCount: 96,
    images: [img('stand-1'), img('stand-2')],
    colors: ['#94a3b8', '#111827'],
    description:
      'An adjustable aluminium laptop stand that improves posture and airflow, folding flat for travel.',
    features: ['Adjustable height', 'Aluminium build', 'Foldable', 'Anti-slip pads'],
    inStock: true,
    newArrival: true,
  },
]

export const reviews: Review[] = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    rating: 5,
    date: 'March 2025',
    text: 'Absolutely love the quality and the fast delivery. The whole shopping experience felt premium from start to finish.',
    avatar: 'https://i.pravatar.cc/120?img=47',
  },
  {
    id: 2,
    name: 'James Carter',
    rating: 5,
    date: 'February 2025',
    text: 'Best online store I have used this year. The product pages are detailed and the checkout was effortless.',
    avatar: 'https://i.pravatar.cc/120?img=12',
  },
  {
    id: 3,
    name: 'Aisha Rahman',
    rating: 4,
    date: 'February 2025',
    text: 'Great range of products and beautiful design. Customer support answered my questions within minutes.',
    avatar: 'https://i.pravatar.cc/120?img=32',
  },
  {
    id: 4,
    name: 'Daniel Okafor',
    rating: 5,
    date: 'January 2025',
    text: 'The wishlist and compare features are genuinely useful. Highly recommend for anyone who loves good tech.',
    avatar: 'https://i.pravatar.cc/120?img=59',
  },
]

export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug)

export const getRelatedProducts = (product: Product, limit = 4) =>
  products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit)
