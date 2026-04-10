'use client'
import Link from 'next/link'
import type { Product } from '@/data/products'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const discount = Math.round((1 - product.priceKZT / product.oldPriceKZT) * 100)

  return (
    <Link href={`/product/${product.slug}`} className="group block">
      <div className="bg-white rounded-2xl overflow-hidden card-hover border border-gray-100 h-full flex flex-col">
        {/* Image placeholder */}
        <div className="relative bg-gradient-to-br from-green-50 to-emerald-100 h-52 flex items-center justify-center overflow-hidden">
          {/* Category emoji */}
          <div className="text-6xl opacity-30 group-hover:scale-110 transition-transform duration-300">
            {product.category === 'face' ? '✨' :
             product.category === 'body' ? '💆' :
             product.category === 'hair' ? '💇' :
             product.category === 'universal' ? '💧' :
             product.category === 'home' ? '🏠' :
             product.category === 'aroma' ? '🌿' : '🌸'}
          </div>
          {/* Badges */}
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

        {/* Content */}
        <div className="p-4 flex flex-col flex-1">
          <p className="text-xs text-gray-400 mb-1 uppercase tracking-wide">{product.brand}</p>
          <h3 className="font-semibold text-gray-900 text-sm leading-snug mb-2 flex-1 group-hover:text-green-700 transition-colors">
            {product.name}
          </h3>
          <p className="text-xs text-gray-400 mb-3">{product.volume}</p>

          {/* Price */}
          <div className="flex items-end justify-between mt-auto">
            <div>
              <p className="text-lg font-bold" style={{ color: '#1a6b3c' }}>
                {product.priceKZT.toLocaleString('ru-KZ')} ₸
              </p>
              {product.oldPriceKZT > product.priceKZT && (
                <p className="text-xs text-gray-400 line-through">
                  {product.oldPriceKZT.toLocaleString('ru-KZ')} ₸
                </p>
              )}
            </div>
            <button
              onClick={(e) => { e.preventDefault(); /* TODO: add to cart */ }}
              className="p-2 rounded-xl transition-all"
              style={{ background: '#1a6b3c', color: 'white' }}
              title="В корзину"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}
