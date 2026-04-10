'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useCart } from '@/components/CartContext'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { totalItems } = useCart()

  return (
    <header style={{ background: '#1a6b3c' }} className="sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: '#c9a227' }}>
              <span className="text-white font-bold text-sm">₸</span>
            </div>
            <span className="text-white font-bold text-xl tracking-wide">TENGE<span style={{ color: '#c9a227' }}>.SHOP</span></span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/catalog" className="text-white/80 hover:text-white font-medium transition-colors">Каталог</Link>
            <Link href="/catalog?cat=self-care" className="text-white/80 hover:text-white font-medium transition-colors">Уход за собой</Link>
            <Link href="/catalog?cat=home-goods" className="text-white/80 hover:text-white font-medium transition-colors">Товары для дома</Link>
            <Link href="/catalog?cat=repair" className="text-white/80 hover:text-white font-medium transition-colors">Ремонт дома</Link>
            <Link href="/catalog?cat=misc" className="text-white/80 hover:text-white font-medium transition-colors">Разное</Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/cart" className="relative text-white hover:text-yellow-300 transition-colors p-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-yellow-400 text-green-900 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems > 99 ? '99+' : totalItems}
                </span>
              )}
            </Link>
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white p-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                {menuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div style={{ background: '#145530' }} className="md:hidden border-t border-white/10">
          <div className="px-4 py-3 space-y-2">
            {[
              { href: '/catalog', label: '🛍️ Весь каталог' },
              { href: '/catalog?cat=self-care', label: '✨ Уход за собой' },
              { href: '/catalog?cat=home-goods', label: '🏠 Товары для дома' },
              { href: '/catalog?cat=repair', label: '🔧 Ремонт дома' },
              { href: '/catalog?cat=misc', label: '📦 Разное' },
            ].map(item => (
              <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="block text-white/80 hover:text-white py-2 font-medium">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
