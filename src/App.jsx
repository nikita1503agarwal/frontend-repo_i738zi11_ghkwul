import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import Marquee from './components/Marquee'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Categories />
        <Marquee />
      </main>
      <Footer />
    </div>
  )
}

export default App
