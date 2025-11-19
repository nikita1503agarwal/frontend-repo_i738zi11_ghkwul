import { useEffect, useRef } from 'react'

const brands = [
  'ASUS ROG', 'MSI', 'Gigabyte', 'NZXT', 'Corsair', 'Razer', 'SteelSeries', 'Logitech G', 'HyperX', 'Alienware'
]

export default function Marquee() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.animate([
      { transform: 'translateX(0)' },
      { transform: 'translateX(-50%)' },
    ], { duration: 20000, iterations: Infinity })
  }, [])

  return (
    <section className="bg-slate-950 py-10 border-t border-b border-white/10">
      <div className="overflow-hidden">
        <div ref={ref} className="flex gap-10 whitespace-nowrap will-change-transform">
          {[...brands, ...brands].map((b, i) => (
            <span key={i} className="text-slate-400">{b}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
