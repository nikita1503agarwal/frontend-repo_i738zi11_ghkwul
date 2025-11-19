import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive ? 'text-white' : 'text-slate-300 hover:text-white'
    }`

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-fuchsia-500 to-indigo-500 shadow-lg shadow-fuchsia-500/20" />
            <span className="text-2xl leading-none font-magz tracking-wide text-white group-hover:text-fuchsia-300 transition-colors">
              Fate Gaming Store
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/store" className={navLinkClass}>Store</NavLink>
            <NavLink to="/blogs" className={navLinkClass}>Blogs</NavLink>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-slate-200">
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              <NavLink onClick={() => setOpen(false)} to="/" className={navLinkClass}>Home</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/store" className={navLinkClass}>Store</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/blogs" className={navLinkClass}>Blogs</NavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
