import { useState, type FormEvent } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  const submit = (e: FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setDone(true)
      setEmail('')
    }
  }
  return (
    <section className="container py-16">
      <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center text-primary-foreground md:px-16">
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10" />
        <div className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-white/10" />
        <div className="relative mx-auto max-w-xl">
          <h2 className="font-display text-3xl font-extrabold md:text-4xl">Join the LUXE insider list</h2>
          <p className="mt-3 text-primary-foreground/80">Get early access to drops, exclusive deals and 10% off your first order.</p>
          {done ? (
            <div className="mt-8 flex items-center justify-center gap-2 text-lg font-semibold">
              <CheckCircle2 /> You are subscribed! (demo)
            </div>
          ) : (
            <form onSubmit={submit} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="h-12 flex-1 rounded-full border-0 bg-white/95 px-5 text-sm text-neutral-900 outline-none"
              />
              <Button type="submit" size="lg" className="bg-neutral-900 text-white hover:bg-neutral-800">
                Subscribe <Send size={16} />
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
