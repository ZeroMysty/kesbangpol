export default function Profil() {
    return (
        <main className="min-h-screen bg-white py-12 px-6">
            <div className="max-w-4xl mx-auto space-y-8">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Profil Instansi</h1>
                    <div className="w-20 h-1 bg-blue-600 mb-8"></div>
                </div>
                
                <section className="space-y-4 text-gray-700 leading-relaxed text-lg">
                    <p>
                        Badan Kesatuan Bangsa dan Politik (Kesbangpol) mempunyai tugas pokok melaksanakan penyusunan dan pelaksanaan kebijakan daerah di bidang kesatuan bangsa dan politik.
                    </p>
                    <p>
                        Visi kami adalah terwujudnya masyarakat yang rukun, damai, dan demokratis dalam bingkai Negara Kesatuan Republik Indonesia.
                    </p>
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mt-8">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Misi Instansi</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Meningkatkan kesadaran berbangsa dan bernegara</li>
                            <li>Membina kerukunan antar umat beragama</li>
                            <li>Memfasilitasi pendidikan politik masyarakat</li>
                        </ul>
                    </div>
                </section>
            </div>
        </main>
    )
}