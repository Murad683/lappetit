export default function Footer(){
  return (
    <footer className="bg-navy text-cream mt-12">
      <div className="container py-12 grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-semibold mb-2">Lappetit</h4>
          <p className="opacity-80">Fransız kruassanları və şirniyyat qutuları – Bakıda.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Əlaqə</h4>
          <ul className="space-y-1 opacity-90">
            <li>Azərbaycan, Bakı</li>
            <li>instagram.com/lappetit_baku</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Saatlar</h4>
          <p className="opacity-80">Hər gün: 09:00 – 21:00</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container py-4 text-sm opacity-70">© {new Date().getFullYear()} Lappetit. All rights reserved.</div>
      </div>
    </footer>
  )
}