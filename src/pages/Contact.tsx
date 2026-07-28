import { useState, type FormEvent } from 'react'
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const submit = (e: FormEvent) => {
    e.preventDefault()
    setSent(true)
  }
  const info = [
    { icon: Mail, label: 'Email', value: 'support@luxe-demo.com' },
    { icon: Phone, label: 'Phone', value: '+1 (555) 012-3456' },
    { icon: MapPin, label: 'Address', value: '123 Market Street, Demo City' },
  ]
  return (
    <div className="container py-12">
      <div className="mb-10 text-center">
        <h1 className="font-display text-4xl font-extrabold">Get in touch</h1>
        <p className="mt-2 text-muted-foreground">We would love to hear from you. This is a demo form.</p>
      </div>
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <div className="space-y-4">
          {info.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-4 rounded-2xl border border-border p-5">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary"><Icon size={20} /></span>
              <div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">{label}</p>
                <p className="font-medium">{value}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-3xl border border-border p-6 md:p-8">
          {sent ? (
            <div className="grid place-items-center py-16 text-center">
              <CheckCircle2 size={48} className="text-emerald-500" />
              <h2 className="mt-4 text-xl font-bold">Message sent! (demo)</h2>
              <p className="mt-2 text-sm text-muted-foreground">Thanks for reaching out — we will get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Input required placeholder="Your name" />
                <Input required type="email" placeholder="Your email" />
              </div>
              <Input required placeholder="Subject" />
              <textarea required rows={5} placeholder="Your message" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring" />
              <Button type="submit" size="lg" className="w-full sm:w-auto">Send Message</Button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
