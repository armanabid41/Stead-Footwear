import { HeroSlider } from '@/components/sections/HeroSlider'
import { FeaturedCategories } from '@/components/sections/FeaturedCategories'
import { FlashSale } from '@/components/sections/FlashSale'
import { ProductRail } from '@/components/sections/ProductRail'
import { BrandShowcase } from '@/components/sections/BrandShowcase'
import { Testimonials } from '@/components/sections/Testimonials'
import { Newsletter } from '@/components/sections/Newsletter'
import { products } from '@/data/products'

export default function Home() {
  const bestSellers = products.filter((p) => p.bestSeller)
  const newArrivals = products.filter((p) => p.newArrival)
  const featured = products.filter((p) => p.featured)
  return (
    <>
      <HeroSlider />
      <FeaturedCategories />
      <FlashSale />
      <ProductRail title="Best Sellers" subtitle="Our most-loved products." products={bestSellers} viewAllHref="/shop" />
      <BrandShowcase />
      <ProductRail title="New Arrivals" subtitle="Fresh drops, just landed." products={newArrivals} viewAllHref="/shop" />
      <ProductRail title="Featured Products" subtitle="Hand-picked by our team." products={featured} viewAllHref="/shop" />
      <Testimonials />
      <Newsletter />
    </>
  )
}
