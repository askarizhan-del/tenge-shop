'use client'
import Link from 'next/link'
import { useCart } from '@/components/CartContext'

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice } = useCart()

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Корзина</h1>
        <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Корзина пуста</h2>
          <p className="text-gray-400 mb-8">Добавьте товары из нашего каталога</p>
          <Link href="/catalog" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white" style={{ background: '#1a6b3c' }}>
            Перейти в каталог
          </Link>
        </div>
      </div>
    )
  }

  const orderText = items.map(i => `• ${i.product.name} × ${i.quantity} = ${(i.product.priceKZT * i.quantity).toLocaleString('ru-KZ')} ₸`).join('\n')
  const waUrl = `https://wa.me/77053554926?text=${encodeURIComponent(`Здравствуйте! Хочу оформить заказ:\n\n${orderText}\n\nИтого: ${totalPrice.toLocaleString('ru-KZ')} ₸`)}`

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Корзина</h1>
        <button onClick={clearCart} className="text-sm text-red-500 hover:text-red-700 font-medium">Очистить корзину</button>
      </div>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 space-y-3">
          {items.map(({ product, quantity }) => (
            <div key={product.id} className="bg-white rounded-2xl border border-gray-100 p-4 flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl" style={{ background: '#f0f7f2' }}>
                {product.category === 'face' ? '✨' : product.category === 'body' ? '💆' : product.category === 'hair' ? '💇' : product.category === 'universal' ? '💧' : product.category === 'home' ? '🏠' : product.category === 'aroma' ? '🌿' : '🌸'}
              </div>
              <div className="flex-1 min-w-0">
                <Link href={`/product/${product.slug}`} className="font-semibold text-gray-900 text-sm hover:text-green-700 line-clamp-2">{product.name}</Link>
                <p className="text-xs text-gray-400 mt-0.5">{product.volume}</p>
                <p className="font-bold mt-1" style={{ color: '#1a6b3c' }}>{(product.priceKZT * quantity).toLocaleString('ru-KZ')} ₸</p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <button onClick={() => updateQuantity(product.id, quantity - 1)} className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center font-bold text-gray-600">−</button>
                <span className="w-8 text-center font-semibold">{quantity}</span>
                <button onClick={() => updateQuantity(product.id, quantity + 1)} className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center font-bold text-gray-600">+</button>
              </div>
              <button onClick={() => removeFromCart(product.id)} className="text-gray-300 hover:text-red-500 p-1 flex-shrink-0">✕</button>
            </div>
          ))}
        </div>
        <div className="lg:w-72 flex-shrink-0">
          <div className="bg-white rounded-2xl border border-gray-100 p-6 sticky top-24">
            <h2 className="font-bold text-gray-900 text-lg mb-4">Ваш заказ</h2>
            <div className="flex justify-between text-sm text-gray-600 mb-2"><span>Товаров:</span><span>{totalItems} шт.</span></div>
            <div className="flex justify-between font-bold text-lg border-t border-gray-100 pt-3 mt-2">
              <span>Итого:</span><span style={{ color: '#1a6b3c' }}>{totalPrice.toLocaleString('ru-KZ')} ₸</span>
            </div>
            <a href={waUrl} target="_blank" rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-white mt-4 hover:opacity-90"
              style={{ background: '#25D366' }}>
              📱 Оформить через WhatsApp
            </a>
            <p className="text-xs text-gray-400 text-center mt-3">Мы подтвердим заказ и уточним доставку.</p>
            <Link href="/catalog" className="w-full flex items-center justify-center mt-3 py-2.5 px-4 rounded-xl text-sm font-medium text-gray-600 border border-gray-200">
              Продолжить покупки
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
