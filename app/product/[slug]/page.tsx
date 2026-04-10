'use client'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getProductBySlug, products, CATEGORIES } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import { useCart } from '@/components/CartContext'
export async function generateStaticParams() {
  return products.map(p => ({ slug: p.slug }))
}

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { addToCart } = useCart()
  cconst { slug } = params
  const product = getProductBySlug(slug)
  if (!product) notFound()

  const discount = Math.round((1 - product.priceKZT / product.oldPriceKZT) * 100)
  const category = CATEGORIES.find(c => c.id === product.category)
  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
        <Link href="/" className="hover:text-gray-600">Главная</Link>
        <span>/</span>
        <Link href="/catalog" className="hover:text-gray-600">Каталог</Link>
        <span>/</span>
        <Link href={`/catalog?cat=${product.category}`} className="hover:text-gray-600">
          {category?.name}
        </Link>
        <span>/</span>
        <span className="text-gray-600 line-clamp-1">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        {/* Product image */}
        <div className="relative bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl aspect-square flex items-center justify-center overflow-hidden">
          <div className="text-[120px] opacity-30">
            {product.category === 'face' ? '✨' :
             product.category === 'body' ? '💆' :
             product.category === 'hair' ? '💇' :
             product.category === 'universal' ? '💧' :
             product.category === 'home' ? '🏠' :
             product.category === 'aroma' ? '🌿' : '🌸'}
          </div>
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {product.isNew && (
              <span className="bg-blue-500 text-white text-sm font-bold px-3 py-1 rounded-full">НОВИНКА</span>
            )}
            {product.isBestseller && (
              <span className="text-sm font-bold px-3 py-1 rounded-full" style={{ background: '#c9a227', color: 'white' }}>ХИТ ПРОДАЖ</span>
            )}
            {discount > 0 && (
              <span className="bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">-{discount}%</span>
            )}
          </div>
        </div>

        {/* Product info */}
        <div>
          <p className="text-sm text-gray-400 mb-1 uppercase tracking-wide font-medium">{product.brand}</p>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">{product.name}</h1>

          <div className="flex items-center gap-4 mb-6">
            <div>
              <span className="text-3xl font-bold" style={{ color: '#1a6b3c' }}>
                {product.priceKZT.toLocaleString('ru-KZ')} ₸
              </span>
              {product.oldPriceKZT > product.priceKZT && (
                <span className="ml-3 text-lg text-gray-400 line-through">
                  {product.oldPriceKZT.toLocaleString('ru-KZ')} ₸
                </span>
              )}
            </div>
          </div>

          {/* Product details */}
          <div className="bg-gray-50 rounded-2xl p-5 mb-6 space-y-3">
            {[
              { label: 'Объём / Вес', value: product.volume },
              { label: 'Категория', value: category?.name },
              { label: 'Бренд', value: product.brand },
              { label: 'Наличие', value: product.inStock ? '✅ В наличии' : '❌ Нет в наличии' },
            ].map(item => (
              <div key={item.label} className="flex justify-between text-sm">
                <span className="text-gray-500">{item.label}</span>
                <span className="font-medium text-gray-900">{item.value}</span>
              </div>
            ))}
          </div>

          {/* Add to cart */}
          <div className="flex flex-col gap-3 mb-6">
            <button
  onClick={() =>
    addToCart({
      id: product.id,
      name: product.name,
      priceKZT: product.priceKZT,
    })
  }
  className="w-full py-4 rounded-xl font-bold text-lg transition-all hover:opacity-90 hover:-translate-y-0.5"
  style={{ background: '#1a6b3c', color: 'white' }}>
  🛒 В корзину
</button>
  onClick={() =>
    addToCart({
      id: product.id,
      name: product.name,
      priceKZT: product.priceKZT,
    })
  }
  className="w-full py-4 rounded-xl font-bold text-lg transition-all hover:opacity-90 hover:-translate-y-0.5"
  style={{ background: '#1a6b3c', color: 'white' }}>
  🛒 В корзину
</button>
            </button>
            <a
              href={`https://wa.me/77053554926?text=Здравствуйте!%20Хочу%20заказать%20${encodeURIComponent(product.name)}`}
              className="w-full py-4 rounded-xl font-bold text-lg text-center border-2 transition-all hover:bg-gray-50"
              style={{ borderColor: '#1a6b3c', color: '#1a6b3c' }}>
              📱 Заказать через WhatsApp
            </a>
          </div>

          {/* Delivery info */}
          <div className="flex flex-col gap-2">
            {[
              { icon: '🚚', text: 'Доставка по всему Казахстану 2–5 дней' },
              { icon: '💳', text: 'Оплата картой или наличными при получении' },
              { icon: '↩️', text: 'Возврат в течение 14 дней' },
            ].map(item => (
              <div key={item.text} className="flex items-center gap-2 text-sm text-gray-500">
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Description */}
      {product.description && (
        <div className="bg-white rounded-2xl border border-gray-100 p-8 mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Описание</h2>
          <p className="text-gray-600 leading-relaxed">{product.description}</p>
        </div>
      )}

      {/* Related products */}
      {related.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Похожие товары</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {related.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
