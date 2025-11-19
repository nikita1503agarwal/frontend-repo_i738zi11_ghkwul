import { motion } from 'framer-motion'
import { Cpu, Monitor, Keyboard, Mouse, Headphones } from 'lucide-react'

const items = [
  { title: 'GPUs', icon: Cpu, color: 'from-fuchsia-500 to-purple-500', desc: 'Latest RTX and Radeon series' },
  { title: 'Monitors', icon: Monitor, color: 'from-indigo-500 to-blue-500', desc: 'High refresh, color-accurate' },
  { title: 'Keyboards', icon: Keyboard, color: 'from-emerald-500 to-teal-500', desc: 'Mechanical, hot-swappable' },
  { title: 'Mice', icon: Mouse, color: 'from-amber-500 to-orange-500', desc: 'Lightweight, precise sensors' },
  { title: 'Audio', icon: Headphones, color: 'from-pink-500 to-rose-500', desc: 'Immersive gaming headsets' },
]

export default function Categories() {
  return (
    <section id="categories" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_50%_-100px,rgba(139,92,246,0.2),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Build Your Rig</h2>
          <p className="mt-2 text-slate-300">Premium components with a touch of neon</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {items.map((it, idx) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.05 }}
              className="group relative rounded-2xl p-6 border border-white/10 bg-slate-900/40 hover:bg-slate-900/70 transition-colors overflow-hidden"
            >
              <div className={`absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${it.color} blur-3xl opacity-30 group-hover:opacity-50 transition-opacity`} />
              <div className={`h-12 w-12 rounded-lg bg-gradient-to-br ${it.color} flex items-center justify-center text-white shadow-lg shadow-black/30`}>
                <it.icon />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{it.title}</h3>
              <p className="text-slate-300 text-sm">{it.desc}</p>
              <button className="mt-4 text-fuchsia-300 hover:text-fuchsia-200 text-sm">Explore →</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
