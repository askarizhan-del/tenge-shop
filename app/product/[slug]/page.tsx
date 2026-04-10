import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getProductBySlug, products, CATEGORIES } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import AddToCartButton from '@/components/AddToCartButton'

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export default function ProductPage({ params }) {
  const product = getProductBySlug(params.slug)
  if (!product) notFound()

  const category = CATEGORIES.find((c) => c.id === product.category)

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  return (
    <div>
      <h1>{product.name}</h1>

      <AddToCartButton product={product} />

      <h2>Похожие товары</h2>
      {related.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  )
}
