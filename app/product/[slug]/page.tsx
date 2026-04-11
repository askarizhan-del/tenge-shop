import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getProductBySlug, products, CATEGORIES } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import AddToCartButton from '@/components/AddToCartButton'

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) notFound()

  const category = CATEGORIES.find((c) => c.id === product.category)
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  const originalPrice = product.originalPrice ?? null
  const discountPercent = originalPrice
    ? Math.round((1 - product.price / originalPrice) * 100)
    : null

  const waText = encodeURIComponent(
    'Здравствуйте! Хочу заказать: ' + product.name + ' — ' + product.price + ' ₸'
  )

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-4">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-1 text-sm text-gray-500 mb-4 flex-wrap">
          <Link href="/" className="hover:text-green-700">Главная</Link>
          <span>/</span>
          <Link href="/catalog" className="hover:text-green-700">Каталог</Link>
          {category && (
            <>
              <span>/</span>
              <Link href={`/catalog?cat=${category.id}`} className="hover:text-green-700">{category.name}</Link>
            </>
          )}
          <span>/</span>
          <span className="text-gray-700 truncate max-w-xs">{product.name}</span>
        </nav>

        {/* Main card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">

            {/* Image */}
            <div className="relative bg-gray-50 flex items-center justify-center p-6 min-h-64">
              {product.imageUrl ? (
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="max-h-72 w-full object-contain"
                />
              ) : (
                <div className="flex flex-col items-center justify-center gap-3 text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm text-gray-400">Фото скоро появится</span>
                </div>
              )}
              {discountPercent && (
                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-lg">
                  -{discountPercent}%
                </span>
              )}
              {product.isNew && (
                <span className="absolute top-3 right-3 text-xs font-bold px-2 py-1 rounded-lg text-white" style={{ background: '#1a6b3c' }}>
                  Новинка
                </span>
              )}
            </div>

            {/* Info */}
            <div className="p-5 flex flex-col gap-4">
              {category && (
                <span className="text-xs font-medium text-green-700 bg-green-50 px-2 py-1 rounded-full w-fit">
                  {category.icon} {category.name}
                </span>
              )}
              <h1 className="text-xl font-bold text-gray-900 leading-snug">{product.name}</h1>
              <div className="flex items-end gap-3">
                <span className="text-3xl font-bold" style={{ color: '#1a6b3c' }}>
                  {product.price.toLocaleString()} ₸
                </span>
                {originalPrice && (
                  <span className="text-lg text-gray-400 line-through">
                    {originalPrice.toLocaleString()} ₸
                  </span>
                )}
              </div>
              <AddToCartButton product={product} />
              <a
                href={`https://wa.me/77053554926?text=${waText}`}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 border-green-600 text-green-700 font-semibold hover:bg-green-50 transition-colors text-sm"
              >
                <span>📱</span> Заказать через WhatsApp
              </a>
              <div className="mt-2 pt-4 border-t border-gray-100 space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span>🚚</span><span>Доставка по всему Казахстану</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span>📦</span><span>2–5 рабочих дней</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span>✅</span><span>Оплата при получении</span>
                </div>
              </div>
            </div>
          </div>
          {product.description && (
            <div className="px-5 pb-5 border-t border-gray-100 pt-4">
              <h2 className="text-sm font-semibold text-gray-700 mb-2">Описание</h2>
              <p className="text-sm text-gray-600 leading-relaxed">{product.description}</p>
            </div>
          )}
        </div>

        {related.length > 0 && (
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-3">Похожие товары</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
