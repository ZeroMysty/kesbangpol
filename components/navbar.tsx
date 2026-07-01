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
        <header>
            <div className="flex items-center gap-2">
                <Image src="/logo.png" alt="Logo" width={32} height={32} />
                <span className="text-lg font-bold">My App</span>
            </div>
        </header>
    )
}