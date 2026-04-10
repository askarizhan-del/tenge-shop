export default function CartPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Корзина</h1>
      <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
        <div className="text-6xl mb-4">🛒</div>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Корзина пуста</h2>
        <p className="text-gray-400 mb-8">Добавьте товары из нашего каталога</p>
        <a href="/catalog"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all hover:opacity-90"
          style={{ background: '#1a6b3c' }}>
          Перейти в каталог
        </a>
      </div>
    </div>
  )
}
