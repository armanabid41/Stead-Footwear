import { Truck, ShieldCheck, Sparkles, Users } from 'lucide-react'

const stats: [string, string][] = [
  ['50k+', 'Happy customers'],
  ['1,200+', 'Products'],
  ['30+', 'Countries shipped'],
  ['4.9/5', 'Average rating'],
]

const values = [
  { icon: Sparkles, title: 'Premium quality', text: 'Every product is curated and quality-checked before it reaches our shelves.' },
  { icon: Truck, title: 'Fast delivery', text: 'Free, fast and reliable shipping on all orders over $99 worldwide.' },
  { icon: ShieldCheck, title: 'Secure & trusted', text: 'Shop with confidence with buyer protection and a 2-year warranty.' },
  { icon: Users, title: 'Customer first', text: 'A friendly support team ready to help you 7 days a week.' },
]

export default function About() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <img src="https://picsum.photos/seed/about-hero/1600/700" alt="" className="h-[320px] w-full object-cover md:h-[420px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="container text-white">
            <h1 className="max-w-2xl font-display text-4xl font-extrabold md:text-6xl">Designed for people who love great things</h1>
            <p className="mt-4 max-w-xl text-white/85">LUXE is a demo store showcasing a premium shopping experience — beautiful design, thoughtful details and products worth talking about.</p>
          </div>
        </div>
      </section>

      <section className="container grid grid-cols-2 gap-6 py-14 md:grid-cols-4">
        {stats.map(([n, l]) => (
          <div key={l} className="text-center">
            <p className="font-display text-4xl font-extrabold text-primary">{n}</p>
            <p className="mt-1 text-sm text-muted-foreground">{l}</p>
          </div>
        ))}
      </section>

      <section className="container grid gap-6 pb-16 md:grid-cols-2 lg:grid-cols-4">
        {values.map(({ icon: Icon, title, text }) => (
          <div key={title} className="rounded-2xl border border-border p-6">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary"><Icon size={22} /></span>
            <h3 className="mt-4 text-lg font-bold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{text}</p>
          </div>
        ))}
      </section>

      <section className="container pb-20">
        <div className="grid items-center gap-10 rounded-3xl bg-secondary/40 p-8 md:grid-cols-2 md:p-14">
          <div>
            <h2 className="font-display text-3xl font-extrabold">Our story</h2>
            <p className="mt-4 text-foreground/80">Founded on a simple idea — that shopping online should feel as premium as the products themselves. From audio to wearables, we bring together the best in tech and lifestyle, wrapped in an experience that is fast, beautiful and effortless.</p>
            <p className="mt-4 text-foreground/80">This is a portfolio demo built with React, TypeScript, Tailwind CSS and Framer Motion to showcase modern front-end craft.</p>
          </div>
          <img src="https://picsum.photos/seed/about-story/800/600" alt="" className="h-72 w-full rounded-2xl object-cover" />
        </div>
      </section>
    </div>
  )
}
