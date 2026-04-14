import Link from 'next/link'
import ProductCard from '@/components/ProductCard'
import BundleSets from '@/components/BundleSets'
import { products, CATEGORIES, getBestsellers } from '@/data/products'

export default function HomePage() {
  const bestsellers = getBestsellers()
  const newProducts = products.filter(p => p.isNew).slice(0, 8)
  const realCategories = CATEGORIES.filter(c => c.id !== 'all' && !c.comingSoon)
  const comingCategories = CATEGORIES.filter(c => c.comingSoon)

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a6b3c 0%, #0f4027 50%, #0a2d1c 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full" style={{ background: '#c9a227', filter: 'blur(80px)' }}></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full" style={{ background: '#c9a227', filter: 'blur(60px)' }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
              <span style={{ color: '#c9a227' }}>₸</span>
              <span className="text-white/80 text-sm font-medium">Честные цены в тенге</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Всё нужное —<br />
              <span style={{ color: '#c9a227' }}>по честной цене</span><br />
              для Казахстана
            </h1>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Специи, макароны, соусы, напитки и товары для дома. Без переплат, без посредников.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/catalog" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105" style={{ background: '#c9a227', color: '#0f1c14' }}>
                Смотреть каталог
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <a href="https://wa.me/77053554926" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg border-2 border-white/30 text-white hover:bg-white/10 transition-all">
                📱 WhatsApp
              </a>
            </div>
            <div className="flex gap-8 mt-12 pt-8 border-t border-white/10">
              <div><p className="text-2xl font-bold text-white">{products.length}</p><p className="text-white/60 text-sm">товаров</p></div>
              <div><p className="text-2xl font-bold text-white">{realCategories.length}</p><p className="text-white/60 text-sm">категорий</p></div>
              <div><p className="text-2xl font-bold text-white">🚚</p><p className="text-white/60 text-sm">По всему Казахстану</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Категории</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {realCategories.map(cat => (
            <Link key={cat.id} href={`/catalog?cat=${cat.id}`} className="flex flex-col items-center gap-3 p-6 bg-white rounded-2xl border border-gray-100 hover:border-green-300 hover:shadow-md transition-all group card-hover">
              <span className="text-4xl group-hover:scale-110 transition-transform">{cat.icon}</span>
              <span className="text-sm font-semibold text-gray-700 text-center leading-tight">{cat.name}</span>
            </Link>
          ))}
          {comingCategories.map(cat => (
            <div key={cat.id} className="flex flex-col items-center gap-3 p-6 bg-gray-50 rounded-2xl border border-gray-100 opacity-60 cursor-not-allowed">
              <span className="text-4xl grayscale">{cat.icon}</span>
              <span className="text-sm font-semibold text-gray-400 text-center leading-tight">{cat.name}</span>
              <span className="text-xs text-gray-400 bg-gray-200 px-2 py-0.5 rounded-full">скоро</span>
            </div>
          ))}
        </div>
      </section>

      {/* Bundles */}
      <div style={{ background: '#f0f7f2' }}>
        <BundleSets />
      </div>

      {/* Bestsellers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">🔥 Хиты продаж</h2>
          <Link href="/catalog" className="text-sm font-medium hover:underline" style={{ color: '#1a6b3c' }}>Все товары →</Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {bestsellers.slice(0, 8).map(product => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>

      {/* New products */}
      {newProducts.length > 0 && (
        <section className="py-12" style={{ background: '#f0f7f2' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">🆕 Новинки</h2>
              <Link href="/catalog?sort=new" className="text-sm font-medium hover:underline" style={{ color: '#1a6b3c' }}>Смотреть все →</Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {newProducts.map(product => <ProductCard key={product.id} product={product} />)}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16" style={{ background: 'linear-gradient(135deg, #1a6b3c, #0a2d1c)' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Оптовые заказы для бизнеса</h2>
          <p className="text-white/70 text-lg mb-8">Специальные условия для магазинов и корпоративных клиентов.</p>
          <a href="https://wa.me/77053554926?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82%20%D0%BE%D0%BF%D1%82%D0%BE%D0%B2%D1%8B%D0%B9%20%D0%B7%D0%B0%D0%BA%D0%B0%D0%B7" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105" style={{ background: '#c9a227', color: '#0f1c14' }}>
            📱 Написать в WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}
