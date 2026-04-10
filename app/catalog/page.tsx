'use client'
import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import ProductCard from '@/components/ProductCard'
import { getProductsByCategory, CATEGORIES, SUBCATEGORIES } from '@/data/products'

function CatalogContent() {
  const searchParams = useSearchParams()
  const catParam = searchParams.get('cat') || 'all'
  const [activeCategory, setActiveCategory] = useState(catParam)
  const [activeSubcategory, setActiveSubcategory] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('default')

  useEffect(() => { setActiveCategory(catParam); setActiveSubcategory('') }, [catParam])

  const currentSubcategories = SUBCATEGORIES.filter(s => s.parent === activeCategory)
  let filtered = activeSubcategory ? getProductsByCategory(activeSubcategory) : getProductsByCategory(activeCategory)

  if (searchQuery) {
    const q = searchQuery.toLowerCase()
    filtered = filtered.filter(p => p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q))
  }
  if (sortBy === 'price_asc') filtered = [...filtered].sort((a, b) => a.priceKZT - b.priceKZT)
  if (sortBy === 'price_desc') filtered = [...filtered].sort((a, b) => b.priceKZT - a.priceKZT)

  const activeCat = CATEGORIES.find(c => c.id === activeCategory)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{activeCat ? `${activeCat.icon} ${activeCat.name}` : 'Каталог'}</h1>
        <p className="text-gray-500 mt-1">{filtered.length} товаров</p>
      </div>
      <div className="flex flex-col lg:flex-row gap-6">
        <aside className="w-full lg:w-56 flex-shrink-0">
          <div className="bg-white rounded-2xl border border-gray-100 p-4 sticky top-20">
            <h3 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">Категории</h3>
            <ul className="space-y-1">
              {CATEGORIES.map(cat => (
                <li key={cat.id}>
                  <button onClick={() => { setActiveCategory(cat.id); setActiveSubcategory('') }}
                    className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all text-left"
                    style={activeCategory === cat.id && !activeSubcategory ? { background: '#1a6b3c', color: 'white' } : { color: '#4b5563' }}>
                    <span>{cat.icon}</span><span>{cat.name}</span>
                  </button>
                </li>
              ))}
            </ul>
            {currentSubcategories.length > 0 && (
              <div className="mt-4">
                <h3 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">Подкатегории</h3>
                <ul className="space-y-1">
                  {currentSubcategories.map(sub => (
                    <li key={sub.id}>
                      <button onClick={() => setActiveSubcategory(activeSubcategory === sub.id ? '' : sub.id)}
                        className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all text-left"
                        style={activeSubcategory === sub.id ? { background: '#c9a227', color: 'white', fontWeight: 600 } : { color: '#6b7280' }}>
                        <span>{sub.icon}</span><span>{sub.name}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </aside>
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <div className="relative flex-1">
              <input type="text" placeholder="Поиск товаров..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none" />
            </div>
            <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="px-4 py-2.5 border border-gray-200 rounded-xl text-sm bg-white">
              <option value="default">По умолчанию</option>
              <option value="price_asc">Цена: по возрастанию</option>
              <option value="price_desc">Цена: по убыванию</option>
            </select>
          </div>
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-gray-400"><p className="text-4xl mb-4">🔍</p><p>Товары не найдены</p></div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
              {filtered.map(product => <ProductCard key={product.id} product={product} />)}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function CatalogPage() {
  return (
    <Suspense fallback={<div className="flex justify-center py-20 text-gray-400">Загрузка...</div>}>
      <CatalogContent />
    </Suspense>
  )
}
