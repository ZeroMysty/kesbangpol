export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-blue-900 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Selamat Datang di Kesbangpol</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl">
            Mewujudkan kesatuan bangsa dan perpolitikan yang sehat, demokratis, dan berintegritas.
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-2">Informasi Terbaru {item}</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}