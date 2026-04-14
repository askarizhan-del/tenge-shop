'use client'
import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import ProductCard from '@/components/ProductCard'
import { getProductsByCategory, searchProducts, CATEGORIES } from '@/data/products'

function CatalogContent() {
  const searchParams = useSearchParams()
  const catParam = searchParams.get('cat') || 'all'
  const [activeCategory, setActiveCategory] = useState(catParam)
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('default')

  useEffect(() => { setActiveCategory(catParam) }, [catParam])

  const realCategories = CATEGORIES.filter(c => !c.comingSoon)
  const comingCategories = CATEGORIES.filter(c => c.comingSoon)

  let filtered = searchQuery
    ? searchProducts(searchQuery)
    : getProductsByCategory(activeCategory)

  if (sortBy === 'price_asc') filtered = [...filtered].sort((a, b) => a.price - b.price)
  if (sortBy === 'price_desc') filtered = [...filtered].sort((a, b) => b.price - a.price)
  if (sortBy === 'new') filtered = filtered.filter(p => p.isNew)
  if (sortBy === 'hot') filtered = filtered.filter(p => p.isBestseller)

  const activeCat = CATEGORIES.find(c => c.id === activeCategory)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          {activeCat ? `${activeCat.icon} ${activeCat.name}` : 'Каталог'}
        </h1>
        <p className="text-gray-500 text-sm mt-1">{filtered.length} товаров</p>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Поиск по каталогу..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="w-full max-w-md px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-300 text-sm"
        />
      </div>

      <div className="flex gap-2 flex-wrap mb-4">
        {realCategories.map(cat => (
          <button
            key={cat.id}
            onClick={() => { setActiveCategory(cat.id); setSearchQuery('') }}
            className="px-3 py-1.5 rounded-full text-sm font-medium transition-all"
            style={activeCategory === cat.id
              ? { background: '#1a6b3c', color: 'white' }
              : { background: '#f3f4f6', color: '#374151' }}
          >
            {cat.icon} {cat.name}
          </button>
        ))}
      </div>

      {comingCategories.length > 0 && (
        <div className="flex gap-2 flex-wrap mb-6">
          {comingCategories.map(cat => (
            <span
              key={cat.id}
              className="px-3 py-1.5 rounded-full text-sm font-medium opacity-50 cursor-not-allowed"
              style={{ background: '#f3f4f6', color: '#9ca3af' }}
              title="Скоро в продаже"
            >
              {cat.icon} {cat.name} <span className="text-xs">скоро</span>
            </span>
          ))}
        </div>
      )}

      <div className="flex items-center gap-3 mb-6 flex-wrap">
        <span className="text-sm text-gray-500">Сортировка:</span>
        {[
          { value: 'default', label: 'По умолчанию' },
          { value: 'price_asc', label: 'Дешевле' },
          { value: 'price_desc', label: 'Дороже' },
          { value: 'hot', label: '🔥 Хиты' },
          { value: 'new', label: '🆕 Новинки' },
        ].map(opt => (
          <button
            key={opt.value}
            onClick={() => setSortBy(opt.value)}
            className="px-3 py-1.5 rounded-full text-xs font-medium transition-all"
            style={sortBy === opt.value
              ? { background: '#c9a227', color: 'white' }
              : { background: '#f3f4f6', color: '#374151' }}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-gray-400">
          <p className="text-4xl mb-3">🔍</p>
          <p className="text-lg font-medium">Ничего не найдено</p>
          <p className="text-sm">Попробуйте другой запрос или категорию</p>
        </div>
      )}
    </div>
  )
}

export default function CatalogPage() {
  return (
    <Suspense fallback={<div className="flex justify-center py-20"><div className="w-8 h-8 border-2 border-green-600 border-t-transparent rounded-full animate-spin" /></div>}>
      <CatalogContent />
    </Suspense>
  )
}
