const langs = [
  { code: 'az', label: 'AZ' },
  { code: 'ru', label: 'RU' },
  { code: 'en', label: 'EN' }
]

export default function LanguageSwitcher(){
  const setLang = (code) => {
    const url = new URL(window.location.href)
    url.searchParams.set('lang', code)
    window.location.href = url.toString()
  }
  const current = typeof window !== 'undefined'
    ? new URLSearchParams(window.location.search).get('lang') || 'az'
    : 'az'

  return (
    <div className="flex gap-1">
      {langs.map(l => (
        <button key={l.code}
          onClick={()=>setLang(l.code)}
          className={`px-2 py-1 text-xs rounded-full ${current===l.code ? 'bg-primaryBtn text-white':'bg-white/10 text-cream'}`}>
          {l.label}
        </button>
      ))}
    </div>
  )
}
