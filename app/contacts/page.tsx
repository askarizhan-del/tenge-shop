export default function ContactsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8" style={{ color: '#1a6b3c' }}>Контакты</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <a href="https://wa.me/77053554926"
          className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ background: '#25D366' }}>
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </div>
          <h2 className="text-xl font-semibold mb-2">WhatsApp</h2>
          <p className="text-gray-500 mb-3 text-sm">Самый быстрый способ связи</p>
          <p className="font-bold text-lg" style={{ color: '#1a6b3c' }}>+7 705 355 49 26</p>
          <p className="text-gray-400 text-sm mt-1">Пн–Вс: 09:00 – 21:00</p>
        </a>

        <a href="mailto:info@tenge.shop"
          className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ background: '#1a6b3c' }}>
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold mb-2">Email</h2>
          <p className="text-gray-500 mb-3 text-sm">Для официальных запросов</p>
          <p className="font-bold text-lg" style={{ color: '#1a6b3c' }}>info@tenge.shop</p>
          <p className="text-gray-400 text-sm mt-1">Ответ в течение 24 часов</p>
        </a>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-6">
        <h2 className="text-xl font-semibold mb-4" style={{ color: '#1a6b3c' }}>📍 Адрес</h2>
        <div className="flex gap-4 items-start">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-xl" style={{ background: '#e8f5ee' }}>
            🏢
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">ТОО «CAPITAL-TRADE.KZ»</p>
            <p className="text-gray-700">010000, г. Астана, район Есиль,</p>
            <p className="text-gray-700">пр. Кабанбай батыра, дом 6/3, офис 5</p>
            <p className="text-gray-500 text-sm mt-2">БИН: 090640000334</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold mb-6" style={{ color: '#1a6b3c' }}>💬 Написать нам</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <a href="https://wa.me/77053554926?text=Здравствуйте! Хочу сделать заказ."
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-white font-medium text-sm"
            style={{ background: '#25D366' }}>
            🛍️ Сделать заказ
          </a>
          <a href="https://wa.me/77053554926?text=Здравствуйте! Вопрос по доставке:"
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-white font-medium text-sm"
            style={{ background: '#1a6b3c' }}>
            🚚 Вопрос по доставке
          </a>
          <a href="https://wa.me/77053554926?text=Здравствуйте! Хочу оформить возврат."
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium text-sm border-2"
            style={{ borderColor: '#1a6b3c', color: '#1a6b3c' }}>
            🔄 Возврат товара
          </a>
        </div>
      </div>
    </div>
  )
}
