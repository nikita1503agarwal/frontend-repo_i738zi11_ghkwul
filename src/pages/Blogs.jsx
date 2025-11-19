import { motion } from 'framer-motion'

const posts = [
  { id: 1, title: 'How to Choose the Right GPU in 2025', excerpt: 'VRAM, CUDA cores, and real-world performance explained.', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, title: 'Mechanical Keyboard Switch Guide', excerpt: 'From linear to tactile, find your perfect feel.', img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, title: '144Hz vs 240Hz: Is It Worth It?', excerpt: 'We break down motion clarity and input lag.', img: 'https://images.unsplash.com/photo-1517059224940-d4af9eec41e5?q=80&w=1200&auto=format&fit=crop' },
]

export default function Blogs() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="pt-20 pb-10 border-b border-white/10 bg-gradient-to-b from-indigo-900/30 via-slate-950 to-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-magz">Insights & Guides</h1>
          <p className="mt-2 text-slate-300">Stay updated with the latest in PC hardware.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8">
          {posts.map((p, i) => (
            <motion.article key={p.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.05 }} className="grid grid-cols-1 sm:grid-cols-[280px_1fr] gap-6 rounded-2xl border border-white/10 bg-slate-900/40 overflow-hidden">
              <img src={p.img} alt={p.title} className="w-full h-48 sm:h-full object-cover"/>
              <div className="p-6">
                <h3 className="text-2xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-slate-300">{p.excerpt}</p>
                <button className="mt-4 text-fuchsia-300 hover:text-fuchsia-200">Read more →</button>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  )
}
