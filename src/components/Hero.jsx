import Spline from '@splinetool/react-spline'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, -120])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -60])
  const blur = useTransform(scrollYProgress, [0, 1], ['0px', '6px'])

  return (
    <section ref={ref} className="relative h-[95vh] overflow-hidden bg-slate-950">
      <motion.div style={{ y, filter: blur.to(b => `blur(${b})`) }} className="absolute inset-0 will-change-transform">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/40 to-slate-950 pointer-events-none" />

      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <motion.div style={{ y: contentY }} className="max-w-2xl will-change-transform">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl font-magz text-white leading-tight drop-shadow-[0_0_35px_rgba(168,85,247,0.35)]"
          >
            Fate Gaming Store
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.15 } }}
            className="mt-4 text-lg text-slate-200 max-w-xl"
          >
            Custom high-end RGB PC builds, curated gear, and futuristic vibes. Scroll to explore components.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-8 flex gap-3">
            <a href="#categories" className="px-5 py-3 rounded-lg bg-fuchsia-600 hover:bg-fuchsia-500 text-white shadow-lg shadow-fuchsia-600/30 transition-colors">Browse Components</a>
            <a href="/store" className="px-5 py-3 rounded-lg bg-indigo-600/80 hover:bg-indigo-500 text-white border border-white/10 transition-colors">Go to Store</a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
