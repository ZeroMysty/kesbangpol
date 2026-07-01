"use client"

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname()
    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/profil", label: "Profil" },
        { href: "/pelayanan", label: "Pelayanan" },
        { href: "/sakip", label: "SAKIP" },
        { href: "/artikel", label: "Artikel" },
    ]

    return (
        <header className="flex justify-between p-4">
           <div className="flex items-center gap-2">
            <Image src="/BadanKesatuanBangsaDanPolitikKotaBandung.png" alt="Logo" width={32} height={32} />
            <span className="text-lg font-bold">Badan Kesatuan Bangsa dan Politik Kota Bandung</span>
           </div>
           <nav>
            <ul className="flex items-center gap-4 mr-4">
                {navLinks.map((link) => (
                    <li key={link.href}>
                        <a href={link.href}>{link.label}</a>
                    </li>
                ))}
            </ul>
           </nav>
        </header>
    )
}