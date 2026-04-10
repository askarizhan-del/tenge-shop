import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
5 import { CartProvider } from '@/components/CartContext'
export const metadata: Metadata = {
  title: 'TENGE.SHOP — Натуральная косметика в Казахстане',
  description: 'Магазин натуральной косметики и товаров для дома. Бренд Сокровища Крыма. Доставка по всему Казахстану. Честные цены в тенге.',
  keywords: 'натуральная косметика, Казахстан, Сокровища Крыма, крем, шампунь, скраб, аромадиффузор',
  openGraph: {
    title: 'TENGE.SHOP — Честные цены, натуральный состав',
    description: 'Натуральная косметика с доставкой по Казахстану',
    url: 'https://www.tenge.shop',
    siteName: 'TENGE.SHOP',
    locale: 'ru_KZ',
    type: 'website',
<body className="min-h-screen flex flex-col">
  <CartProvider>
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
  </CartProvider>
</body>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
