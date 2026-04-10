export default function ReturnsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8" style={{ color: '#1a6b3c' }}>Возврат и обмен</h1>

      <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-6">
        <p className="text-green-800 font-medium">
          ✅ Мы работаем в соответствии с Законом Республики Казахстан «О защите прав потребителей».
          Ваши права всегда защищены.
        </p>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-6">
        <h2 className="text-xl font-semibold mb-4" style={{ color: '#1a6b3c' }}>📋 Условия возврата</h2>
        <div className="space-y-4 text-gray-700">
          <div className="flex gap-3">
            <span className="text-2xl">📅</span>
            <div>
              <h3 className="font-semibold mb-1">Срок возврата — 14 дней</h3>
              <p>Вы можете вернуть товар надлежащего качества в течение 14 дней с момента получения, если он не подошёл по форме, размеру, фасону, расцветке или комплектации.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-2xl">📦</span>
            <div>
              <h3 className="font-semibold mb-1">Товар должен быть в исходном виде</h3>
              <p>Сохранены товарный вид, потребительские свойства, пломбы, фабричные ярлыки. Товар не был в употреблении.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-2xl">🧾</span>
            <div>
              <h3 className="font-semibold mb-1">Наличие подтверждения покупки</h3>
              <p>Кассовый или товарный чек, либо иной документ, подтверждающий оплату.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-6">
        <h2 className="text-xl font-semibold mb-4" style={{ color: '#1a6b3c' }}>⚠️ Товары, не подлежащие возврату</h2>
        <p className="text-gray-700 mb-3">В соответствии с законодательством РК, не подлежат возврату:</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Косметические средства и парфюмерия (при вскрытии упаковки)</li>
          <li>Предметы личной гигиены</li>
          <li>Товары, бывшие в употреблении</li>
          <li>Товары без оригинальной упаковки</li>
        </ul>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-6">
        <h2 className="text-xl font-semibold mb-4" style={{ color: '#1a6b3c' }}>🔄 Как оформить возврат</h2>
        <div className="space-y-3">
          {[
            'Свяжитесь с нами через WhatsApp или email',
            'Укажите номер заказа и причину возврата',
            'Дождитесь подтверждения от нашего менеджера',
            'Отправьте товар по указанному адресу',
            'Получите деньги в течение 10 рабочих дней',
          ].map((step, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0" style={{ background: '#1a6b3c' }}>
                {i + 1}
              </div>
              <p className="text-gray-700 pt-0.5">{step}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold mb-4" style={{ color: '#1a6b3c' }}>📞 Связаться с нами</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="https://wa.me/77053554926?text=Хочу оформить возврат товара:" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium"
            style={{ background: '#25D366' }}>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </a>
          <a href="mailto:info@tenge.shop?subject=Возврат товара"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium border-2"
            style={{ borderColor: '#1a6b3c', color: '#1a6b3c' }}>
            ✉️ info@tenge.shop
          </a>
        </div>
      </div>
    </div>
  )
}
