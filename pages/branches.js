import { branches } from '@/data/branches'

export default function Branches(){
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Filiallar</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {branches.map((b,i)=>(
          <div key={i} className="card">
            <h3 className="font-semibold mb-1">{b.name}</h3>
            <p className="opacity-80">{b.address}</p>
            <p className="opacity-80">{b.hours}</p>
            <a className="text-orange underline mt-2 inline-block" href={`tel:${b.phone.replace(/\s/g,'')}`}>Zəng et</a>
          </div>
        ))}
      </div>
      <p className="mt-2 opacity-70 text-sm">Qeyd: Ünvanlar placeholder-dır. Dəqiq məlumatı sonra yeniləyəcəyik.</p>
    </div>
  )
}
