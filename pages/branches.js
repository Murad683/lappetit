import { branches } from '@/data/branches'

export default function Branches(){
  return (
    <div className="space-y-6 md:space-y-8">
      <h1 className="text-2xl font-semibold">Filiallar</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {branches.map((b,i)=>(
          <div key={i} className="card group">
            <h3 className="font-semibold text-lg">{b.name}</h3>

            <div className="mt-3 space-y-2 text-sm">
              <div className="flex items-center gap-3">
                <span className="shrink-0 p-2 rounded-lg bg-accent text-navy ring-1 ring-line" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </span>
                <span className="text-navy/80">{b.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="shrink-0 p-2 rounded-lg bg-accent text-navy ring-1 ring-line" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9"/>
                    <path d="M12 7v5l3 3"/>
                  </svg>
                </span>
                <span className="text-navy/80">{b.hours}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="shrink-0 p-2 rounded-lg bg-accent text-navy ring-1 ring-line" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.86 19.86 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.37 1.77.72 2.58a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.5-1.29a2 2 0 0 1 2.11-.45c.81.35 1.68.6 2.58.72A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </span>
                <a className="text-navy hover:underline" href={`tel:${b.phone.replace(/\s/g,'')}`}>{b.phone}</a>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <a className="btn btn-primary" href={`tel:${b.phone.replace(/\s/g,'')}`} aria-label={`Zəng et ${b.name}`}>Zəng et</a>
              <a className="btn btn-outline" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(b.address)}`} target="_blank" rel="noreferrer">Yol tarifi</a>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-2 opacity-70 text-sm">Qeyd: Ünvanlar placeholder-dir. Dəqiq məlumatı tezliklə yeniləyəcəyik.</p>
    </div>
  )
}
