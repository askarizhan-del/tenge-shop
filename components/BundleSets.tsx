'use client'
import Link from 'next/link'
import { products } from '@/data/products'

interface Bundle {
  id: string
  title: string
  emoji: string
  description: string
  slugs: string[]
}

const BUNDLES: Bundle[] = [
  {
    id: 'plov',
    title: 'Всё для плова',
    emoji: '🍚',
    description: 'Специи и основа для настоящего казахского плова',
    slugs: ['zira-100gr-dp-40', 'barberry-10gr', 'kurkuma-100gr-dp-40', 'sol-ekstra-400g'],
  },
  {
    id: 'korean',
    title: 'Корейская кухня',
    emoji: '🥢',
    description: 'Всё для морковки по-корейски и маринадов',
    slugs: ['zapravka-d-morkovi-klass-60-gr-pan-chan', 'zapravka-d-morkovi-zhguchaya-60-gr-pan-chan', 'zapravka-d-funchozy-60-gr-pan-chan-20'],
  },
  {
    id: 'baking',
    title: 'Набор для выпечки',
    emoji: '🎂',
    description: 'Дрожжи, разрыхлитель, ваниль и какао',
    slugs: ['drozhzhi-saf-levure-500g', 'razrykhlytel-dlya-testa-10g', 'vanillin-2gr', 'kakao-100-gr-dp-45'],
  },
  {
    id: 'office',
    title: 'Офисный минимум',
    emoji: '☕',
    description: 'Чай, кисель и снеки для перерыва',
    slugs: ['chay-50gr-v-pachkakh', 'kisel-160g-v-assortimente-42-sht', 'lapsha-rollton-kuritsa-85gr'],
  },
  {
    id: 'soup',
    title: 'Быстрый суп',
    emoji: '🍲',
    description: 'Бульоны и приправы для наваристого супа',
    slugs: ['pr-va-tuba-100gr-d-supov', 'bulon-kuriniy-10g'],
  },
  {
    id: 'snacks',
    title: 'Снеки на неделю',
    emoji: '🍟',
    description: 'Лапша быстрого приготовления на каждый день',
    slugs: ['cowboy-lapsha-govyadina-ostraya-oranzhevaya-pachka-103gr', 'cowboy-lapsha-govyadina-krasnaya-pachka-103gr', 'han-ramen-lapsha-govyadina-so-vkusom-ostroy-pripravy-120gr'],
  },
  {
    id: 'easter',
    title: 'Пасхальный набор',
    emoji: '🥚',
    description: 'Всё для украшения яиц и праздничного стола',
    slugs: ['dv-termoplyonka-dlya-ukrashenie-yaits-gzhel-7sht', 'dv-termoplyonka-dlya-ukrashenie-yaits-khokhloma-7sht', 'p-n-paskhalnyy-tsvet-4-krasitelya-nakleyki'],
  },
]

function BundleCard({ bundle }: { bundle: Bundle }) {
  const bundleProducts = bundle.slugs
    .map(slug => products.find(p => p.slug === slug))
    .filter(Boolean)

  const totalPrice = bundleProducts.reduce((sum, p) => sum + (p?.price ?? 0), 0)

  if (bundleProducts.length === 0) return null

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3 mb-4">
        <span className="text-3xl">{bundle.emoji}</span>
        <div>
          <h3 className="font-bold text-gray-900 text-lg leading-tight">{bundle.title}</h3>
          <p className="text-sm text-gray-500 mt-0.5">{bundle.description}</p>
        </div>
      </div>
      <ul className="space-y-2 mb-4">
        {bundleProducts.map(p => p && (
          <li key={p.id} className="flex items-center justify-between text-sm">
            <span className="text-gray-700 truncate mr-2">{p.name}</span>
            <span className="font-medium text-gray-900 shrink-0">{p.price.toLocaleString('ru-KZ')} ₸</span>
          </li>
        ))}
      </ul>
      <div className="border-t border-gray-100 pt-3 flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-400">Итого</p>
          <p className="text-xl font-bold" style={{ color: '#1a6b3c' }}>{totalPrice.toLocaleString('ru-KZ')} ₸</p>
        </div>
        <Link
          href={`/catalog?q=${bundle.slugs[0]}`}
          className="px-4 py-2 rounded-xl text-sm font-semibold transition-all hover:scale-105"
          style={{ background: '#1a6b3c', color: 'white' }}
        >
          Смотреть товары →
        </Link>
      </div>
    </div>
  )
}

export default function BundleSets() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">🛍️ Наборы и сценарии</h2>
          <p className="text-gray-500 text-sm mt-1">Готовые подборки для популярных блюд</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {BUNDLES.map(bundle => (
          <BundleCard key={bundle.id} bundle={bundle} />
        ))}
      </div>
    </section>
  )
}
