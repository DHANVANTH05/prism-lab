import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X, Moon, Sun } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const navItems = [
  { label: 'Home', href: '/' },
  {
    label: 'People',
    href: '/people',
    children: [
      { label: 'Lab Director', href: '/people' },
      { label: 'Students', href: '/students' },
      { label: 'Alumni', href: '/alumni' },
    ],
  },
  { label: 'Infrastructure', href: '/infrastructure' },
  { label: 'Research', href: '/research' },
  { label: 'Publications', href: '/publications' },
  { label: 'News', href: '/news' },
  { label: 'Gallery', href: '/gallery' },
]

export default function Navbar() {
  const location = useLocation()
  const { dark, toggle } = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-[#0d1426]/95 backdrop-blur border-b border-gray-100 dark:border-white/10 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#0f2044] dark:bg-[#39e07a]/20 flex items-center justify-center">
              <span className="text-[#39e07a] font-display italic font-bold text-sm">P</span>
            </div>
            <div>
              <div className="font-body font-bold text-lg text-[#0f2044] dark:text-white leading-tight tracking-wide">PRISM Lab</div>
              <div className="text-xs text-[#6b7a94] dark:text-white/40 leading-tight">IIT Guwahati</div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="relative group">
                  <button className="flex items-center gap-1 text-sm font-medium text-[#0f2044]/70 dark:text-white/60 hover:text-[#0f2044] dark:hover:text-white transition-colors">
                    {item.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-44 bg-white dark:bg-[#0d1426] rounded-xl border border-gray-100 dark:border-white/10 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 py-1">
                    {item.children.map((child) => (
                      <Link key={child.href} to={child.href} className="block px-4 py-2 text-sm text-[#0f2044]/70 dark:text-white/60 hover:text-[#0f2044] dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={item.href} to={item.href} className={`text-sm font-medium transition-colors ${location.pathname === item.href ? 'text-[#0f2044] dark:text-white' : 'text-[#0f2044]/60 dark:text-white/50 hover:text-[#0f2044] dark:hover:text-white'}`}>
                  {item.label}
                </Link>
              )
            )}
            <button onClick={toggle} className="w-8 h-8 rounded-full flex items-center justify-center text-[#0f2044]/60 dark:text-white/60 hover:bg-gray-100 dark:hover:bg-white/10 transition-all" title={dark ? 'Switch to light mode' : 'Switch to dark mode'}>
              {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button onClick={toggle} className="w-8 h-8 rounded-full flex items-center justify-center text-[#0f2044]/60 dark:text-white/60 hover:bg-gray-100 dark:hover:bg-white/10 transition-all">
              {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 text-[#0f2044] dark:text-white" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 dark:border-white/10 bg-white dark:bg-[#0d1426] px-4 py-3 space-y-1">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label}>
                <div className="px-3 py-2 text-xs font-semibold text-[#6b7a94] dark:text-white/40 uppercase tracking-wider">{item.label}</div>
                {item.children.map((child) => (
                  <Link key={child.href} to={child.href} className="block px-6 py-2 text-sm text-[#0f2044]/70 dark:text-white/60" onClick={() => setMobileOpen(false)}>{child.label}</Link>
                ))}
              </div>
            ) : (
              <Link key={item.href} to={item.href} className="block px-3 py-2 text-sm font-medium text-[#0f2044]/70 dark:text-white/60 hover:text-[#0f2044] dark:hover:text-white" onClick={() => setMobileOpen(false)}>
                {item.label}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  )
}
