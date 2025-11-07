
# Lappetit Website (Next.js + Tailwind)

Modern, minimal, mobile‑first site for Lappetit. Built with Next.js 14 (pages router), React 18, Tailwind CSS. Ready for Vercel deploy.

## Quickstart
```bash
npm install
npm run dev
# http://localhost:3000
```

Build/Start (Node 18+):
```bash
npm run build && npm start
```

## Structure
- `pages/`: Home, Menu (filters), Branches, About, Contact
- `components/`: Navbar, Footer, ProductCard, LanguageSwitcher, SectionTitle
- `styles/`: Tailwind + globals
- `public/`: `logo.png`, `robots.txt`, `sitemap.xml`
- `public/assets/`: place your images here
  - `hero/` — homepage hero image(s)
  - `products/` — menu/product images
  - `branches/` — branch/location images (optional)
  - `brand/` — brand assets (alt logos, icons)
- `lib/`: simple i18n helper
 - `data/`: editable content
   - `data/bestSellers.js` — homepage best-sellers
   - `data/products.js` — menu items (with categories)
   - `data/branches.js` — branch cards

## Design System
- Colors: navy `#0b1633`, cream `#FFF8F0`, orange `#F8A45D`, coffee `#5C4630`, beige `#E5D3B3`
- Typography: Poppins (600/700) for headings, Lato (400/500) for body; fallback Inter/system-ui/Arial. Includes latin-ext for “ə/Ə”.
- Spacing: sections `py-12 md:py-16`; blocks `space-y-10 md:space-y-14`
- UI: `.btn-primary`, `.btn-outline`, `.card`, focus ring via Tailwind `focus-visible` utilities

## i18n (AZ/RU/EN)
- Query param `?lang=az|ru|en`
- `lib/i18n.js`: `t(key, lang)` and `getLang()`
- Language switcher updates the URL query

## SEO
- Global `<Head>` with title, description, keywords, OpenGraph & Twitter tags
- Structured Data (JSON‑LD, LocalBusiness/Restaurant) on `pages/index.js`
- `public/robots.txt` and `public/sitemap.xml`

## Forms
- Contact uses Formspree (placeholder ID). Replace `action` with your own ID when ready.

## Deploy (Vercel)
1. Create a repo and push.
2. Import to Vercel, set Node 18+, default settings.
3. Deploy.

## Notes
- Images lazy‑load (Next Image) and are constrained for good LCP.
- Replace `public/logo.png` with the final brand asset.
 - To switch to local images, put files under `public/assets/...` and change `img` values in files under `data/` to `/assets/...` paths.
