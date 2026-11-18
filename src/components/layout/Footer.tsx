import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

const columns: { title: string; links: [string, string][] }[] = [
  {
    title: 'Shop',
    links: [
      ['All Products', '/shop'],
      ['Categories', '/categories'],
      ['How to Order', '/faq'],
    ],
  },
  {
    title: 'Company',
    links: [
      ['About Us', '/about'],
      ['Contact', '/contact'],
      ['FAQ', '/faq'],
    ],
  },
  {
    title: 'Support',
    links: [
      ['Shipping & Delivery', '/faq'],
      ['Return Policy', '/faq'],
      ['Track Order', '/faq'],
      ['Privacy', '/faq'],
    ],
  },
]

const socials = [Facebook, Instagram, Twitter, Youtube]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Link to="/" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground font-display text-lg font-extrabold">S</span>
            <span className="font-display text-xl font-extrabold">STEAD</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Premium footwear designed for ultimate comfort and style. Browse our catalog and order directly via WhatsApp.
          </p>
          <div className="mt-5 flex gap-2">
            {socials.map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="grid h-10 w-10 place-items-center rounded-full border border-border transition hover:bg-primary hover:text-primary-foreground"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wide">{col.title}</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {col.links.map(([label, to]) => (
                <li key={label}>
                  <Link to={to} className="transition hover:text-primary">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border">
        <div className="container flex flex-col items-center justify-between gap-3 py-5 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} STEAD Footwear. All rights reserved.</p>
          <p>
            Designed & built by{' '}
            <a href="https://github.com/armanabid41" target="_blank" rel="noopener noreferrer" className="font-medium text-foreground hover:text-primary">
              Arman Hossain Abid
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
