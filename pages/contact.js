export default function Contact(){
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h1 className="text-2xl font-semibold mb-4">Əlaqə</h1>
        <p className="mb-6 opacity-80">Sualınız və ya sifariş üçün formu doldurun. Tezliklə geri dönək.</p>
        <form action="https://formspree.io/f/xgebrjqd" method="POST" className="space-y-4">
          <input name="name" required placeholder="Adınız" className="w-full border rounded-xl px-4 py-3"/>
          <input name="email" type="email" required placeholder="E-poçt" className="w-full border rounded-xl px-4 py-3"/>
          <textarea name="message" rows="5" required placeholder="Mesajınız" className="w-full border rounded-xl px-4 py-3"></textarea>
          <button className="btn btn-primary" type="submit">Göndər</button>
        </form>
      </div>
      <div className="card">
        <h3 className="font-semibold mb-2">Ünvan</h3>
        <p className="opacity-80">Bakı, Azərbaycan</p>
        <h3 className="font-semibold mt-4 mb-2">Sosial şəbəkələr</h3>
        <a className="text-orange underline" href="https://www.instagram.com/lappetit_baku/" target="_blank" rel="noreferrer">Instagram: @lappetit_baku</a>
      </div>
    </div>
  )
}