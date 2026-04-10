'use client'

import { useCart } from '@/components/CartContext'

export default function AddToCartButton({ product }) {
  const { addToCart } = useCart()

  return (
    <button
      onClick={() => {
        console.log('CLICK WORKS')
        addToCart(product)
      }}
      className="w-full py-4 bg-green-700 text-white font-bold rounded-xl"
    >
      🛒 В корзину
    </button>
  )
}
