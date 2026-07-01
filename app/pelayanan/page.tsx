export default function Pelayanan() {
    return (
        <main className="min-h-screen bg-gray-50 py-12 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Pelayanan Publik</h1>
                    <p className="text-lg text-gray-600">Daftar layanan yang tersedia di Badan Kesatuan Bangsa dan Politik.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {["Rekomendasi Penelitian", "Pendaftaran Ormas/LSM", "Layanan Konsultasi Politik", "Pengaduan Masyarakat"].map((layanan, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                            <h3 className="text-2xl font-semibold mb-3 text-blue-900">{layanan}</h3>
                            <p className="text-gray-600 mb-4">
                                Informasi lengkap mengenai persyaratan, prosedur, dan waktu penyelesaian untuk {layanan.toLowerCase()}.
                            </p>
                            <button className="text-blue-600 font-medium hover:underline">Lihat Detail &rarr;</button>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}