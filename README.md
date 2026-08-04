# LUXE — Premium eCommerce Demo

A premium, fully interactive **front-end only** eCommerce demo store.

**Live site:** https://sm-masud-rana.github.io/premium-ecommerce-demo/

## How it runs

The live site is a **single self-contained `index.html`** at the repository root.
It needs **no build step, no npm install and no dependencies** — just open it in a
browser or serve the folder. That makes it work on GitHub Pages in either mode
("GitHub Actions" or "Deploy from a branch → main → /root").

```bash
# run locally
python3 -m http.server 8000
# then open http://localhost:8000
```

## Features

- Home, Shop, Product details, Cart, Wishlist, About, Contact, FAQ, 404 (hash routing)
- Cart with quantity controls, order summary, shipping/tax estimate and demo checkout
- Wishlist with heart toggle on every product
- Live search, category filter and sorting (price, rating, featured)
- Slide-in cart drawer, toast notifications, flash-sale countdown
- Dark / light theme, saved to `localStorage` along with cart and wishlist
- Fully responsive with a mobile menu
- 12 demo products across 6 categories and 6 brands

No backend, no authentication and no real payments — everything is client-side demo data.

## React source

A React 19 + Vite + TypeScript + Tailwind version of this store also lives in `src/`.
It is kept for reference and is **not** what the live site serves.
