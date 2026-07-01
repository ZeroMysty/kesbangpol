export default function Artikel() {
    return (
        <main className="min-h-screen bg-gray-50 py-12 px-6">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Artikel & Berita</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <article key={item} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
                            <div className="h-48 bg-gray-200 w-full animate-pulse"></div>
                            <div className="p-6 flex-1 flex flex-col">
                                <span className="text-xs font-semibold text-blue-600 mb-2 uppercase tracking-wider">Berita Terkini</span>
                                <h2 className="text-xl font-bold mb-3 line-clamp-2">Sosialisasi Pendidikan Politik Bagi Pemilih Pemula di Tahun 2024</h2>
                                <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
                                    Kegiatan sosialisasi ini bertujuan untuk meningkatkan kesadaran politik dan partisipasi aktif dari kalangan generasi muda dalam menyambut pesta demokrasi.
                                </p>
                                <div className="mt-auto pt-4 border-t border-gray-100 text-sm text-gray-500">
                                    12 Oktober 2024
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    )
}