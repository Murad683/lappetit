import { useState, useMemo } from 'react'
import ProductCard from '@/components/ProductCard'
import { menuItems } from '@/data/products'

const ALL = 'All'
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1)

export default function Menu(){
  const cats = useMemo(() => [ALL, ...Array.from(new Set(menuItems.map(i => cap(i.category))))], [])
  const [cat, setCat] = useState(ALL)
  const items = useMemo(() => {
    if (cat === ALL) return menuItems
    const key = cat.toLowerCase()
    return menuItems.filter(i => i.category === key)
  }, [cat])

  return (
    <div className="space-y-8 md:space-y-10">
      <h1 className="text-2xl font-semibold">Menyu</h1>

      <div className="flex flex-wrap gap-2">
        {cats.map(c => (
          <button key={c} onClick={()=>setCat(c)}
            className={`chip ${c===cat ? 'chip-active' : 'chip-inactive'}`}>
            {c}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {items.map((p,i)=>(<ProductCard key={i} {...p}/>))}
      </div>
    </div>
  )
}
