export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8" style={{ color: '#1a6b3c' }}>О нас</h1>
      
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-6">
        <h2 className="text-xl font-semibold mb-4" style={{ color: '#1a6b3c' }}>О компании</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          TENGE.SHOP — это казахстанский интернет-магазин, предлагающий широкий ассортимент товаров 
          для ухода за собой, товаров для дома и многого другого по доступным ценам.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Мы работаем напрямую с поставщиками, чтобы предложить вам лучшие цены без посредников. 
          Все товары проходят проверку качества перед отправкой.
        </p>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-6">
        <h2 className="text-xl font-semibold mb-4" style={{ color: '#1a6b3c' }}>Реквизиты компании</h2>
        <div className="space-y-3 text-gray-700">
          <div className="flex gap-3">
            <span className="font-medium w-40 shrink-0">Наименование:</span>
            <span>ТОО «CAPITAL-TRADE.KZ»</span>
          </div>
          <div className="flex gap-3">
            <span className="font-medium w-40 shrink-0">БИН:</span>
            <span>090640000334</span>
          </div>
          <div className="flex gap-3">
            <span className="font-medium w-40 shrink-0">Адрес:</span>
            <span>010000, г. Астана, район Есиль, пр. Кабанбай батыра, дом 6/3, офис 5</span>
          </div>
          <div className="flex gap-3">
            <span className="font-medium w-40 shrink-0">WhatsApp:</span>
            <a href="https://wa.me/77053554926" className="hover:underline" style={{ color: '#1a6b3c' }}>+7 705 355 49 26</a>
          </div>
          <div className="flex gap-3">
            <span className="font-medium w-40 shrink-0">Email:</span>
            <a href="mailto:info@tenge.shop" className="hover:underline" style={{ color: '#1a6b3c' }}>info@tenge.shop</a>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold mb-4" style={{ color: '#1a6b3c' }}>Наши преимущества</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4">
            <div className="text-4xl mb-3">🏆</div>
            <h3 className="font-semibold mb-2">Качество</h3>
            <p className="text-gray-600 text-sm">Только проверенные товары от надёжных поставщиков</p>
          </div>
          <div className="text-center p-4">
            <div className="text-4xl mb-3">💰</div>
            <h3 className="font-semibold mb-2">Честная цена</h3>
            <p className="text-gray-600 text-sm">Прямые поставки — без наценок посредников</p>
          </div>
          <div className="text-center p-4">
            <div className="text-4xl mb-3">🚀</div>
            <h3 className="font-semibold mb-2">Быстрая доставка</h3>
            <p className="text-gray-600 text-sm">Отправляем в день заказа по всему Казахстану</p>
          </div>
        </div>
      </div>
    </div>
  )
}
