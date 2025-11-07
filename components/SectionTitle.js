export default function SectionTitle({ as: Tag = 'h2', children, className = '' }){
  return (
    <Tag className={`font-semibold text-xl md:text-2xl ${className}`.trim()}>
      {children}
    </Tag>
  )
}

