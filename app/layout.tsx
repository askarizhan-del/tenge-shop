import type { Metadata } from 'next'
import './globals.css'
import { CartProvider } from '@/components/CartContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'TENGE.SHOP — Интернет-магазин в Казахстане',
  description: 'Товары для дома, уход за собой, ремонт и многое другое. Честные цены в тенге. Доставка по всему Казахстану.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="min-h-screen bg-gray-50 flex flex-col">
        <CartProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
