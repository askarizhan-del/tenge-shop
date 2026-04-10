import Link from 'next/link'
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
      <div className="text-7xl mb-6">404</div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Страница не найдена</h1>
      <p className="text-gray-500 mb-8">Возможно, товар был удалён или ссылка неверна.</p>
      <Link href="/" className="px-8 py-4 rounded-xl font-bold text-white hover:opacity-90 transition-all"
        style={{ background: '#1a6b3c' }}>
        На главную
      </Link>
    </div>
  )
}
