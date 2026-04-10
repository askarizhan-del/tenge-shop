'use client'

import { createContext, useContext, useState, useEffect } from 'react'

type Product = {
  id: string
  name: string
  priceKZT: number
}

type CartContextType = {
  cart: Product[]
  addToCart: (product: Product) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Product[]>([])

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const updated = [...prev, product]
      console.log('🛒 Cart updated:', updated)
      return updated
    })
  }

  useEffect(() => {
    console.log('🧺 Current cart:', cart)
  }, [cart])

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)

  if (context === undefined) {
    throw new Error('❌ useCart must be used inside CartProvider')
  }

  return context
}
