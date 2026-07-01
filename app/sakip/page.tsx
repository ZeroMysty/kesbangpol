export default function Sakip() {
    return (
        <main className="min-h-screen bg-white py-12 px-6">
            <div className="max-w-5xl mx-auto">
                <div className="mb-10 text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">SAKIP</h1>
                    <p className="text-lg text-gray-600">Sistem Akuntabilitas Kinerja Instansi Pemerintah</p>
                </div>
                
                <div className="space-y-6">
                    {["Renstra (Rencana Strategis)", "IKU (Indikator Kinerja Utama)", "Perjanjian Kinerja", "LAKIP"].map((doc, idx) => (
                        <div key={idx} className="flex items-center justify-between p-6 bg-gray-50 rounded-lg border border-gray-200">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">{doc}</h3>
                                <p className="text-sm text-gray-500 mt-1">Dokumen tahun anggaran 2024</p>
                            </div>
                            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                                Unduh
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}