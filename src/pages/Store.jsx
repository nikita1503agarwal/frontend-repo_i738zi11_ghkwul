import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Filter, ShoppingCart } from 'lucide-react'

const catalog = [
  { id: 1, title: 'RTX 4090', cat: 'GPU', price: 2199, rating: 5, img: 'https://images.unsplash.com/photo-1616895119954-c2c2463decf9?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, title: 'RX 7900 XTX', cat: 'GPU', price: 1299, rating: 4, img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, title: 'Optical Gaming Mouse', cat: 'Mouse', price: 79, rating: 4, img: 'https://images.unsplash.com/photo-1549925770-5156ae5f96dc?q=80&w=1200&auto=format&fit=crop' },
  { id: 4, title: '60% Mechanical Keyboard', cat: 'Keyboard', price: 149, rating: 5, img: 'https://images.unsplash.com/photo-1541140532154-b024d705b90d?q=80&w=1200&auto=format&fit=crop' },
  { id: 5, title: '27" 240Hz Monitor', cat: 'Monitor', price: 499, rating: 4, img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop' },
  { id: 6, title: 'Gaming Headset', cat: 'Audio', price: 129, rating: 4, img: 'https://images.unsplash.com/photo-1599669454699-248893623440?q=80&w=1200&auto=format&fit=crop' },
  { id: 7, title: 'AIO RGB Cooler', cat: 'Cooling', price: 179, rating: 4, img: 'https://images.unsplash.com/photo-1616627451516-17be3a44ef80?q=80&w=1200&auto=format&fit=crop' },
  { id: 8, title: 'ATX Tower Case', cat: 'Case', price: 159, rating: 4, img: 'https://images.unsplash.com/photo-1591481971267-7b1de9aa8c97?q=80&w=1200&auto=format&fit=crop' },
]

const categories = ['All', 'GPU', 'Monitor', 'Keyboard', 'Mouse', 'Audio', 'Cooling', 'Case']

export default function Store() {
  const [search, setSearch] = useState('')
  const [cat, setCat] = useState('All')
  const [sort, setSort] = useState('pop')

  const items = useMemo(() => {
    let list = catalog.filter(p =>
      (cat === 'All' || p.cat === cat) &&
      p.title.toLowerCase().includes(search.toLowerCase())
    )
    if (sort === 'price-asc') list.sort((a,b)=>a.price-b.price)
    if (sort === 'price-desc') list.sort((a,b)=>b.price-a.price)
    if (sort === 'rating') list.sort((a,b)=>b.rating-a.rating)
    return list
  }, [search, cat, sort])

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="pt-20 pb-10 bg-gradient-to-b from-fuchsia-900/30 via-slate-950 to-slate-950 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-magz">Fate Store</h1>
          <p className="mt-2 text-slate-300">Discover deals like a modern marketplace.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-3 flex gap-3">
              <div className="flex-1">
                <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search products" className="w-full rounded-lg bg-slate-900 border border-white/10 px-4 py-3 outline-none focus:border-fuchsia-500/50" />
              </div>
              <select value={sort} onChange={e=>setSort(e.target.value)} className="rounded-lg bg-slate-900 border border-white/10 px-3">
                <option value="pop">Popular</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
            <div className="md:col-span-1">
              <div className="rounded-xl border border-white/10 bg-slate-900/60 p-4">
                <div className="flex items-center gap-2 text-slate-300"><Filter size={16}/> Filters</div>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {categories.map(c => (
                    <button key={c} onClick={()=>setCat(c)} className={`px-3 py-2 rounded-lg text-sm border ${cat===c?'border-fuchsia-500/60 bg-fuchsia-500/10 text-fuchsia-200':'border-white/10 text-slate-300 hover:border-white/20'}`}>{c}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((p, i) => (
              <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.03 }} className="group rounded-2xl overflow-hidden border border-white/10 bg-slate-900/40 hover:bg-slate-900/70 transition-colors">
                <div className="aspect-video overflow-hidden">
                  <img src={p.img} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{p.title}</h3>
                    <span className="text-fuchsia-300">${p.price}</span>
                  </div>
                  <div className="mt-2 flex items-center gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_,i2)=> (
                      <Star key={i2} size={16} className={i2 < p.rating ? '' : 'opacity-30'} fill="currentColor"/>
                    ))}
                  </div>
                  <button className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-fuchsia-600 hover:bg-fuchsia-500 text-white transition-colors">
                    <ShoppingCart size={18}/> Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
