export default function ProductCard({title, price, img, tag}){
  return (
    <div className="card group">
      <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-beige">
        <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"/>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div>
          <h3 className="font-semibold">{title}</h3>
          {tag && <span className="text-xs opacity-70">{tag}</span>}
        </div>
        <div className="font-semibold text-orange">{price}</div>
      </div>
    </div>
  )
}