import Link from 'next/link'
import ProductCard from '@/components/ProductCard'
import { t, getLang } from '@/lib/i18n'
import Head from 'next/head'
import { bestSellers } from '@/data/bestSellers'

export default function Home(){
  const lang = typeof window === 'undefined' ? 'az' : getLang()
  const products = bestSellers
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Lappetit",
    "address": { "addressLocality": "Baku", "addressCountry": "AZ" },
    "servesCuisine": "French Pastry",
    "sameAs": ["https://www.instagram.com/lappetit_baku/"]
  }

  return (
    <>
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}} />
      </Head>
      <div className="space-y-10 md:space-y-14">
        <section className="rounded-3xl bg-navy text-cream p-8 md:p-12 flex flex-col md:flex-row md:items-center gap-8">
          <div className="flex-1">
            <h1 className="mb-3">Hər səhər təzə dad, Lappetit-də.</h1>
            <p className="opacity-90 mb-6">Korporativ, fərdi və party setlər — bir kliklə.</p>
            <div className="flex gap-3">
              <Link href="/menu" className="btn btn-primary">Menyunu gör</Link>
              <Link href="/branches" className="btn btn-outline">Filialı seç</Link>
            </div>
          </div>
          <div className="flex-1">
            <img src="/assets/products/product (4).jpg" alt="Lappetit hero" className="rounded-2xl object-cover h-72 w-full"/>
          </div>
        </section>

        <section>
          <h2 className="mb-4">Best-sellerlər</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {products.map((p,i)=>(<ProductCard key={i} {...p}/>))}
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="card group">
            <div className="flex items-start gap-4">
              <span className="shrink-0 p-3 rounded-xl bg-orange/10 text-orange ring-1 ring-orange/20">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 16V8a2 2 0 0 0-2-2h-4l-2-2-2 2H7a2 2 0 0 0-2 2v8" />
                  <rect x="3" y="8" width="18" height="10" rx="2" ry="2" />
                </svg>
              </span>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Korporativ, Party & Lunch Setlər</h3>
                <p className="opacity-80">Ofislər və tədbirlər üçün ideal box-lar. Sürətli çatdırılma, təravətli dad.</p>
              </div>
            </div>
          </div>

          <div className="card group">
            <div className="flex items-start gap-4">
              <span className="shrink-0 p-3 rounded-xl bg-orange/10 text-orange ring-1 ring-orange/20">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
                </svg>
              </span>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Instagram</h3>
                <p className="opacity-80">Son yeniliklər üçün bizi izləyin:</p>
                <a className="inline-flex items-center gap-2 btn btn-outline w-max" href="https://www.instagram.com/lappetit_baku/" target="_blank" rel="noreferrer">
                  @lappetit_baku
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
