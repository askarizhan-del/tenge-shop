'use client'
import Link from 'next/link'
import type { Product } from '@/data/products'
import { useCart } from '@/components/CartContext'

interface ProductCardProps {
  product: Product
}

const CATEGORY_EMOJI: Record<string, string> = {
  spices: '🧂',
  pasta: '🍝',
  sauces: '🫙',
  drinks: '🍵',
  snacks: '🍜',
  baking: '🎂',
  canned: '🥫',
  soups: '🍲',
  staples: '🌾',
  cereals: '🥣',
  household: '🏠',
  seasonal: '🎉',
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart, items } = useCart()
  const inCart = items.some(i => i.product.id === product.id)
  const emoji = CATEGORY_EMOJI[product.category] ?? '📦'

  const discount = product.originalPrice && product.originalPrice > product.price
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0

  return (
    <Link href={`/product/${product.slug}`} className="group block">
      <div className="bg-white rounded-2xl overflow-hidden card-hover border border-gray-100 h-full flex flex-col">
        <div className="relative bg-gradient-to-br from-green-50 to-emerald-100 h-52 flex items-center justify-center overflow-hidden">
          <div className="text-6xl opacity-30 group-hover:scale-110 transition-transform duration-300">
            {emoji}
          </div>
          <div className="absolute top-3 left-3 flex flex-col gap-1">
            {product.isNew && (
              <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">НОВИНКА</span>
            )}
            {product.isBestseller && (
              <span className="text-xs font-bold px-2 py-1 rounded-full" style={{ background: '#c9a227', color: 'white' }}>ХИТ</span>
            )}
          </div>
          {discount > 0 && (
            <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              -{discount}%
            </div>
          )}
        </div>
        <div className="p-4 flex flex-col flex-1">
          <h3 className="font-semibold text-gray-900 text-sm leading-snug mb-2 flex-1 group-hover:text-green-700 transition-colors">
            {product.name}
          </h3>
          <div className="flex items-end justify-between mt-auto">
            <div>
              <p className="text-lg font-bold" style={{ color: '#1a6b3c' }}>
                {product.price.toLocaleString('ru-KZ')} ₸
              </p>
              {product.originalPrice && product.originalPrice > product.price && (
                <p className="text-xs text-gray-400 line-through">
                  {product.originalPrice.toLocaleString('ru-KZ')} ₸
                </p>
              )}
            </div>
            <button
              onClick={(e) => {
                e.preventDefault()
                addToCart(product)
              }}
              className="p-2 rounded-xl transition-all hover:scale-110 active:scale-95"
              style={{ background: inCart ? '#c9a227' : '#1a6b3c', color: 'white' }}
              title={inCart ? 'Уже в корзине' : 'В корзину'}
            >
              {inCart ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}
