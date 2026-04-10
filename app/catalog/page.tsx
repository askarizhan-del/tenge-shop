'use client'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import ProductCard from '@/components/ProductCard'
import { products, CATEGORIES } from '@/data/products'

function CatalogContent() {
  const searchParams = useSearchParams()
  const catParam = searchParams.get('cat') || 'all'
  const [activeCategory, setActiveCategory] = useState(catParam)
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('default')

  useEffect(() => {
    setActiveCategory(catParam)
  }, [catParam])

  let filtered = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory)

  if (searchQuery) {
    const q = searchQuery.toLowerCase()
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.subcategory.toLowerCase().includes(q)
    )
  }

  if (sortBy === 'price_asc') filtered = [...filtered].sort((a, b) => a.priceKZT - b.priceKZT)
  if (sortBy === 'price_desc') filtered = [...filtered].sort((a, b) => b.priceKZT - a.priceKZT)
  if (sortBy === 'discount') filtered = [...filtered].sort((a, b) =>
    (b.oldPriceKZT - b.priceKZT) / b.oldPriceKZT - (a.oldPriceKZT - a.priceKZT) / a.oldPriceKZT
  )

  const activeCat = CATEGORIES.find(c => c.id === activeCategory)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          {activeCat ? `${activeCat.icon} ${activeCat.name}` : 'Каталог'}
        </h1>
        <p className="text-gray-500 mt-1">{filtered.length} товаров</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar — categories */}
        <aside className="w-full lg:w-56 flex-shrink-0">
          <div className="bg-white rounded-2xl border border-gray-100 p-4 sticky top-20">
            <h3 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">Категории</h3>
            <ul className="space-y-1">
              {CATEGORIES.map(cat => (
                <li key={cat.id}>
                  <button
                    onClick={() => setActiveCategory(cat.id)}
                    className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all text-left ${
                      activeCategory === cat.id
                        ? 'text-white'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                    style={activeCategory === cat.id ? { background: '#1a6b3c' } : {}}>
                    <span>{cat.icon}</span>
                    <span>{cat.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1">
          {/* Search + Sort bar */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <div className="relative flex-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
                className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
              <input
                type="text"
                placeholder="Поиск товаров..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:border-transparent"
                style={{ focusRingColor: '#1a6b3c' } as React.CSSProperties}
              />
            </div>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="px-4 py-2.5 border border-gray-200 rounded-xl text-sm bg-white focus:outline-none cursor-pointer">
              <option value="default">По умолчанию</option>
              <option value="price_asc">Цена: по возрастанию</option>
              <option value="price_desc">Цена: по убыванию</option>
              <option value="discount">По скидке</option>
            </select>
          </div>

          {/* Products grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-gray-400">
              <p className="text-4xl mb-4">🔍</p>
              <p className="text-lg font-medium">Товары не найдены</p>
              <p className="text-sm mt-1">Попробуйте изменить поиск или выбрать другую категорию</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
              {filtered.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function CatalogPage() {
  return (
    <Suspense fallback={<div className="flex justify-center py-20"><div className="text-gray-400">Загрузка...</div></div>}>
      <CatalogContent />
    </Suspense>
  )
}
