export default function Contact(){
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="card">
        <h1 className="text-2xl md:text-3xl font-semibold mb-4">Əlaqə</h1>
        <p className="mb-8 text-navy/80">Sualınız və ya sifariş üçün formu doldurun. Tezliklə geri dönəcəyik.</p>
        <form action="https://formspree.io/f/xgebrjqd" method="POST" className="space-y-4">
          <label className="sr-only" htmlFor="name">Adınız</label>
          <input id="name" name="name" required placeholder="Adınız" className="input"/>
          <label className="sr-only" htmlFor="email">E-poçt</label>
          <input id="email" name="email" type="email" required placeholder="E-poçt" className="input"/>
          <label className="sr-only" htmlFor="message">Mesajınız</label>
          <textarea id="message" name="message" rows="5" required placeholder="Mesajınız" className="input"></textarea>
          <button className="btn btn-primary" type="submit">Göndər</button>
        </form>
      </div>
      <div className="flex flex-col gap-6">
        <div className="card">
          <h3 className="font-semibold mb-2">Ünvan</h3>
          <p className="text-navy/80">Bakı, Azərbaycan</p>
          <h3 className="font-semibold mt-4 mb-2">Sosial şəbəkələr</h3>
          <a className="inline-flex items-center gap-2 text-navy hover:underline" href="https://www.instagram.com/lappetit_baku/" target="_blank" rel="noreferrer">
            Instagram: @lappetit_baku
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </a>
        </div>
        <div className="card p-0 overflow-hidden">
          <iframe
            title="Baku map"
            className="w-full h-64 md:h-72"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Baku%2C%20Azerbaijan&output=embed">
          </iframe>
        </div>
      </div>
    </div>
  )
}
