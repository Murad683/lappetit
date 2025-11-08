export default function About(){
  return (
    <div className="space-y-12 md:space-y-16">
      <section className="card">
        <h1 className="mb-3">Haqqımızda</h1>
        <p className="text-lg text-navy/90 max-w-3xl">
          Lappetit — fransız şirniyyatlarını və kruassan mədəniyyətini müasir formada təqdim edən yerli brenddir.
          Məqsədimiz hər qutuda təzə dad, zövq və sevinc çatdırmaqdır.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        <div className="card group">
          <div className="flex items-start gap-4">
            <span className="shrink-0 p-3 rounded-xl bg-accent text-navy ring-1 ring-line">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 2v20"/>
                <path d="M5 9c3 0 4-3 7-3s4 3 7 3"/>
                <path d="M5 15c3 0 4-3 7-3s4 3 7 3"/>
              </svg>
            </span>
            <div className="space-y-1.5">
              <h3 className="font-semibold">Təzə və seçilmiş inqrediyentlər</h3>
              <p className="text-sm text-navy/80">Hər gün bişirilən kruassanlar və keyfiyyətli məhsullar.</p>
            </div>
          </div>
        </div>

        <div className="card group">
          <div className="flex items-start gap-4">
            <span className="shrink-0 p-3 rounded-xl bg-accent text-navy ring-1 ring-line">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 2l3 7h7l-5.5 4 2 7-6.5-4.5L6.5 20l2-7L3 9h7l2-7z"/>
              </svg>
            </span>
            <div className="space-y-1.5">
              <h3 className="font-semibold">Əl işi və ustalıq</h3>
              <p className="text-sm text-navy/80">Hər məhsulda diqqət, sevgi və peşəkarlıq.</p>
            </div>
          </div>
        </div>

        <div className="card group">
          <div className="flex items-start gap-4">
            <span className="shrink-0 p-3 rounded-xl bg-accent text-navy ring-1 ring-line">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="1" y="3" width="15" height="13" rx="2" ry="2"/>
                <path d="M16 8h4l3 3v5a2 2 0 0 1-2 2h-5"/>
                <circle cx="6.5" cy="17.5" r="1.5"/>
                <circle cx="18.5" cy="17.5" r="1.5"/>
              </svg>
            </span>
            <div className="space-y-1.5">
              <h3 className="font-semibold">Sürətli və səliqəli çatdırılma</h3>
              <p className="text-sm text-navy/80">Korporativ, fərdi və party setlər üçün rahat xidmət.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
