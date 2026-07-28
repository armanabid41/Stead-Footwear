import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="container grid place-items-center py-32 text-center">
      <p className="font-display text-7xl font-extrabold text-primary md:text-9xl">404</p>
      <h1 className="mt-4 font-display text-3xl font-extrabold">Page not found</h1>
      <p className="mt-2 max-w-md text-muted-foreground">The page you are looking for does not exist or has been moved.</p>
      <Link to="/" className="mt-6"><Button size="lg">Back to Home</Button></Link>
    </div>
  )
}
