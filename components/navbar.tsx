import Image from "next/image";

export default function Navbar() {
    return (
        <header className="bg-white p-6">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo & Name on the Left */}
                <div className="flex items-center space-x-3">
                    <Image
                        src="/BadanKesatuanBangsaDanPolitikKotaBandung.png"
                        alt="Logo Kesbangpol"
                        width={100}
                        height={100}
                        className="object-contain"
                    />
                    <div className="text-left">
                        <h1 className="text-2xl font-bold text-gray-800">KESATUAN BANGSA DAN POLITIK</h1>
                        <h2 className="text-lg font-bold text-gray-700">KOTA BANDUNG</h2>
                    </div>
                </div>

                {/* Navigation Links on the Right */}
                <nav className="flex space-x-8 text-gray-600">
                    {['Beranda', 'Profil', 'Layanan', 'Publikasi', 'PPID', 'Kontak'].map((item) => (
                        <a
                            key={item}
                            href="#"
                            className="text-sm hover:text-[#2563EB] transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}