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

const PICSUM = 'https://picsum.photos/seed/'
const img = (seed: string) => PICSUM + seed + '/800/800'

export const categories: Category[] = [
  { id: 'sneakers', name: 'Sneakers', description: 'Casual & athletic shoes', image: img('sneaker-cat') },
  { id: 'formal', name: 'Formal', description: 'Oxfords & Loafers', image: img('formal-cat') },
  { id: 'boots', name: 'Boots', description: 'Leather & outdoor boots', image: img('boot-cat') },
  { id: 'sandals', name: 'Sandals', description: 'Summer & casual wear', image: img('sandal-cat') }
];

export const brands: Brand[] = [
  { id: 'nike', name: 'Nike' },
  { id: 'adidas', name: 'Adidas' },
  { id: 'bata', name: 'Bata' },
  { id: 'apex', name: 'Apex' },
  { id: 'local-premium', name: 'Local Premium' }
];

export const products: Product[] = [
  {
    id: 1,
    slug: 'classic-black-oxford',
    name: 'Classic Black Oxford Leather Shoe',
    brand: 'Local Premium',
    category: 'formal',
    price: 2500,
    oldPrice: 3000,
    rating: 4.8,
    reviewsCount: 120,
    images: [img('shoe-1'), img('shoe-2'), img('shoe-3')],
    colors: ['#000000', '#4b3621'],
    sizes: ['39', '40', '41', '42', '43', '44'],
    badge: 'Best Seller',
    description: 'Premium quality handmade black oxford shoes for corporate and formal wear.',
    features: ['100% Genuine Leather', 'Anti-slip Sole', 'Soft Insole', 'Handcrafted'],
    inStock: true,
    bestSeller: true,
    featured: true,
  },

  {
    id: 2,
    slug: 'brown-derby-leather',
    name: 'Brown Derby Leather Shoe',
    brand: 'Local Premium',
    category: 'formal',
    price: 2700,
    oldPrice: 3200,
    rating: 4.7,
    reviewsCount: 98,
    images: [img('shoe-4'), img('shoe-5'), img('shoe-6')],
    colors: ['#654321', '#3b2f2f'],
    sizes: ['39', '40', '41', '42', '43'],
    badge: 'Popular',
    description: 'Elegant brown derby shoe made from premium leather.',
    features: ['Leather Upper', 'Comfort Fit', 'Durable Sole', 'Breathable'],
    inStock: true,
    bestSeller: false,
    featured: true,
  },

  {
    id: 3,
    slug: 'luxury-tan-loafer',
    name: 'Luxury Tan Loafer',
    brand: 'Urban Walk',
    category: 'casual',
    price: 2200,
    oldPrice: 2800,
    rating: 4.6,
    reviewsCount: 75,
    images: [img('shoe-7'), img('shoe-8'), img('shoe-9')],
    colors: ['#c19a6b', '#8b4513'],
    sizes: ['40', '41', '42', '43', '44'],
    badge: 'Trending',
    description: 'Stylish loafer perfect for casual and semi-formal occasions.',
    features: ['Soft Leather', 'Lightweight', 'Flexible Sole', 'Premium Finish'],
    inStock: true,
    bestSeller: true,
    featured: false,
  },

  {
    id: 4,
    slug: 'white-sneaker-pro',
    name: 'White Sneaker Pro',
    brand: 'Street Flex',
    category: 'sneakers',
    price: 1900,
    oldPrice: 2400,
    rating: 4.5,
    reviewsCount: 140,
    images: [img('shoe-10'), img('shoe-11'), img('shoe-12')],
    colors: ['#ffffff', '#dcdcdc'],
    sizes: ['39', '40', '41', '42', '43', '44'],
    badge: 'New',
    description: 'Clean and modern white sneaker for everyday use.',
    features: ['Cushioned Insole', 'Mesh Lining', 'Lightweight', 'Non-slip'],
    inStock: true,
    bestSeller: false,
    featured: true,
  },

  {
    id: 5,
    slug: 'black-running-shoe',
    name: 'Black Running Shoe',
    brand: 'Active Motion',
    category: 'sports',
    price: 2300,
    oldPrice: 2900,
    rating: 4.9,
    reviewsCount: 210,
    images: [img('shoe-13'), img('shoe-14'), img('shoe-15')],
    colors: ['#000000', '#808080'],
    sizes: ['40', '41', '42', '43', '44'],
    badge: 'Top Rated',
    description: 'Comfortable running shoe built for speed and performance.',
    features: ['Shock Absorption', 'Breathable Mesh', 'Lightweight', 'Rubber Grip'],
    inStock: true,
    bestSeller: true,
    featured: true,
  },

  {
    id: 6,
    slug: 'brown-ankle-boot',
    name: 'Brown Leather Ankle Boot',
    brand: 'Heritage',
    category: 'boots',
    price: 3200,
    oldPrice: 3800,
    rating: 4.7,
    reviewsCount: 65,
    images: [img('shoe-16'), img('shoe-17'), img('shoe-18')],
    colors: ['#8b4513', '#654321'],
    sizes: ['40', '41', '42', '43', '44'],
    badge: 'Premium',
    description: 'Durable leather ankle boots with premium finishing.',
    features: ['Genuine Leather', 'Strong Stitching', 'Comfort Fit', 'Durable Sole'],
    inStock: true,
    bestSeller: false,
    featured: true,
  },

  {
    id: 7,
    slug: 'grey-casual-sneaker',
    name: 'Grey Casual Sneaker',
    brand: 'Street Flex',
    category: 'casual',
    price: 1800,
    oldPrice: 2200,
    rating: 4.4,
    reviewsCount: 88,
    images: [img('shoe-19'), img('shoe-20'), img('shoe-21')],
    colors: ['#808080', '#a9a9a9'],
    sizes: ['39', '40', '41', '42', '43'],
    badge: 'Hot',
    description: 'Trendy casual sneaker suitable for daily wear.',
    features: ['Soft Cushion', 'Lightweight', 'Comfortable', 'Breathable'],
    inStock: true,
    bestSeller: false,
    featured: false,
  },

  {
    id: 8,
    slug: 'formal-brown-monk-strap',
    name: 'Brown Monk Strap Shoe',
    brand: 'Elite Fashion',
    category: 'formal',
    price: 2900,
    oldPrice: 3500,
    rating: 4.8,
    reviewsCount: 110,
    images: [img('shoe-22'), img('shoe-23'), img('shoe-24')],
    colors: ['#5c4033', '#8b4513'],
    sizes: ['39', '40', '41', '42', '43', '44'],
    badge: 'Editor Choice',
    description: 'Sophisticated monk strap shoe for formal meetings and events.',
    features: ['Premium Leather', 'Metal Buckle', 'Handcrafted', 'Comfort Sole'],
    inStock: true,
    bestSeller: true,
    featured: true,
  },

  {
    id: 9,
    slug: 'navy-blue-sports-shoe',
    name: 'Navy Blue Sports Shoe',
    brand: 'Active Motion',
    category: 'sports',
    price: 2100,
    oldPrice: 2600,
    rating: 4.6,
    reviewsCount: 132,
    images: [img('shoe-25'), img('shoe-26'), img('shoe-27')],
    colors: ['#000080', '#4169e1'],
    sizes: ['40', '41', '42', '43', '44'],
    badge: 'Trending',
    description: 'Perfect sports shoe for gym, jogging and outdoor activities.',
    features: ['Flexible Sole', 'Breathable', 'Lightweight', 'High Durability'],
    inStock: true,
    bestSeller: false,
    featured: true,
  },

  {
    id: 10,
    slug: 'premium-black-chelsea-boot',
    name: 'Premium Black Chelsea Boot',
    brand: 'Heritage',
    category: 'boots',
    price: 3500,
    oldPrice: 4200,
    rating: 4.9,
    reviewsCount: 95,
    images: [img('shoe-28'), img('shoe-29'), img('shoe-30')],
    colors: ['#000000', '#2f2f2f'],
    sizes: ['40', '41', '42', '43', '44'],
    badge: 'Luxury',
    description: 'Elegant black Chelsea boot crafted from genuine leather.',
    features: ['Premium Leather', 'Elastic Side Panels', 'Soft Footbed', 'Luxury Finish'],
    inStock: true,
    bestSeller: true,
    featured: true,
  },
];
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
