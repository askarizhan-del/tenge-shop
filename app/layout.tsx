import { CartProvider } from '@/components/CartContext'

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}
