import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import LanguageSwitcher from './LanguageSwitcher'
import { t, getLang } from '@/lib/i18n'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const lang = typeof window === 'undefined' ? 'az' : getLang()

  useEffect(() => {
    const close = () => setOpen(false)
    router.events?.on('routeChangeComplete', close)
    return () => router.events?.off('routeChangeComplete', close)
  }, [router])

  return (
    <header className="relative bg-navy sticky top-0 z-50 text-cream shadow-sm ring-1 ring-black/10">
      <div className="container flex items-center justify-between py-3 md:py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Lappetit" width={40} height={40} className="rounded-full" />
          <span className="font-semibold">Lappetit</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
          <Link href="/menu" className="hover:text-orange rounded-md px-1">{t('menu', lang)}</Link>
          <Link href="/branches" className="hover:text-orange rounded-md px-1">{t('branches', lang)}</Link>
          <Link href="/about" className="hover:text-orange rounded-md px-1">{t('about', lang)}</Link>
          <Link href="/contact" className="hover:text-orange rounded-md px-1">{t('contact', lang)}</Link>
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <LanguageSwitcher />
          <Link href="/menu" className="btn btn-primary">{t('seeMenu', lang)}</Link>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={()=>setOpen(!open)}
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-cream hover:bg-white/10 ring-1 ring-white/10">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {open ? (
              <path d="M18 6L6 18M6 6l12 12"/>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile overlay */}
      {open && <div className="fixed inset-0 z-40 bg-black/40 md:hidden" onClick={()=>setOpen(false)}></div>}

      {/* Mobile panel */}
      <div
        id="mobile-menu"
        className={`md:hidden absolute left-0 right-0 top-full z-50 origin-top transition duration-200 ${open ? 'opacity-100 scale-y-100' : 'pointer-events-none opacity-0 scale-y-95'} bg-cream text-coffee ring-1 ring-beige shadow-lg`}
      >
        <div className="container py-4 flex flex-col">
          <Link href="/menu" className="px-3 py-3 rounded hover:bg-orange/10" onClick={()=>setOpen(false)}>{t('menu', lang)}</Link>
          <Link href="/branches" className="px-3 py-3 rounded hover:bg-orange/10" onClick={()=>setOpen(false)}>{t('branches', lang)}</Link>
          <Link href="/about" className="px-3 py-3 rounded hover:bg-orange/10" onClick={()=>setOpen(false)}>{t('about', lang)}</Link>
          <Link href="/contact" className="px-3 py-3 rounded hover:bg-orange/10" onClick={()=>setOpen(false)}>{t('contact', lang)}</Link>
          <div className="mt-3 flex items-center gap-2 px-3">
            <LanguageSwitcher />
            <Link href="/menu" className="btn btn-primary flex-1 text-center" onClick={()=>setOpen(false)}>{t('seeMenu', lang)}</Link>
          </div>
        </div>
      </div>
    </header>
  )
}

