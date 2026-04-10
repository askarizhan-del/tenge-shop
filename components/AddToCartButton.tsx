'use client'
import { useCart } from '@/components/CartContext'
import type { Product } from '@/data/products'

export default function AddToCartButton({ product }: { product: Product }) {
  const { addToCart, items } = useCart()
  const inCart = items.some(i => i.product.id === product.id)

  return (
    <button
      onClick={() => addToCart(product)}
      className="w-full py-4 px-6 rounded-xl font-bold text-white text-lg transition-all active:scale-95"
      style={{ background: inCart ? '#0f4027' : '#1a6b3c' }}
    >
      {inCart ? '✓ В корзине' : 'В корзину'}
    </button>
  )
}
