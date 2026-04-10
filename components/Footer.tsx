import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#0f1c14' }} className="text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: '#c9a227' }}>
                <span className="text-white font-bold text-sm">₸</span>
              </div>
              <span className="font-bold text-xl">TENGE<span style={{ color: '#c9a227' }}>.SHOP</span></span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Натуральная косметика по честным ценам в тенге. Доставка по всему Казахстану.
            </p>
          </div>

          {/* Каталог */}
          <div>
            <h3 className="font-semibold text-white mb-4">Каталог</h3>
            <ul className="space-y-2">
              {[
                { href: '/catalog?cat=face', label: 'Уход за лицом' },
                { href: '/catalog?cat=body', label: 'Уход за телом' },
                { href: '/catalog?cat=hair', label: 'Уход за волосами' },
                { href: '/catalog?cat=universal', label: 'Гидролаты' },
                { href: '/catalog?cat=home', label: 'Товары для дома' },
                { href: '/catalog?cat=aroma', label: 'Ароматерапия' },
              ].map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/60 hover:text-white text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Информация */}
          <div>
            <h3 className="font-semibold text-white mb-4">Информация</h3>
            <ul className="space-y-2">
              {[
                { href: '/about', label: 'О нас' },
                { href: '/delivery', label: 'Доставка и оплата' },
                { href: '/returns', label: 'Возврат товара' },
                { href: '/contacts', label: 'Контакты' },
              ].map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/60 hover:text-white text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="font-semibold text-white mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <span>📱</span>
                <a href="https://wa.me/77000000000" className="hover:text-white transition-colors">
                  WhatsApp: +7 775 122 90 89
                </a>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <span>📧</span>
                <a href="mailto:info@tenge.shop" className="hover:text-white transition-colors">
                  info@tenge.shop
                </a>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <span>🕐</span>
                <span>24/7 Круглосуточнно</span>
              </div>
            </div>
            <div className="mt-4 flex gap-3">
              <a href="https://instagram.com" className="text-white/40 hover:text-white transition-colors text-xl">📸</a>
              <a href="https://t.me" className="text-white/40 hover:text-white transition-colors text-xl">✈️</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">© 2026 TENGE.SHOP.ТОО CAPITAL-TRADE.KZ Все права защищены.</p>
          <p className="text-white/40 text-sm">Казахстан 🇰🇿</p>
        </div>
      </div>
    </footer>
  )
}
